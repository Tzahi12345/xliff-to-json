# xliff-to-json
Automatically converts XLIFF files to JSON files!

Note that this is designed around Angular translation files made by the [Internationalization](https://angular.io/guide/i18n) process.

## npm

### Installation

`npm install -g xliff-to-json`

### Usage

`xliff-to-json [directory or file]`

If no directory or file is specified, the current directory will be used.

## Don't like npm? See below

### Installation

1. Clone the repository by running `git clone https://github.com/Tzahi12345/xliff-to-json.git`
2. Run `cd xliff-to-json` and type `npm install` to get all the required dependencies.
3. You're all good to go! See Usage down below to convert your files.

### Usage

`node app.js [directory or file]`

## Notes

Files will output in the same directory as the input files.

If your output files do not appear, make sure your input XLIFF does not contain any `<group>` tags. If it does, remove them and try again!
