
// let a = fetch("https://api.weatherapi.com/v1/current.json?key=84532b2b0e0d4dfea3c104832240604&q=mumbai")


// a.then((responce) => {

//   console.log(responce.status)

//   return responce.json()

// }).then((value) => {
//   console.log(value.current.condition.text)
// });

// Partly cloudy,Mist,Sunny,Clear,Patchy rain nearby,



const Api = "https://api.weatherapi.com/v1/current.json?key=84532b2b0e0d4dfea3c104832240604&q="

let Search = document.querySelector(".s_input")
let btn = document.querySelector(".search button")
const Icon = document.querySelector(".weather-icon")

async function weather(Search) {


  const responce = await fetch(Api + Search)

  if (!responce.ok) {

    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none"
  }


  let data = await responce.json()



  if (data.current.condition.text == "Partly cloudy")
    Icon.src = "images/clouds.png";

  else if (data.current.condition.text == "Clear")
    Icon.src = "images/clear.png";

  else if (data.current.condition.text == "Mist")
    Icon.src = "images/mist.png";

  else if (data.current.condition.text == "Sunny")
    Icon.src = "images/clear.png";

  else if (data.current.condition.text == "Patchy rain nearby")
    Icon.src = "images/rain.png";


  // document.querySelector(".weather").style.display = "block"


  document.querySelector(".temp").innerHTML =
    Math.floor(data.current.temp_c) + "°C"

  document.querySelector(".city").innerHTML =
    data.location.name

  document.querySelector(".humidity").innerHTML =
    data.current.humidity + "%"

  document.querySelector(".Winds").innerHTML =
    data.current.wind_kph + " Km/h"


  document.querySelector(".error").style.display = "none";
  document.querySelector(".weather").style.display = "block"


}

btn.addEventListener("click", () => {

  weather(Search.value)
  Search.value = " "

});




















