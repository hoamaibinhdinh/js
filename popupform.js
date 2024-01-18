$(function() {
  var target = '#' + $('.modal--target').attr('id'),
    canonical = $('link[rel="canonical"]').attr('href'),
    url = window.location.href,
    modal_content = '<div class="modal--confirm" id="modal1"><form class="modal--dialog"><div class="_3em"></div><div class="modal--content"><div class="modal--header"><div class="_mht">Tắt thông báo</div><div class="_mhc modal--icon modal--close"><svg height="21px" viewBox="0 0 24 24" width="21px"><path fill="#707070" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path></svg></div></div><div class="modal--body"><div><p>Chọn một trong 2 tùy chọn dưới đây</p></div><div class="_cs"><div class="accept--check"><label for="for_accept"><input id="for_accept" name="accept_calcel" required="" type="radio" value="Có">Có</label></div><div class="calcel--check"><label for="for_calcel"><input id="for_calcel" name="accept_calcel" required="" type="radio" value="Không">Không</label></div></div></div><div class="modal--footer"><button class="modal--close" type="button">Hủy</button><button type="submit">Áp dụng</button></div></div><div class="_3em"></div></form></div>'
  $('.modal--icon.modal--close').append('')
  $('body').on('click', '.modal--open', function(e) {
    e.preventDefault()
    if ($(this).is('a')) {
      target = $(this).attr('href')
    } else {
      target = $(this).attr('data-target')
    }
    window.history.replaceState({path: canonical}, '', canonical + target)
    if (!$(target).hasClass('modal--html')) {
      $(modal_content).appendTo('body')
      $(target).show()
      $(target).fadeIn('slow', function() {
        $(this).addClass('show')
      })
    } else {
      $(target).show()
      $(target).find('.modal--confirm').fadeIn('slow', function() {
        $(this).addClass('show')
      })
    }
    $('.modal--close').click(function() {
      window.history.replaceState({path: canonical + target}, '', canonical)
      $(this).parents('.modal--confirm').removeClass('show')
      if (!$(target).hasClass('modal--html')) {
        setTimeout(function() {$(target).remove()}, 200)
      }
      setTimeout(function() {$(target).removeAttr('style')}, 200)
    })
  })
  $('.modal--target').each(function() {
    target = '#' + $(this).attr('id')
    if (url.indexOf(target) != -1) {
      $(target).show()
      $(target).find('.modal--confirm').fadeIn('slow', function() {
        $(this).addClass('show')
      })
    }
  })
  $('.modal--close').click(function() {
    var $this = $(this)
    window.history.replaceState({path: url}, '', canonical)
    $this.parents('.modal--confirm').removeClass('show')
    if (!$(target).hasClass('modal--html')) {
      setTimeout(function() {$(target).remove()}, 200)
    }
    setTimeout(function() {$this.parents('.modal--target').removeAttr('style')}, 200)
  })
  $(document).on('keyup', function(k) {
    if (k.keyCode == 27) {
      window.history.replaceState({path: url}, '', canonical)
      $(target).find('.modal--confirm').removeClass('show')
      if (!$(target).hasClass('modal--html')) {
        setTimeout(function() {$(target).remove()}, 200)
      }
      setTimeout(function() {$(target).removeAttr('style')}, 200)
    }
  })
})