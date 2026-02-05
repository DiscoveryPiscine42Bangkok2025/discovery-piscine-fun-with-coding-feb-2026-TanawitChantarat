$(document).ready(function() {
    $("#btnCalc").click(function() {
        
        var leftStr = $("#leftMember").val();
        var rightStr = $("#rightMember").val();
        var op = $("#operator").val();

        var left = parseInt(leftStr);
        var right = parseInt(rightStr);

        if (isNaN(left) || isNaN(right) || left < 0 || right < 0) {
            alert("Error :(");
            console.log("Error :(");
            return;
        }

        if ((op === '/' || op === '%') && right === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        // 3. คำนวณ
        var result;
        if (op === '+') {
            result = left + right;
        } else if (op === '-') {
            result = left - right;
        } else if (op === '*') {
            result = left * right;
        } else if (op === '/') {
            result = left / right;
        } else if (op === '%') {
            result = left % right;
        }

        alert(result);
        console.log(result);
    });

    setInterval(function() {
        alert("Please, use me...");
    }, 30000);

});