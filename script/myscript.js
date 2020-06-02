
$(".print").click(function() {
    $( "p:hidden" ).first().fadeIn( "slow" );
});
$(".hidden").click(function () {
    $("p:visible").first().fadeOut("slow");
});