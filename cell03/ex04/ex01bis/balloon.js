$(document).ready(function() {
    var size = 200;
    var colors = ['red', 'green', 'blue'];
    var colorIndex = 0;

    function updateBalloon() {
        $("#balloon").css({
            "width": size + "px",
            "height": size + "px",
            "background-color": colors[colorIndex]
        });
    }

    $("#balloon").click(function() {
        size += 10;
        colorIndex++;

        if (colorIndex >= colors.length) {
            colorIndex = 0;
        }
        if (size > 420) {
            size = 200;
            colorIndex = 0;
        }

        updateBalloon();
    });

    $("#balloon").mouseleave(function() {
        if (size > 200) {
            size -= 5;
            colorIndex--;
            if (colorIndex < 0) {
                colorIndex = colors.length - 1;
            }

            updateBalloon();
        }
    });
});