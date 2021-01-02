import * as assert from "assert";
import * as path from "path";
import * as vscode from "vscode";
import { openHTMLFile, openSpecFile, openStorybookFile, openStyleFile, openTypescriptFile, stylesConfigType } from "../../api";
import { before } from 'mocha';

suite("Extension Test Suite", async () => {
  vscode.window.showInformationMessage("Start all tests.");
  const testWorkspace = path.resolve(__dirname, "../../../workspace/");
  
  before(async () => {
    await vscode.commands.executeCommand('editor.foldAll');
  })

  test("should switch from ts to html file", async () => {
    const openFilePath = `${testWorkspace}/app/app.component.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
		await vscode.window.showTextDocument(document);
    
    await openHTMLFile();

    if (!vscode.window.activeTextEditor) {
			return;
		}
    
    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);
    
    assert.strictEqual(targetFile.fileName, `${testWorkspace}/app/app.component.html`);
  });

  test("should return style config from angular.json file", async () => {
    const angularJson = await stylesConfigType();
    assert.strictEqual(angularJson, 'scss')
  });

  test("should switch from ts to style file", async () => {
    const openFilePath = `${testWorkspace}/app/app.component.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
		await vscode.window.showTextDocument(document);
    
    await openStyleFile();

    if (!vscode.window.activeTextEditor) {
			return;
		}
    
    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);
    
    assert.strictEqual(targetFile.fileName, `${testWorkspace}/app/app.component.scss`);
  });

  test("should switch from ts to spec file", async () => {
    const openFilePath = `${testWorkspace}/app/app.component.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
		await vscode.window.showTextDocument(document);
    
    await openSpecFile();

    if (!vscode.window.activeTextEditor) {
			return;
		}
    
    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);
    
    assert.strictEqual(targetFile.fileName, `${testWorkspace}/app/app.component.spec.ts`);
  });

  test("should switch from ts to stories file", async () => {
    const openFilePath = `${testWorkspace}/app/app.component.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
		await vscode.window.showTextDocument(document);
    
    await openStorybookFile();

    if (!vscode.window.activeTextEditor) {
			return;
		}
    
    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);
    
    assert.strictEqual(targetFile.fileName, `${testWorkspace}/app/app.stories.ts`);
  });

  test("should switch from stories to ts file", async () => {
    const openFilePath = `${testWorkspace}/app/app.stories.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
		await vscode.window.showTextDocument(document);
    
    await openTypescriptFile();

    if (!vscode.window.activeTextEditor) {
			return;
		}
    
    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);
    
    assert.strictEqual(targetFile.fileName, `${testWorkspace}/app/app.component.ts`);
  });

  test("should switch from stories to spec file", async () => {
    const openFilePath = `${testWorkspace}/app/app.stories.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
		await vscode.window.showTextDocument(document);
    
    await openSpecFile();

    if (!vscode.window.activeTextEditor) {
			return;
		}
    
    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);
    
    assert.strictEqual(targetFile.fileName, `${testWorkspace}/app/app.component.spec.ts`);
  });

  test("should switch from spec to stories file", async () => {
    const openFilePath = `${testWorkspace}/app/app.component.spec.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
		await vscode.window.showTextDocument(document);
    
    await openStorybookFile();

    if (!vscode.window.activeTextEditor) {
			return;
		}
    
    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);
    
    assert.strictEqual(targetFile.fileName, `${testWorkspace}/app/app.stories.ts`);
  });
});
