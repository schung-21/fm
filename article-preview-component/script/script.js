$(document).ready(function(){
    $(".share").click(function(){
        $(".media").fadeToggle();
        $(this).toggleClass("active");
    })
});