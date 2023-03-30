// Currying examples

function start() {
    console.log("---------- Simple currying function ----------");
    console.log(sum(4)(2)); // x+y
    console.log(sum(2)); // function sum(y)

    console.log("---------- Timer async/sync currying ----------");
    console.log("Sync function", timer(syncFunc)(200));
    console.log("Async function");
    console.log(timer(asyncFunc)(400).then(response => console.log(response)));
}

const timer = (timerFunc) => (...args) => {
    const start = Date.now();
    const value = timerFunc(...args);
    // Caller is an async function
    if (value && typeof value.then === "function") {
        return value.then(value => ({timespan:Date.now() - start, value}))
    // caller is a sync function
    } else {
        return {timespan:Date.now() - start, value}
    }
}

const sum = x => y => x+y;

const syncFunc = x => x*2;

const asyncFunc = x => new Promise(resolve => {
    setTimeout(() => {
        console.log("Timer done");
        return resolve(x*2);
    }, 5000)
})