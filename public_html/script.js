$(document).ready(function () {
    //search-form script
    $("#search-form").on("submit", function (e) {
        e.preventDefault();
        
        let search = $("#search-input").val();
        
        if(search) {
            window.open("gallery_single_canvas.html?search="+search, "_self");
        } else {
            window.open("gallery_single_canvas.html", "_self");
        }
    });
});


