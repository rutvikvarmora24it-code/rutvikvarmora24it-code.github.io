const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm("default_service", "template_felkoxc", this)
    .then(() => {
      form.innerHTML = `
<div class="py-20 text-center">
<i class="ri-checkbox-circle-fill text-6xl text-neo-green mb-4 block"></i>
<h3 class="text-2xl font-black uppercase">Transmission Received</h3>
<p class="font-mono text-sm mt-2">
System response initialized. I will reach out shortly.
</p>
</div>
`;
    })
    .catch((error) => {
      alert("Message failed. Try again.");
      console.error(error);
    });
});
