import * as vscode from "vscode";
import {
  getHtmlFile,
  getSpecFile,
  getStorybookFile,
  getStyleFile,
  getTypescriptFile,
} from "ng-filename-parser";

// https://github.com/microsoft/vscode/wiki/Adopting-Multi-Root-Workspace-APIs#eliminating-rootpath
const ROOT_PATH_INDEX = 0;

export async function openHTMLFile() {
  if (!vscode.window.activeTextEditor) {
    return;
  }

  const path = vscode.window.activeTextEditor.document.uri.fsPath;
  const filename = getHtmlFile(path);

  const document = await vscode.workspace.openTextDocument(filename);
  await vscode.window.showTextDocument(document);
}

export async function openStyleFile() {
  if (!vscode.window.activeTextEditor) {
    return;
  }

  const path = vscode.window.activeTextEditor.document.uri.fsPath;
  const filename = getStyleFile(path, await stylesConfigType());

  const document = await vscode.workspace.openTextDocument(filename);
  await vscode.window.showTextDocument(document);
}

export async function openSpecFile() {
  if (!vscode.window.activeTextEditor) {
    return;
  }

  const path = vscode.window.activeTextEditor.document.uri.fsPath;
  const filename = getSpecFile(path);

  const document = await vscode.workspace.openTextDocument(filename);
  await vscode.window.showTextDocument(document);
}

export async function openStorybookFile() {
  if (!vscode.window.activeTextEditor) {
    return;
  }

  const path = vscode.window.activeTextEditor.document.uri.fsPath;
  const filename = getStorybookFile(path);

  const document = await vscode.workspace.openTextDocument(filename);
  await vscode.window.showTextDocument(document);
}

export async function openTypescriptFile() {
  if (!vscode.window.activeTextEditor) {
    return;
  }

  const path = vscode.window.activeTextEditor.document.uri.fsPath;
  const filename = getTypescriptFile(path);

  const document = await vscode.workspace.openTextDocument(filename);
  await vscode.window.showTextDocument(document);
}

export async function stylesConfigType() {
  if (!vscode.workspace.workspaceFolders) {
    return 'css';
  }  

  const rootPath = vscode.workspace.workspaceFolders[ROOT_PATH_INDEX].uri.path;
  const filename = rootPath + '/angular.json';
  const document = await vscode.workspace.openTextDocument(filename);

  const angularJSON = JSON.parse(document.getText());
  const styleConfig: string = angularJSON['schematics']['@schematics/angular:component']['style'];
  return styleConfig ? styleConfig : 'css'; 
}
