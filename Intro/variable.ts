let greetings:string="Hello World"

console.log(greetings)


// number 

let age:number=22

age.toString()

// boolean

let isLoggedIn:boolean=true
// array

let numbers:number[]=[1,2,3,4,5]

let names:Array<string>=["Ahmad","Ali","Hassan"]

// tuple

let person:[string,number,boolean]=["Ahmad",22,true]

// enum

enum Color{

    Red=1,
    Green=2,
    Blue=3
}

let color:Color=Color.Red

// any

let randomValue;

function randomFunction(){

    return "Hello"
}

randomValue=randomFunction()


export {}