'use strict';

// object literals
// {key: values}
function hello() {
    console.log('Hello!');
}

// This is how you make an object in JS. 
const me = {
    name: 'Katie',
    age: 34,
    job: 'Software Engineer',
    sayHello: hello
}

// accessing them
console.log(me);
console.log(me.name);
console.log(me.age);

//setting them
me.name = 'Katie Diggory';
console.log(me.name);

// if you set something that doesnt exist it creates it
me.faveFood = 'Mexican';
console.log(me.faveFood);

// can also give them behaviours
me.sayHello();

// it can also be called like this
me["name"];
