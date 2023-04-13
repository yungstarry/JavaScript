const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");

  // Close the mobile menu
});



const HomeBtn = document.getElementById("home");
const generalBtn = document.getElementById("general");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sports");
const entertainmentBtn = document.getElementById("entertainment"); // corrected spelling
const technologyBtn = document.getElementById("technology");
const searchBtn = document.getElementById("search");

const newsQuery = document.getElementById("newsQuery");
let newsType = document.getElementById("newsType");
var newsdetails = document.getElementById("newsdetails"); // corrected spelling

// Array
let newsDataArr;

// api
const API_KEY = "9e9b7d1c2042476586e5d3584b6e7cab";
const HEADLINES_NEWS =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + API_KEY; // corrected URL
const GENERAL_NEWS =
  "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=" + API_KEY; // corrected URL 
const BUSINESS_NEWS =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=" +
  API_KEY; // corrected URL
const SPORTS_NEWS =
  "https://newsapi.org/v2/everything?domains=skysports.com&apiKey=" +
  API_KEY; // corrected URL
const ENTERTAINMENT_NEWS =
  "https://newsapi.org/v2/everything?domains=pulse.ng&apiKey=" + API_KEY; // corrected URL
const TECHNOLOGY_NEWS =
  "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=" + API_KEY; // corrected URL
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

window.onload = function () {
  newsType.innerHTML = "<h4>Headlines</h4>";
  fetchHeadlines();
};

HomeBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Home</h4>";
  fetchHeadlines();
});

generalBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>General</h4>";
  fetchGeneralNews();
});

businessBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Business</h4>";
  fetchBusinessNews();
});

sportsBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Sports</h4>";
  fetchSportsNews();
});

technologyBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Technology</h4>";
  fetchTechnologyNews();
});

entertainmentBtn.addEventListener("click", function () {
  // corrected variable name
  newsType.innerHTML = "<h4>Naija</h4>";
  fetchEntertainmentNews();
});

searchBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Search: " + newsQuery.value + "</h4>";
  fetchQueryNews();
});

const fetchGeneralNews = async () => {
  const response = await fetch(GENERAL_NEWS);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myjson = await response.json();

    newsDataArr = myjson.articles;
    console.log(newsDataArr);
  } else {
    // handle error
    console.log(response.status, response.statusText);
  }

  displayNews();
};

const fetchHeadlines = async () => {
  const response = await fetch(HEADLINES_NEWS);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myjson = await response.json();

    newsDataArr = myjson.articles;
  } else {
    //handle error
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchBusinessNews = async () => {
  const response = await fetch(BUSINESS_NEWS);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myjson = await response.json();
    newsDataArr = myjson.articles;
  } else {
    //handle error
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchSportsNews = async () => {
  const response = await fetch(SPORTS_NEWS);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myjson = await response.json();
    newsDataArr = myjson.articles;
  } else {
    //handle error
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchEntertainmentNews = async () => {
  const response = await fetch(ENTERTAINMENT_NEWS);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myjson = await response.json();
    console.log(myjson);
    newsDataArr = myjson.articles;
    console.log(newsDataArr);
  } else {
    //handle error
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchTechnologyNews = async () => {
  const response = await fetch(TECHNOLOGY_NEWS);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myjson = await response.json();

    newsDataArr = myjson.articles;
  } else {
    //handle error
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchQueryNews = async () => {
  if (newsQuery.value == null) return;

  const response = await fetch(
    SEARCH_NEWS + encodeURIComponent(newsQuery.value) + "&apiKey=" + API_KEY
  );
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myjson = await response.json();

    newsDataArr = myjson.articles;
  } else {
    //handle error
    console.log(response.status, response.statusText);
  }
  displayNews();
};

function displayNews() {
  newsdetails.innerHTML = "";

  if (newsDataArr.length == 0) {
    newsdetails = '<h5 class="text-center"> No Data Found</h5>';
    return;
  }

  newsDataArr.forEach((news) => {
    var date = news.publishedAt.split("T");
    var col = document.createElement("div");
    col.className = "text-left overflow-hidden";

    var card = document.createElement("div");
    card.className = "p-8  bg-red-200 rounded-[50px] shadow-md grid";

    var image = document.createElement("img");
    image.className = "h-48 w-48";
    image.src = news.urlToImage;
    image.onerror = function () {
      console.error("Failed to load image:", news.urlToImage);
    };
    image.onload = function () {
      console.log("Image loaded successfully:", news.urlToImage);
    };

    var cardBody = document.createElement("div");
    var newsHeading = document.createElement("h5");
    newsHeading.className = "text-lg font-bold my-2 w-36 leading-[25px]";
    newsHeading.innerHTML = news.title;

    var dateHeading = document.createElement("h6");
    dateHeading.className = "text-sm mb-2 text-gray-400";
    dateHeading.innerHTML = date[0];

    var description = document.createElement("p");
    description.className = "text-sm my-2 mb-4 text-gray-900";
    description.innerHTML = news.description;

    var link = document.createElement("a");
    link.className = "rounded-full bg-yellow-200 mt-4 py-2 px-4 text-black";
    link.setAttribute("target", "_blank");
    link.href = news.url;
    link.innerHTML = "Read more";

    cardBody.appendChild(newsHeading);
    cardBody.appendChild(dateHeading);
    cardBody.appendChild(description);
    cardBody.appendChild(link);

    card.appendChild(image);
    card.appendChild(cardBody);

    col.appendChild(card);

    newsdetails.appendChild(col);
  });
}

// mobile menu
const homeLink = document.querySelector("#menu a[href='#home']");
const generalLink = document.querySelector("#menu a[href='#general']");
const businessLink = document.querySelector("#menu a[href='#business']");
const sportsLink = document.querySelector("#menu a[href='#sports']");
const technologyLink = document.querySelector("#menu a[href='#technology']");
const entertainmentLink = document.querySelector(
  "#menu a[href='#entertainment']"
);

homeLink.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Headlines</h4>";
  fetchHeadlines();

  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

generalLink.addEventListener("click", function () {
  newsType.innerHTML = "<h4>General</h4>";
  fetchGeneralNews();

  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

businessLink.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Business News</h4>";
  fetchBusinessNews();

  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

sportsLink.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Sports News</h4>";
  fetchSportsNews();

  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

technologyLink.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Technology News</h4>";
  fetchTechnologyNews();

  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

entertainmentLink.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Technology News</h4>";
  fetchEntertainmentNews();

  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});
