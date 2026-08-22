// $(document).keypress(function(e){
//     $('h1').text(e.key);
// });

//2
// $('.before').before("<h3>Bef</h3>");
// $('.after').after("<h3>Aft</h3>");
// $('.append').append("<h3>Appe</h3>");
// $('.prepend').prepend("<h3>Prep</h3>");

// 3
// $('.before').remove();

// $('.before').click(function(){
// $(".after").toggle();
// });

// 4 fadeOut
// $('.append').click(function(){
// $(".prepend").fadeOut();
// })

// 5 fadeIn
// $('.after').click(function(){
//     $('.prepend').fadeIn();
// })

// 6 slideIn
// $('.prepend').click(function(){
//     $('.after').slideToggle();
// })


// Animation
// $('.prepend').click(function(){
//     $('.after').animate({opacity:0.4});
// })

// combination
$('.prepend').click(function(){
    $('.after').slideUp().slideDown().animate({opacity:0.4});
})