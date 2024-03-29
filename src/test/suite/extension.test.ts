import * as assert from 'assert';
import * as vscode from 'vscode';
import {
  openHTMLFile,
  openSpecFile,
  openStorybookFile,
  openStyleFile,
  openTypescriptFile,
  stylesConfigType,
} from '../../api';
import { before } from 'mocha';

suite('Extension Test Suite', async () => {
  vscode.window.showInformationMessage('Start all tests.');
  const ROOT_PATH_INDEX = 0;
  let testWorkspace: string;

  before(async () => {
    if (!vscode.workspace.workspaceFolders) {
      return;
    }
    testWorkspace = vscode.workspace.workspaceFolders[ROOT_PATH_INDEX].uri.path;
    await vscode.commands.executeCommand('editor.foldAll');
  });

  test('should switch from ts to html file', async () => {
    const openFilePath = `${testWorkspace}/app/app.component.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
    await vscode.window.showTextDocument(document);

    await openHTMLFile();

    if (!vscode.window.activeTextEditor) {
      return;
    }

    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);

    assert.strictEqual(
      targetFile.fileName,
      `${testWorkspace}/app/app.component.html`
    );
  });

  test('should return style config from angular.json file', async () => {
    const angularJson = await stylesConfigType();
    assert.strictEqual(angularJson, 'scss');
  });

  test('should switch from ts to style file', async () => {
    const openFilePath = `${testWorkspace}/app/app.component.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
    await vscode.window.showTextDocument(document);

    await openStyleFile();

    if (!vscode.window.activeTextEditor) {
      return;
    }

    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);

    assert.strictEqual(
      targetFile.fileName,
      `${testWorkspace}/app/app.component.scss`
    );
  });

  test('should switch from ts to spec file', async () => {
    const openFilePath = `${testWorkspace}/app/app.component.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
    await vscode.window.showTextDocument(document);

    await openSpecFile();

    if (!vscode.window.activeTextEditor) {
      return;
    }

    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);

    assert.strictEqual(
      targetFile.fileName,
      `${testWorkspace}/app/app.component.spec.ts`
    );
  });

  test('should switch from ts to stories file', async () => {
    const openFilePath = `${testWorkspace}/app/app.component.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
    await vscode.window.showTextDocument(document);

    await openStorybookFile();

    if (!vscode.window.activeTextEditor) {
      return;
    }

    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);

    assert.strictEqual(
      targetFile.fileName,
      `${testWorkspace}/app/app.stories.ts`
    );
  });

  test('should switch from stories to ts file', async () => {
    const openFilePath = `${testWorkspace}/app/app.stories.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
    await vscode.window.showTextDocument(document);

    await openTypescriptFile();

    if (!vscode.window.activeTextEditor) {
      return;
    }

    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);

    assert.strictEqual(
      targetFile.fileName,
      `${testWorkspace}/app/app.component.ts`
    );
  });

  test('should switch from stories to spec file', async () => {
    const openFilePath = `${testWorkspace}/app/app.stories.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
    await vscode.window.showTextDocument(document);

    await openSpecFile();

    if (!vscode.window.activeTextEditor) {
      return;
    }

    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);

    assert.strictEqual(
      targetFile.fileName,
      `${testWorkspace}/app/app.component.spec.ts`
    );
  });

  test('should switch from spec to stories file', async () => {
    const openFilePath = `${testWorkspace}/app/app.component.spec.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
    await vscode.window.showTextDocument(document);

    await openStorybookFile();

    if (!vscode.window.activeTextEditor) {
      return;
    }

    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);

    assert.strictEqual(
      targetFile.fileName,
      `${testWorkspace}/app/app.stories.ts`
    );
  });

  test('should switch from spec page to stories page file', async () => {
    const openFilePath = `${testWorkspace}/app/test-feature/app.page.spec.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
    await vscode.window.showTextDocument(document);

    await openStorybookFile();

    if (!vscode.window.activeTextEditor) {
      return;
    }

    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);

    assert.strictEqual(
      targetFile.fileName,
      `${testWorkspace}/app/test-feature/app.page.stories.ts`
    );
  });

  test('should switch from stories page to spec page file', async () => {
    const openFilePath = `${testWorkspace}/app/test-feature/app.page.stories.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
    await vscode.window.showTextDocument(document);

    await openSpecFile();

    if (!vscode.window.activeTextEditor) {
      return;
    }

    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);

    assert.strictEqual(
      targetFile.fileName,
      `${testWorkspace}/app/test-feature/app.page.spec.ts`
    );
  });

  test('should switch from typescript page to spec page file', async () => {
    const openFilePath = `${testWorkspace}/app/test-feature/app.page.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
    await vscode.window.showTextDocument(document);

    await openSpecFile();

    if (!vscode.window.activeTextEditor) {
      return;
    }

    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);

    assert.strictEqual(
      targetFile.fileName,
      `${testWorkspace}/app/test-feature/app.page.spec.ts`
    );
  });

  test('should switch from spec page to typescript page file', async () => {
    const openFilePath = `${testWorkspace}/app/test-feature/app.page.spec.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
    await vscode.window.showTextDocument(document);

    await openTypescriptFile();

    if (!vscode.window.activeTextEditor) {
      return;
    }

    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);

    assert.strictEqual(
      targetFile.fileName,
      `${testWorkspace}/app/test-feature/app.page.ts`
    );
  });

  test('should switch from typescript page to html page file', async () => {
    const openFilePath = `${testWorkspace}/app/test-feature/app.page.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
    await vscode.window.showTextDocument(document);

    await openHTMLFile();

    if (!vscode.window.activeTextEditor) {
      return;
    }

    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);

    assert.strictEqual(
      targetFile.fileName,
      `${testWorkspace}/app/test-feature/app.page.html`
    );
  });

  test('should switch from html page to typescript page file', async () => {
    const openFilePath = `${testWorkspace}/app/test-feature/app.page.html`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
    await vscode.window.showTextDocument(document);

    await openTypescriptFile();

    if (!vscode.window.activeTextEditor) {
      return;
    }

    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);

    assert.strictEqual(
      targetFile.fileName,
      `${testWorkspace}/app/test-feature/app.page.ts`
    );
  });

  test('should switch from typescript page to style page file', async () => {
    const openFilePath = `${testWorkspace}/app/test-feature/app.page.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
    await vscode.window.showTextDocument(document);

    await openStyleFile();

    if (!vscode.window.activeTextEditor) {
      return;
    }

    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);

    assert.strictEqual(
      targetFile.fileName,
      `${testWorkspace}/app/test-feature/app.page.scss`
    );
  });

  test('should switch from style page to typescript page file', async () => {
    const openFilePath = `${testWorkspace}/app/test-feature/app.page.scss`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
    await vscode.window.showTextDocument(document);

    await openTypescriptFile();

    if (!vscode.window.activeTextEditor) {
      return;
    }

    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);

    assert.strictEqual(
      targetFile.fileName,
      `${testWorkspace}/app/test-feature/app.page.ts`
    );
  });

  test('should switch from typescript page to stories page file', async () => {
    const openFilePath = `${testWorkspace}/app/test-feature/app.page.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
    await vscode.window.showTextDocument(document);

    await openStorybookFile();

    if (!vscode.window.activeTextEditor) {
      return;
    }

    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);

    assert.strictEqual(
      targetFile.fileName,
      `${testWorkspace}/app/test-feature/app.page.stories.ts`
    );
  });

  test('should switch from stories page to typescript page file', async () => {
    const openFilePath = `${testWorkspace}/app/test-feature/app.page.stories.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
    await vscode.window.showTextDocument(document);

    await openTypescriptFile();

    if (!vscode.window.activeTextEditor) {
      return;
    }

    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);

    assert.strictEqual(
      targetFile.fileName,
      `${testWorkspace}/app/test-feature/app.page.ts`
    );
  });

  test('should switch from stories to typescript page file', async () => {
    const openFilePath = `${testWorkspace}/app/page-feature/app.stories.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
    await vscode.window.showTextDocument(document);

    await openTypescriptFile();

    if (!vscode.window.activeTextEditor) {
      return;
    }

    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);

    assert.strictEqual(
      targetFile.fileName,
      `${testWorkspace}/app/page-feature/app.page.ts`
    );
  });

  test('should switch from stories to typescript page spec file', async () => {
    const openFilePath = `${testWorkspace}/app/page-feature/app.stories.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
    await vscode.window.showTextDocument(document);

    await openSpecFile();

    if (!vscode.window.activeTextEditor) {
      return;
    }

    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);

    assert.strictEqual(
      targetFile.fileName,
      `${testWorkspace}/app/page-feature/app.page.spec.ts`
    );
  });

  test('should switch from stories to styles page scss file', async () => {
    const openFilePath = `${testWorkspace}/app/page-feature/app.stories.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
    await vscode.window.showTextDocument(document);

    await openStyleFile();

    if (!vscode.window.activeTextEditor) {
      return;
    }

    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);

    assert.strictEqual(
      targetFile.fileName,
      `${testWorkspace}/app/page-feature/app.page.scss`
    );
  });

  test('should switch from stories to html page file', async () => {
    const openFilePath = `${testWorkspace}/app/page-feature/app.stories.ts`;
    const document = await vscode.workspace.openTextDocument(openFilePath);
    await vscode.window.showTextDocument(document);

    await openHTMLFile();

    if (!vscode.window.activeTextEditor) {
      return;
    }

    const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath;
    const targetFile = await vscode.workspace.openTextDocument(currentFilePath);

    assert.strictEqual(
      targetFile.fileName,
      `${testWorkspace}/app/page-feature/app.page.html`
    );
  });
});
