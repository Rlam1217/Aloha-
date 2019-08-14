

/* alert box click for email subscribe*/

document.addEventListener("DOMContentLoaded", function() {
  
  
  
  const button = document.getElementById('subscribeButton');
  
  
  
  function validFunction(event) {
    event.preventDefault();
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const userEmail = document.getElementById('mail');
    if(userEmail.value.match(emailFormat))
    {
      alert("Thanks for Subscribing!");
    } 
    else
    {
      alert("Please submit a valid email!");
    }
    
  }
  
  
  
  // Assigning event listeners to the button
  button.addEventListener("click", validFunction);

});