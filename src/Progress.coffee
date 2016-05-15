
assertType = require "assertType"
clampValue = require "clampValue"
Shape = require "Shape"
Void = require "Void"

ProgressRange = Shape "ProgressRange",
  fromValue: Number
  toValue: Number
  easing: [ Function, Void ]
  clamp: [ Boolean, Void ]

module.exports =

  Range: ProgressRange

  fromValue: (value, range) ->

    assertType value, Number
    assertType range, ProgressRange

    progress = 1

    if range.fromValue isnt range.toValue
      progress = value - range.fromValue           # Distance travelled.
      progress /= range.toValue - range.fromValue  # Divide by total possible distance.

    if range.clamp is yes
      progress = clampValue progress, 0, 1

    return progress

  toValue: (progress, range) ->

    assertType progress, Number
    assertType range, ProgressRange

    if range.clamp is yes
      progress = clampValue progress, 0, 1

    value = range.toValue - range.fromValue  # Total possible distance.
    value *= progress                        # Multiply by progress.
    value += range.fromValue                 # Add the minimum value.
    return value
