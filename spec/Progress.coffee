
Progress = require ".."

describe "Progress.fromValue()", ->

  it "converts a value to a progress", ->
    progress = Progress.fromValue 100, { from: 0, to: 50 }
    expect(progress).toBe 2

  it "can have the progress clamped", ->
    progress = Progress.fromValue 100, { from: 0, to: 50, clamp: yes }
    expect(progress).toBe 1

  it "supports negative numbers", ->
    progress = Progress.fromValue -100, { from: -100, to: -200 }
    expect(progress).toBe 0

describe "Progress.toValue()", ->

  it "converts a progress to a value", ->
    value = Progress.toValue 2, { from: 0, to: 50 }
    expect(value).toBe 100

  it "can have the progress clamped", ->
    value = Progress.toValue 2, { from: 0, to: 50, clamp: yes }
    expect(value).toBe 50

  it "supports negative numbers", ->
    progress = Progress.toValue 0, { from: -100, to: -200 }
    expect(progress).toBe -100
