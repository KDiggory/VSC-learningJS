'use strict';

// Higher order functions!

const censor = words => {
    const filtered = [];
    for(let i = 0; i < words.length; i++) {
        const word = words[i];
        if(word.length !==4) filtered.push(word);
    } console.log( filtered);
}

censor(['zonk','plonk', 'sun', 'run']);


const startsWith = words => {
    const filtered = []
;
for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.startsWith('s')) filtered.push(word);
} console.log(filtered);
};

startsWith(['sun','run','plum', 'seen']);

// this has a lot of code repitition
// instead use other functions

const reduce = (reducer, initial, arr) =>{
    //shared stuff
    let acc = initial;

    for(let i=0; i<arr.length; i++) {
        //unique stuff in reducer() call
        acc = reducer(acc,arr[i]);

        // more shared stuff
    }
    console.log(acc);
}

reduce((acc, curr) => acc + curr, 0, [1,2,3]);

let grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Cyrus', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Jeff', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

// this is setting a function to determine if they are male or female
let isBoy = student => student.sex ==='M';
let isGirl = student => student.sex ==='F';

// these functions filter out the grades based on the functions above, if they are male or female - then named as getBoys or getGirls
let getBoys = grades => (grades.filter(isBoy));
let getGirls = grades => (grades.filter(isGirl));

//another way - more efficient so you dont need the extra function for get boys - but they do get used later so have made them here
let males = ({sex}) => sex ==='M';
let females = ({sex}) => sex ==='F';

const getMales = students => students.filter(males);
const getFemales = students => students.gilter(females);

// this function gets the average by using reduce and then dividing by the number of grades total
let average = grades => (grades.reduce((acc,curr) => (acc + curr.grade), 0) / grades.length);

// this finds the top and the bottom grades using map and Math.max and Math.min. less sure on how this one works though?
let maxGrade = grades => (Math.max(...grades.map(student => student.grade)));
let minGrade = grades => (Math.min(...grades.map(student => student.grade)));

let classRoomAverage = average(grades);
let boysAverage = average(getBoys(grades));
let girlsAverage = average(getGirls(grades));


///// Exercise /////
// calculate:
//highest grade
let highestGrade = maxGrade(grades);

//lowest grade
let lowestGrade = minGrade(grades);

//highest grade in boys
let highestBoys = maxGrade(getBoys(grades));

// higest grade in girls
let highestGirls = maxGrade(getGirls(grades));

// lowest grade in boys
let lowestBoys = minGrade(getBoys(grades));
// lowest grade in girls
let lowestGirls = minGrade(getGirls(grades));


const average2 = students => students.map(student = student.grade).reduce(sum); 

// should practice making functions and then knocking out redundancies to get the most simple and conscise option. 
// practicing these covers higher order functions, arrows etc --> will really help. 