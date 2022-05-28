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

}

function countDevelopers(list) {

}

function XO(str) {
  
}

var splitInParts = function (s, partLength) {

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
