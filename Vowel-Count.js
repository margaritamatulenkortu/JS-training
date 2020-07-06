function getCount(str) {
    var vowelsCount = 0;
    for (let i = 0; i<str.length; i++){
        if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" ||str.charAt(i) == "o" || str.charAt(i) == "u"){
            vowelsCount++;
        }
    }
    console.log(vowelsCount)
    return vowelsCount;
}
getCount("abracadabra"); //should return 5