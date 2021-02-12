var grade = 100;
if(grade>=90){
    console.log("A");
}
else if(grade>=80){
    console.log("B");
}
else if(grade>=70){
    console.log("B");
}
else if(grade>=60){
    console.log("D");
}
else{
    console.log("F");
}


function gradeAssesment(gradeVal)
{
    var oneDigit = '' + gradeVal;
    oneDigit = oneDigit[oneDigit.length-1];
    if (gradeVal = 100)
    {
        return("A+");
    }
    if(oneDigit < 2)
    {
        oneDigit = "-";
    }
    else if(oneDigit < 6)
    {
        oneDigit = "";
    }
    else
    {
        oneDigit = "+";
    }

    if(grade>=90){
        return("A"+oneDigit);
    }
    else if(grade>=80){
        return("B"+oneDigit);
    }
    else if(grade>=70){
        return("C"+oneDigit);
    }
    else if(grade>=60){
        return("D"+oneDigit);
    }
    else{
        return("F"+oneDigit);
    }
}

console.log(gradeAssesment(grade));