




function lonesomeInteger(ints){
    for(var i in ints)
    {
        console.log(ints[i]);
        var temp = ints[i];
        ints.splice(i,0);
        if(ints.includes(temp)){
            var index = ints.indexOf(temp);
            console.log(index);
            ints.splice(index,0);
        }
        else
        {
            return(temp);
        }

    }
}
console.log(lonesomeInteger([1,1,2,2,3]));