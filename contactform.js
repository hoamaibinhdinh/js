$('.input-text.focus,.input-dropdown,.arrow-down').click(function(e) {
  e.stopPropagation();
  var $this = $(this);
  var $content = $this.parent().find('ul.content');
  var $li = $this.parent().find('ul.content>ul>li');
  $('.input-dropdown').blur();
  setTimeout(function() {
    $content.removeClass('hidden')
    $('ul.content').not($content).addClass('hidden')
  }, 100);
  $li.click(function() {
    var option = $(this).text();
    $this.val(option);
    $(this).addClass('active');
    $li.not($(this)).removeClass('active');
    $(this).parent().parent().parent().find('.input-text.focus,.input-text.input-dropdown,.input.input-dropdown').attr('value', option);
    $content.addClass('hidden')
  })
})
$('ul.content').click(function(e) {
  e.stopPropagation()
})
$('html').click(function() {
  $('ul.content').addClass('hidden')
})
var typingTimer;
$('.autocomplte').on('keyup', function() {
  clearTimeout(typingTimer);
  var $this = $(this);
  if ($this.val) {
    typingTimer = setTimeout(function() {
      var str = $this.val().toLowerCase();
      var options = $this.parent().parent().find('ul>li');
      if (str != '') {
        for (var i = 0; i < options.length; i++) {
          var option = options.eq(i);
          var name = option.text().toLowerCase();
          var res = name.indexOf(str);
          if (res !== -1) {
            option.removeAttr('class');
          } else {
            option.addClass('hidden');
          }
        }
      } else {
        options.removeAttr('class');
      }
    }, 500);
  }
});