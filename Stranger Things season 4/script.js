const icons = document.querySelectorAll('.icon');
let currentIndex = 0;

function goTo(url) {
    window.location.href = url;
}

function nextIcon() {
    currentIndex = (currentIndex + 1) % icons.length;
    icons[currentIndex].click();
}

document.addEventListener('DOMContentLoaded', () => {
    icons[currentIndex].classList.add('active');
});

icons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        icons[currentIndex].classList.remove('active');
        currentIndex = index;
        icons[currentIndex].classList.add('active');
    });
});


const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const cardContainers = document.querySelectorAll(".card");

searchButton.addEventListener("click", performSearch);
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    performSearch();
  }
});

function performSearch() {
  const searchTerm = searchInput.value.toLowerCase();

  cardContainers.forEach(function (card) {
    const cardTitle = card.querySelector("h2").textContent.toLowerCase();
    if (cardTitle.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
