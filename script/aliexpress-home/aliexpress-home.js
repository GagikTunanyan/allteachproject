$(document).ready(function () {
    $(".person-sign-in-dropdown").hover(function () {
        $(".dropdown-menu-my-class-father").fadeIn(100).dropdown('show');
    }, function () {
        $(".dropdown-menu-my-class-father").fadeOut(100).dropdown('hide');
    });
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let func = () => {
        if($(".one-three-picture-complect").is(":visible")){
            $(".one-three-picture-complect").fadeOut(500);
            $(".two-three-picture-complect").fadeIn(500)
        }
        else {
            $(".one-three-picture-complect").fadeIn(500);
            $(".two-three-picture-complect").fadeOut(500)
        }
    };
    setInterval(func,5000);
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    $.simpleTicker($("#demo"),{
        'effectType':'roll'
    });


    let second=59;
    let minutes = 30;
    let hours = 5;
    let day = 2 ;

    let timer = () =>{
        if (day === 0 && hours === 0 && minutes === 0 && second ===0 ) {
            console.log ("finished");
            return
        }
        else {
            console.log(day, hours, minutes, second)
        }
        second--;
        if (second < 0 ) {
            minutes--;
            second = 59
        }

        if (minutes < 0) {
            hours--;
            minutes = 59;
        }

        if (hours < 0) {
            day--;
            hours = 23
        }
    };

    setInterval(timer,1000)
});
