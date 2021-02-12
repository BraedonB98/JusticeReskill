function tipCalc(meal,tip)
{
    tipPer=(tip/meal)*100;
    if(tipPer<5)
    {
        return ("You are an awful tipper");
    }
    else if(tipPer<10)
    {
        return ("You are an ok tipper!");
    }
    else if(tipPer<20)
    {
        return ("You are a good tipper!");
    }
    else {
        return ("You are a great tipper!");
    }
}

for(var i = 0; i<5;i++){
    console.log("test");
} 
console.log(tipCalc(10,0.9));


