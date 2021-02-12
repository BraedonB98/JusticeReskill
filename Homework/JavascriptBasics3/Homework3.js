function adder(numbers){
    var sum = 0;
    for(var i = 0; i<numbers.length; i++)
    {
        sum += numbers[i];
    }
    return(sum);
}

function reverse(array1)
{
    var array2 = [];
    for(var i = 0; i<array1.length; i++)
    {
        array2.push(array1[array1.length-(i+1)]);
    }
    return(array2);
}

function FizzBuzz()
{
    for(var i = 1; i<=100; i++)
    {
        var stng = "";
        if(i%3==0)
        {
            stng = stng +"Fizz";
        }
        if(i%5==0)
        {
            stng = stng +"Buzz";
        }
        if(stng =="")
        {
            stng = i;
        }
        console.log(stng);
    }
}

function pyramidScheme(height)
{
    for(var i = 1; i<=height ; i++)
    {
        var stng = "";
        for(var j = 1 ; j<=i; j++)
        {
            stng = stng + "*";
        }
        console.log(stng);
    }
}




console.log(adder([10,20,30,40,50]));
console.log(reverse([0,1,2,3,4,5,6,7,8,9,10]));
FizzBuzz();
pyramidScheme(5);