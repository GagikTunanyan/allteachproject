$(document).ready(function () {
    let all_users = [];
    console.log(all_users);
    $(".register").click(function () {
        let user = {
            name: $("#username").val(),
            email: $("#useremail").val(),
            password: $("#password").val(),
            copypassword: $("#copypassword").val()
        };
        let payman1 = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)([\w-]+\.)+[\w-]{2,4})?$/;
        if (user.name === '' && user.email === '' && user.password === '' && user.copypassword === '') {
            $(".form").addClass("error-form");
            $(".form .error").fadeIn(500)
        }
        if (user.name.length < 5) {
            $(".form .hidenName").fadeIn(500)
        }
        else {
            let us_name = user.name.split('');
            let ketadrutyun = [".","<",">","?","/",",","]","(",")","-","_","[","{","}","+","*","!","@","~","`",'1',
                '2','3', '4', '5', '6', '7','8','9','0'];
            for (let i = 0 ; i < us_name.length; i++) {
                if (ketadrutyun.indexOf(us_name[i]) !== -1){
                    $(".form .hidenName").fadeIn(500);
                    break;
                } else {
                    $(".form .hidenName").fadeOut(500);
                }
            }
        }
        if (user.email.length<8) {
            $(".form .hidenMail").fadeIn(500)
        }
        else if (!payman1.test($("#useremail").val())) {
            $(".form .hidenMail").fadeIn(500)
        }
        else {
            $(".form .hidenMail").fadeOut(500);

        }
        if(user.password.length < 8 || user.password !== user.copypassword) {
            $(".form .hidenPass,.form .hidenPass1").fadeIn(500)
        }
        else {
            $(".form .hidenPass,.form .hidenPass1").fadeOut(500)
        }
        if ($(".form .hidenMail").fadeOut(500)) {
            all_users.push(user)
        }
        console.log(all_users)
    })
});

