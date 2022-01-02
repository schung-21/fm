$(document).ready(function(){
    $.getJSON("data.json", function(data){

        $(".daily").click(function(){
            $(this).css("color", "white");
            $(".weekly, .monthly").css("color", "hsl(235, 45%, 61%)");

            $(".current").each(function(i){
                $(this).html(data[i].timeframes.daily.current + "hrs");
            });

            $(".previous").each(function(i){
                $(this).html("Last Day - " + data[i].timeframes.daily.previous + "hrs");
            });
        });

        $(".weekly").click(function(){
            $(this).css("color", "white");
            $(".daily, .monthly").css("color", "hsl(235, 45%, 61%)");

            $(".current").each(function(i){
                $(this).html(data[i].timeframes.weekly.current + "hrs");
            });

            $(".previous").each(function(i){
                $(this).html("Last Day - " + data[i].timeframes.weekly.previous + "hrs");
            });
        });

        $(".monthly").click(function(){
            $(this).css("color", "white");
            $(".daily, .weekly").css("color", "hsl(235, 45%, 61%)");

            $(".current").each(function(i){
                $(this).html(data[i].timeframes.monthly.current + "hrs");
            });

            $(".previous").each(function(i){
                $(this).html("Last Month - " + data[i].timeframes.monthly.previous + "hrs");
            });
        });

        $(".weekly").click();
        
    })
});