
var username=document.getElementById('username');
var password=document.getElementById('password');
function verify(){
if(username.value=="admin"||password.value=="12345"){
    window.location.assign("main.html");
    
    alert('Login Successful');
}
else{
    alert("Invalid Information");
    return;
}
}






