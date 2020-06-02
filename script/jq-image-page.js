$(document).ready(function () {
    let images = [
        {
            href_image:"images/bootstrap/image-page/image.jpg",
            title_image:"3800$",
            info_image:"Machine",
            author:"Garegin Tunanyan",
            mini_image:"images/bootstrap/image-page/image.jpg",
            url_image:"background-image:url(images/bootstrap/image-page/image.jpg);"
        },
        {
            href_image:"images/bootstrap/image-page/image5.jpg",
            title_image:"6800$",
            info_image:"Machine",
            author:"Garegin Tunanyan",
            mini_image:"images/bootstrap/image-page/image5.jpg",
            url_image:"background-image:url(images/bootstrap/image-page/image5.jpg);"
        },
        {
            href_image:"images/bootstrap/image-page/image2.jpg",
            title_image:"4800$",
            info_image:"Machine",
            author:"Garegin Tunanyan",
            mini_image:"images/bootstrap/image-page/image2.jpg",
            url_image:"background-image:url(images/bootstrap/image-page/image2.jpg);"
        },
        {
            href_image:"images/bootstrap/image-page/image3.jpg",
            title_image:"2800$",
            info_image:"Machine",
            author:"Garegin Tunanyan",
            mini_image:"images/bootstrap/image-page/image3.jpg",
            url_image:"background-image:url(images/bootstrap/image-page/image3.jpg);"
        },
        {
            href_image:"images/bootstrap/image-page/image4.jpg",
            title_image:"3200$",
            info_image:"Machine",
            author:"Garegin Tunanyan",
            mini_image:"images/bootstrap/image-page/image4.jpg",
            url_image:"background-image:url(images/bootstrap/image-page/image4.jpg);"
        },
        {
            href_image:"images/bootstrap/image-page/image6.jpg",
            title_image:"5200$",
            info_image:"Machine",
            author:"Garegin Tunanyan",
            mini_image:"images/bootstrap/image-page/image6.jpg",
            url_image:"background-image:url(images/bootstrap/image-page/image6.jpg);"
        }

    ];

    let func1 = (images_array,html_for_replace,div_in_append) => {
        div_in_append.children().remove();
        for (let i = 0; i < images_array.length; i++) {
            let html_replace = html_for_replace.replace("__image__",images_array[i].href_image);
            html_replace = html_replace.replace("__title__",images_array[i].title_image);
            html_replace = html_replace.replace("__infoimg__",images_array[i].info_image);
            html_replace = html_replace.replace("__author__",images_array[i].author);
            html_replace = html_replace.replace("__miniimage__",images_array[i].mini_image);
            html_replace = html_replace.replace("__url__",images_array[i].url_image);

            div_in_append.append(html_replace);
        }
    };
    $.get('slide-image-elem.html',function (div_string) {
        func1(images, div_string, $('#image-list-slide'))
    });

    lc_lightbox('.elem', {
        border_w: 3,
        skin:'dark',
        gallery :true,
        socials: true,
        fullscreen: true,
        mousewheel: true,
    });
});