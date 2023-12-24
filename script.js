function myFunction() {
    document.getElementById("mydropdown").classList.toggle("show");
    document.getElementById("fir").classList.toggle("fir_act");
    document.getElementById("sec").classList.toggle("sec_act");
    document.getElementById("thr").classList.toggle("thr_act");
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        document.getElementById("fir").classList.toggle("fir_act");
        document.getElementById("sec").classList.toggle("sec_act");
        document.getElementById("thr").classList.toggle("thr_act");
      }
    }
  }
}

/* for slide show */
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/* for slide show gddgggdg*/



let aslideIndex = 1;
ashowSlides(aslideIndex);

// Next/previous controls
function aplusSlides(n) {
  ashowSlides(aslideIndex += n);
}

// Thumbnail image controls
function acurrentSlide(n) {
  ashowSlides(aslideIndex = n);
}

function ashowSlides(n) {
  let i;
  let slides = document.getElementsByClassName("amySlides");
  let dots = document.getElementsByClassName("adot");
  if (n > slides.length) {aslideIndex = 1}
  if (n < 1) {aslideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[aslideIndex-1].style.display = "block";
  dots[aslideIndex-1].className += " active";
}
