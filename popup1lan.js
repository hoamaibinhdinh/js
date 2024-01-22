$('#contact .modal--close').click(function(){ // Chọn click nút tắt hộp thoại
     localStorage.setItem('submitted','true')
  })
  $('#contact form').on('submit',function(){ // Chọn submitted form
    localStorage.setItem('submitted','true')
  })
  if(localStorage.getItem('submitted')!='true'){
    setTimeout(function(){
      $('#contact').show()
      $('#contact').find('.modal--confirm').fadeIn('slow',function(){
        $(this).addClass('show')
      })
      window.history.replaceState({path:url},'',url+'#contact')
    },4000)
  }