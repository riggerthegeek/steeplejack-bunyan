# Steeplejack Bunyan

[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][travis-image]][travis-url]
[![Dependencies][dependencies-image]][dependencies-url]
[![Dev Dependencies][dev-dependencies-image]][dev-dependencies-url]
[![License][license-image]][license-url]

Bunyan implementation for steeplejack logger

## Usage

To use, you will need to create a config dependency in the injector. This is a strategy object so, once you've done
the initial configuration, everything is controlled by the Logger object.

The `constructor` accepts anything that can be sent through to Bunyan's
[createLogger](https://github.com/trentm/node-bunyan#constructor-api) factory method.

Inside the application, you're dealing with the Steeplejack logger class, so just use as normal.

## Example

```javascript
import {Logger} from "steeplejack/lib/logger";
import {Bunyan} from "steeplejack-bunyan";

/* Name for the injector */
const name = "$logger";

/* Factory function */
function config ($config) {

    /* This accepts anything accepted by the Bunyan.createLogger method */
    let opts = {
        name: "loggerName"
    };

    return new Logger(new Bunyan(opts));

}

/* Define the output for the injector */
export let __config = {
    name,
    config
};
```


[node-version-image]: https://img.shields.io/badge/node.js-%3E%3D_0.10-brightgreen.svg?style=flat
[travis-image]: https://img.shields.io/travis/riggerthegeek/steeplejack-bunyan.svg?style=flat
[dependencies-image]: http://img.shields.io/david/riggerthegeek/steeplejack-bunyan.svg?style=flat
[dev-dependencies-image]: http://img.shields.io/david/dev/riggerthegeek/steeplejack-bunyan.svg?style=flat
[license-image]: http://img.shields.io/:license-MIT-green.svg?style=flat

[node-version-url]: http://nodejs.org/download/
[travis-url]: https://travis-ci.org/riggerthegeek/steeplejack-bunyan
[dependencies-url]: https://david-dm.org/riggerthegeek/steeplejack-bunyan
[dev-dependencies-url]: https://david-dm.org/riggerthegeek/steeplejack-bunyan#info=devDependencies&view=table
[license-url]: https://raw.githubusercontent.com/riggerthegeek/steeplejack-bunyan/master/LICENSE
