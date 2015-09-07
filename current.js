'use strict'

var version = require('./')
var navigator = require('global/window').navigator || {}

module.exports = version(navigator.userAgent)
