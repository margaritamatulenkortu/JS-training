const student = {
    name: "Margarita",
    age: 23,
    isAtcive: true
};

// convert this object into a string to be stored in local storage
const studentObjectToString = JSON.stringify(student);
console.log(typeof studentObjectToString);
/*
localStorage.setItem("student", studentObjectToString);
*/
const toJSONstudent = JSON.parse(studentObjectToString);
console.log(typeof toJSONstudent);
console.log(toJSONstudent.isAtcive)