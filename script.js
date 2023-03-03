const email=document.getElementById('email')
const password=document.getElementById('password');
const form=document.getElementById('form');

form.addEventListener('submit',e=>{
    e.preventDefault();
    validateInputs();
})
const setError=(element,message)=>{
 const inputcontrol=element.parentElement;
 const errorDisplay=inputcontrol.querySelector('.error');

   errorDisplay.innerText=message;
   inputcontrol.classList.add('error');
   inputcontrol.classList.remove('success');
}
const setSuccess=(element)=>{
    const inputcontrol=element.parentElement;
    const errorDisplay=inputcontrol.querySelector('.error');
   
      errorDisplay.innerText='';
      inputcontrol.classList.add('success');
      inputcontrol.classList.remove('error');
   }
const validateInputs=()=>{
 const emailValue=email.value.trim();
const passwordValue=password.value.trim();

if(emailValue ===''){
 setError(email,"email is required");
}
else if(!isValidEmail(emailValue)){
    setError(email,"email is not sure");  
}
else{
  setSuccess(email);
}

if(passwordValue===''){
    setError(password, "password is required");
}
else if(passwordValue.length <8){
    setError(password, "password must be at lest 8 charcter ");
}
else{
    setSuccess(password);
}

}