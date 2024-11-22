"use strict"
//my personal fetch async notes
//body is text content in java script

async function getData(){ //|S1|
    //need to call a function for fetch //|S2|
    // this will get copied and pasted into the lett promise variable||//|S3|fetch("https://jsonplaceholder.typicode.com/users") //fetch and parentheses with double quotes the input the url. Already listed 
    let promise = fetch("https://jsonplaceholder.typicode.com/users")// //|S4| copied and pasted from line above
    let response = await promise // //|S5| now we have to await  |AWAIT WILL BE IN ERROR until async is added to the top.
    let data = await response.json(); //await is waiting for the response to come back.  2nd await is for parsing the body of the response
    console.log(response);
} //response includes data along with the status of the response. async in coding: you cant use await, unless you're in a function marked with "async" must write a function and call it with getData ();= ( function  name )
getData()