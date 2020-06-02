$(document).ready(function () {
    $( "#right" ).click(function() {
        $( "#d,#d2" ).animate({ "left": "+=50px" }, "slow" );
    });

    $( "#left" ).click(function(){
        $( "#d,#d2" ).animate({ "left": "-=50px" }, "slow" );
    });
});