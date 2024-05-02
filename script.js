let eye = document.getElementById("eye");
let password = document.querySelector(".password")

eye.addEventListener("click",()=>{
  if(password.type === "password"){
    password.type = "text";
    eye.className = "fa-solid fa-eye";
  }else{
    password.type = "password";
    eye.className = "fa-solid fa-eye-slash";
  }
})