const IMAGE_CONTAINER = document.querySelector("main");
const SUBMIT_BUTTON = document.querySelector(".submit");
const SEARCH_FIELD = document.querySelector(".search-box");
const FAVORITES_BUTTON = document.querySelector(".favorites");

let currentImages  = []
let currentIndex = 0

function renderImage(result) {
    console.log("Hej");

    return `
        <article>
            <img src="${result.urls.small}" "/>
        </article>
    `

}

async function fetchResults(searchWord) {
    let response = await fetch(url+searchword);
    let data = await response.json();
    return data.results;
}

function renderImages(images) {


  let returStr = `
      <div class="lightBoxImage hidden">
          <img src="${images[currentIndex].urls.regular}" />
          <p>${images[currentIndex].user.name}</p>
          <button class="addFav">Add to favorites</button>
          <button class="downloadImage">Download</button>
      </div>
      <section>
  `
  
    for (let result of images) {
      returStr += renderImage(result)
    }

    returStr += `</section>`

    return returStr
}

function postRenderedImages(images, container) {
    container.innerHTML = "";
    container.innerHTML = renderImages(images)
}

function initiateListeners() {
    IMAGE_CONTAINER.addEventListener("click",someFunction());
}

function run() {
    initiateListeners()
    // andra saker som man ska göra i starten
}






let searchResponse = {
    "total": 133,
    "total_pages": 7,
    "results": [
      {
        "id": "eOLpJytrbsQ",
        "created_at": "2014-11-18T14:35:36-05:00",
        "width": 4000,
        "height": 3000,
        "color": "#A7A2A1",
        "likes": 286,
        "liked_by_user": false,
        "description": "A man drinking a coffee.",
        "user": {
          "id": "Ul0QVz12Goo",
          "username": "ugmonk",
          "name": "Jeff Sheldon",
          "first_name": "Jeff",
          "last_name": "Sheldon",
          "instagram_username": "instantgrammer",
          "twitter_username": "ugmonk",
          "portfolio_url": "http://ugmonk.com/",
          "profile_image": {
            "small": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=7cfe3b93750cb0c93e2f7caec08b5a41",
            "medium": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=5a9dc749c43ce5bd60870b129a40902f",
            "large": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=32085a077889586df88bfbe406692202"
          },
          "links": {
            "self": "https://api.unsplash.com/users/ugmonk",
            "html": "http://unsplash.com/@ugmonk",
            "photos": "https://api.unsplash.com/users/ugmonk/photos",
            "likes": "https://api.unsplash.com/users/ugmonk/likes"
          }
        },
        "current_user_collections": [],
        "urls": {
          "raw": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f",
          "full": "https://hd.unsplash.com/photo-1416339306562-f3d12fefd36f",
          "regular": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515",
          "small": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=263af33585f9d32af39d165b000845eb",
          "thumb": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=8aae34cf35df31a592f0bef16e6342ef"
        },
        "links": {
          "self": "https://api.unsplash.com/photos/eOLpJytrbsQ",
          "html": "http://unsplash.com/photos/eOLpJytrbsQ",
          "download": "http://unsplash.com/photos/eOLpJytrbsQ/download"
        }
      },
      {
        "id": "eOLpJytrbsQ",
        "created_at": "2014-11-18T14:35:36-05:00",
        "width": 4000,
        "height": 3000,
        "color": "#A7A2A1",
        "likes": 286,
        "liked_by_user": false,
        "description": "A man drinking a coffee.",
        "user": {
          "id": "Ul0QVz12Goo",
          "username": "ugmonk",
          "name": "Jeff Sheldon",
          "first_name": "Jeff",
          "last_name": "Sheldon",
          "instagram_username": "instantgrammer",
          "twitter_username": "ugmonk",
          "portfolio_url": "http://ugmonk.com/",
          "profile_image": {
            "small": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=7cfe3b93750cb0c93e2f7caec08b5a41",
            "medium": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=5a9dc749c43ce5bd60870b129a40902f",
            "large": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=32085a077889586df88bfbe406692202"
          },
          "links": {
            "self": "https://api.unsplash.com/users/ugmonk",
            "html": "http://unsplash.com/@ugmonk",
            "photos": "https://api.unsplash.com/users/ugmonk/photos",
            "likes": "https://api.unsplash.com/users/ugmonk/likes"
          }
        },
        "current_user_collections": [],
        "urls": {
          "raw": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f",
          "full": "https://hd.unsplash.com/photo-1416339306562-f3d12fefd36f",
          "regular": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515",
          "small": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=263af33585f9d32af39d165b000845eb",
          "thumb": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=8aae34cf35df31a592f0bef16e6342ef"
        },
        "links": {
          "self": "https://api.unsplash.com/photos/eOLpJytrbsQ",
          "html": "http://unsplash.com/photos/eOLpJytrbsQ",
          "download": "http://unsplash.com/photos/eOLpJytrbsQ/download"
        }
      },
      {
        "id": "eOLpJytrbsQ",
        "created_at": "2014-11-18T14:35:36-05:00",
        "width": 4000,
        "height": 3000,
        "color": "#A7A2A1",
        "likes": 286,
        "liked_by_user": false,
        "description": "A man drinking a coffee.",
        "user": {
          "id": "Ul0QVz12Goo",
          "username": "ugmonk",
          "name": "Jeff Sheldon",
          "first_name": "Jeff",
          "last_name": "Sheldon",
          "instagram_username": "instantgrammer",
          "twitter_username": "ugmonk",
          "portfolio_url": "http://ugmonk.com/",
          "profile_image": {
            "small": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=7cfe3b93750cb0c93e2f7caec08b5a41",
            "medium": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=5a9dc749c43ce5bd60870b129a40902f",
            "large": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=32085a077889586df88bfbe406692202"
          },
          "links": {
            "self": "https://api.unsplash.com/users/ugmonk",
            "html": "http://unsplash.com/@ugmonk",
            "photos": "https://api.unsplash.com/users/ugmonk/photos",
            "likes": "https://api.unsplash.com/users/ugmonk/likes"
          }
        },
        "current_user_collections": [],
        "urls": {
          "raw": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f",
          "full": "https://hd.unsplash.com/photo-1416339306562-f3d12fefd36f",
          "regular": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515",
          "small": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=263af33585f9d32af39d165b000845eb",
          "thumb": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=8aae34cf35df31a592f0bef16e6342ef"
        },
        "links": {
          "self": "https://api.unsplash.com/photos/eOLpJytrbsQ",
          "html": "http://unsplash.com/photos/eOLpJytrbsQ",
          "download": "http://unsplash.com/photos/eOLpJytrbsQ/download"
        }
      },
      // more photos ...
    ]
}

postRenderedImages(searchResponse.results, IMAGE_CONTAINER)