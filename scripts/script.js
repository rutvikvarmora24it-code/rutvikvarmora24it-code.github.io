document.addEventListener("contextmenu", (e) => e.preventDefault());

document.addEventListener("keydown", (e) => {
  if (e.key === "F12") e.preventDefault();
  if (e.ctrlKey && e.shiftKey && e.key === "I") e.preventDefault();
  if (e.ctrlKey && e.key === "U") e.preventDefault();
});

const hackMsg = document.getElementById("hack-msg");

const messages = [
  "> ACCESS_DENIED.log",
  "> SYSTEM_SECURITY_ACTIVE",
  "> TERMINAL_LOCKED",
  "> PERMISSION_REQUIRED",
];

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  const random = messages[Math.floor(Math.random() * messages.length)];

  hackMsg.innerText = random;

  hackMsg.classList.remove("hidden");

  setTimeout(() => {
    hackMsg.classList.add("hidden");
  }, 5000);
});
