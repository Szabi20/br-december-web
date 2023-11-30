function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 function kat() {
    var x = document.getElementBy("menuhater");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}




