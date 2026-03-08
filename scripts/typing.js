const words = ["Learner", "Developer", "Tutor", "Freelancer", "Designer"];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typed = document.getElementById("typed");

function typeEffect() {
  const current = words[wordIndex];

  typed.textContent = current.substring(0, charIndex);

  if (!deleting) {
    charIndex++;

    if (charIndex > current.length) {
      deleting = true;

      setTimeout(typeEffect, 1500);

      return;
    }
  } else {
    charIndex--;

    if (charIndex === 0) {
      deleting = false;

      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();
