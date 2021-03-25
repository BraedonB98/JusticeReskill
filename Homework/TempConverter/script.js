console.log("hello world");

function submitButtonPress(){
    console.log("I have been submitted");
    //Get value from form
    var tempForm = document.getElementById('tempInput');
    var unit = document.getElementById('unitSelect');
    
    //Run Convert Temp Function
    //Edit on screen text to convert temp function value
    changeDisplayText(tempConvert(unit.value,tempForm.value));
    //Run TempCheckCSSChange Function
    event.preventDefault();
}

function clearButtonPress(){
    changeDisplayText(0);

}

function tempConvert(unit , value)
{
    if(unit == "C")
    {
        console.log((value*(9/5))+32);
        return((value*(9/5))+32);
    }
    else if(unit == "F")
    {
        console.log((value-32)*(5/9));
        return((value-32)*(5/9));
    }
}

function changeDisplayText(newVal)
{
    var newTemp = document.getElementById('newTemp');
    newTemp.innerHTML = newVal;
    event.preventDefault();
}

tempConvert("C",100);

tempConvert("F",32);