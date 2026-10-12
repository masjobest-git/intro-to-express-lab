const express = require('express')
const morgan = require('morgan');
const app = express ()
const port = '3000'

app.use(morgan('dev'));

app.get("/", (req, res)  => {
    res.send("<h1>Hello this is the homepage</h1>")
});

// TASK 1

app.get('/greetings/:username', (req, res)  => {
    const username = req.params.username
    console.log(username)
    res.send(`Hello there, ${username}`)
});


// TASK 2

app.get("/roll/:number", (req, res) => {
    const number = req.params.number;

    if (isNaN(number)) {
        res.send("You must specify a number.");
    } else {
        res.send("You rolled a " + number);
    }
});

// TASK 3
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

    app.get("/collectibles/:index", (req, res) => {
    const index = req.params.index;

    if (collectibles[index]=== undefined) {
        res.send("This item is not yet in stock. Check back soon!");
    } else {
        res.send("So, you want the " + collectibles[index].name +
        "? For " + collectibles[index].price + ", it can be yours!");
    }
    })
    

// TASK 4

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


app.listen(3000, () => {
    console.log("Server running on port 3000");
    });
