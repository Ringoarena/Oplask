// get references to DOM elements
const IMAGE_CONTAINER = document.querySelector(".imageContainer");
const SUBMIT_BUTTON = document.querySelector(".submit");
const SEARCH_BOX = document.querySelector(".search-box");
const VIEW_FAVORITES_BUTTON = document.querySelector(".viewFavorites");
const PREVIOUS_BUTTON = document.querySelector(".previousButton");
const NEXT_BUTTON = document.querySelector(".nextButton");
const LIGHTBOX = document.querySelector(".lightbox");
const LIGHTBOX_IMAGE = document.querySelector(".lightbox-image");
const LIGHTBOX_ADD_FAVORITE_BUTTON = document.querySelector(".add-favorite");
const LIGHTBOX_DOWNLOAD_IMAGE_BUTTON = document.querySelector(".download-image");
const LIGHTBOX_CLOSE_BUTTON = document.querySelector(".close-lightbox")


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

// event callback functions
function submitButtonClickHandler() {
  currentSearchValue = SEARCH_BOX.value;
  currentPage = 1;
  listImages();
}

function viewFavoritesButtonClickHandler() {
  alert("view fav button clicked");
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
  LIGHTBOX_IMAGE.src = image.urls.regular;
  LIGHTBOX.classList.toggle("hidden");
}

function addFavoritesClickHandler() {
  // alert("add favorites click handler called");

  // Retrieve favorites
  favorites = JSON.parse(localStorage("favorites"));
  // Remove favorites from local storage
  localStorage.removeItem("favorites")
  // Modify favorites
  favorites.push(image)
  // Save favorites
  localStorage("favorites") = JSON.stringify(favorites);
}

function downloadImageClickHandler() {
  alert("download image click handler called");
}

function closeLightBoxClickHandler() {
  LIGHTBOX.classList.toggle("hidden");
}

function initiateListeners() {
   SUBMIT_BUTTON.addEventListener("click", submitButtonClickHandler);
   VIEW_FAVORITES_BUTTON.addEventListener("click", viewFavoritesButtonClickHandler);
   PREVIOUS_BUTTON.addEventListener("click", previousButtonClickHandler);
   NEXT_BUTTON.addEventListener("click", nextButtonClickHandler);
   LIGHTBOX_ADD_FAVORITE_BUTTON.addEventListener("click", addFavoritesClickHandler);
   LIGHTBOX_DOWNLOAD_IMAGE_BUTTON.addEventListener("click", downloadImageClickHandler);
   LIGHTBOX_CLOSE_BUTTON.addEventListener("click", closeLightBoxClickHandler);
}

function run() {
  initiateListeners()
}
run();