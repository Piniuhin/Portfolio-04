/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");
const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      // service - tamplateID - #form - pablicKey
      "service_hd37r3f",
      "template_x3orapm",
      "#contact-form",
      "cmwv7vsvWohwn-5Wf"
    )
    .then(
      () => {
        // Show sent massage
        contactMessage.textContent = "Message sent successfully ✅";

        // Remove message after five second
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // Clear input fields
        contactForm.reset();
      },
      () => {
        // Show error message
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

// these IDs from the previous steps
emailjs.sendForm("contact_service", "contact_form", this).then(
  () => {
    console.log("SUCCESS!");
  },
  (error) => {
    console.log("FAILED...", error);
  }
);

/*=============== Toggle Dark Mode JS ===============*/

const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", onClick);

function onClick() {
  this.classList.toggle("bx-moon");
  if (this.classList.toggle("bx-sun")) {
    body.style.background = "#081b29"; // black-color
    body.style.color = "#ededed"; //  white-color
    body.style.transition = "2s";
  } else {
    body.style.background = "#ffffff"; //  white-color
    body.style.color = "#081b29"; // black-color
    body.style.transition = "2s";
  }
}

/*=============== NavBar JS ===============*/

// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((links) => {
//         links.classList.remove("active");
//         document
//           .querySelector("header nav a[href*=" + id + "]")
//           .classList.add("active");
//       });
//     }
//   });
// };
