// Code your solution in this file!
function distanceFromHqInBlocks(location, hq = `42`) {
   let distance;
    if (location > hq) {
        distance = location - hq;
    } else if (location < hq) {
        distance = hq - location;
     }
    else if  (location === hq)
    distance = 0;
     return distance;
}

console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(start, end) {
    return distanceFromHqInBlocks(start, end) * 264
}

function calculatesFarePrice(start, end) {
    let fare; 
    let tooFar
    let myDist = distanceTravelledInFeet(start, end)
    if(myDist <= 400){
        fare = 0
    }
    else if (myDist > 400 && myDist <= 2000){
        fare = 256 / 100
    }
    else if (myDist > 2000 && myDist <= 2500){
        fare = 25;
    }
    else if (myDist > 2500){
        return 'cannot travel that far'
        tooFar = true;
    }
    return fare 
    }
