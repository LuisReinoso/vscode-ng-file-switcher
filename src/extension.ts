import * as vscode from "vscode";
import {
  openHTMLFile,
  openSpecFile,
  openStorybookFile,
  openStyleFile,
  openTypescriptFile,
} from "./api";

let logger = vscode.window.createOutputChannel("Ng File Switcher");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  logger.appendLine(
    'Congratulations, your extension "ng-file-switcher" is now active!'
  );

  const openAngularHTMLFileDisposable = vscode.commands.registerCommand(
    "ng-file-switcher.openHTML",
    async () => await openHTMLFile()
  );

  const openAngularStyleFileDisposable = vscode.commands.registerCommand(
    "ng-file-switcher.openStyle",
    async () => await openStyleFile()
  );

  const openAngularSpecFileDisposable = vscode.commands.registerCommand(
    "ng-file-switcher.openTest",
    async () => await openSpecFile()
  );

  const openAngularStorybookFileDisposable = vscode.commands.registerCommand(
    "ng-file-switcher.openStorybook",
    async () => await openStorybookFile()
  );

  const openAngularTypescriptFileDisposable = vscode.commands.registerCommand(
    "ng-file-switcher.openTypescript",
    async () => await openTypescriptFile()
  );

  // Register subscriptions
  context.subscriptions.push(openAngularHTMLFileDisposable);
  context.subscriptions.push(openAngularStyleFileDisposable);
  context.subscriptions.push(openAngularSpecFileDisposable);
  context.subscriptions.push(openAngularStorybookFileDisposable);
  context.subscriptions.push(openAngularTypescriptFileDisposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
