// function accum(s) {
//     let result = [];
//     for (let i = 0; i < s.length; i++) {
//         result.push(format(s[i], i + 1));
//     }
//     console.log(result.join('-'));
//     return result.join('-');
// }
// function format(s, num){
//        let letters = s.toUpperCase();
//          while (letters.length !== num){
//             letters += s.toLowerCase();
//          }
//          console.log(letters);
//     return letters
// }
// shorter version
function accum(s) {
    console.log(s.split('').map((x,index) => (
        x.toUpperCase() + x.toLowerCase().repeat(index)
    )).join('-'));
}
accum("ZpglnRxqenU");