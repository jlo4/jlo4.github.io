
//
// window.onload = function(){
//     function showOdin() {
//       var tabs = document.getElementById('odin');
//       for(var i = 0; i < odin.length; i++){
//         tabs[i].style.display = 'none';
//       }
//     }
//
// }


// var images = [
//               '<img class="show" src="photos/colorgame.png" alt="">',
//               '<img class="show" src="photos/colorpad.png" alt="">',
//               '<img class="show" src="photos/quote_gen.png" alt="">',
//               '<img class="show" src="photos/survey_form.png" alt="">',
//               '<img class="show" src="photos/tribute.png" alt="">'
//             ]
//
// var projects = [
//
//
//             ]


$(document).ready(function(){
  // var i = 0;

  function checkPosition() {
    if (window.matchMedia('(device-aspect-ratio: 40/71)').matches) {
      $("#tab1").addClass("btn-primary");
      $("#tab2").addClass("btn-secondary");
      $("#tab3").addClass("btn-secondary");
      $("#show3").removeClass("hide");
      $("#show3").addClass("show");
      $("#show1").removeClass("show");
      $("#show1").addClass("hide");
      $(".odin").removeClass("hide");
      $(".odin").addClass("show");
      $("#show2").removeClass("show");
      $("#show2").addClass("hide");
      $(".fcc").removeClass("hide");
      $(".fcc").addClass("show");
    } else {
        //...
        $("#tab1").addClass("btn-primary");
        $("#tab2").addClass("btn-secondary");
        $("#tab3").addClass("btn-secondary");
        $(".odin").removeClass("hide");
        $(".odin").addClass("show");
        $(".fcc").removeClass("show");
        $(".fcc").addClass("hide");
        $("#show3").removeClass("show");
        $("#show3").addClass("hide");

        $("#tab1").on("click", function(e){
          $("#tab1").removeClass("btn-secondary");
          $("#tab1").addClass("btn-primary");
          $("#tab2").removeClass("btn-primary");
          $("#tab2").addClass("btn-secondary");
          $("#tab3").removeClass("btn-primary");
          $("#tab3").addClass("btn-secondary");
          $(".odin").removeClass("hide");
          $(".odin").addClass("show");
          $(".fcc").removeClass("show");
          $(".fcc").addClass("hide");
          $("#show3").removeClass("show");
          $("#show3").addClass("hide");
          e.preventDefault();
        });

        $("#tab2").on("click", function(e){
          $("#tab2").removeClass("btn-secondary");
          $("#tab2").addClass("btn-primary");
          $("#tab1").removeClass("btn-primary");
          $("#tab1").addClass("btn-secondary");
          $("#tab3").removeClass("btn-primary");
          $("#tab3").addClass("btn-secondary");
          $(".fcc").removeClass("hide");
          $(".fcc").addClass("show");
          $(".odin").removeClass("show");
          $(".odin").addClass("hide");
          $("#show3").removeClass("show");
          $("#show3").addClass("hide");
        e.preventDefault();
        });

        $("#tab3").on("click", function(e){
          $("#tab3").removeClass("btn-secondary");
          $("#tab3").addClass("btn-primary");
          $("#tab1").removeClass("btn-primary");
          $("#tab1").addClass("btn-secondary");
          $("#tab2").removeClass("btn-primary");
          $("#tab2").addClass("btn-secondary");
          $("#show3").removeClass("hide");
          $("#show3").addClass("show");
          $("#show1").removeClass("show");
          $("#show1").addClass("hide");
          $(".odin").removeClass("hide");
          $(".odin").addClass("show");
          $("#show2").removeClass("show");
          $("#show2").addClass("hide");
          $(".fcc").removeClass("hide");
          $(".fcc").addClass("show");
        e.preventDefault();
      });
    }
}

checkPosition();

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
  // $(".next").on("click", function(e){
  //   var showImg = $(".show");
  //   var nextImg = showImg.next();
  //   if(nextImg.length === 0){
  //     nextImg = $(".carousel img").first();
  //   }
  //   showImg.removeClass("show").addClass("hide").css("z-index", -20);
  //   nextImg.addClass("show").removeClass("hide").css("z-index", 10);
  //   $(".carousel img").not([showImg, nextImg]).css("z-index", 1);
  //
  //   e.preventDefault();
  // });
  //
  // $(".previous").on("click", function(e){
  //   var showImg = $(".show");
  //   var prevImg = showImg.prev();
  //   if(prevImg.length === 0){
  //     prevImg = $(".carousel img").last();
  //   }
  //   showImg.removeClass("show").addClass("hide").css("z-index", -20);
  //   prevImg.addClass("show").removeClass("hide").css("z-index", 10);
  //   $(".carousel img").not([showImg, prevImg]).css("z-index", 1);
  //
  //   e.preventDefault();
  //   });
});
