let users ;
users = JSON.parse(localStorage.users);
let Email = document.getElementById("loginEmail");
let Password = document.getElementById("loginPass");

let btn = document.querySelector('#Login');
btn.addEventListener('click',function (e){
    e.preventDefault()
})
var checklog = getElementById("CheckLog");
function checkData(){
    for (let i = 0; i < users.length; i++) {
        
        if (Email.value == "admin") {
            if (Password.value != users[0].Password) {
                alert("The password is incorrect");
            } else {
                location.assign('..//HTML Files/Admin.html');
            }
        } else {
          if (Email.value == users[i].Email) {
          if(Password.value != users[i].Password) {
            alert("The password is incorrect");
          } else {
            window.location.assign('../HTML Files/Home.html');
          }
          }
          if (i+1 == users.length) {
            if (Email.value != users[i].Email) {
              alert('the Email is incorrect');
            }
          }
        }
      }
}