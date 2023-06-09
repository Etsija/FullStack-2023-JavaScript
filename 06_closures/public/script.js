window.onload = function() {
    let fontSizer = changeFontSize();
    const biggerButton = document.getElementById("bigger");
    // fontSizer.bigger is now the name of the callback function of the event,
    // so no () after the name. If () would be used, JS would _call_ the function straight away
    bigger.onclick = fontSizer.bigger;
    const smallerButton = document.getElementById("smaller");
    smaller.onclick = fontSizer.smaller;
    
}

const changeFontSize = function() {
    let fontSize = 16;
    document.body.style.fontSize = fontSize + "px";

    function changeSize(val) {
        fontSize += val;
        document.body.style.fontSize = fontSize + "px";
    }
    return {
        bigger:function() {
            changeSize(2);
        },
        smaller:function() {
            changeSize(-2);
        }
    }
}

const makeCounter = function() {
    let privateCounter = 0;

    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment:function() {
            changeBy(1);
        },
        decrement:function() {
            changeBy(-1);
        },
        value:function() {
            return privateCounter;
        }
    }
}

function start() {
    let counter1 = makeCounter();
    let counter2 = makeCounter();

    console.log("Counter 1 value", counter1.value());
    console.log("Counter 2 value", counter2.value());
    
    counter1.increment();
    counter1.increment();
    counter1.increment();
    console.log("Counter 1 value", counter1.value());
    console.log("Counter 2 value", counter2.value());
    
    counter2.decrement();
    counter2.decrement();
    counter2.decrement();
    console.log("Counter 1 value", counter1.value());
    console.log("Counter 2 value", counter2.value());
    
}