
const { TextEncoder } = require('util');
const vscode = require('vscode');


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	
	console.log('Congratulations, your extension "my" is now active!');

	let disposable = vscode.commands.registerCommand('my.helloWorld',async function () {
		const params = [
			{ label : 'action',details : 'Action Folder'},
			{ label : 'Reducers',details : 'Reducers Folder'},
			{ label : 'Screen',details : 'screen Folder'},
			{ label : 'Component',details : 'component Folder'}
		]
		// The code you place here will be executed every time your command is executed
		// let typeOfFile = await vscode.window.showQuickPick(params,{
		// 	matchOnDetail : true
		// })
		const rootProjectPath = vscode.workspace.rootPath



		let { document } = vscode.window.activeTextEditor;
		const currentFilePath = document.uri.path
		const currentActiveFileData = document.uri.scheme
		await vscode.workspace.fs.writeFile(vscode.Uri.file(`${rootProjectPath}/action/index.js`),new TextEncoder().encode('dsdsdsd '))

		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World from My!'+typeOfFile.label);
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
