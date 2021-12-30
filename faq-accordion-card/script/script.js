$(document).ready(function(){
    $(".qna").click(function(){
        $(".question", this).toggleClass("active");
        $(".answer", this).slideToggle();
    })
});