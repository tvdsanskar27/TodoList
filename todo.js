// $('li').on('click', function() {
//   // #############here .css('color') returns rgb(x, y, z)##################
//   if ($(this).css('color') === "rgb(128, 128, 128)"){
//     $(this).css({
//       color : "black" ,
//     textDecoration:'none'
//     });
//   }
//   else {
//     $(this).css({
//       color : "gray" ,
//     textDecoration:'line-through'
//     });
//   }
// });
// not working
$('ul').on('click', "li", function() {
    $(this).toggleClass("cancel");
});
$('ul').on('click',"span" ,function(event) {
  // event.spotpropagation is used to stop bubbling (parentElement)
  event.stopPropagation();
  // .parent() to access parent element
  $(this).parent().fadeOut(function(){
    $(this).remove();
  });
});

$("input[type='text'").on("keyup", function(e) {
  if (e.which === 13) {
    var value = $(this).val();
    $(this).val("");
    $('ul').append("<li><span><i class='fa fa-trash'></i></span>" + value + "</li>");
  }
});
$('.fa-plus').on('click', function() {
  $('input').fadeToggle();
})
