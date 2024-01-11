document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  let currentIndex = 0;

  function showCard(index) {
      cards[currentIndex].style.transform = "translateX(100%)";
      currentIndex = (index + cards.length) % cards.length;
      cards[currentIndex].style.transform = "translateX(0)";
  }

  function nextCard() {
      showCard(currentIndex + 1);
  }

  // Automatically switch to the next card every 3 seconds (adjust the interval as needed)
  setInterval(nextCard, 3000);
});
