// ===== Typing Animation =====
const typedText = document.getElementById('typed-text');
const text = "Premium RDP Servers";
let index = 0;

function type() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
type();

// ===== GSAP Scroll Animations =====
gsap.registerPlugin(ScrollTrigger);

// Animate feature cards
gsap.utils.toArray('.feature-card').forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay: i * 0.1
  });
});

// Animate pricing cards
gsap.utils.toArray('.pricing-card').forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay: i * 0.2
  });
});

// ===== FAQ Accordion =====
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    faqItem.classList.toggle('active');
  });
});

// ===== Testimonial Slider =====
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide > div');
const totalSlides = slides.length;

function updateSlider() {
  document.querySelector('.testimonial-slide').style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.querySelector('.slider-next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
});

document.querySelector('.slider-prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
});