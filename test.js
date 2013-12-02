var seqId = require('./')
  , assert = require('assert')

var a = {}, // 1
    b = {}  // 2

assert(seqId(a) === 1)
assert(seqId(a) === 1)

assert(seqId(b)  === 2)
assert(seqId({}) === 3)

console.log("ok")
