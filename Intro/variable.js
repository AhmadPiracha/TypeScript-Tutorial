"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello World";
console.log(greetings);
// number 
var age = 22;
age.toString();
// boolean
var isLoggedIn = true;
// array
var numbers = [1, 2, 3, 4, 5];
var names = ["Ahmad", "Ali", "Hassan"];
// tuple
var person = ["Ahmad", 22, true];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var color = Color.Red;
// any
var randomValue = 10;
randomValue = true;
