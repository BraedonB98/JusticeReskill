//Arithmetic Operations
function add(p1, p2){
    if(Number.isInteger(p1)&& Number.isInteger(p2)){
        console.log(p1+p2);
        return(p1+p2);
    }
    return("issue with statement");
}
function subtract(p1, p2){
    if(Number.isInteger(p1)&& Number.isInteger(p2)){
        console.log(p1-p2);
        return(p1-p2);
    }
    return("issue with statement");
}
function divide(p1, p2){
    if(Number.isInteger(p1)&& Number.isInteger(p2)){
        console.log(p1/p2);
        return(p1/p2);
    }
    return("issue with statement");
}
function multiply(p1, p2){
    if(Number.isInteger(p1)&& Number.isInteger(p2)){
        console.log(p1*p2);
        return(p1*p2);
    }
    return("issue with statement");
}
function concat(phrase1,phrase2){
    console.log (phrase1 + " " + phrase2);
    return (phrase1 + " " + phrase2);
}
var a = 4;
var b = 2;
add(a,b);
subtract(a,b);
divide(a,b);
multiply(a,b);

//String Concatenation
var h = "Hello";
var w = "World";
var hw = concat(h,w);

//Favorite food Concatenation
var phrase = "My favorite food is";
var food = "noodles";
var tot = concat(phrase,food);
