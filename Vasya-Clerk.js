function tickets(peopleInLine) {

    let twentyFive = 0;
    let fifty = 0;
    let hundred = 0;
    for (let i = 0; i < peopleInLine.length; i++) {
        if (peopleInLine[i] === 25) {
            twentyFive++;
        }
        if (peopleInLine[i] === 50) {
            fifty++;
            twentyFive--;
        }
        if (peopleInLine[i] === 100) {
            hundred++;
            if (fifty > 0) {
                twentyFive--;
                fifty--;
            } else if (fifty <= 0) {
                twentyFive = twentyFive - 3;
            }
        }
        if (twentyFive < 0 || fifty < 0 || hundred < 0) {
            console.log("NO");
            return "NO";
        }

    }
    if (twentyFive >= 0 && fifty >= 0 && hundred >= 0) {
        console.log("YES");
        return "YES";
    }
    else {
        console.log("NO");
        return "NO"}
}
tickets([25, 25, 50]);// => YES
tickets([25, 100]); // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]); // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)