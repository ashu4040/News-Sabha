// https://newsapi.org/v2/top-headlines?country=in&apiKey=4b51d31eec7a453ca7ec7b76d78cd097
let api = document.querySelector(".api");

const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=4b51d31eec7a453ca7ec7b76d78cd097",
  true
);

xhr.onload = function () {
  if (this.status == 200) {
    let responsetext = JSON.parse(this.responseText);
    let article = responsetext.articles;
    let newsapi = "";

    article.forEach(function (elem) {
      let news = `<div class="card api">
        <div class="card-header">
         <p> ${elem.source["name"]}</p>
        </div>
        <div class="card-body">
          <h5 class="card-title">${elem["title"]}</h5>
          <p class="card-text">${elem["content"]}</p>
          <a href="${elem["url"]}" target="_blank" class="btn btn-primary">Click Here To Read Full News</a>
        </div>
      </div>`;

      newsapi += news;
    });

    api.innerHTML = newsapi;
    searchbar();
  }
};

xhr.send();
