  // auto scroll to element
 var scrollToBtm = function() {
   $("html, body").animate({
    scrollTop: $('Vid2').position().top
   }, 1200);
};
 var v = document.getElementById("Vid"); 
 v.onended = function() { 
    scrollToBtm(); 
};  
  // remove class after scroll first
let div_remove = document.querySelector("#intro-video");

window.onscroll = setTimeout(function () {
    div_remove.remove("scroll-snap-container-intro");
}, 30000);
