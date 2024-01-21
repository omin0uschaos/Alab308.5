
console.log("--------------------------------PART 1------------------------------");
// Initialize Array with numbers
const numArray = [1, 2, 3, 7]
// Take an array of numbers and return the sum.
function returnSum(arr){
    let sum = 0;
    arr.forEach(num => sum += num);
    return sum;
}

console.log(returnSum(numArray));

// Take an array of numbers and return the average.
function returnAverage(arr){
    let total = returnSum(arr);
    return total / arr.length;
}

console.log(returnAverage(numArray));

// Initialize Array with strings
const stringArray = ['jazz', 'hip-hop','techno','blues','country','R&B','pop','classical']

// Take an array of strings and return the longest string.
function longestString(arr){
    let longString = "";
    arr.forEach(str => {
        if(str.length > longString.length){
            longString = str;
        }
    })
    return longString;
}
console.log(longestString(stringArray));

//initialize variable number used for comparison
let numString = 5;
// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 

function longerString(arr){
    let strArray = [];
    arr.forEach(str => {
        if(str.length > numString){
            strArray.push(str);
        }
    })
    return strArray;
}
console.log(longerString(stringArray));

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function numsBetween(n){
    if(n > 1){
        console.log(n);
        numsBetween(n - 1);
    } else {
        console.log(1);
    }
}
numsBetween(10);

console.log("--------------------------------PART 2------------------------------");
//initialize the array used for sorting
const peopleArray = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

console.log(peopleArray);

// Sort the array by age.

console.log(peopleArray.sort((a, b) => b.age - a.age));

// Filter the array to remove entries with an age greater than 50.
    
console.log(peopleArray.filter(obj => obj.age < 50));
// Map the array to change the “occupation” key to “job” and increment every age by 1.

console.log(peopleArray.map(obj => {
    let newObj = {...obj};
    newObj.job = newObj.occupation;
    delete newObj.occupation;
    newObj.age = Number(newObj.age) + 1;
    return newObj;
}));
// Use the reduce method to calculate the sum of the ages.
let totalAge = peopleArray.reduce((accumulator, currentValue) => {
    return accumulator + Number(currentValue.age);
}, 0);
console.log(totalAge);

// Then use the result to calculate the average age.
console.log(totalAge / peopleArray.length);

let person = { name: 'John', age: 30 };
// Take an object and increment its age field.
function incrementAge(object){
    if(object.age === undefined){
        object.age = 0;
    }
    object.updated_at = Date();
    object.age++;
}
incrementAge(person);
console.log(person);

// Take an object, make a copy, and increment the age field of the copy. Return the copy.

function incrementCopy(object){
    if(object.age === undefined){
        object.age = 0;
    }
    let newObj = {...object};
    newObj.age++;
    newObj.updated_at = Date();
    return newObj;
}

console.log(incrementCopy(person));

// For each of the functions, if the object does not yet contain an age field, create one and set it to 0.
// add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.