import * as path from 'path';

import { runTests } from 'vscode-test';

async function main() {
  try {
    // The folder containing the Extension Manifest package.json
    // Passed to `--extensionDevelopmentPath`
    const extensionDevelopmentPath = path.resolve(__dirname, '../../');

    const testWorkspace = path.resolve(__dirname, '../../workspaces/workspace');
    const testWorkspaceWithDefaultProject = path.resolve(
      __dirname,
      '../../workspaces/workspace-default-project/'
    );
    const testWorkspaceNewProjectRoot = path.resolve(
      __dirname,
      '../../workspaces/workspace-new-project-root/'
    );

    console.log('workspace should be', testWorkspace);

    // The path to test runner
    // Passed to --extensionTestsPath
    const extensionTestsPath = path.resolve(__dirname, './suite/index');

    // Download VS Code, unzip it and run the integration test
    await runTests({
      extensionDevelopmentPath,
      extensionTestsPath,
      launchArgs: [
        testWorkspace,
        // This disables all extensions except the one being testing
        '--disable-extensions',
      ],
    });

    await runTests({
      extensionDevelopmentPath,
      extensionTestsPath,
      launchArgs: [
        testWorkspaceWithDefaultProject,
        // This disables all extensions except the one being testing
        '--disable-extensions',
      ],
    });

    await runTests({
      extensionDevelopmentPath,
      extensionTestsPath,
      launchArgs: [
        testWorkspaceWithDefaultProject,
        // This disables all extensions except the one being testing
        '--disable-extensions',
      ],
    });

    await runTests({
      extensionDevelopmentPath,
      extensionTestsPath,
      launchArgs: [
        testWorkspaceNewProjectRoot,
        // This disables all extensions except the one being testing
        '--disable-extensions',
      ],
    });
  } catch (err) {
    console.error('Failed to run tests');
    process.exit(1);
  }
}

main();
