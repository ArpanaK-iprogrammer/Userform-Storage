// function loginUser(){
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
    
//     setData(username,password)
// }


// function setData(username,password){
//     if(!username || !password){
//         alert("Please Enter both username and password");
//         return;
//     }

//     if(username && password){
//         localStorage.setItem(username,password);
//         window.location.href = 'home.html';
//     }else{
//         alert("Invalid username and password");
//     }
// }


function handlesubmit(e){
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    //local storage data
    localStorage.setItem("username",username);
    localStorage.setItem("password",password);

    //session storage data
    sessionStorage.setItem("username",username);
    sessionStorage.setItem("password",password);

    //redirection to home page
    window.location.href = 'home.html';
}

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit",handlesubmit);




