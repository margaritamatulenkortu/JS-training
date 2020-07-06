function anagrams(word, words) {
    let result = [];
    return words.filter(function(x){
        if (x.length === word.length) {
            if (x.split("").sort().join("").toLowerCase().includes(word.split("").sort().join("").toLowerCase())) {
                result.push(x);
                console.log("true");
                return true;
            }


        }
        console.log("false");
        return false;
    });

}
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
