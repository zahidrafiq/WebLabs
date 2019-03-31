

function startup(){
    var btnLogin = document.getElementById("btnLogin");
    btnLogin.addEventListener('click',function(){
        var txtNameVal = document.getElementById('txtUserName').value;
        if(txtNameVal){
            var btnSignIn = document.getElementById("btnSignIn");
            btnSignIn.innerText=txtNameVal;
			$('#signin-modal').modal('hide');
        }else{
            window.alert("Please enter your user name");
        }

    })
}

window.addEventListener('scroll', function(e){
    var topNavElem = document.getElementById('topNav');
    console.log(window.pageYOffset);
    if (window.pageYOffset > 50) {
        topNavElem.className = "navbar fixed-top navbar-expand-md bg-dark";
    }else{
        topNavElem.className = "navbar fixed-top navbar-expand-md bg-transparent";
    }
});

