var ProgressRange, Shape, Void, assertType, clampValue;

assertType = require("assertType");

clampValue = require("clampValue");

Shape = require("Shape");

Void = require("Void");

ProgressRange = Shape("ProgressRange", {
  fromValue: Number,
  toValue: Number,
  easing: [Function, Void],
  clamp: [Boolean, Void]
});

module.exports = {
  Range: ProgressRange,
  fromValue: function(value, range) {
    var progress;
    assertType(value, Number);
    assertType(range, ProgressRange);
    progress = 1;
    if (range.fromValue !== range.toValue) {
      progress = value - range.fromValue;
      progress /= range.toValue - range.fromValue;
    }
    if (range.clamp === true) {
      progress = clampValue(progress, 0, 1);
    }
    return progress;
  },
  toValue: function(progress, range) {
    var value;
    assertType(progress, Number);
    assertType(range, ProgressRange);
    if (range.clamp === true) {
      progress = clampValue(progress, 0, 1);
    }
    value = range.toValue - range.fromValue;
    value *= progress;
    value += range.fromValue;
    return value;
  }
};

//# sourceMappingURL=../../map/src/Progress.map
