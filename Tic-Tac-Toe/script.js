//tic tac toe game and calculating winner
//0 is open , 1 is X, 2 is O


//table[row,colum]
var table = [
[0,0,0],
[0,0,0],
[0,0,0]];


function calcWinner()
{
    //diagnal top left
    if(table[0][0]==table[1][1]&&table[0][0]==table[2][2])
    {
        return(table[0][0]);
    }
    //diagnal top right
    if(table[0][2]==table[1][1]&&table[0][2]==table[2][0])
    {
        return(table[0][2]);
    }
    //top row across
    if(table[0][0]==table[0][1]&&table[0][0]==table[0][2])
    {
        return(table[0][0]);
    }
    //middle row across
    if(table[1][0]==table[1][1]&&table[1][0]==table[1][2])
    {
        return(table[1][0]);
    }
    //bottom row across
    if(table[2][0]==table[2][1]&&table[2][0]==table[2][2])
    {
        return(table[2][0]);
    }
    //left row down
    if(table[0][0]==table[1][0]&&table[1][0]==table[2][0])
    {
        return(table[2][0]);
    }
    //middle row down
    if(table[0][1]==table[1][1]&&table[1][1]==table[2][1])
    {
       return(table[2][1]);
    }
    //right row down
    if(table[0][2]==table[1][2]&&table[1][2]==table[2][2])
    {
      return(table[2][2]);
    }
    
    return(0);


}

function resetGame()
{
        table = [
        [0,0,0],
        [0,0,0],
        [0,0,0]];
    //change display to all empty
}



function runCalcWinner()
{
    flag = 0;
    table = [
        [1,0,0],
        [0,1,0],
        [0,0,1]];
    if(!calcWinner()==1)
    {
        console.log("diagnal top right works for X");
    }
    //continue this with each test case with both X and O
}
