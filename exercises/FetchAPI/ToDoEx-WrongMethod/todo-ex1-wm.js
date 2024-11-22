"use strict"

const todosArray = [
    {
        name: "Mango Butter",
        place: "Medina's" ,
        commute: "25 Minutes via Train",
        // img: "Washington-StoryImage_2.jpg", 
        cost: " 8 ounces for $12",
    },    
    {
        name: "Cat Litter",
        place: "Chewy.com",
        commute: "N/A Order Online",
        // img: "Washington-StoryImage_2.jpg", 
        cost: "40 pounds for $45",
    },   
    {
        name: "Cat Food",
        place: "Chewy.com",
        commute: "N/A Order Online",
        // img: "Washington-StoryImage_2.jpg", 
        cost: "40 cans for $30.",
    },   
    {
        name: "Chicken",
        place: "Trader Joes",
        commute: "40 minutes via Train",
        // img: "Washington-StoryImage_2.jpg", 
        cost: "10 pounds for $18",
    },
    {
        name: "String Beans",
        place: "Trader Joes",
        commute: "40 minutes via Train",
        // img: "Washington-StoryImage_2.jpg", 
        cost: "6 pounds for $7",
    },
]

let todoTbody = document.querySelector("#todoTbody");

const todoDropdown = document.querySelector("#todoDropdown");

for (const todo of todosArray) {
  let option = document.createElement("option");
  option.value = todo.name;
  option.innerText = todo.name
  todoDropdown.appendChild(option);
}

function filterByToDo() {
    let selectedTaskName = todoDropdown.value;
    let filteredTodosArray = todosArray.filter((todo)=> todo.name == selectedTaskName)
    todoTbody.innerHTML = "";

    for (const todo of filteredTodosArray) {
        let tr = todoTbody.insertRow();

        let td1 = tr.insertCell();
        td1.innerText = todo.name
        
        let td2 = tr.insertCell(); 
        td2.innerText = todo.place 
    
        let td3 = tr.insertCell();
        td3.innerText = todo.commute 
    
        let td4 = tr.insertCell()
        td4.innerText = todo.cost
    }
}