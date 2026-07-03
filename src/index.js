// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------
// import node modules
import express from "express";
import fs from "fs/promises";

// app instance of express
const app = express();

// port
const port = 3000;

// middleware for using JSON
app.use(express.json());

// start server!
app.listen(port, () => {
  console.log(`it's going on port: ${port}`);
});
// ---------------------------------
// Helper Functions
// ---------------------------------
// 1. getAllBooks()
async function getAllBooks() {
  const data = await fs.readFile("books-data.json", "utf8");
  const parsedData = JSON.parse(data);
  return parsedData;
}

// 2. getOneBook(index)
async function getOneBook(index) {
  const data = await fs.readFile("books-data.json", "utf8");
  const parsedData = JSON.parse(data);
  const book = parsedData[index];
  return book;
}

// 3. getOneBookTitle(index)

async function getOneBookTitle(index) {
  const data = await fs.readFile("books-data.json", "utf8");
  const parsedData = JSON.parse(data);
  const title = parsedData[index].title;
  return title;
}
// ---------------------------------
// Our very first API Endpoints
// ---------------------------------
// 1. GET /get-all-books
app.get("/get-all-books", async (req, res) => {
  // call the helper function, store in variable
  const books = await getAllBooks();
  // send json data back as a response
  res.json(books);
});

// 2. GET /get-one-book/:index
app.get("/get-one-book/:index", async (req, res) => {
  // store the index into a variable
  const bookIndex = Number(req.params.index);
  // call the helper function, store in variable
  const book = await getOneBook(bookIndex);
  // send json data back as a response
  res.json(book);
});

// 3. GET /get-one-book-title/:index — try writing this one yourself!

app.get("/get-one-book-title/:index", async (req, res) => {
  // store the index into a variable
  const bookIndex = Number(req.params.index);
  // call the helper function, store in variable
  const title = await getOneBookTitle(bookIndex);
  // send json data back as a response
  res.json(title);
});


// --------------------------------
// 🚀 LEVEL 1 CHALLENGES 
// --------------------------------


// 1. 🏆 Add a /goodbye endpoint that responds with "Goodbye, see you later!"
  app.get("/goodbye", (req, res) => {
    res.send("Goodbye, see you later!");
  });

// 2. 🏆 Add a /happy-birthday endpoint that responds with "Happy birthday!!!"
  app.get("/happy-birthday", (req, res) => {
    res.send("Happy birthday!!!");
});


// --------------------------------
// 🚀 LEVEL 2 CHALLENGES — ADDING DYNAMIC PARAMETERS
// --------------------------------


// 1. 🏆 Add a /happy-birthday/:name endpoint says "Happy birthday, [name]!!!"
app.get("/happy-birthday/:name", (req, res) => {
    //this stores the name into a variable
    const name = req.params.name;
    //this sends the response
    res.send(`Happy birthday, ${name}!!!`);
});
// 2. 🏆 Add a /say-hello/:name/:language endpoint that says hello in multiple languages. Examples:
app.get("/say-hello/:name/:language", (req, res) => {
    //stores parameters into variables 
    const nameNativeLang = req.params.name;
    const language = req.params.language;


//      - If language = "English", respond with "Hello, [name]!"
 if (language === "English") {
 res.send(`Hello, ${nameNativeLang}!`);
//      - If language = "Spanish", respond with "Hola, [name]!"
 } else if (language === "Spanish") {
 res.send(`Hola, ${nameNativeLang}!`);
//      - If language = "Vietnamese", respond with "Xin chao, [name]!"
 } else if (language === "Vietnamese") {
 res.send(`Xin chao, ${nameNativeLang}!`);
//      - If language = "Turkish", respond with "Merhaba, [name]!"
} else if (language === "Turkish") {
 res.send(`Merhaba, ${nameNativeLang}!`);
//      - Add as many languages as you want! Russian
} else if (language === "Russian") {
 res.send(`Zdravstvuite, ${nameNativeLang}!`);
//      - Otherwise, respond with "Language not supported." 
 } else {
    res.send("Language not supported.");
}
});


// --------------------------------
// 🚀 LEVEL 3 CHALLENGES — EVEN MORE DYNAMIC PARAMETERS
// --------------------------------

// 1. 🏆 Add a /calculate-dog-years/:dogName/:humanYears endpoint that calculates a dog's age in dog years. Refer to your dogAgeCalculator.js file. 

// 2. 🏆 Add a /calculate-tip/:bill/:tipPercentage/:numGuests endpoint that calculates the amount each guests owes. Refer to your tipCalculator.js file. 

// --------------------------------
// LEVEL 4 CHALLENGES — USING THE FILE SYSTEM MODULE
// --------------------------------

// 1. 🏆 Add a /get-birthstone/:month endpoint that tells the user the birthstone for the inputted month using the fs module. Use the birthstones-data.json file in this folder.

// 2. 🏆 Add a /get-all-pizza-orders endpoint that responds with the array of pizza orders. Use the pizza-orders-data.json file in this folder.

// 3. 🏆 Add a /get-one-pizza-order/:index endpoint that responds with the specified pizza order. 

// --------------------------------
// 🚀 LEVEL 5 CHALLENGES — USING THIRD-PARTY MODULES
// --------------------------------

// 1. 🏆 Add a /is-leap-year/:year endpoint that responds with whether the specified year is a leap year. Use the moment third-party node module and refer to your leap-year.js file.

// 2. 🏆 Add a /get-signs/:month/:day/:year endpoint that responds with the user's astrological and zodiac signs based on their inputted birthday. Use the horoscope third-party node module and refer to your sign-finder.js file.

