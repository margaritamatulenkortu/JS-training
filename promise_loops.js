console.log("synhrom 1");
setTimeout(_=> console.log("timeout 2"),0);
Promise.resolve().then(_=>console.log("Promise 3"));
console.log("synhrom 4");
// Basic
 const getFruit = async name => {
    const fruits = {
        pineapple: '🍍',
        peach: '🍑',
        strawberry: '🍓'
    };

    return fruits[name];
};

getFruit('peach').then(console.log);

// Async + Await

 const makeSmoothie = async () => {
    const a = await getFruit('pineapple');
    const b = await getFruit('strawberry');

    return [a, b];
};

const makeSmoothie2 = () => {
    let a;
    return getFruit('pineapple')
        .then(v => {
            a = v;
            return getFruit('strawberry');
        })
        .then(v => [a, v]);
};