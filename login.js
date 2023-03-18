document.querySelector("#loginBtn").addEventListener("click",info);

function info(){
    const userName=document.getElementById("userName");
    const nameText=userName.value;
    const password=document.getElementById("password");
    const passText=password.value;

    if(nameText=="bismillah" && passText==131361){
        location.href="index.html"
    }else{
        alert("please fill input")
    }
    userName.value="";
    password.value="";
}