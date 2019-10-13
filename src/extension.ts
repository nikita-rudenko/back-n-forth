import * as vscode from 'vscode';

function setup(context: vscode.ExtensionContext) {
  const iconStyle = vscode.workspace
    .getConfiguration('back-n-forth')
    .get('iconStyle');

  const navigateBack = vscode.commands.registerCommand(
    `extension.${iconStyle}BackBtn`,
    () => {
      vscode.commands.executeCommand('workbench.action.navigateBack');
    }
  );

  const navigateForward = vscode.commands.registerCommand(
    `extension.${iconStyle}ForwardBtn`,
    () => {
      vscode.commands.executeCommand('workbench.action.navigateForward');
    }
  );

  context.subscriptions.push(navigateBack, navigateForward);
}

export function activate(context: vscode.ExtensionContext) {
  // Listen for icon style change
  vscode.workspace.onDidChangeConfiguration(event => {
    let affected = event.affectsConfiguration('back-n-forth.iconStyle');
    if (affected) {
      setup(context);
    }
  });

  setup(context);
}

export function deactivate() {}
