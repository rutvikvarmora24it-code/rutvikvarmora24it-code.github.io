const words = ["Learner", "Developer", "Tutor", "Freelancer", "Editor", "Designer", "Hobbyist"];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const current = words[wordIndex];
    document.getElementById("curtext").textContent = current.substring(0, charIndex);

    if(!deleting){
        charIndex++;

        if(charIndex > current.length){
            deleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
    }
    else{
        charIndex--;

        if(charIndex === 1){  // stop before empty
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();