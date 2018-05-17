var reverseWord=function (str) {
    var words=str.split(" ").reverse();
    var string="";
    for (word in words)
        string +=(word>0?" ":"")+words[word];
    console.log(string);
}
reverseWord("my name is nitish");
