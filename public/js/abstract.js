$('.toggle').toggle('fast');
  $('.trigger').click(function(){
    $(this).prev().prev('.toggle').toggle('fast');
  });



    $('.toggle').click(function(){
      $(this).prev().prev('.toggle').toggle('fast');
    });
