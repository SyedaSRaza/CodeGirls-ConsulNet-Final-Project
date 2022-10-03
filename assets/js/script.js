 jQuery( document ).ready(function($) {
 // FIXED HEADER SCROLL
  $(window).scroll(function(){
    if ($(window).scrollTop() >=10)
    {
          $('header').addClass('fixed');
      }
    else
    {
          $('header').removeClass('fixed');
      }
  });
	
$("body").flati({
      theme: 'space',
			triggerPosition:'left',
			dockPosition:'right',
   });
if ( $( ".your-class" ).length ) {

$('.your-class').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
 	centerMode: true,
 	autoplay: true,
 	autoplaySpeed: 2000,
 	arrows: false,
 });
}

if ( $( ".slider" ).length ) {
  
 	$(".slider").lightGallery({
 	}); 
 }
 if ( $( "#accordion" ).length ) {
  
    $( "#accordion" ).accordion({ 
       header: "h2", collapsible: true, active: false

	});
 }

if($('#contact').length){
           $("#contact").validate({
            rules:{
                    name:"required",
                    subject:{
                         required:true,
                     
                    },
                    email:{
                         required:true,
                         email:true
                    },
                    msg:{
                         required:true,
                    }
                },
            messages:{
                 fname:{
                      required:" Name is required",
                 },
                 subject:{
                      required:"Subject is required",
                      subject:"Subject required",
                 },
                 email:{
                      required:"Email is required",
                      email:"Email required @ "
                 },
                 msg:{
                      required:"Message is required",
                 }
			}
            	 });
		   }
			
});
