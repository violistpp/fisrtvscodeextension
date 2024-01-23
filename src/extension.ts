// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello VS Code');
	});
	
	let disposableTime = vscode.commands.registerCommand('helloworld.displayCurrentTime', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showWarningMessage(`Now is ${new Date().toLocaleTimeString()}`, 'Ok, thanks', 'Cancel').then((value) => {
			if (value === 'Ok, thanks') {
				vscode.window.showInformationMessage('You are welcome! 😁');
			} else {
				vscode.window.showInformationMessage('You are not welcome! 🗿');
			}
		});
		
	});

	let disposableInput = vscode.commands.registerTextEditorCommand('helloworld.sampleCommand', (textEditor, edit) => {
        // The code to be executed when the command is invoked
        vscode.window.showInformationMessage('Sample Command Executed!');
    });

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposableTime);
	context.subscriptions.push(disposableInput);
}

// This method is called when your extension is deactivated
export function deactivate() {}
