
function consonantCount (word){
    var counter = 0;
    for(i in word)
    {
        console.log(word.charCodeAt(i));
        if (word[i] == 'A'||word[i] == 'E'||word[i] == 'I'||word[i] == 'O'||word[i] == 'U' || word[i] == 'a'||word[i] == 'e'||word[i] == 'i'||word[i] == 'o'||word[i] == 'u')
        {
            //console.log("vowel");
        }
        else{
            counter ++;
            //console.log("not");
        }
    }
    return(counter);
}
console.log(consonantCount("abcdefg"));