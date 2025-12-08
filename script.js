let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Contact email or phone required
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const error = document.getElementById("error");

    if (error) {
        error.textContent = "";
        error.classList.remove("show");
    }

    if (!name) {
      e.preventDefault();
      if (error) error.textContent = "Please enter your name.";
      error.classList.add("show");
      return;
    }

    if (!email && !phone) {
      e.preventDefault();
      if (error) error.textContent = "Please provide at least an email or a phone number.";
      error.classList.add("show");
      return;
    }
  });
}
