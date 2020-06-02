$(document).ready(function () {
    $(".login").click(function () {
        let user = {
            username: $(".Username").val(),
            password: $(".Password").val()
        };

        if (user.username ==='' ||  user.password === '') {
            $(".formerror").fadeIn(100);
            $(".Username").addClass("Username-error");
            $(".Password").addClass("Password-error");
        }
        else {
            $(".formerror").fadeOut(100);
            $(".Username").removeClass("Username-error");
            $(".Password").removeClass("Password-error");
        }
        if (user.username.length < 5){
            $(".ername").fadeIn(100);
            $(".Username").addClass("Username-error");
        }
        else {
            let name_array = user.username.split('');
            let ketadrutyun = [".","<",">","?","/",",","]","(",")","-","_","[","{","}","+","*","!","@","~","`",'1',
                '2','3', '4', '5', '6', '7','8','9','0'];
            for (let i = 0 ; i < name_array.length; i++ ){
                if (ketadrutyun.indexOf(name_array[i]) !== -1) {
                    $(".ername").fadeIn(100);
                    $(".Username").addClass("Username-error");
                    break
                }
                else {
                    $(".ername").fadeOut(100);
                    $(".Username").removeClass("Username-error");
                }
            }
        }
        if (user.password.length < 6) {
            $(".erpass").fadeIn(100);
            $(".Password").addClass("Password-error");
        }
        else {
            $(".erpass").fadeOut(100);
            $(".Password").removeClass("Password-error");
        }

        user = login(user.username, user.password);
        if (user === null){
            $(".ername").fadeIn(100);
            $(".Username").addClass("Username-error");
            $(".erpass").fadeIn(100);
            $(".Password").addClass("Password-error");
        }
        else {
            $(".ername").fadeOut(100);
            $(".Username").removeClass("Username-error");
            $(".erpass").fadeOut(100);
            $(".Password").removeClass("Password-error");
            $(".form").fadeOut(1000);
            $(".user").fadeIn(3000);
            $(".user .user-name").append(' ' + user.name);
            $(".user .user-firstname").append(' ' + user.firstname);
            $(".user .user-password").append(' ' + user.pass);
            $(".user .user-login").append(' ' + user.login);
            $(".user .user-age").append(' ' + user.age);
        }

        console.log(user, 'user');
    })

});

let users = [
    {
        login:"Gagikkk",
        pass:"Gagik1234",
        name:"Gagik",
        firstname:"Tunanyan",
        age:23
    },
    {
        login:"Hazarapet Tunanyan",
        pass:"Hazarapet1234",
        name:"Hazarapet",
        firstname:"Tunanyan",
        age:27
    },
    {
        login:"Garik Tunanyan",
        pass:"Garik1234",
        name:"Garik",
        firstname:"Tunanyan",
        age:30
    }

];

let login = (login,pass)=>{
    for( let i=0; i < users.length; i++){
        if (users[i].login === login && users[i].pass === pass){
            return users[i];
        }
    }
    return null;
};
