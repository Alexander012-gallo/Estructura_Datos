/**
 * 
 * 2.1.11 SECTION PRACTICE
 * 
 * Question 1: Write a code that will create variables and initialize them with values of Boolean, Number, 
 * BigInt, String, and undefined types using (when possible) literals and constructor functions.
 */

let b1 = true;
let b2 = Boolean(true);

let n1 = 100;
let n2 = Number(100);

let bi1 = 200n;
let bi2 = BigInt(200)

let str = "Alexander";
let str2 = String("Alexander");

let u = undefined;

/**
 * Question 2: Print all values and all types of those values using console.log. 
 * Try to use string interpolation to display the value and type at the same time 
 * with a single console.log call, e.g. in the following form: 1000 [number].
 */

console.log(`${b1} [${typeof b1}]`); // -> true [boolean]
console.log(`${b2} [${typeof b2}]`); // -> true [boolean]
console.log(`${n1} [${typeof n1}]`); // -> 100 [number]
console.log(`${n2} [${typeof n2}]`); // -> 100 [number]
console.log(`${bi1} [${typeof bi1}]`); // -> 200 [bigint]
console.log(`${bi2} [${typeof bi2}]`); // -> 200 [bigint]
console.log(`${str} [${typeof str}]`); // -> Alexander [string]
console.log(`${str2} [${typeof str2}]`); // -> Alexander [string]
console.log(`${u} [${typeof u}]`); // -> undefined [undefined]
console.log("--------------------");

/**
 * Question 3: Carry out a chain of conversions: create a Boolean from a BigInt created 
 * from a Number that was created from a String. Start with the value "1234". Is it possible?
 */

let b3 = Boolean(BigInt(Number(String("1234"))));
console.log(`${b3} [${typeof b3}]`); // -> true [boolean]
console.log("--------------------");

/**
 * Question 4:Try adding two values of the same type and check the result type.
 * Try it for all primitive types.
 */

let b = true + false;
let n = 100 + 100;
let bi = 25n + 30n;
let str4 = "Hola" + "José"
let u2 = undefined + undefined

console.log(b); // -> 1
console.log(n); // -> 200
console.log(bi) // -> 55n
console.log(str4) // -> HolaJosé
console.log(u2) // -> NaN
console.log("-")

console.log(`${b} [${typeof b}]`) // -> 1 [number]
console.log(`${n} [${typeof n}]`) // -> 200 [number]
console.log(`${bi} [${typeof bi}]`) // -> 55 [bigint]
console.log(`${str4} [${typeof str4}]`) // -> HolaJosé [string]
console.log(`${u2} [${typeof u2}]`) // -> NaN [number]
console.log("-------------------")

/**
 * Question 5:  Try adding two values of different types and check the results.
 */

let b4 = true + 100;
//let b5 = true + 100n;  -> ERROR
let b6 = true + "100";   
//let n3 = 100 + 200n;   -> ERROR
let n4 = 100 + true;
let n5 = 100 + 200;
//let bi3 = 100n + 200;  -> ERROR
//let bi4 = 100n + true; -> ERROR
let bi5 = 100n + "200";
let s1 = "100" + 200;
let s2 = "100" + 200n;
let s3 = "100" + true;
let s4 = "abc" + 200;
let s5 = "abc" + 200n;
let s6 = "abc" + true;

console.log(`${b4} [${typeof b4}]`) // -> 101 [number]
//console.log(`${b5} [${typeof b5}]`)
console.log(`${b6} [${typeof b6}]`) // -> true100 [string]
//console.log(`${n3} [${typeof n3}]`)
console.log(`${n4} [${typeof n4}]`) // -> 101 [number]
console.log(`${n5} [${typeof n5}]`)
//console.log(`${bi3} [${typeof bi3}]`)
//console.log(`${bi4} [${typeof bi4}]`)
console.log(`${bi5} [${typeof bi5}]`) // -> 100200 [string]
console.log(`${s1} [${typeof s1}]`) // -> 100200 [string]
console.log(`${s2} [${typeof s2}]`) // -> 100200 [string]
console.log(`${s3} [${typeof s3}]`) // -> 100true [string]
console.log(`${s4} [${typeof s4}]`) // -> abc200 [string]
console.log(`${s4} [${typeof s5}]`) // -> abc200 [string]
console.log(`${s6} [${typeof s6}]`) // -> abctrue [string]

/**
 * Question 6: Try to modify the line const str1 = 42 + "1"; to get the result 43 (without removing the quotes around 1).
 */

const str1 = 42 + Number(String("1"));
console.log(str1); // -> 43
console.log(`${str1} [${typeof str1}]`); // -> 43 [number]