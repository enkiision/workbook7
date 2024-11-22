"use strict";

// need a dropdown list containing cities for weather info

let cities = [
  {
    city: "Brooklyn, NY",
    latitude: 40.6782, //° N
    longitude: 73.9442, //° W
    direction: "North East",
  },
  {
    city: "Philadelphia, PA",
    latitude: 39.9526, //° N
    longitude: 75.1652, //° W
    direction: "North East",
  },
  {
    city: "Acadia, MA",
    latitude: 44.3386, //° N
    longitude: 68.2733, //° W
    direction: "North East",
  },
  {
    city: "Atlanta, GA",
    latitude: 33.7501, //° N
    longitude: 84.3885, //° W
    direction: "South East",
  },
  {
    city: "Las Vegas, NE",
    latitude: 36.1716, //° N
    longitude: 115.1391, //° W
    direction: "South West",
  },
];

let weatherTbody = document.querySelector("#weatherTbody");

const weatherDropdown = document.querySelector("#weatherDropdown");

for (const weather of cities) {
  let option = document.createElement("option");
  option.value = weather.city;
  option.innerText = weather.city;
  weatherDropdown.appendChild(option);
}

function filterByWeather() {
  let selectedTaskCity = weatherDropdown.value;

  // ***********This is not working, ask chat gpt what Im missing

  let filteredWeathersArray = weathersArray.filter((weather) => weather.city == selectedTaskCity);
  weatherTbody.innerHTML = "";

  for (const weather of filteredWeathersArray) {
    let tr = weatherTbody.insertRow();

    let td1 = tr.insertCell();
    td1.innerText = weather.city;

    let td2 = tr.insertCell();
    td2.innerText = weather.coordinates;

    let td3 = tr.insertCell();
    td3.innerText = weather.direction;

    let td4 = tr.insertCell();

    td4.innerText = todo.cost;
  }
}
// ********************************************************************

// I believe this needs to be used not using a url, user and User need to be changed to fit weather and maybe temperature?

// const urlParams = new URLSearchParams(location.search);

// let userId = urlParams.get("userId");

// async function getUser() {
//   let promise = fetch("https://jsonplaceholder.typicode.com/users/" + );
//   let response = await promise;
//   let user = await response.json();
//   console.log(user);
// }

// getUser();
// ************************************************************************
