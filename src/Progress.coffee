
{ Void, assertType, validateTypes } = require "type-utils"

clampValue = require "clampValue"

Progress =

  optionTypes: {
    from: Number
    to: Number
    clamp: [ Boolean, Void ]
  }

  fromValue: (value, options) ->
    assertType value, Number
    assertType options, Object
    validateTypes options, @optionTypes
    { from, to, clamp } = options
    progress = 1
    progress = (value - from) / (to - from) if from isnt to
    progress = clampValue progress, 0, 1 if clamp is yes
    progress

  toValue: (progress, options) ->
    assertType progress, Number
    assertType options, Object
    validateTypes options, @optionTypes
    { from, to, clamp } = options
    progress = clampValue progress, 0, 1 if clamp is yes
    from + progress * (to - from)

module.exports = Progress
