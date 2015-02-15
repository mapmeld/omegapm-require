# omegapm-require

Ωpm (omega package manager) replacement for node.js require

## Concept

At the top of a node.js script, you usually require module internals like this:

```
imp = require("important-package");
cry = require("crypto-package");
loc = require("./local/path");
```

Use omegapm-require to verify that your modules are unchanged before requiring them:

```
Ω = require("omegapm-require");
Ω("important-package", "HASH", function(err, imp) {
  Ω("crypto-package", "HASH", function(err, cry) {
    // doesn't support local files yet
    loc = require("./local/path");

    // you have access to all of the modules in this scope
  });
});
```

## Getting the hash of a module

The hash of a module is not the same as the git commit SHA. The commit SHA is actually
influenced by the commit message, timestamp, and author. The purpose of this SHA check
is not to check the commit action, but that this module matches the build intended by
the module developer and its implementer, and it remains unchanged.

Once you install this package, you can get its hash:

```
npm install omegapm-require -g
cd top/directory/of/node/server
npm install PACKAGE_NAME
omegapm-hash PACKAGE_NAME
> hashhashhashash
```

## License

GPLv3+
