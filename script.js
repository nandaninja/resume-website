// Grab the button and all project cards
const btn = document.getElementById("show-more");
const cards = Array.from(document.querySelectorAll(".project"));

const CHUNK = 6;           // 2 rows × 3 columns = 6 projects per chunk
const INITIAL = CHUNK;     // initial visible count
let currentCount = INITIAL;

// Helper to update visibility
function render() {
  cards.forEach((card, i) => {
    card.style.display = i < currentCount ? "block" : "none";
  });
  // If we've revealed all, switch to "Show Less"
  if (currentCount >= cards.length) {
    btn.textContent = "Show Less";
  } else {
    btn.textContent = "Show More";
  }
}

// Initial render
document.addEventListener("DOMContentLoaded", render);

btn.addEventListener("click", () => {
  if (currentCount < cards.length) {
    // Reveal the next chunk
    currentCount = Math.min(cards.length, currentCount + CHUNK);
  } else {
    // Collapse back to the initial 6
    currentCount = INITIAL;
  }
  render();
});
