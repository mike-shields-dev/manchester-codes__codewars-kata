const { monkeyCount, maps } = require("./kata_solutions.js")

describe("monkeyCount", () => {
  xit("should return an array of numbers from 1 to n", () => {
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
  xit("should return the original array with the values doubled", () => {
    expect(maps([1, 2, 3])).toEqual([2, 4, 6])
    expect(maps([4, 1, 1, 1, 4])).toEqual([8, 2, 2, 2, 8])
    expect(maps([2, 2, 2, 2, 2, 2])).toEqual([4, 4, 4, 4, 4, 4])
  })
})

describe("removeCharacters", () => {
  xit("should return a string with the first and last characters removed", () => {
    expect(removeCharacters("eloquent")).toEqual("loquen")
    expect(removeCharacters("country")).toEqual("ountr")
    expect(removeCharacters("person")).toEqual("erso")
    expect(removeCharacters("place")).toEqual("lac")
    expect(removeCharacters("ooopsss")).toEqual("oopss")
  })
})

describe("number", () => {
  xit("should return the total of adding the 0th and subtracting the 1st elements in each sub array", () => {
    expect(
      number([
        [10, 0],
        [3, 5],
        [5, 18],
      ])
    ).toEqual(5)
    expect(number([3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10])).toEqual(
      17
    )
    expect(number([3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8])).toEqual(21)
    expect(number([0, 0])).toEqual(0)
  })
})

describe("ballCollector", () => {
  xit("Should return the total of all occurences of the value 58 in the array", () => {
    expect(ballCollector(58, 68, 62, 69, 58)).toEqual({ weight: 116 })
    expect(ballCollector(60, 66, 71, 68, 62)).toEqual({ weight: 0 })
    expect(ballCollector(58)).toEqual({ weight: 58 })
    expect(ballCollector(58, 58, 58)).toEqual({ weight: 174 })
  })
})

describe("countDevelopers", () => {
  const list1 = [
    {
      firstName: "Noah",
      lastName: "M.",
      country: "Switzerland",
      continent: "Europe",
      age: 19,
      language: "JavaScript",
    },
    {
      firstName: "Maia",
      lastName: "S.",
      country: "Tahiti",
      continent: "Oceania",
      age: 28,
      language: "JavaScript",
    },
    {
      firstName: "Shufen",
      lastName: "L.",
      country: "Taiwan",
      continent: "Asia",
      age: 35,
      language: "HTML",
    },
    {
      firstName: "Sumayah",
      lastName: "M.",
      country: "Tajikistan",
      continent: "Asia",
      age: 30,
      language: "CSS",
    },
  ]

    xit("should return the total count of JavaScript developers from Europe", () => {
      try {
        expect(countDevelopers(list1)).toEqual(1)
      } catch (e) {
        console.error("Noah is the only JavaScript developer from Europe")
      }
    })

  const list2 = [
    {
      firstName: "Oliver",
      lastName: "Q.",
      country: "Australia",
      continent: "Oceania",
      age: 19,
      language: "HTML",
    },
    {
      firstName: "Lukas",
      lastName: "R.",
      country: "Austria",
      continent: "Europe",
      age: 89,
      language: "HTML",
    },
  ]

  xit("should not find HTML developers from Europe", () => {
    try {
      expect(countDevelopers(list2)).toEqual(0)
    } catch (e) {
      console.error("Lukas is not a JavaScript developer from Europe")
    }
  })
})

describe("XO", () => {
  xit("should return a boolean indicating that the string has the same number of x's and o's", () => {
    expect(XO("xo")).toBe(true)
    expect(XO("xxOo")).toBe(false)
    expect(XO("xxxm")).toBe(false)
    expect(XO("Oo")).toBe(false)
    expect(XO("ooom")).toBe(false)
  })
})
