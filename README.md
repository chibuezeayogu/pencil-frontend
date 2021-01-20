# PencilFrontend

Document management System using Firebase and Angular with Social login Authentication.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.
- Build an Angular 8+ application with the following:
  - User authentication: Use Firebase to support authentication in your application, so that the first screen a user sees, asks them to login via their google account. If the user is detected to have been already authenticated, then directly take them to the 2nd page.
  - Text editor: Once logged in, show a large textbox on the page integrated with the Medium editor (https://github.com/yabwe/medium-editor) and allow the user to write content in this editor area.
  - Everything the user writes here, should be synced into the Firebase database in real-time for that user’s account, automatically, without hitting a submit button.
  - When the user logs back in, retrieve their last written and auto-saved document and show it in the editor ready for editing.
  - Host your project using Firebase hosting and send us a link, along with your code on GitHub.
  - Allow the user to enter LaTeX equations into the editor inside 2 enclosing $ symbols (e.g. $1+1=2$) and once the user is done typing them out, render the actual equation.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
