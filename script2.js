function info(){
   var useremail=document.getElementById("email").value;
   var password=document.getElementById('password').value;

  if(useremail===''){
    alert('please fill the email');
  }
  if(password===''){
    alert('please fill the password');
  }
  else if(password.length <8){
   alert("password must be at lest 8 charcter");
  }
  else{
    return true;
  }
}