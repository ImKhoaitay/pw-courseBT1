// Khai bao
function sayHelloWorld() {
    console.log("Hello world!");
}

// sayHelloWorld();

function countBeforHello(n) {
    for (let i = 0; i <= n; i++) {
        console.log(i);
    }
    sayHelloWorld();
}

countBeforHello(10);

function sum (a, b) {
    const sum = a + b;
    return sum;
}

const total = sum(5, 6);
console.log(total);
console.log(sum(5, 10));

function getMax(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

console.log(getMax(5, 10));