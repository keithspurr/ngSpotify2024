# NgSpotifyNew

This project is now updated to Angular Version 18 using VSC on MacOS and was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.2.

## Deploy a service

For this project to run, you must deploy an Express app called 'spot-auth' which you can clone from my repository, or from Michael Dill's original, which sends two variables - a Spotify client_id and a Spotify client_secret via a deployment platform such as Railway. 

You must first of all generate the client_id and client_secret variables from your own Spotify Developer account.  

Now that Heroku is no longer free, Railway has a free tier which can serve this requirement. Add your Express server (after compiling 'Spot-Auth') URL to line 89 of 'spotify.service.ts' in the 'services' folder of this project. eg:
- this.authUrl = '[your-prouction-server-url]'; -

This project will then run live or locally via a VSC Angular setup.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Since Angular 13 `ng build` no longer uses the `--prod` flag. Now use `ng build` followed by the new flag: `--configuation production`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
