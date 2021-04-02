
    $(document).ready(function(){
      $('.intro').slick({
          autoplay: true,
          speed: 800,
          arrow:false,
          dots: true,
          fade: true

//        setting-name: setting-value
      });
    });

$(function() {

//    nav menu toggle

  $("#nav-toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");


    });

});
