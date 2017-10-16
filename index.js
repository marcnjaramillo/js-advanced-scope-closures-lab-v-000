function produceDrivingRange(blockRange) {
  return function(startingPoint, endingPoint) {
    let start = parseInt(startingPoint);
    let end = parseInt(endingPoint);
    let distance = Math.abs(end - start);
    let total = blockRange - distance;

    if (total > 0) {
      return `within range by ${total}`
    } else {
      return `${Math.abs(total)} blocks out of range`
    }
  }
}

function produceTipCalculator(fare) {
  return function(percent) {
    return fare * percent;
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}
