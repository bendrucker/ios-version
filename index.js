'use strict'

var parseIntStrict = require('parse-int')
var REGEX = /OS (\d\d?_\d(_\d)?)/

module.exports = function iOsVersion (agent) {
  if (!agent) return null

  var matches = REGEX.exec(agent)
  if (!matches) return null

  var parts = matches[1].split('_').map(parseIntStrict)

  return {
    major: parts[0],
    minor: parts[1],
    patch: parts[2] || 0
  }
}
