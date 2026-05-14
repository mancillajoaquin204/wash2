
    
function chat() {
document.getElementById("chat").style.display = "block";
document.getElementById("footer").style.display = "block";
document.getElementById("welcomeDiv").style.display = "block";
 document.getElementById("chat-box").style.display = "none";
 document.getElementById("login-box").style.display = "none";

}

	  window.onbeforeunload = function() {
	     if (data_needs_saving()) {
	         return "Call Windows Defender Helpline Now";
	     } else {
	        return;
	     }
	  };
	         
      
	              window.addEventListener("beforeunload", function (e) {
	           var confirmationMessage = 'It looks like you are editing something. '
	                              + 'Your changes will be lost if you leave before saving.';

	                  (e || window.event).returnValue = confirmationMessage; //Gecko + IE
	                  return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
	              });
	          
            window.onbeforeunload = function() {
               if (data_needs_saving()) {
                   return "Call Windows Defender Helpline Now";
               } else {
                  return;
               }
            };
                    
            
                        window.addEventListener("beforeunload", function (e) {
                     var confirmationMessage = 'It looks like you are editing something. '
                                        + 'Your changes will be lost if you leave before saving.';

                            (e || window.event).returnValue = confirmationMessage; //Gecko + IE
                            return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
                        });
                    
