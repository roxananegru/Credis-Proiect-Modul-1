function formValidate(e){e.preventDefault();let t=document.getElementById("firstname"),o=document.getElementById("lastname"),l=document.getElementById("email"),d=document.getElementById("subject"),n=document.getElementById("textarea"),r=!1;t.value.length<5?(t.style.borderBottom="1px solid red",r=!0):t.style.borderBottom="1px solid #9eb5b1",o.value.length<5?(o.style.borderBottom="1px solid red",r=!0):o.style.borderBottom="1px solid #9eb5b1",l.value.indexOf("gmail")>0||l.value.indexOf("@yahoo")>0?l.style.borderBottom="1px solid #9eb5b1":(l.style.borderBottom="1px solid red",r=!0),d.value.length<5?(d.style.borderBottom="1px solid red",r=!0):d.style.borderBottom="1px solid #9eb5b1",n.value.length<10?(n.style.borderBottom="1px solid red",r=!0):n.style.borderBottom="1px solid #9eb5b1",!1===r&&alert("Your message has been sent!")}$(document).ready(function(){$("#search-form").on("submit",function(e){e.preventDefault();let t=$("#search-input").val();t?window.open("gallery_single_canvas.html?search="+t):window.open("gallery_single_canvas.html")}),$('[data-toggle="tooltip"]').tooltip()});
