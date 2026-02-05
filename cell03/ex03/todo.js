var ft_list = document.getElementById('ft_list');
window.onload = function() {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var c = cookies[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        
        if (c.indexOf("ft_list=") == 0) {
            var jsonStr = c.substring("ft_list=".length, c.length);
            try {
                var todos = JSON.parse(decodeURIComponent(jsonStr));
                for (var j = todos.length - 1; j >= 0; j--) {
                    createTodo(todos[j]);
                }
            } catch (e) {
                console.log("Error loading cookie");
            }
        }
    }
}

function newTodo() {
    var text = prompt("Enter new TO DO:");
    if (text && text.trim() !== "") {
        createTodo(text);
        saveTodos();
    }
}

function createTodo(text) {
    var div = document.createElement("div");
    div.className = "todo-item";
    div.innerHTML = text;

    div.onclick = function() {
        if (confirm("Do you want to remove this TO DO?")) {
            this.remove();
            saveTodos();
        }
    };

    ft_list.insertBefore(div, ft_list.firstChild);
}

function saveTodos() {
    var todos = [];
    var items = ft_list.children;
    
    for (var i = 0; i < items.length; i++) {
        todos.push(items[i].innerHTML);
    }
    var jsonStr = encodeURIComponent(JSON.stringify(todos));
    
    var d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();

    document.cookie = "ft_list=" + jsonStr + ";" + expires + ";path=/";
}