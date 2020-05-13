const reverseString = require("./reversestring");
test ("testing if function is exist", () => {
  expect(reverseString).toBeDefined();
});
 test ("testing if function is reversing strings", () =>{
   expect(reverseString("hello")).toEqual("olleh");
 });
test ("testing if function is reversing strings", () =>{
  expect(reverseString("Hello")).toEqual("olleh");
});
