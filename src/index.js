import axios, { Axios } from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const API_KEY = "34265158-b3e7c04db650eceaa44e6318e";
const form = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.loadMoreBtn');
const gallery = document.querySelector('.gallery');
const template = Handlebars.templates;
const hiddenBtn = document.querySelector('.hidden');

let page = 1;
let limit = 5;
let category = '';
let totalHits = 0;

form.addEventListener('submit', formHandler);
loadMoreBtn.addEventListener('click', loadMore);

//Lightbox doesn't work yet 
// const lightbox = new SimpleLightbox('.gallery .photo-card', { 
//     captionSelector: 'img',
//     captionDelay: 250
// })

async function formHandler(event){
    event.preventDefault();
    const inputVal = event.target.elements.searchQuery.value.trim();
    let arr;
    let data;
    
    hiddenBtn.style.visibility = 'hidden';
    
    try {
        const fetchedData = await fetchImages(inputVal);
        arr = fetchedData.data.hits;
        data = fetchedData;
        console.log('formHandler() ', fetchedData);
    } catch(error){
        console.log(error.message);
    }
    
    if(arr.length === 0){
        Notiflix.Notify.info("Sorry, there are no images matching your search query. Please try again.")
        return
    }
    
    totalHits = data.totalHits;
    category = inputVal;
    page = 1;

    gallery.innerHTML = template.images({arr});
    hiddenBtn.style.visibility = 'visible';
    
    // fetchImages(inputVal).then((images)=>{
    //     const arr = images.hits;
    //     totalHits = images.totalHits;
    //     console.log('totalHits: ', totalHits)
        
    //     if(arr.length === 0){
    //         Notiflix.Notify.info("Sorry, there are no images matching your search query. Please try again.")
    //         return
    //     }
        
    //     gallery.innerHTML = template.images({arr});
    //     hiddenBtn.style.visibility = 'visible';
    // })
    // .catch(error=>console.log(error.message));

    // lightbox.refresh();
}

function loadMore(){
    page += 1;
    
    if(totalHits === 0){
        Notiflix.Notify.info("We're sorry, but you've reached the end of search results.")
        hiddenBtn.style.visibility = 'hidden';
        return;
    }

    loadMoreFetch();

    // fetchImages(category).then((images)=>{
    //     const arr = images.hits;
    //     totalHits -= arr.length;
    //     console.log(totalHits)

    //     // console.log('loadMore result: ', arr)
    //     gallery.insertAdjacentHTML('beforeend', template.images({arr}));
    // })
    // .catch(error=>console.log(error.message));
    
    // lightbox.refresh();
}

async function loadMoreFetch(){
    let arr;
    try {
        const fetch = await fetchImages(category);
        arr = fetch.data.hits;
        totalHits -= arr.length;

    } catch (error){
        console.log(error.message);
    }
    
    gallery.insertAdjacentHTML('beforeend', template.images({arr}));
}

async function fetchImages(){
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: category,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
        per_page: limit
    });

    const response = await axios.get(`https://pixabay.com/api/?${searchParams}`);
    console.log('fetchImages() result: ', response);
    return response;
}


// let gallery = new SimpleLightbox('.container__img-list a', {
//     captionSelector: 'img',
//     captionDelay: 250
// });

// let gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', function () {
// 	// do something…
// });
// webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// tags - рядок з описом зображення. Підійде для атрибуту alt.
// likes - кількість лайків.
// views - кількість переглядів.
// comments - кількість коментарів.
// downloads - кількість завантажень.