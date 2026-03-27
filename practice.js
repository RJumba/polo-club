
function ourFunctionWithArgs (a, b) {
    console.log{a-b};
}
ourFunctionWithArgs(10, 6);

function functionWithArgs (a, b) {
    console.log(a + b);
}
functionWithArgs(10, 6);

var myglobal = 10;

function fun2() {

    var output = "";
    if ( typeof myglobal != "undefined") {
        output += "myglobal:" + myglobal;
    }
}

function mylocalscope() {
    var myvar = 5;
    console.log(myvar)
}

mylocalscope();

var outerwear = "t-shirt";
function myoutfit() {
    var outerwear = "sweater";

    return outerwear;
}
console.log (myoutfit());
console.log(outerwear);


function minusseven(num) {
    return num - 7;
}
console.log(minusseven(10));


function timesfive(num) {
    return num * 5;
}
console.log (timesfive(8));


 var changed = 0;
 function change (num) {
    return (num + 5) / 3;
 }
 changed = change(10);


var processed = 0;
function processarg (num) {
    return (num + 3) / ;
}
processed = processarg(7)


function nextinline (arr, item) {
    arr.push(item);
    return arr.shift();
}
var testarr = [1,2,3,4,5];

console.log("Before: " + JSON,stringify(teatarr));
console.log(nextinline(testarr, 6));
console.log("After: " + JSON.stringify(testarr));


function booleans() {
    return false;
}


function ourtrueorfalse (isittrue) {
    if (isittrue) {
        return "Yes, it's true";
    }

return "No, it's false";
}


function trueorfalse (wasthattrue) {
    if (itwastrue) {
        return "Yes, it was true";
    }
    return "No, it was false";
}
console.log(trueorfalse(true))


function testequal (val) {
    if (val == 12) {
        return "equal";
    }
    return not equal;
}
console.log(testequal(12));


// '===' is a strict sign
// 3 === "3" would be false

function teststrict (val) {
    if (val === 12){
        return "equal";
    }
    return "not equal";
}
console.log(teststrict(12));


function compareequality (a, b){
    if (a == b) [
        return "equal";
    ]
    return "not equal";
}
console.log(compareequality(10, "10"));


// creating objects
var ourdog = {
    "name" : "bosco",
    "legs" : "4",
    'tails' : "1",
    "friends" : ["everything"]
};

var mydog = {
    "name" : "ray",
    "legs" : "4"
    "friends" : []
};

// wanting to access the value of something from an object
var thename = mydog.name;


// record collection
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
//keep a copy of the collection for tests
var collectioncopy = JSON.parse(JSON.stringify(collection));

//only change code below this line
function updaterecords(id, prop, value) {
    if(value === "") {
        deletecollection [id][prop];
    } else if(prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value; 
    }
    return collection;
}
updaterecords(2468, "tracks", "test");
console.log(updaterecords(5439, "artist", "ABBA"));


//iterate with while loops
var myarray = [];

var i = 0;
while(i < 5) {
    myarray.push(i);
    i++;
}

console.log(myarray);


// using a for loop
var ourarray = [];

for ( var i = 0; i < 5; i++) {
    ourarray.push(i);
}

/* 
difference between let and var in javascript

var can be used inside and outside the block scope
let can only be used inside the block scope

var canbe redefined
let cannot be redefined as the way var can be redefined
*/

function checkscope() {
    "use strict";
        let i = "function scope";
        if (true) {
            let i = "blok scope";
            console.log("Block scope i is: ", i);
        }
        console.log("Function scope i is: ", i);
        return i;
}
checkscope()


// const keyword
function printmanytimes(str) {
    "use strict";

    const SENTENCE = str + " is cool!";

    for(let i = 0; i < str.length; i+=2){
        console.log(SENTENCE);
    }
}
printmanytimes("freecodecamp");


// arrow functions
const magic = () => new date();


var myconcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myconcat([1, 2], [3, 4, 5]));

// writng higher order functions
const realnumberarray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squarelist = (arr) => {
    const squaredintegers = arr;
    return squaredintegers;
};

const squaredintegers = squarelist(realnumberarray);
console.log(squaredintegers);


const sum = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
}) ();

console.log(sum(1, 2, 3, 4));


// Destructuring assignment
var voxel = {x: 3.6, y: 7.4, z: 6.54 };

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const { x : a, y : b, z : c } = voxel;

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function gettempoftomorrow(avgtemp) {
    "use strict";
    const tempoftomorrow = undefined;
    return tempoftomorrow;
}

console.log(gettempoftomorrow(AVG_TEMPERATURES));

/* 
take more notes on getters and setters
importing and exporting
*/