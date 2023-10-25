
const burgerBtn = document.getElementById("burger");
const mobileNav = document.getElementById("mobile-nav");



burgerBtn.addEventListener("click",function(){
    if(mobileNav.style.display == "none"){
        mobileNav.style.display = "block";
    }
    else{
        mobileNav.style.display = "none";
    }
})





const faq = document.getElementsByClassName('contentbx');
for (i = 0; i<faq.length; i++){
    faq[i].addEventListener('click',function(){
        this.classList.toggle('active')
        
    })
}
document.querySelector("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var emailbord = document.querySelector(".emailbord");
    var messageElement = document.getElementById("message");
  
    // Expression régulière pour la validation de l'adresse e-mail
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (emailPattern.test(emailbord.value)) {
      messageElement.textContent = "Adresse e-mail valide !";
      messageElement.style.color = "green";
    } else {
      messageElement.textContent = "Adresse e-mail invalide. Veuillez réessayer.";
      messageElement.style.color = "red";
    }
  });