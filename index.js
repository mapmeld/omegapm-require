var hf = require("hash-files");

// Ω([PACKAGE], [HASH], function(err, require_result) { })

module.exports = function(package, requireHash, callback) {
  if (requireHash && typeof requireHash !== "function") {
    // determine if node_modules/[PACKAGE] is an existing git repo
    // determine if node_modules/[PACKAGE] has correct hash and no pending changes
    hf({ files: ["./node_modules/" + package + "/**"] }, function(err, foundHash) {
      if (!err && (foundHash + "").indexOf(requireHash) === -1) {
        err = new Error("Installed module did not match expected hash? Expected " + requireHash + ".");
      }
      if (err) {
        callback(err);
      } else {
        callback(null, require(package));
      }
    });
  } else if (requireHash) {
    callback(null, require(package));
  } else {
    callback(require(package));
  }
};

module.exports.Ω = function(package, sha) {
  exports(package, sha);
};

module.exports.omega = exports.Ω;
