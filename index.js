var path = require("path")
var Filter = require("broccoli-filter")
var eco = require("eco")

module.exports = EcoFilter
EcoFilter.prototype = Object.create(Filter.prototype)
EcoFilter.prototype.constructor = EcoFilter

function EcoFilter (inputTree, options) {
  if (!(this instanceof EcoFilter)) return new EcoFilter(inputTree, options)

  Filter.call(this, inputTree, options)

  this.options = options || {}
}

EcoFilter.prototype.extensions = ["eco"]
EcoFilter.prototype.targetExtension = "js"

EcoFilter.prototype.processString = function(string, name) {
  return "module.exports = " + eco.precompile(string)
}
