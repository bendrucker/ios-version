'use strict'

var test = require('tape')
var iOsVersion = require('./')
var agents = require('./agents.json')

test(function (t) {
  assert('10', {
    major: 10,
    minor: 0,
    patch: 1
  })

  assert('8', {
    major: 8,
    minor: 4,
    patch: 0
  })

  assert('7', {
    major: 7,
    minor: 0,
    patch: 0
  })

  assert('6', {
    major: 6,
    minor: 1,
    patch: 3
  })

  t.end()

  function assert (agent, expected) {
    t.ok(agents[agent])
    t.deepEquals(iOsVersion(agents[agent]), expected)
  }
})
