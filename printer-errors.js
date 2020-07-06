function printerError(s) {
    let bad = 0;
    let good = 0;
    let total= 0;
    let result = "";
    for (let i = 0; i < s.length; i++) {
        if (!/[^a-m]/.test(s.charAt(i))) {
            good++;
        } else {
            bad++
        }
    }
    total= good + bad;
    result = bad.toString()+"/"+total.toString();
    console.log(result);
    return(result);
}
printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz");