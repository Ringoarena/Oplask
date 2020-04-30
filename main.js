// get references to DOM elements
const IMAGE_CONTAINER = document.querySelector(".imageContainer");
const SUBMIT_FORM = document.querySelector("form");
const SEARCH_BOX = document.querySelector(".search-box");
const VIEW_FAVORITES_BUTTON = document.querySelector(".viewFavorites");
const CLEAR_FAVORITES_BUTTON = document.querySelector(".clearFavorites");
const PREVIOUS_BUTTON = document.querySelector(".previousButton");
const NEXT_BUTTON = document.querySelector(".nextButton");
const LIGHTBOX = document.querySelector(".lightbox");
const LIGHTBOX_IMAGE = document.querySelector(".lightbox-image");
const LIGHTBOX_ADD_FAVORITE_BUTTON = document.querySelector(".add-favorite");
const LIGHTBOX_DOWNLOAD_IMAGE_LINK = document.querySelector(".download-image-link");
const LIGHTBOX_CLOSE_BUTTON = document.querySelector(".close-lightbox")
const LIGHTBOX_AUTHOR = document.querySelector(".author");

// local data
let currentImage;
let totalImages;
let totalPages;
let favorites = []

// API info
let EXAMPLE_URL = "https://api.unsplash.com/search/photos/?query=book&page=1&client_id=UwbX5zH4F3o2peiezQLbWHxF09ixF5pJBId4Uccs47M";
let currentSearchValue;
let currentPage = 1;
const ACCESS_KEY = `UwbX5zH4F3o2peiezQLbWHxF09ixF5pJBId4Uccs47M`;

// fetch function
async function fetchResults(searchValue, page, accesKey) {
  let url = `https://api.unsplash.com/search/photos/?query=${searchValue}&page=${page}&client_id=${accesKey}` 
  let response = await fetch(url);
  let data = await response.json();
  totalPages = data.total_pages;
  return data.results;
}

// render funtions
async function listImages() {
  let images = await fetchResults(currentSearchValue, currentPage, ACCESS_KEY);
  console.log(images);
  renderImages(IMAGE_CONTAINER, images);
}

function renderImages(container, images) {
  container.innerHTML = "";
  for(let image of images) {
    let article = document.createElement("article");
    let img = document.createElement("img");
    img.addEventListener("click", () => imageClickHandler(image));
    // Vad är skillnaden???
    // img.addEventListener("click", imageClickHandler(image));
    img.src = image.urls.small;
    article.append(img);
    container.append(article);
  }
}

// download functions
async function downloadImage(image) {
  
}

// event callback functions
function submitButtonClickHandler(event) {
  event.preventDefault();
  currentSearchValue = SEARCH_BOX.value;
  currentPage = 1;
  listImages();
}

function viewFavoritesButtonClickHandler() {
  LIGHTBOX.classList.add("hidden");
  renderImages(IMAGE_CONTAINER, favorites);
}

function clearFavoritesButtonClickHandler() {
  localStorage.clear()
  favorites = []
  renderImages(IMAGE_CONTAINER, favorites)
}

function previousButtonClickHandler() {
  if (currentPage > 1) {
    currentPage--;
    listImages();
  }
}

function nextButtonClickHandler() {
  if (currentPage < totalPages) {
    currentPage++;
    listImages();
  }
}

function imageClickHandler(image) {
  currentImage = image;
  LIGHTBOX_DOWNLOAD_IMAGE_LINK.href = image.links.download + "?force=true";
  LIGHTBOX_IMAGE.src = image.urls.regular;
  LIGHTBOX_AUTHOR.innerText = image.user.name;
  LIGHTBOX.classList.toggle("hidden");
}

function addFavoritesClickHandler() {
  if (localStorage.getItem('favorites') != null) {
    // Retrieve favorites
    favorites = JSON.parse(localStorage.getItem('favorites'));
    // Remove favorites from local storage
    localStorage.removeItem('favorites')
  }
  // Modify favorites
  favorites.push(currentImage)
  // Save favorites
  localStorage.setItem('favorites', JSON.stringify(favorites));
  console.log(localStorage.getItem('favorites'))
}

function downloadImageClickHandler() {
  downloadImage(currentImage);
}

function closeLightBoxClickHandler() {
  LIGHTBOX.classList.toggle("hidden");
}

function loadDatabase() {
  if (localStorage.getItem('favorites') != null) {
    console.log("loaded")
    // Retrieve favorites
    favorites = JSON.parse(localStorage.getItem('favorites'));
  }
}

function initiateListeners() {
   SUBMIT_FORM.addEventListener("submit", submitButtonClickHandler);
   VIEW_FAVORITES_BUTTON.addEventListener("click", viewFavoritesButtonClickHandler);
   CLEAR_FAVORITES_BUTTON.addEventListener("click", clearFavoritesButtonClickHandler);
   PREVIOUS_BUTTON.addEventListener("click", previousButtonClickHandler);
   NEXT_BUTTON.addEventListener("click", nextButtonClickHandler);
   LIGHTBOX_ADD_FAVORITE_BUTTON.addEventListener("click", addFavoritesClickHandler);
   LIGHTBOX_DOWNLOAD_IMAGE_LINK.addEventListener("click", downloadImageClickHandler);
   LIGHTBOX_CLOSE_BUTTON.addEventListener("click", closeLightBoxClickHandler);
}

function run() {
  initiateListeners();
  loadDatabase()
}
run();