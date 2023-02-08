import MySingleton from './singleton_pat1.js';
import MyBadSingleton from './singleton_patBAD.js';

const singleA = new MySingleton();
const singleB = new MySingleton();

console.log(singleA.getRandomNumber() === singleB.getRandomNumber()); // true

const badSingleA = new MyBadSingleton();
const badSingleB = new MyBadSingleton();

console.log(
	badSingleA.getRandomNumber() === badSingleB.getRandomNumber() // false
);

singleA.publicMethod();
console.log(singleA.privateVariable); // undefined
console.log(singleA.randomNumber); // undefined
console.log(singleA.privateMethod()); // not a function
console.log(singleA.privateMethod); // undefined

/* 
example from chatGPT of a singleton class that can be extended. it essentially adds methods to the singleton class.

class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }

  method1() {
    console.log("Singleton Method 1");
  }
}

class ChildSingleton extends Singleton {
  method2() {
    console.log("Child Singleton Method 2");
  }
}

const singleton = new Singleton();
const childSingleton = new ChildSingleton();

console.log(singleton === childSingleton); // true */
