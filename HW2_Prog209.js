document.addEventListener("DOMContentLoaded", function (event){
    document.getElementById("NewUser").disabled = true;
    document.getElementById("ExistingUser").disabled = true;
}) 

function formSumbit(Register) 
{
   document.getElementById("NewUser").disabled = false;
   let userName = document.getElementById("userName").value;
   let Password = document.getElementById("Password").value;
   let City = document.getElementById("City").value;
   let State = document.getElementById("State").value;

   if (userName.length > 2 && Password.length > 2 && City.length > 2 && State.length > 1)
   {
       alert("Hello " + userName + ". We are glad to have you!");
   }
}

function formSumbit1(LogIn)
{
   document.getElementById("ExistingUser").disabled = false;
   let Username = document.getElementById("Username").value;
   let Password1 = document.getElementById("Password1").value;  
   
   if (Username.length > 2 && Password1.length > 2)
   {
    alert("Hello " + Username + ". Welcome back!");
   }
}
