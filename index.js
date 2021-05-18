function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiyValue) {
    return function (value) {
        return multiyValue * value;
    };
}

function fareDoubler(createFareMultiplier) {
    return createFareMultiplier * 2;
}

function fareTripler(createFareMultiplier) {
    return createFareMultiplier * 3;
}

function selectDifferentDrivers(drivers, returnDrivers) {
    return returnDrivers(drivers);
}