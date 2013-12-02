// Get (and set) a sequential (and unique) id for a given object

module.exports = seqId

var key = '_seqId', nextId = 1

function seqId(obj) {
  obj[key] = obj[key] || nextId++
  return obj[key]
}

seqId.exists = function(obj) { return !!obj[key] }
