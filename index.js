// Code your solution in this file!
const distanceFromHqInBlocks = (location) => {
    const hq = 42;
    let result = 0
    return result = location > hq ? location - hq : hq - location;
}

const distanceFromHqInFeet = (location) => {
    let result = distanceFromHqInBlocks(location) * 264
    return result
}

const distanceTravelledInFeet = (start, end) => {
    let result = start > end ? start - end : end - start
    return result *= 264
}

const calculatesFarePrice = (start, end) => {
    let distance = distanceTravelledInFeet(start, end)
    let result = ""
    if (distance > 2500) {
        result = "cannot travel that far"
    } else if (distance > 2000) {
        result = 25
    } else if (distance > 400) {
        result = .02 * (distance - 400)
    } else {
        result = 0
    }
    return result
}