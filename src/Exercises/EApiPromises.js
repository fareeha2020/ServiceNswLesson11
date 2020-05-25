// APIs and Promises
// Make a postman call that uses the 5-day forecast from OWM (hint: use the documentation here - https://openweathermap.org/forecast5)
// Create a function that takes an argument that is a string representing a City and returns the OWN forecast5 result for that city.
// Make a console app that asks the user to enter a city and returns the 5 day forecast for that city. Make sure the temperature is in degrees celsius (Hint: don't log everything, try to keep it to the most relevant data).
const readline = require('readline');
const axios=require("axios");
const {myKey}=require("../Exercises/Key");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
  function cityInput(stg){
      let response=await axios.get(`https://samples.openweathermap.org/data/2.5/forecast?id=${stg}&appid=${myKey}`);
       //let response= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${stg}&APPID=${weatherApiKey}`);
   return response.data;
  }
   console.log(cityInput("sydney"));
}

Program().then(() => {
    process.exit(0);
});