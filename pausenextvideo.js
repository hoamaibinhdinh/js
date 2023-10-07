// wacth video when scroll to viewport is play and pause when scroll out viewport using IntersectionObserver
let videos = document.querySelectorAll("video");
let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};
let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.play();
    } else {
      entry.target.pause();
    }
  });
}
let observer = new IntersectionObserver(callback, options);
videos.forEach((video) => {
  observer.observe(video);
}
);
 // auto next video
  var v = document.getElementById("Vid");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next").scrollIntoView();
};

   var v = document.getElementById("next");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next1").scrollIntoView();
};

   var v = document.getElementById("next1");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next2").scrollIntoView();
};
  
     var v = document.getElementById("next2");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next3").scrollIntoView();
};  
  
     var v = document.getElementById("next3");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next4").scrollIntoView();
};
  
     var v = document.getElementById("next4");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next5").scrollIntoView();
};
  
     var v = document.getElementById("next5");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next6").scrollIntoView();
};  
     var v = document.getElementById("next6");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next7").scrollIntoView();
};
       var v = document.getElementById("next7");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next8").scrollIntoView();
};
       var v = document.getElementById("next8");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next9").scrollIntoView();
};
       var v = document.getElementById("next9");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next10").scrollIntoView();
};
       var v = document.getElementById("next11");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next12").scrollIntoView();
};
       var v = document.getElementById("next12");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next13").scrollIntoView();
}; 
       var v = document.getElementById("next13");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next14").scrollIntoView();
}; 
       var v = document.getElementById("next14");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next15").scrollIntoView();
};
       var v = document.getElementById("next15");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next16").scrollIntoView();
};   
       var v = document.getElementById("next16");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next17").scrollIntoView();
};  
       var v = document.getElementById("next17");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next18").scrollIntoView();
};    
       var v = document.getElementById("next18");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next19").scrollIntoView();
};    
       var v = document.getElementById("next19");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next20").scrollIntoView();
};    
       var v = document.getElementById("next20");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next21").scrollIntoView();
};    
       var v = document.getElementById("next21");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next22").scrollIntoView();
};    
       var v = document.getElementById("next22");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next23").scrollIntoView();
};    
       var v = document.getElementById("next23");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next24").scrollIntoView();
};    
       var v = document.getElementById("next24");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next25").scrollIntoView();
};    
       var v = document.getElementById("next25");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next26").scrollIntoView();
};    
       var v = document.getElementById("next26");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next27").scrollIntoView();
};    
       var v = document.getElementById("next27");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next28").scrollIntoView();
}; 
       var v = document.getElementById("next28");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next29").scrollIntoView();
};   
       var v = document.getElementById("next29");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next30").scrollIntoView();
};   
         var v = document.getElementById("next30");
v.autoplay = true;
v.load();
v.onplaying = function() {
    document.body.style.overflow = 'hidden';
};
v.onended = function() { 
    document.body.style.overflow = '';
    document.getElementById("next31").scrollIntoView();
};   
// pause video when click
 var myVideo = document.getElementById("Vid");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
  var myVideo = document.getElementById("next");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
    var myVideo = document.getElementById("next1");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
      var myVideo = document.getElementById("next2");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next3");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next4");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next5");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next6");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next7");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next8");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next9");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next10");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next11");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next12");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next13");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next14");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next15");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next16");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next17");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next18");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next19");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next20");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next21");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next22");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next23");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next24");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next25");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next26");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next27");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next28");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next29");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
        var myVideo = document.getElementById("next30");
myVideo.addEventListener('click', function(e){
   e.preventDefault();
   this[this.paused ? 'play' : 'pause']();
});
