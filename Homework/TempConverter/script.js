var tempC = 0;
var tempF = 0;


function submitButtonPress(){
    console.log("I have been submitted");
    //Get value from form
    var tempForm = document.getElementById('tempInput');
    var unitF = document.getElementById('unitSelectF');
    var unitC = document.getElementById('unitSelectC')
    var unit = "C";
    console.log(unitF.checked);
    console.log(unitC.checked);
    if(unitF.checked)
    {
        console.log("on line 16 " + unitF);
        unit = "F";
    }

    
    //Run Convert Temp Function
    //Edit on screen text to convert temp function value
    console.log(unit);
    changeDisplayText(tempConvert(unit,tempForm.value));
    changeStyle();
    //Run TempCheckCSSChange Function
    event.preventDefault();
}

function clearButtonPress(){
    changeDisplayText(0);

}

function changeStyle()
{
    var text = document.getElementById('newTemp');
    if(tempC<=0)
    {
        text.style.color="blue";
    }
    else if(tempC>=100)
    {
        text.style.color="red";
    }
    else
    {
        text.style.color="black";
    }
}


function tempConvert(unit , value)
{
    if(unit == "C")
    {
        tempC= value;
        tempF = (value*(9/5))+32
        console.log((value*(9/5))+32);
        return((value*(9/5))+32);

    }
    else if(unit == "F")
    {
        tempF= value;
        tempC = ((value-32)*(5/9));
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
