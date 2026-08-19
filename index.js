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
$('.before').click(function(){
$(".after").toggle();
});
$('.after').click(function(){
$(".before").fadOut();
})

