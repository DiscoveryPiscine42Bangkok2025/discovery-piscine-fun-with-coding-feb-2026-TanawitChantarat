$(document).ready(function() {
    $("#btn").click(function() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var color = "rgb(" + r + ", " + g + ", " + b + ")";
        $("body").css("background-color", color);
        console.log("New Color: " + color);
    });

});