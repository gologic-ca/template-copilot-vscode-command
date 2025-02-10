import * as vscode from 'vscode';

/**
 * Error messages for file operations
 */
const errors = {
    fileNotFound: (path: string) => `File not found: ${path}`,
    failedToWrite: (path: string) => `Failed to write to file: ${path}`,
    failedToCreate: (path: string) => `Failed to create directory: ${path}`,
    failedToList: (path: string) => `Failed to list directory contents: ${path}`,
    invalidUri: 'Invalid URI provided'
};

/**
 * Creates a directory if it doesn't exist
 * @param uri Directory URI
 * @throws Error if directory creation fails
 */
export async function createDirectory(uri: vscode.Uri): Promise<void> {
    try {
        await vscode.workspace.fs.createDirectory(uri);
    } catch (error) {
        if (error instanceof Error && error.message.includes('already exists')) {
            return; // Directory already exists, which is fine
        }
        throw new Error(errors.failedToCreate(uri.fsPath));
    }
}

/**
 * Writes content to a file
 * @param uri File URI
 * @param content File content
 * @throws Error if write operation fails
 */
export async function writeFile(uri: vscode.Uri, content: string): Promise<void> {
    try {
        const buffer = Buffer.from(content, 'utf8');
        await vscode.workspace.fs.writeFile(uri, buffer);
    } catch (error) {
        throw new Error(errors.failedToWrite(uri.fsPath));
    }
}

/**
 * Extracts the base filename from a URI
 * @param fileUri File URI
 * @returns Base filename without extension
 * @throws Error if URI is invalid
 */
export function getFileNameFromURI(fileUri: vscode.Uri): string {
    if (!fileUri?.path) {
        throw new Error(errors.invalidUri);
    }
    
    const pathSegments = fileUri.path.split('/');
    const fileNameWithExtension = pathSegments[pathSegments.length - 1];
    return fileNameWithExtension.split('.')[0];
}

/**
 * Modifies the content of an existing file
 * @param document Text document to modify
 * @param newContent New content
 * @throws Error if modification fails
 */
export async function modifyFile(document: vscode.TextDocument, newContent: string): Promise<void> {
    try {
        const edit = new vscode.WorkspaceEdit();
        const fullRange = new vscode.Range(
            document.positionAt(0),
            document.positionAt(document.getText().length)
        );
        
        edit.replace(document.uri, fullRange, newContent);
        const success = await vscode.workspace.applyEdit(edit);
        
        if (!success) {
            throw new Error(errors.failedToWrite(document.uri.fsPath));
        }
        
        await document.save();
    } catch (error) {
        throw new Error(errors.failedToWrite(document.uri.fsPath));
    }
}

/**
 * Opens a file picker dialog
 * @param openLabel Label for the open button
 * @param fileTypes Allowed file types
 * @returns Selected file URI or undefined if cancelled
 */
export async function pickFile(
    openLabel: string,
    fileTypes: { [key: string]: string[] }
): Promise<vscode.Uri | undefined> {
    const files = await vscode.window.showOpenDialog({
        canSelectMany: false,
        openLabel,
        filters: fileTypes
    });

    return files?.[0];
}

/**
 * Lists all files in a directory
 * @param folderUri Directory URI
 * @returns Array of file URIs
 * @throws Error if listing fails
 */
export async function listFiles(folderUri: vscode.Uri): Promise<vscode.Uri[]> {
    try {
        const uris: vscode.Uri[] = [];
        const entries = await vscode.workspace.fs.readDirectory(folderUri);
        
        for (const [name, type] of entries) {
            if (type === vscode.FileType.File) {
                uris.push(vscode.Uri.joinPath(folderUri, name));
            }
        }
        
        return uris;
    } catch (error) {
        throw new Error(errors.failedToList(folderUri.fsPath));
    }
}
