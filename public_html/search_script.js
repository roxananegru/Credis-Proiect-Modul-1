//search page jquery script
$(document).ready(function(){
    let url = new URL(window.location.href);
    let search = url.searchParams.get("search");
    
    if(search) {
        $("#search-input").val(search);
        
        $("#search-value").html(search);
        $("#search-area").fadeIn();
    }
});