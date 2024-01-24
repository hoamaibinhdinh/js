  /*
 * Music random when user click button ver 1.0 by hoamaixunau
 * https://hoamaixunau.blogspot.com/
 * https://xemcameraquynhon.blogspot.com/
 */
$( document ).ready(function() {
function playSound(){
  var pattern = [],
    tone;
  pattern.push(Math.floor(Math.random() * 4));
  tone = "#sound" + pattern[0];
  //$(tone).trigger('play');  //uncomment to play
  //$(tone).get(0).play();    //uncomment to play
  $(tone)[0].play();          //comment to turn off
}

$("#music").click(playSound);

});