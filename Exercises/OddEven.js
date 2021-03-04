function oddEven(array)
{
    for(var i = 0; i<array.length; i++)
    {
        if(array[i]%2 == 0)
        {
            console.log("even");
        }
        else
        {
            console.log("odd");
        }
    }
}

var arrays = [ 1,2,3,4,5,6,7,8,9,11];
oddEven(arrays);

