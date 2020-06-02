$(document).ready(function () {
    for (let i=1 ; i<=31; i++)  {
        $(".select-day").append("<option class='opt-" + i + "'>"+i+"</option>");
    }

    $(".select-day .opt-23").attr('selected', '');

    for (let i=2020; i>=1905; i--) {
        $(".select-year").append("<option>"+i+"</option>");
    }

    $(".first-name").focusout(function () {
        if ($(".first-name").val() === ''){
            $(".first-name").addClass("error-border");
            $(".icon-error-first").fadeIn(100);
            $(".error-name-text").fadeOut(100)
        }
    });
    $(".first-name").focusin(function () {
        if ($(this).hasClass("error-border")){
            $(".error-name-text").fadeIn(100);
            $(this).removeClass("error-border");
            $(".icon-error-first").fadeOut(100)
        }

    });

    $(".Last-name").focusout(function () {
        if ($(".Last-name").val() === ''){
            $(".Last-name").addClass("error-border");
            $(".icon-error-last").fadeIn(100)
        }
    });
    $(".Last-name").focusin(function () {
        $(this).removeClass("error-border");
        $(".icon-error-last").fadeOut(100)
    });

    $(".email-or-phonenumber").focusout(function () {
        if ($(this).val() === ''){
            $(".error-email-or-phonenumber-text").fadeOut(100);
            $(this).addClass("error-border");
            $(".icon-error-email").fadeIn(100)
        }
    });
    $(".email-or-phonenumber").focusin(function () {
        if ($(this).hasClass("error-border")){
            $(".error-email-or-phonenumber-text").fadeIn(100);
            $(this).removeClass("error-border");
            $(".icon-error-email").fadeOut(100)
        }
    });

    $(".password").focusout(function () {
        if ($(this).val() === ''){
            $(".error-password-text").fadeOut(100);
            $(this).addClass("error-border");
            $(".icon-error-password").fadeIn(100)
        }
    });
    $(".password").focusin(function () {
        if ($(this).hasClass("error-border")){
            $(".error-password-text").fadeIn(100);
            $(this).removeClass("error-border");
            $(".icon-error-password").fadeOut(100)
        }
    });

    $(".custom-div-hidden select").focusout(function () {
        if ($(this).val() !== '1' && $(this).val() !== '2' &&
            $(this).val() !== '3') {
            $(this).addClass("error-border");
            $(".custom-icon").fadeIn(100)
        }
    });
    $(".custom-div-hidden select").on('focus',function () {
        $(this).removeClass("error-border");
        $(".custom-icon").fadeOut(100)
    });

    $(".radio-custom").on("click" ,function () {
        $(".custom-div-hidden").fadeIn(50);
        $("#language-country-border").addClass("language-country-border-hidden")
    });

    $(".radio-female, .radio-male").on ("click",function () {
        $(".custom-div-hidden").fadeOut(50);
        $("#language-country-border").removeClass("language-country-border-hidden")
    });
    $(".input-login").focus();
    //language div 345 px top
});