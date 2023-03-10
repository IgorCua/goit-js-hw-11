'use strict'
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
let limit = 40;
let category = '';
let imgCount = 0;

form.addEventListener('submit', formHandler);
loadMoreBtn.addEventListener('click', loadMore);

//Lightbox doesn't work yet 
// const lightbox = new SimpleLightbox('.gallery .photo-card', { 
//     captionSelector: 'img',
//     captionDelay: 250
//})

async function formHandler(event){
    event.preventDefault();
    const inputVal = event.target.elements.searchQuery.value.trim();
    let obj;
    let arr;
    
    hiddenBtn.style.visibility = 'hidden';
    category = inputVal;
    page = 1;
    obj = await loadImages();
    arr = obj.hits;
    imgCount = arr.length;
    
    gallery.innerHTML = template.images({arr});

    if(imgCount === obj.total){
        hiddenBtn.style.visibility = 'hidden';
        Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
        return;
    }
}

async function loadMore(){
    let obj
    let arr;
    
    page += 1;
    
    obj = await loadImages();
    arr = obj.hits;
    imgCount += arr.length;
    
    gallery.insertAdjacentHTML('beforeend', template.images({arr}));

    if(imgCount === obj.total){
        hiddenBtn.style.visibility = 'hidden';
        Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
        return;
    }
}

async function loadImages(){
    let result;
    try {
        const fetch = await fetchImages(category);
        result = fetch.data;
        
        if(fetch.data.hits.length === 0){
            Notiflix.Notify.info("Sorry, there are no images matching your search query. Please try again.")
            gallery.innerHTML = '';
            return
        } else {
            hiddenBtn.style.visibility = 'visible';
        }
    } catch (error){
        if(error.code === "ERR_BAD_REQUEST"){
            hiddenBtn.style.visibility = 'hidden';
            Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
            console.log(error);
            return;
        }
        console.log(error);
    }
    return result
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

  // console.log(arr)
    // try {
    //     const fetchedData = await fetchImages(inputVal);
    //     arr = fetchedData.data.hits;
        
    //     // if(fetchedData.data.hits.length === 0){
    //     //     Notiflix.Notify.info("Sorry, there are no images matching your search query. Please try again.")
    //     //     gallery.innerHTML = '';
    //     //     return
    //     // }
    //     // console.log('formHandler() ', fetchedData);
    // } catch(error){
    //     console.log(error.message);
    // }
    // loadImages();