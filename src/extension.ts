import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const navigateBack = vscode.commands.registerCommand('extension.showBackBtn', () => {
		vscode.commands.executeCommand('workbench.action.navigateBack');
	});

	const navigateForward = vscode.commands.registerCommand('extension.showForwardBtn', () => {
		vscode.commands.executeCommand('workbench.action.navigateForward');
	});

	context.subscriptions.push(navigateBack, navigateForward);
}

export function deactivate() { }
