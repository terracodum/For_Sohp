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