/* Add your JavaScript to this file */
"use strict"

document.addEventListener('DOMContentLoaded', function() {

    var message = document.querySelector("div.message");
    var button = document.querySelector("button.btn");
    var email = document.getElementById("email");
    var navbutton = document.querySelector("button.btn");
   
    button.addEventListener("click", function(e){
        e.preventDefault();
        getInfo();
    })

    navbutton.addEventListener("hover")

    function getInfo(){ 
        var email = document.getElementById("email");
        if (email.value == ""){
			message.innerHTML = "Please enter a valid email address"
		}else{
			message.innerHTML = `Thank you! Your email address ${email.value} has been added to our mailing list!`;
        }
    };
})