$(document).ready(function(){

  $(".question").click(function(){
    // $(this).next(".answer").slideToggle(200);

    if($(this).hasClass('active')){

      $(this).next(".answer").slideUp();
      $(this).removeClass('active');

    }else{

      $(this).next(".answer").slideDown();
      $(this).addClass('active');
      
    }
  })

  $(".nav-btn").click(function(){
    // $(this).next(".answer").slideToggle(200);

    if($('.a-group').hasClass('active')){
      $('.a-group').removeClass('active');

    }else{
      $('.a-group').addClass('active');
    
    }
  })
 
})