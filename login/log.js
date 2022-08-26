
// let button = document.querySelector("#signup");
// button.addEventListener('click',function(e){e.preventDefault()})

function good(str) {
  return (
    /[a-z]/.test(str) &&
    /[A-Z]/.test(str) &&
    /[1-9]/.test(str) &&
    /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str)
  );
}

function validateForm() {
  var valid = true;
  if (!good(document.register.pass.value)) {
    alert(
      "Please Enter valid password use (Upper&Lower Letters),[1,9]and special characters "
    );
    document.register.pass.focus();
    valid = false;
  }
  if (document.register.pass.value != document.register.pass1.value) {
    alert("Not matching ");
    document.register.pass1.focus();
    valid = false;
  }
  return valid;
}

function save() {
  let firstName = document.getElementById("FirstName");
  let lastName = document.getElementById("LastName");
  let Email = document.getElementById("email");
  let Password = document.getElementById("Pass");

  let users;

  if (localStorage.users != null) {
    users = JSON.parse(localStorage.users);
  } else {
    users = [
      {
        firstName: "Admin",
        lastName: "",
        Email: "admin",
        Password: "123456@Aa",
      },
    ];
  }
  let user = {
    firstName: firstName.value,
    lastName: lastName.value,
    Email: Email.value,
    Password: Password.value,
  };

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};

function CheckSave() {

  console.log("sdasadasd");
  if(true)
  {
      save();
  }
  else 
  {
    return;
  }
}

const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");
    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); //preventing form submit
    forms.classList.toggle("show-signup");
  });
});



