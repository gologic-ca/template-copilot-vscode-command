import { AssistantMessage, UserMessage, TextChunk, PromptElement, BasePromptElementProps, PromptSizing } from '@vscode/prompt-tsx';
import * as vscode from 'vscode';

/**
 * Default guidance for code improvement suggestions
 */
const DEFAULT_GUIDANCE = `
- Use clear and descriptive variable/function names
- Add proper documentation and comments
- Follow consistent code style and formatting
- Apply DRY (Don't Repeat Yourself) principles
- Ensure proper error handling
- Consider performance implications
- Follow language-specific best practices
`;

/**
 * Props interface for the ImproveCodePrompt component
 */
export interface ImproveCodePromptProps extends BasePromptElementProps {
    /** The code content to analyze */
    content: string;
    /** Optional custom guidance to override default */
    customGuidance?: string;
}

/**
 * A prompt component that analyzes code and suggests improvements
 * for better readability, maintainability, and performance.
 */
export class ImproveCodePrompt extends PromptElement<ImproveCodePromptProps, string> {
    /**
     * Renders the prompt component
     * @param state Current state
     * @param sizing Prompt sizing information
     * @returns JSX element
     * @throws Error if rendering fails
     */
    render(state: string, sizing: PromptSizing) {
        try {
            const guidance = this.props.customGuidance || DEFAULT_GUIDANCE;
            
            return (
                <>
                    <AssistantMessage priority={300}>
                        Analyze the provided code and suggest concrete improvements considering:
                        {guidance}
                        Format each suggestion on a new line prefixed with a hyphen (-).
                        If no improvements are needed, return "✓ Code follows best practices".
                        Your answer needs to be wrapped in a comment format for the language of the 
                        file you are analyzing (e.g., // for JavaScript, # for Python).
                        Do not include ``` in your response.
                    </AssistantMessage>
                    <UserMessage priority={200}>
                        Here is the code to analyze:
                        <br />
                        <TextChunk>{this.sanitizeContent(this.props.content)}</TextChunk>
                    </UserMessage>
                </>
            );
        } catch (error) {
            this.handleError(error);
            return null;
        }
    }

    /**
     * Sanitizes the input content to prevent rendering issues
     * @param content Raw content
     * @returns Sanitized content
     */
    private sanitizeContent(content: string): string {
        if (!content?.trim()) {
            return '// No content provided';
        }
        return content;
    }

    /**
     * Handles errors in a consistent way
     * @param error The error that occurred
     */
    private handleError(error: unknown): void {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        vscode.window.showErrorMessage(`ImproveCodePrompt Error: ${errorMessage}`);
        throw new Error(`ImproveCodePrompt rendering failed: ${errorMessage}`);
    }
}
