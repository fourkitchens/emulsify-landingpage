# Emulsify Landing Page

This repository contains the source files used for the design of the Emulsify landing page.

## Before you start

Install the following dependencies:

- [Node.js](https://nodejs.org/)

It is suggested that you use [nvm](https://github.com/creationix/nvm#installation) to [install and use](https://github.com/creationix/nvm#usage) node.js 6.x or 7.x.

## Initial setup

1. Clone this repo locally

  ```bash
  https://github.com/fourkitchens/emulsify-landingpage.git && cd emulsify-landingpage
  ```

2. Install JavaScript developer tools.
   
   ```bash
   yarn
   ```

3. In Typekit, add the font [Franklin Gothic URW](https://typekit.com/fonts/franklin-gothic-urw) to your kit, then add the Typekit Kit ID to `gulp-tasks/html.js`

4. Serve up the site locally at http://localhost:3000
   
   ```bash
   gulp serve
   ```

## Gulp tasks

All of the gulp javascript files are written in ES6, since they are compiled and used by Node 6+, this just works. :-)

To see all of the project's tasks run `gulp --tasks`.
* `gulp lint` checks our files for coding standards in javascript and confirms that we are W3C compliant.
* `gulp serve` generates our code and serves it up at http://localhost:3000 for review.

### Adding Vendor Scripts

To add additional vendor scripts, such as jQuery UI, you'll do that by updating `./gulp-tasks/scripts` and adding them to the `vendorScripts` array. Project scripts are updated the same way with `projectScripts`.  

### Eyeglass, known "error"

When running `gulp styles` you can disregard the following error, `The following modules are incompatible with eyeglass 1.1.2: bootstrap-sass needed eyeglass ^0.7.1`. `bootstrap-sass` is actually compatible it just throws an error.
