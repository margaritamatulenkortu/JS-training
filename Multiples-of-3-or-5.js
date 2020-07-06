function solution(number){
    var sum = 0;
    for (let i=0; i < number; i++){
        if  (Number.isInteger(i/3) || Number.isInteger(i/5)) {
            sum += i;
            console.log(sum);
        }
    }
    console.log(sum);
    return sum;
}
solution(10);
//expected 23
/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.*/
