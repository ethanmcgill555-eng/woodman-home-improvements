function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const msg = document.getElementById("formMessage");
  msg.textContent = "Thanks! We'll be in touch soon.";
  msg.style.color = "#286090";

  this.reset();
});
