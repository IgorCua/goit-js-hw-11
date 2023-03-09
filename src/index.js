import Notiflix from 'notiflix';
//const Handlebars = require("handlebars");
// console.log(Handlebars.template)
console.log(window.Handlebars)


// const template = Handlebars.compile("Name: {{name}}");
// console.log(template({ name: "Nils" }));
const API_KEY = "34265158-b3e7c04db650eceaa44e6318e";
const IMG_ADRESS = "https://pixabay.com/api/";
const form = document.querySelector('.search-form');
const formBtn = document.querySelector('[type="submit"]');
const imgDiv = document.querySelector('.images');
const template = Handlebars.templates;

let page = 1;
let limit = 5;

form.addEventListener('submit', formHandler);
 
function formHandler(event){
    event.preventDefault();
    const inputVal = event.target.elements.searchQuery.value;
    
    fetchImages(inputVal).then((images)=>{
        const arr = images.hits;
        console.log('formHandaler result: ', arr)
        imgDiv.innerHTML = template.images({arr})
    })
    .catch(error=>console.log(error.message));
}

async function fetchImages(val){
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: val,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
        per_page: limit
    })

    try{
        const response = await fetch(`https://pixabay.com/api/?${searchParams}`)
        const images = await response.json();
        console.log('fetchImages result: ', images)
        return images;
    } catch (error){
        console.log(error.message);
    }
    // console.log(event.target.elements.searchQuery.value)
}

// webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// tags - рядок з описом зображення. Підійде для атрибуту alt.
// likes - кількість лайків.
// views - кількість переглядів.
// comments - кількість коментарів.
// downloads - кількість завантажень.