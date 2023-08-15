document.getElementById('submit').addEventListener('click', function(){
   const emailField = document.getElementById('user-email');
   const email = emailField.value;
   
   const passwordField = document.getElementById('password');
   const pass = passwordField.value;

  if(email === "Kausar@gmail.com" && pass === "raj"){
     window.location.href = 'bank.html';
  }else{
    alert('please fill form');
  }
})



// bank dashboard js 



