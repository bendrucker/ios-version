# ios-version [![Build Status](https://travis-ci.org/bendrucker/ios-version.svg?branch=master)](https://travis-ci.org/bendrucker/ios-version)

> Detect the current iOS version in the browser


## Install

```
$ npm install --save ios-version
```


## Usage

```js
var iOsVersion = require('ios-version')

iOsVersion('Mozilla/5.0 (iPhone; CPU iPhone OS 8_4 like Mac OS X)...')
//=> {major: 8, minor: 4, patch: 0}

var current = require('ios-version/current')
// passes navigator.userAgent to iOsVersion
```

## API

#### `iOsVersion(agent)` -> `object`

Returns a semver object with `major` / `minor` / `patch` version numbers.

##### agent

*Required*  
Type: `string`

A user agent string from the browser.


## License

MIT © [Ben Drucker](http://bendrucker.me)
