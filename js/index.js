// test to ensure the file is working as intended
console.log("your index.js file is loaded correctly!");
// global variable that will be used to set a custom color in the .hover functions
hover_color = "#4b6b3d"
// .hover functions to create the desired interaction when hovering over a link on the navigation bar & gallery
$(".navLogo a").hover(function(){
    $(this).css("text-decoration-line", "underline");
    }, function(){
    $(this).css("text-decoration-line", "none");
  });
$("li a").hover(function(){
    $(this).css("color", hover_color);
    }, function(){
    $(this).css("color", "black");
  });
$(".heading").hover(function(){
    $(this).css("text-decoration-line", "underline");
    }, function(){
    $(this).css("text-decoration-line", "none");
  });