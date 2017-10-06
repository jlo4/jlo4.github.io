$(document).ready(function(){
  $('.navicon').on('click', function(){
    $('.dropdown').slideToggle(500);
  });

  // var $width = $(window).width();
  // $(window).resize(function() {
  //   if ($width > 640) {
  //     $('.dropdown').css({'display': 'flex'})
  //   } else if ($width <= 640) {
  //     $('.dropdown').css({'display': 'none'})
  //   }
  // })

  // var i = 0;
  //
  // $(".carousel").append(images[i]);
  //
  // $(".next").on("click", function(e){
  //   $("img").remove();
  //   i++;
  //   console.log(i);
  //   if(i < 5){
  //   $(".carousel").append(images[i]);
  // } else {
  //   $(".carousel").append(images[0]);
  //   i = 0;
  // }
  //   e.preventDefault();
  // });
  //
  // $(".previous").on("click", function(e){
  //   $("img").remove();
  //   i--;
  //   console.log(i);
  //   if(i > -1){
  //     $(".carousel").append(images[i]);
  //   } else {
  //     $(".carousel").append(images[images.length - 1])
  //     i = images.length - 1;
  //   }
  //   e.preventDefault();
  // });

//   function checkPosition() {
//     if (window.matchMedia('(device-aspect-ratio: 40/71)').matches) {
//       $("#tab1").addClass("btn-primary");
//       $("#tab2").addClass("btn-secondary");
//       $("#tab3").addClass("btn-secondary");
//       $("#show3").removeClass("hide");
//       $("#show3").addClass("show");
//       $("#show1").removeClass("show");
//       $("#show1").addClass("hide");
//       $(".odin").removeClass("hide");
//       $(".odin").addClass("show");
//       $("#show2").removeClass("show");
//       $("#show2").addClass("hide");
//       $(".fcc").removeClass("hide");
//       $(".fcc").addClass("show");
//     } else {
//         //...
//         $("#tab1").addClass("btn-primary");
//         $("#tab2").addClass("btn-secondary");
//         $("#tab3").addClass("btn-secondary");
//         $(".odin").removeClass("hide");
//         $(".odin").addClass("show");
//         $(".fcc").removeClass("show");
//         $(".fcc").addClass("hide");
//         $("#show3").removeClass("show");
//         $("#show3").addClass("hide");
//
//         $("#tab1").on("click", function(e){
//           $("#tab1").removeClass("btn-secondary");
//           $("#tab1").addClass("btn-primary");
//           $("#tab2").removeClass("btn-primary");
//           $("#tab2").addClass("btn-secondary");
//           $("#tab3").removeClass("btn-primary");
//           $("#tab3").addClass("btn-secondary");
//           $(".odin").removeClass("hide");
//           $(".odin").addClass("show");
//           $(".fcc").removeClass("show");
//           $(".fcc").addClass("hide");
//           $("#show3").removeClass("show");
//           $("#show3").addClass("hide");
//           e.preventDefault();
//         });
//
//         $("#tab2").on("click", function(e){
//           $("#tab2").removeClass("btn-secondary");
//           $("#tab2").addClass("btn-primary");
//           $("#tab1").removeClass("btn-primary");
//           $("#tab1").addClass("btn-secondary");
//           $("#tab3").removeClass("btn-primary");
//           $("#tab3").addClass("btn-secondary");
//           $(".fcc").removeClass("hide");
//           $(".fcc").addClass("show");
//           $(".odin").removeClass("show");
//           $(".odin").addClass("hide");
//           $("#show3").removeClass("show");
//           $("#show3").addClass("hide");
//         e.preventDefault();
//         });
//
//         $("#tab3").on("click", function(e){
//           $("#tab3").removeClass("btn-secondary");
//           $("#tab3").addClass("btn-primary");
//           $("#tab1").removeClass("btn-primary");
//           $("#tab1").addClass("btn-secondary");
//           $("#tab2").removeClass("btn-primary");
//           $("#tab2").addClass("btn-secondary");
//           $("#show3").removeClass("hide");
//           $("#show3").addClass("show");
//           $("#show1").removeClass("show");
//           $("#show1").addClass("hide");
//           $(".odin").removeClass("hide");
//           $(".odin").addClass("show");
//           $("#show2").removeClass("show");
//           $("#show2").addClass("hide");
//           $(".fcc").removeClass("hide");
//           $(".fcc").addClass("show");
//         e.preventDefault();
//       });
//     }
// }
//
// checkPosition();

});
