#!/usr/bin/env node
// build/bundle.js — inline styles.css, classes.js and app.js into one portable HTML file.
// Zero dependencies. Run from anywhere: node build/bundle.js
// Output: dist/dance-course.html — open it anywhere, even from file://.
"use strict";

var fs = require("fs");
var path = require("path");

var root = path.join(__dirname, "..");
var outDir = path.join(root, "dist");
var outFile = path.join(outDir, "dance-course.html");

function read(name) {
  return fs.readFileSync(path.join(root, name), "utf8");
}

// Escape "</script" sequences so inlined JS cannot terminate its own script tag.
function safeInlineJs(js) {
  return js.replace(/<\/script/gi, "<\\/script");
}

var html = read("index.html");
var css = read("styles.css");
var classesJs = safeInlineJs(read("classes.js"));
var appJs = safeInlineJs(read("app.js"));

var replaced = {

  css: false,
  classes: false,
  app: false
};

html = html.replace(/<link\s+rel="stylesheet"\s+href="styles\.css">/, function () {
  replaced.css = true;
  return "<style>\n" + css + "\n</style>";
});
html = html.replace(/<script\s+src="classes\.js"><\/script>/, function () {
  replaced.classes = true;
  return "<script>\n" + classesJs + "\n</script>";
});
html = html.replace(/<script\s+src="app\.js"><\/script>/, function () {
  replaced.app = true;
  return "<script>\n" + appJs + "\n</script>";
});

var missing = Object.keys(replaced).filter(function (k) { return !replaced[k]; });
if (missing.length) {
  console.error("bundle FAILED — could not find tag(s) to inline: " + missing.join(", "));
  process.exit(1);
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
fs.writeFileSync(outFile, html);

var kb = (fs.statSync(outFile).size / 1024).toFixed(1);
console.log("bundled -> " + outFile + " (" + kb + " KB)");
