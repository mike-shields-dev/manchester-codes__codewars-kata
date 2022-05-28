const { 
  monkeyCount, 
  maps,
} = require("./kata_solutions.js")

describe("monkeyCount", () => {
  it("should return an array of numbers from 1 to n", () => {
    expect(monkeyCount(5)).toEqual([1, 2, 3, 4, 5])
    expect(monkeyCount(3)).toEqual([1, 2, 3])
    expect(monkeyCount(9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(monkeyCount(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(monkeyCount(20)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ])
  })
})

describe("maps", () => {
  it("should return the original array with the values doubled", () => {
    expect(maps([1, 2, 3])).toEqual([2, 4, 6])
    expect(maps([4, 1, 1, 1, 4])).toEqual([8, 2, 2, 2, 8])
    expect(maps([2, 2, 2, 2, 2, 2])).toEqual([4, 4, 4, 4, 4, 4])
  })
})

describe("removeCharacters", () => {
  it("should return a string with the first and last characters removed", () => {
    expect(removeCharacters("eloquent")).toEqual("loquen")
    expect(removeCharacters("country")).toEqual("ountr")
    expect(removeCharacters("person")).toEqual("erso")
    expect(removeCharacters("place")).toEqual("lac")
    expect(removeCharacters("ooopsss")).toEqual("oopss")
  })
})
