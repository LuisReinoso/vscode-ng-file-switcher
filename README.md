# vscode-ng-file-switcher - vscode extension

Switch quickly between files inside angular projects. vscode extension
![Demo](demo.gif)

## Features

Switch between files based on angular style guide naming convention.

- component.html/scss/spec.ts/ts/stories.ts
- page.html/scss/spec.ts/ts

```
src/                                    project source code
|- app/                      
|  |- user/                             user module
|  |- components/                       dummy components
|  |  |- menu/
|  |  |  |- menu.component.html
|  |  |  |- menu.component.scss
|  |  |  |- menu.component.spec.ts
|  |  |  |- menu.component.ts
|  |  |  |- menu.stories.ts
|  |- pages/                            smart components
|  |  |- dashboard/
|  |  |  |- dashboard.component.html
|  |  |  |- dashboard.component.scss
|  |  |  |- dashboard.component.spec.ts
|  |  |  |- dashboard.component.ts
|  +- ...    
```

## Extension Settings

This extension contributes the following settings:

* `ng-file-switcher.openHTML`: open HTML file
<kbd>ALT</kbd>+<kbd>B</kbd>

* `ng-file-switcher.openStyle`: open Style file (based on angular.json config)
<kbd>ALT</kbd>+<kbd>C</kbd>

* `ng-file-switcher.openTest`: open Test file
<kbd>ALT</kbd>+<kbd>D</kbd>

* `ng-file-switcher.openStorybook`: open Storybook file
<kbd>ALT</kbd>+<kbd>S</kbd>

* `ng-file-switcher.openTypescript`: open Typescript file
<kbd>ALT</kbd>+<kbd>T</kbd>

## Release Notes

Check [Changelog file](./CHANGELOG.md)

## Development

- Fork and clone this repo
- `cd ng-file-switcher`
- `npm install`
- Add feature/fix
- `npm run test`
- If all is ok. Send a PR!

## Acknowledgement

This extension was inspired by [angular-file-changer ](https://github.com/jtcrowson/angular-file-changer)

## License

Luis Reinoso 2021 [MIT license](LICENSE)