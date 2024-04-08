const CleanCSS = require("clean-css");
const glob = require("glob");
const fs = require("fs");

// Funkcja do zminifikowania plików CSS i nadpisania tego samego pliku
function minifyCSS(files) {
  files.forEach(function (file) {
    const cssContent = fs.readFileSync(file, "utf8");
    const minifiedCss = new CleanCSS().minify(cssContent).styles;
    fs.writeFileSync(file, minifiedCss);
  });
}

// Zminifikowanie plików CSS w katalogu dist/css/
glob("dist/css/*.css", function (er, files) {
  minifyCSS(files);
});
