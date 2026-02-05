$(document).ready(function() {
    loadTodos();
    $("#newBtn").click(function() {
        var text = prompt("Enter new TO DO:");
        if (text && text.trim() !== "") {
            addTodo(text);
            saveTodos();
        }
    });

    function addTodo(text) {
        var $div = $("<div>").addClass("todo-item").text(text);

        $div.click(function() {
            if (confirm("Do you want to remove this TO DO?")) {
                $(this).remove();
                saveTodos();
            }
        });

        $("#ft_list").prepend($div);
    }

    function saveTodos() {
        var todos = [];
        $(".todo-item").each(function() {
            todos.push($(this).text());
        });

        var jsonStr = encodeURIComponent(JSON.stringify(todos));
        var d = new Date();
        d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();

        document.cookie = "ft_list=" + jsonStr + ";" + expires + ";path=/";
    }

    function loadTodos() {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var c = cookies[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            
            if (c.indexOf("ft_list=") == 0) {
                var jsonStr = c.substring("ft_list=".length, c.length);
                try {
                    var todos = JSON.parse(decodeURIComponent(jsonStr));
                    for (var j = todos.length - 1; j >= 0; j--) {
                        addTodo(todos[j]);
                    }
                } catch (e) {
                    console.log("Error loading cookie");
                }
            }
        }
    }
});