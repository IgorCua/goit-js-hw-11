import Notiflix from 'notiflix';
const Handlebars = require("handlebars");

// const template = Handlebars.compile("Name: {{name}}");
// console.log(template({ name: "Nils" }));
const PIXABY_ID = "user_id:34265158";
const form = document.querySelector('.search-form');
const formBtn = document.querySelector('[type="submit"]');
const imgDiv = document.querySelector('.images');

form.addEventListener('submit', formHandler);

async function formHandler(event){
    event.preventDefault();
    const inputVal = event.target.elements.searchQuery.value;
    // console.log(event.target.elements.searchQuery.value)
    const response = await fetch()
}