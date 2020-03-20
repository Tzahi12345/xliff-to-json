# xliff-to-json
Automatically converts XLIFF files to JSON files!

Note that this is designed around Angular translation files made by the [Internationalization](https://angular.io/guide/i18n) process.

## Getting started

1. Clone the repository by running `git clone https://github.com/Tzahi12345/xliff-to-json.git`
2. Run `cd xliff-to-json` and type `npm install` to get all the required dependencies.
3. You're all good to go! See Usage down below to convert your files.

## Usage

Simply insert your input `xlf` files into the `input` folder and run `node app.js`.

All your files should be converted and appear as JSONs in the `output` directory. If it fails, make sure your input XLIFF does not contain any `<group>` tags. If it does, remove them and try again!
