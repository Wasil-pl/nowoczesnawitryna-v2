const UglifyJS = require("uglify-js");
const glob = require("glob");
const fs = require("fs");

// Funkcja do zminifikowania plików JavaScript i nadpisania tego samego pliku
function minifyJS(files) {
  files.forEach(function (file) {
    const result = UglifyJS.minify(fs.readFileSync(file, "utf8"));
    fs.writeFileSync(file, result.code);
  });
}

// Zminifikowanie plików JS w katalogu "dist/js/"
glob("dist/js/*.js", function (er, files) {
  minifyJS(files);
});

// Zminifikowanie plików JS w katalogu "dist/js/components/"
glob("dist/js/components/*.js", function (er, files) {
  minifyJS(files);
});
