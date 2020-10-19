// 1. whole-script strict mode syntax
// JavaScropt is very flexible
// flexible === dangerous
// added ECMAScript 5

'use strict';
console.log('Hello World!');

// 2. variable r&w okay!
// let (added in ES6)
// var hoisting (move declaration from bottom to top)
// 3. constant read only!
//   - favor immutable data type always for a few reasons:
//     - security
//     - thread safety
//     - reduce human mistakes
let globalname = 'global name'
const nickname = 'milo';
console.log(nickname);

{
    let name = 'hgkim';
    console.log(name);
    name = 'hg';
    console.log(name);
}

// 4. variable types
// primitive, single item: number, string, boolean, null ....
// object, box container
// function, first-class function

const count = 17;
const size = 10.1;

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;

console.log(infinity)
console.log(negativeInfinity)
console.log(nAn)

//boolean
// false: 0, null, undefined, NaN ...
// true: any other value

//null
let nothing = null;
//undefined
let x;

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(symbol1 === symbol2)

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');

console.log(gSymbol1 === gSymbol2);
console.log(`value: ${gSymbol1.description}, type: ${typeof gSymbol1}`)

//object, real-life object, data structure
const Milo = {name: 'Milo', age: 20};
Milo.age = 25;
console.log(Milo)

//5. Dynamic typing: dynamically typed language

let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`)
text = 1;
console.log(`value: ${text}, type: ${typeof text}`)
text = '7' +5;
console.log(`value: ${text}, type: ${typeof text}`)
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`)
console.log(text.charAt(0));