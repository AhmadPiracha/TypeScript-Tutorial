function addTwo (num:number):number {
    return num+2;
    // return "ahmad";
}

addTwo(6);

function getUpper(val:string ){
    return val.toUpperCase();
}


let loginUser = (name:string,email:string,isPaid:boolean=false) =>{}

loginUser("ahmad","a@a.com")
getUpper("ahmad");


// function getValue(myVal:number):boolean{
//     if(myVal>10){
//         return true;
//     }
//     return "200 OK";
// }

const getHello = (s:string):string => {
return "";
}

const heros = ["ahmad","ali","khan"];
// const heros = [1,2,3]
heros.map((hero:string) => {
    return `${hero} is a hero`
})


function consoleError(err:string):void{
    console.log(err);
}

function handleError(err:string):never{
    throw new Error(err);
}

export {}