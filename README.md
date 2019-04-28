protocol-words
==============

Some protocol-ish words. Adjectives and nouns.

# Usage

ES modules:

```
import { nouns, adjectives } from 'protocol-words'
```

CommonJS:

```
const { nouns, adjectives } = require('protocol-words')
```

# Example

The test case uses [haikunator](https://github.com/Atrox/haikunatorjs)
and Node.js 12 ES module support to generate a series of Heroku-style
random hostnames.

```
$ node --experimental-modules test.js
(node:23275) ExperimentalWarning: The ESM module loader is experimental.
reported-terminal-0926
network-multihash-5393
dumb-cbor-1736
network-nonce-6595
uncorrelated-delta-1160
raw-cbor-2104
streamable-gateway-7255
social-period-4467
ipld-identifier-2959
multiple-references-2052
gigantic-overlay-6847
bootstrap-message-3299
vector-pool-1394
asynchronous-switch-9592
peer-protocol-1311
algorithmic-tipset-6304
tera-base-7794
future-chain-4225
trustworthy-complete-9413
social-analyzer-8783
```

# License

MIT
