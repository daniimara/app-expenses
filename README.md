# App Mobile Despesas

Despesas App.

## Installation

- Make sure you already have [NodeJS](https://nodejs.org/en/) intalled in version *v7.4.0*
- Install Cordova *v7.0.0* and Ionic *v3.0.0* globaly `npm install -g ionic`, if in Mac or Linux maybe `sudo` is required.
- `npm install --save-dev --save-exact @ionic/cli-plugin-ionic-angular@latest`
- `npm install --save-dev --save-exact @ionic/cli-plugin-cordova@latest`
- Clone project `git clone git@github.com:daniimara/app-expenses.git`
- Run `npm install` to install all dependencies
- Run `ionic serve` to create all required build files and run preview project to browser

## Build platform

To build each platform, you must to do the following steps:
1. Add the desired platform `ionic cordova platform add android` and/or `ionic cordova platform add ios`.
2. Build each desired platform `ionic cordova build android` and/or `ionic cordova build ios`.

## Run on device

- To run android project to device 'ionic run android --device'
- To run ios project to device 'ionic run ios --device'
