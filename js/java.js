var button = document.querySelector(".choice-block");
var close = document.querySelector(".btn");   
var popup = document.querySelector(".hotel-search");
            
    button.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
        checkin.focus();
    });
                                   
    close.addEventListener("click", function(event) {
            event.preventDefault();
            popup.classList.remove("modal-content-show");
    });       
            
    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (popup.classList.contains("modal-content-show")) {
                popup.classList.remove("modal-content-show");
            }}
    });        