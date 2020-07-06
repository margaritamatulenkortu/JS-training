function digPow(n, p){
    let result = 0;
    var digits = n.toString().split('');
    var realDigits = digits.map(Number)
    for (let i = 0; i < realDigits.length; i++){
        console.log (Math.pow(realDigits[i],p+i));
        result = result + Math.pow(realDigits[i],p+i);
    }
    result = result/n;

    if (Number.isInteger(result)){
        console.log("result is "+result);
        return result;}
    else {
        console.log("result is -1 ");
        return -1;}
}
digPow(89, 1); //should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1); //should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2); //should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3); //should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51