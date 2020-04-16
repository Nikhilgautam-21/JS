// Hoisting in a function that returns the capacity status for the train

function capacityStatus(numPassengers, capacity) {
    /* Hoisted var 
        var noSeats = undefined;
        var seatsAvail = undefined;
    */
    if (numPassengers == capacity) {
        noSeats();
    }
    else {
        seatsAvail();
    }
    var noSeats = function () {
        console.log("No seats available");
        return false;
    }

    var seatsAvail = function () {
        console.log(`There are ${capacity - numPassengers} seats left`);
        return true;
    }
}

capacityStatus(12, 12); // returns an Error


// Above function can be fixed by moving some code above another

function capacityStatus(numPassengers, capacity) {
    /* Hoisted var 
        var noSeats = undefined;
        var seatsAvail = undefined;
    */
    var noSeats = function () {
        console.log("No seats available");
        return false;
    }

    var seatsAvail = function () {
        console.log(`There are ${capacity - numPassengers} seats left`);
        return true;
    }
    if (numPassengers == capacity) {
        noSeats();
    }
    else {
        seatsAvail();
    }
}

// OR can be fixed by avoiding function expression

function capacityStatus(numPassengers, capacity) {
    /* Hoisted var 
        var noSeats = undefined;
        var seatsAvail = undefined;
    */
    if (numPassengers == capacity) {
        noSeats();
    }
    else {
        seatsAvail();
    }
    function noSeats() {
        console.log("No seats available");
        return false;
    }

    function seatsAvail() {
        console.log(`There are ${capacity - numPassengers} seats left`);
        return true;
    }
}

