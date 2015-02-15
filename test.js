// run this to test omegapm's async require-replacement can work
var Ω = require("./");

// full hash
Ω("hash-files", "ae00010f6320cb7763479f822cdfa555cb896535", function(err) {
  if (err) {
    throw err;
  }
});

Ω("hash-files", "ae00010f63", function(err) {
  if (err) {
    throw err;
  }
});

Ω("hash-files", "aaaaaa", function(err) {
  if (!err) {
    throw "Hash mismatched and Ωpm didn't notice?!";
  }
});

console.log("Running all tests. Did you receive any errors?");
