#! /usr/bin/env node

var hf = require("hash-files");

if (process.argv.length < 3) {
  console.error("Didn't specify a node_module to hash!");
}

if (process.argv[2] === "da39a3ee5e6b4b0d3255bfef95601890afd80709") {
  console.error("Didn't specify a valid subdirectory of node_modules!");
}

hf({ files: ["./node_modules/" + process.argv[2] + "/**"] }, function(err, foundHash) {
  if (err) {
    throw err;
  }
  console.log(foundHash);
});
