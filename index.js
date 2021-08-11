var admin={username:"sarah",password:"sarah"};

function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == admin.username && password == admin.password){
    window.location = "admin.html"; // Redirecting to other page.
    }
    else{
        window.location = "index.html";
    }
    }

    function changepw(){
        var oldpw=document.getElementById("oldpw").value;
        var newpw=document.getElementById("newpw").value;
      if (oldpw==admin.password){
        admin.password=newpw.value;
      }
      else{
        alert("the old password is wrong");
      }
    }
