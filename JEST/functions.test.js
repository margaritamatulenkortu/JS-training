const functions = require('./functions');
// the same as debugging vai zalais trijsturis
/*beforeEach(()=> initDatabase());
afterEach(()=>closeDatabase());
beforeAll(()=> initDatabase());
afterAll(()=>closeDatabase());
const initDatabase = () => console.log("Database Initalaized");
const closeDatabase = () => console.log("Database closed");
const nameCheck = () => console.log("Checking name...");
describe("Checking names",()=>{
    beforeEach(() => nameCheck());
    test ("user is Jeff",() =>{
        const user = "Jeff";
        expect(user).toBe("Jeff");
    });
    test ("user is Jeff",() =>{
        const user = "Keit";
        expect(user).toBe("Keit");
    });
});*/

test('Adds 2+2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});
test('Adds 2+2 to not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});
test('should be 0', () => {
    expect(functions.isNull()).toBeNull();
});
test('should be falsy ', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

test('User should be margarita matulenko object', () => {
    expect(functions.createUser()).toEqual({firstName: "Margarita", lastName: "Matulenko"});
});

test("should be under 1600", () => {
    const load1 = 800;
    const load2 = 600;
    expect(load1 + load2).toBeLessThan(1600);
});
test("there should not be I in theam", () => {
    expect("team").not.toMatch(/i/);
});
test ("admin should not be usernames",()=>{
  userNames = ["Margarita", "Arturs", "Mara", "Ilijs"];
  expect(userNames).not.toContain('admin');
});

//promisee!!
test ("user test name should be Leanne Graham", () => {
    expect.assertions(1);
    return functions.fetchUser().then(data =>{
        expect(data.username).toEqual("Bret1")
    })

});



//Promise
test ("user test name should be Leanne Graham and username", () => {
    expect.assertions(2);
    return functions.fetchUser().then(data =>{
        expect(data.username).toEqual("Bret");
        expect(data.name).toEqual("Leanne Graham");
    })


});
//async await
test ("user test username should be Bret", async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
        expect(data.username).toEqual("Bret");

});
