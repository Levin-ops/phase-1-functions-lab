// Code your solution in this file!
const hqloc=42
function distanceFromHqInBlocks(pickUpLocation){
    let distBlocks= Math.abs(pickUpLocation-hqloc)
    return distBlocks;
}

const feetConversionToBlocks=264
function distanceFromHqInFeet(pickUpLocationFeet){
    const numOfBlocks=distanceFromHqInBlocks(pickUpLocationFeet);
    const feetDistance= numOfBlocks*feetConversionToBlocks
    return feetDistance;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start-destination)*feetConversionToBlocks;
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance = Math.abs(start-destination)*264

    if (distance<=400){
        return 0;
    }else if (distance > 400 && distance <= 2000){
        return (distance - 400)* 0.02;
    }else if (distance > 2000 && distance <= 2500){
        return 25
    }else{
        return 'cannot travel that far'
    }
}