let username = document.getElementById('username')
let password = document.getElementById('password')
let signIn = document.getElementById('signIn')

signIn.addEventListener("click",function(){
    console.log(username.value,password.value);
})