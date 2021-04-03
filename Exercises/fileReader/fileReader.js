var fs = require('fs');
var text = "";

function readFile(fileName)
{
    console.log("reading " +  fileName +"...");
    fs.readFile(fileName, 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(data)
        text= data;
      })
}


//readfile 1
setTimeout(function readFile()
{
    var fileName = 'file1.txt'
    console.log("reading " +  fileName +"...");
    fs.readFile(fileName, 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(data)
        text= data;
      })
},2000);

 //setTimeout()
 //wait 2 seconds
console.log("waiting 2 seconds");

//read file 2
setTimeout(function readFile()
{
    var fileName = 'file12.txt'
    console.log("reading " +  fileName +"...");
    fs.readFile(fileName, 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(data)
        text= data;
      })
},2000);

readFile('file2.txt')
//wait 2 seconds 
console.log("waiting 2 seconds");


//console log contents of both files

