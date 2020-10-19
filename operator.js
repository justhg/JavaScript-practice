//  1. string concatenation

console.log('my' + 'cat');
console.log(1 + '2');
console.log(`String literals: 1 + 2 = ${1+2}`);

console.log('milo\'s note.')

//  2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //sutstract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

//  3. Increment and decrement operators  == same as C.
let counter = 2;
const preIncrement = ++counter;  
console.log(preIncrement);  // = 3
console.log(counter);       // = 3
const postIncrement = counter++;
console.log(postIncrement); // = 3
console.log(counter);       // = 4

//  4. Assignment operators  == same as C.
let x = 3;
let y = 6;
x+=y;
x-=y;
x*=y;
x/=y;

//  5.comparison operators 
//  same as C.

//  6. Logical operators
// ||(or)  &&(and)  !(not)        ==same as C.

const value1 = true;
const value2 = 4 < 2;

console.log(`or: ${ value1|| value2 ||check() }`);  //or 연산자는 true값이 나오는 순간 연산을 중지한다.
                                                    // 따라서 가벼운것을 앞에서부터 넣어라.
function check(){
    for (let i=0; i<10; i++){
        //wasting time
        console.log('TIMEWASTE');
    }
}

//반대로 and 연산자는 false 가 나오는 순간 연산을 중지.

// 자주 사용(혹시 null 값이나 확인할떄.)
//if (nullableobject != null){
//    nullableobject.something;
//}


//  7. Equality
const stringFive = '5';
const numberFive = 5;

// == lose Equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict Equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const Milo1 = {name: 'Milo'};
const Milo2 = {name: 'Milo'};
const Milo3 = Milo1;

console.log(Milo1 == Milo2)
console.log(Milo1 === Milo2)
console.log(Milo1 === Milo3)


//equality example
console.log('===ex===')
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined );
console.log(null === undefined );

////4-14:00////