"use strict";

function printHello() {
  console.log("Hello !");
}
printHello();

function log(message) {
  console.log(message);
}

log("hello");
log(1234);

function changeName(obj) {
  obj.name = "coder";
}

const Milo = { name: "Milo", age: 25 };
changeName(Milo);
log(Milo.name);

// default parameters (added in ES6)

function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}

showMessage("hello! ");

// rest parameters (added in ES6)

function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }
  args.forEach((arg) => console.log(arg));
}

printAll("1", "2", "3");

// early return, early exit

//bad
function upgradeUsers(user){
  if(user.point >= 10){
    //long upgrade logic....
  }
}
//good
function UpgradeUsers(user){
  if(user.point <10){
    return;
  }
  //long upgrade logic...
}

//callback function

function randomQuiz(answer, printYes, printNo){
  if (answer === 'love you'){
    printYes();
  }
  else{
    printNo();
  }
}

//arrow function
const simplePrint = function () {
  console.log('Simple Print!!');
};

const SimplePrint = () => console.log('simple print!!'); 
const add = (a, b) =>  a+b;

//IIFE Immediately Invoked Function Expression
(function IIFE(){
  console.log('IIFE');
})();