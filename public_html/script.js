//jquery script search form
$(document).ready(function () {
    //search-form script
    $("#search-form").on("submit", function (e) {
        e.preventDefault();
        
        let search = $("#search-input").val();
        
        if(search) {
            window.open("gallery_single_canvas.html?search="+search);
        } else {
            window.open("gallery_single_canvas.html");
        }
    });
    //tooltip 
     $('[data-toggle="tooltip"]').tooltip(); 
});
//contact form validate function
function formValidate(e) {
    e.preventDefault();

    let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let textarea = document.getElementById("textarea");

    let hasError = false;
    //validate firstname       
    if(firstname.value.length < 5) {
        firstname.style.borderBottom = "1px solid red";
        hasError = true;
    } else {
        firstname.style.borderBottom = "1px solid #9eb5b1";
    }
    //validate lastname
    if(lastname.value.length < 5) {
        lastname.style.borderBottom = "1px solid red";
        hasError = true;
    } else {
        lastname.style.borderBottom = "1px solid #9eb5b1";
    }
    //validate email
    if(email.value.indexOf("gmail") > 0 || email.value.indexOf("@yahoo") > 0) {
        email.style.borderBottom = "1px solid #9eb5b1";
    } else {
        email.style.borderBottom = "1px solid red";
        hasError = true;
    }
    //validate subject
    if(subject.value.length < 5) {
        subject.style.borderBottom = "1px solid red";
        hasError = true;
    } else {
        subject.style.borderBottom = "1px solid #9eb5b1";
    }
    //validate textarea
    if(textarea.value.length < 10) {
      textarea.style.borderBottom = "1px solid red";
      hasError = true;
    } else {
        textarea.style.borderBottom = "1px solid #9eb5b1";
    } 
    
    if(hasError === false) {
        alert("Your message has been sent!");
    }
    
    
}
