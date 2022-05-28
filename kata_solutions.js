function monkeyCount(n) {
  return [...new Array(n)].map((_, i) => i + 1)
}

function maps(x) {
  return x.map((n) => n * 2)
}

function removeChar(str){
  return str.slice(1, -1)
};

function number(busStops){
  return busStops.reduce((onTheBus, busStop) => {
    const [boarders, alighters] = busStop
    return onTheBus + boarders - alighters
  }, 0)
}

function ballCollector(detritus) {
  return detritus.reduce(
    (tennisBalls, weightOfItem) => {
      if (weightOfItem === 58) {
        tennisBalls.weight += weightOfItem
      }
      return tennisBalls
    },
    { weight: 0 }
  )
}

function countDevelopers(list) {
  return list.reduce((developerCount, developer) => {
    if (
      developer.language === "JavaScript" &&
      developer.continent === "Europe"
    ) {
      developerCount++
    }
    return developerCount
  }, 0)
}

function XO(str) {
  let xCount = oCount = 0

  for (const char of str.toLowerCase()) {
    char === "x" && xCount++
    char === "o" && oCount++
  }
  return xCount === oCount
}

var splitInParts = function (s, partLength) {
  const sToArray = [...s]
  const partsArray = []
  while (sToArray.length) {
    partsArray.push(sToArray.splice(0, partLength).join(""))
  }
  return partsArray.join(" ")
}

module.exports = {
  monkeyCount,
  maps,
  removeChar,
  number,
  ballCollector,
  countDevelopers,
  XO,
  splitInParts,
}
