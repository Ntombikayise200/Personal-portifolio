
document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("resumeBtn").addEventListener("click", function() {
    window.open("Ntomfuthi Ntshangase exp latest CV.pdf", "_blank");
  }); 
 });

 document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("hireBtn").addEventListener("click", function() {
      // Scroll to the contact section
      document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
      });
    });
  });