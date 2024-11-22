"use strict";

//table for users
let usersTBody = document.querySelector("#usersTBody");
console.log(usersTBody);

async function getUsers() {
  // by using getUsers over get Data bcuz its more readable and concise.
  let promise = fetch("https://jsonplaceholder.typicode.com/users");
  let response = await promise;
  let users = await response.json();
  console.log(users);
  displayUsers(users);
}

function buildTableRow(user) {
  let tr = usersTBody.insertRow();

  let td1 = tr.insertCell();
  td1.innerText = user.name;

  let td2 = tr.insertCell();
  td2.innerText = user.username;

  let td3 = tr.insertCell();
  let addressLine1 = `${user.address.street} ${user.address.suite}`;
  let addressLine2 = `${user.address.city}, ${user.address.zipcode}`;
  let textNode1 = document.createTextNode(addressLine1);
  let br = document.createElement("br");
  let textNode2 = document.createTextNode(addressLine2);
  td3.append(textNode1, br, textNode2);

  // REVIEW Text Nodes

  let td4 = tr.insertCell();
  td4.innerText = user.phone;

  let td5 = tr.insertCell();
  td5.innerText = user.email;
}
// ||  no longer needed as this can be compounded into the entire address line above||
//let td6 = tr.insertCell();
// td6.innerText = user.zipCode;
//   }

function displayUsers(users) {
  for (const user of users) {
    buildTableRow(user);
  }
}

getUsers();
console.log("UsersTBody:", usersTBody);
console.log("Fetched Users:", users);

// function loadTableHelper(){
//     for (const nationalPark of nationalParksArray) {
//         getTableData(nationalPark);
//       }
// }

// loadTableHelper()
//not needed^^^
