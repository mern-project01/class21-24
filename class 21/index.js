document.getElementById('error').style.display='none';

document.getElementById('submite-button').addEventListener('click', function(){
   //get the email
    const email =document.getElementById('user-email');
    const intEmail = email.value;
  

   //get password
   const password =document.getElementById('user-password');
   const intPassword=password.value;


  // apply for chang directory 
   
   //work for error
   
   if (intEmail=="st@gmail.com" && intPassword==12345 ){
      window.location.replace("/widrow.html");
   }
   else{
      document.getElementById('error').style.display='block';

   }

})