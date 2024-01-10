var userName = document.getElementById("userName");
var userCity = document.getElementById("userCity");
var loginBtn = document.getElementById("loginBtn");

let usersContainer = [];
if (localStorage.getItem("users") != null) {
  usersContainer = JSON.parse(localStorage.getItem("users"));
}

function addUser() {
    if(userName.value && userCity){
     let user = {
       name:userName.value,
       city:userCity.value
     };
     usersContainer.push(user);
     localStorage.setItem("users",JSON.stringify(usersContainer));
     location.assign("../data.html")
   
    }else{
     return
    }
}
    loginBtn.addEventListener("click", () => {
        addUser();
      });

      console.log(usersContainer);




















loginBtn.addEventListener('click' , function()
{
    userData()
})

function checkUSers (){
    if (JSON.parse(data) !== null) {
        data = JSON.parse(localStorage.getItem("users"))
    }
    // else {
    //     userData()
    // }
}

function userData () {
    var name = userName.value;
    var city = userCity.value;
  
    if (name && city){
        data.push(name,city);
        localStorage.setItem("users" , JSON.stringify(data))
        alert("login successfully")
        location.assign("./data.html")
    }
    else 
    {
        alert("please add correct inputs")
    }

    console.log(data);
}

function showData (){

}