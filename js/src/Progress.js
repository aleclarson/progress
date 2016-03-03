var Progress, Void, assertType, clampValue, ref, validateTypes;

ref = require("type-utils"), Void = ref.Void, assertType = ref.assertType, validateTypes = ref.validateTypes;

clampValue = require("clampValue");

Progress = {
  optionTypes: {
    from: Number,
    to: Number,
    clamp: [Boolean, Void]
  },
  fromValue: function(value, options) {
    var clamp, from, progress, to;
    assertType(value, Number);
    assertType(options, Object);
    validateTypes(options, this.optionTypes);
    from = options.from, to = options.to, clamp = options.clamp;
    progress = 1;
    if (from !== to) {
      progress = (value - from) / (to - from);
    }
    if (clamp === true) {
      progress = clampValue(progress, 0, 1);
    }
    return progress;
  },
  toValue: function(progress, options) {
    var clamp, from, to;
    assertType(progress, Number);
    assertType(options, Object);
    validateTypes(options, this.optionTypes);
    from = options.from, to = options.to, clamp = options.clamp;
    if (clamp === true) {
      progress = clampValue(progress, 0, 1);
    }
    return from + progress * (to - from);
  }
};

module.exports = Progress;

//# sourceMappingURL=../../map/src/Progress.map
