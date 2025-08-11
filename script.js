let current = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function autoSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

setInterval(autoSlide, 4000);
showSlide(current);

function showVideo() {
    const container = document.getElementById("video-container");
    container.style.display = "block";
  }

let feedbackIndex = 0;
const feedbackSlides = document.querySelectorAll(".feedback-slide");

// Show a specific slide
function showFeedbackSlide(index) {
  feedbackSlides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

// Auto slide every 4 seconds
function autoFeedbackSlide() {
  feedbackIndex = (feedbackIndex + 1) % feedbackSlides.length;
  showFeedbackSlide(feedbackIndex);
}
setInterval(autoFeedbackSlide, 4000);

// Manual navigation
document.querySelector(".next").addEventListener("click", () => {
  feedbackIndex = (feedbackIndex + 1) % feedbackSlides.length;
  showFeedbackSlide(feedbackIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
  feedbackIndex = (feedbackIndex - 1 + feedbackSlides.length) % feedbackSlides.length;
  showFeedbackSlide(feedbackIndex);
});

// Initialize
showFeedbackSlide(feedbackIndex);







