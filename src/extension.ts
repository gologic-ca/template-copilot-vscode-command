import * as vscode from 'vscode';
import { modifyFile, listFiles } from './fileHandler';
import { renderPrompt } from '@vscode/prompt-tsx';
import { ImproveCodePrompt } from './improveCodePrompt';

/**
 * Extension output channel for logging
 */
const EXTENSION_OUTPUT_CHANNEL = "Code Improvement Assistant";
const logger = vscode.window.createOutputChannel(EXTENSION_OUTPUT_CHANNEL);

/**
 * Constants for user-facing messages
 */
const messages = {
    noFolderSelected: 'No folder was selected',
    noChatModelAvailable: 'No chat model is available',
    processingFolder: (path: string) => `Processing folder: ${path}`,
    processingFile: (path: string) => `Processing file: ${path}`,
    sendingPrompt: (path: string) => `Sending prompt for ${path}...`,
    improvementsAdded: (path: string) => `Improvements added to: ${path}`,
    error: (path: string, error: string) => `Error processing ${path}: ${error}`,
    selectFolderPrompt: 'Select folder to analyze'
};

/**
 * Activates the extension
 * @param context The extension context
 */
export function activate(context: vscode.ExtensionContext) {
    logger.appendLine('Extension activated');

    // Register the command to suggest code improvements
    const disposable = vscode.commands.registerCommand('extension.suggestCodeImprovements', handleSuggestCodeImprovements);
    context.subscriptions.push(disposable);
}

/**
 * Handles the suggest code improvements command
 */
async function handleSuggestCodeImprovements() {
    const folderUris = await vscode.window.showOpenDialog({
        canSelectFolders: true,
        canSelectFiles: false,
        openLabel: messages.selectFolderPrompt
    });

    if (!folderUris?.length) {
        vscode.window.showErrorMessage(messages.noFolderSelected);
        return;
    }

    await suggestImprovementsInFolder(folderUris[0]);
}

/**
 * Suggests improvements for all files in the given folder
 * @param folderUri The URI of the folder to process
 */
async function suggestImprovementsInFolder(folderUri: vscode.Uri) {
    try {
        const chatModels = await vscode.lm.selectChatModels({ id: "o3-mini" });

        if (!chatModels.length) {
            vscode.window.showErrorMessage(messages.noChatModelAvailable);
            return;
        }

        const chatModel = chatModels[0];
        logger.appendLine(messages.processingFolder(folderUri.fsPath));

        const fileUris = await listFiles(folderUri);
        await processFiles(fileUris, chatModel);
    } catch (error) {
        handleError(error, folderUri.fsPath);
    }
}

/**
 * Processes a list of files with the given chat model
 * @param fileUris List of files to process
 * @param chatModel The chat model to use
 */
async function processFiles(fileUris: vscode.Uri[], chatModel: any) {
    for (const fileUri of fileUris) {
        try {
            await processFile(fileUri, chatModel);
        } catch (error) {
            handleError(error, fileUri.fsPath);
        }
    }
}

/**
 * Processes a single file with the given chat model
 * @param fileUri The URI of the file to process
 * @param chatModel The chat model to use
 */
async function processFile(fileUri: vscode.Uri, chatModel: any) {
    const document = await vscode.workspace.openTextDocument(fileUri);
    const text = document.getText();
    
    logger.appendLine(messages.processingFile(fileUri.fsPath));
    logger.appendLine(messages.sendingPrompt(fileUri.fsPath));

    const response = await renderPrompt(
        ImproveCodePrompt,
        { content: text },
        { modelMaxPromptTokens: chatModel.maxInputTokens },
        chatModel
    );

    const improvementComments = response.messages[response.messages.length - 1].content;
    const improvedContent = addImprovementComments(text, improvementComments);
    
    await modifyFile(document, improvedContent);
    logger.appendLine(messages.improvementsAdded(fileUri.fsPath));
}

/**
 * Adds improvement comments to the top of the file content
 * @param text Original file content
 * @param improvementComments Comments to add
 * @returns The combined content
 */
function addImprovementComments(text: string, improvementComments: string): string {
    return `${improvementComments}\n\n${text}`;
}

/**
 * Handles errors in a consistent way
 * @param error The error that occurred
 * @param context Additional context (usually a file path)
 */
function handleError(error: unknown, context: string) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.appendLine(messages.error(context, errorMessage));
    vscode.window.showErrorMessage(messages.error(context, errorMessage));
}

/**
 * Called when the extension is deactivated
 */
export function deactivate() {
    logger.appendLine('Extension deactivated');
    logger.dispose();
}
