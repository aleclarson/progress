var Progress;

Progress = require("..");

describe("Progress.fromValue()", function() {
  it("converts a value to a progress", function() {
    var progress;
    progress = Progress.fromValue(100, {
      from: 0,
      to: 50
    });
    return expect(progress).toBe(2);
  });
  it("can have the progress clamped", function() {
    var progress;
    progress = Progress.fromValue(100, {
      from: 0,
      to: 50,
      clamp: true
    });
    return expect(progress).toBe(1);
  });
  return it("supports negative numbers", function() {
    var progress;
    progress = Progress.fromValue(-100, {
      from: -100,
      to: -200
    });
    return expect(progress).toBe(0);
  });
});

describe("Progress.toValue()", function() {
  it("converts a progress to a value", function() {
    var value;
    value = Progress.toValue(2, {
      from: 0,
      to: 50
    });
    return expect(value).toBe(100);
  });
  it("can have the progress clamped", function() {
    var value;
    value = Progress.toValue(2, {
      from: 0,
      to: 50,
      clamp: true
    });
    return expect(value).toBe(50);
  });
  return it("supports negative numbers", function() {
    var progress;
    progress = Progress.toValue(0, {
      from: -100,
      to: -200
    });
    return expect(progress).toBe(-100);
  });
});

//# sourceMappingURL=../../map/spec/Progress.map
