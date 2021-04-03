function encryption(word)
{
    var encryptionData = " "
       for(var i in word)
        {
        encryptionData = encryptionData  + (word.charCodeAt(i).toString(2)) + " ";
        }
    console.log(encryptionData);
    return( encryptionData);
}
function decryption (code)
{
    return String.fromCharCode(code);
}

var message = encryption('abc');
console.log(decryption(message));