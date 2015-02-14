module.exports = function(package, sha) {
  if (sha) {
    // determine if node_modules/[PACKAGE] is an existing git repo
    // determine if node_modules/[PACKAGE] has correct git sha and no pending changes
    
  } else {
    return require(package);
  }
};

module.exports.Ω = function(package, sha) {
  exports(package, sha);
};

module.exports.omega = exports.Ω;
