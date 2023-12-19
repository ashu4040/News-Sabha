let bussiness = document.querySelector(".bussiness");
let sports = document.querySelector(".sports");
let politics = document.querySelector(".politics");
let crime = document.querySelector(".crime");
let weather = document.querySelector(".weather");
let education = document.querySelector(".education");
let crypto = document.querySelector(".crypto");
let entertainment = document.querySelector(".entertainment");
let gossip = document.querySelector(".gossip");
let fit = document.querySelector(".fit");
let tech = document.querySelector(".tech");
let wild = document.querySelector(".wild");
let war = document.querySelector(".war");
let stock = document.querySelector(".stock");
let life = document.querySelector(".life");

function initializeSwiper(selector) {
  var swiper = new Swiper(selector, {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    mousewheel: true,
  });
}

makeRequest(
  "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6202f3f5fc344491bb96e2ce61fad5d5",
  bussiness,
  ".bussinessSwiper"
);
makeRequest(
  "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=6202f3f5fc344491bb96e2ce61fad5d5",
  sports,
  ".sportsSwiper"
);

makeRequest(
  "https://newsapi.org/v2/everything?q=india%20politics&apiKey=6202f3f5fc344491bb96e2ce61fad5d5",
  politics,
  ".political_swipper"
);

makeRequest(
  "https://newsapi.org/v2/everything?q=india%20politics&apiKey=6202f3f5fc344491bb96e2ce61fad5d5",
  crime,
  ".crime_Swipper"
);

makeRequest(
  "https://newsapi.org/v2/everything?q=weather&apiKey=6202f3f5fc344491bb96e2ce61fad5d5",
  weather,
  ".weather_swipper"
);

makeRequest(
  "https://newsapi.org/v2/everything?q=science+astronomy&apiKey=6202f3f5fc344491bb96e2ce61fad5d5",
  education,
  ".education_swipper"
);

makeRequest(
  "https://newsapi.org/v2/everything?q=crypto&apiKey=6202f3f5fc344491bb96e2ce61fad5d5",
  crypto,
  ".crypto_swipper"
);

makeRequest(
  "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=6202f3f5fc344491bb96e2ce61fad5d5",
  entertainment,
  ".entertainment_swipper"
);

makeRequest(
  "https://newsapi.org/v2/everything?q=gossip&apiKey=6202f3f5fc344491bb96e2ce61fad5d5",
  gossip,
  ".gossip_swipper"
);

makeRequest(
  "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=6202f3f5fc344491bb96e2ce61fad5d5",
  fit,
  ".fit_swipper"
);

makeRequest(
  "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=6202f3f5fc344491bb96e2ce61fad5d5",
  tech,
  ".tech_swipper"
);

makeRequest(
  "https://newsapi.org/v2/everything?q=wildlife&apiKey=6202f3f5fc344491bb96e2ce61fad5d5",
  wild,
  ".wild_swipper"
);

makeRequest(
  "https://newsapi.org/v2/everything?q=war&apiKey=6202f3f5fc344491bb96e2ce61fad5d5",
  war,
  ".war_swipper"
);

makeRequest(
  "https://newsapi.org/v2/everything?q=stock+market&apiKey=6202f3f5fc344491bb96e2ce61fad5d5",
  stock,
  ".stock_swipper"
);

makeRequest(
  "https://newsapi.org/v2/everything?q=lifestyle&apiKey=6202f3f5fc344491bb96e2ce61fad5d5",
  life,
  ".life_swipper"
);

// Function to make API requests
function makeRequest(url, targetElement, swiperSelector) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (this.status == 200) {
      let responsetext = JSON.parse(this.responseText);
      let article = responsetext.articles;
      let newsapi = "";

      article.forEach(function (elem) {
        let news = `<div class="card " style="margin-bottom: 5vh;">
          <div class="card-header" style="font-weight: bolder;">${elem["title"]}</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>${elem["description"]}</p>
              <footer class="blockquote-footer">Click This URL To Read Full <a href="${elem["url"]}" target="_blank"> click </a></footer>
            </blockquote>
          </div>
        </div>`;

        newsapi += news;
      });

      targetElement.innerHTML = newsapi;
    }
  };

  xhr.onloadend = function () {
    // Initialize Swiper after all API requests have completed
    initializeSwiper(swiperSelector);
  };

  xhr.send();
}
