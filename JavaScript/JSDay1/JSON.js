// JavaScript Object Notation
// notation for objects in JS.
// Used for communicating with things outside of JS. 
// If you want to send data from Java to other program - it will be converted to a JSON string.

const me = {
    name: 'Katie',
    age: 34
}

console.log(JSON.stringify(me)); // this converts to a string
const meAsJSON = JSON.stringify(me);

console.log(JSON.parse(meAsJSON)); // this converts back to JSON

// before JSON, XML was used. 
// Not as simple as JSON
{/* <MeAsXML>
    <name>Katie</name>
    <age>34</age>
</MeAsXML> */}

// why did they use xml? because JSON is quite new compared to JS.
// came in a later update