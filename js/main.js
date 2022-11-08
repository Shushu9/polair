window.addEventListener('DOMContentLoaded', () => {


    //Hamburger menu

    const menu = document.querySelector('.navigation'),
        menuItem = document.querySelectorAll('.navigation__item'),
        hamburger = document.querySelector('.hamburger');


    function hamburgerToggle() {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('navigation_active');
        if (searchBox.classList.contains('search_active')) {
            searchBox.classList.toggle('search_active');
        }
    }


    hamburger.addEventListener('click', hamburgerToggle);

    menuItem.forEach(item => {
        item.addEventListener('click', hamburgerToggle);
    });


    //Search form menu

    const searchBtn = document.querySelector('.header__search'),
        searchBox = document.querySelector('.search'),
        submitBtn = document.querySelector('.form__btn'),
        form = document.querySelector('.form');


    function toggleSearchForm(event) {
        searchBox.classList.toggle('search_active');
        event.preventDefault();
    }

    form.addEventListener("submit", toggleSearchForm, false);


    searchBtn.addEventListener('click', function () {
        searchBox.classList.toggle('search_active');
        if (hamburger.classList.contains('hamburger_active')) {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('navigation_active');
        }
    });


    submitBtn.addEventListener('click', function () {
        searchBox.classList.toggle('search_active');
    });




    // slick slider на блоке Promo с использование jQuerry 


    $('.slider').slick({
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: true,
    });


    // slick slider на блоке Brands если ширина устройства меньше 769px

    if (document.documentElement.clientWidth < 769) {
        $('.brands__list').slick({
            speed: 1200,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            arrows: false,
        });
    }






    //Анимации при прокручивании страницы до соответствующих элементов

    const scrollElements = document.querySelectorAll(".js-scroll");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const elementOutofView = (el) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop > (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("scrolled");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("scrolled");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else if (elementOutofView(el)) {
                hideScrollElement(el)
            }
        })
    }

    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });







    //Smooth scroll and pageup

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });


    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });





    //modal

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks').fadeOut('slow');
    });

    $('.button_submit').on('click', function () {
        $('#consultation').fadeOut('slow');
        $('#thanks').fadeIn('slow');
    });

    $('.overlay').on('click', function (e) {
        if (e.target.id === 'overlay') {
            $('.overlay, #consultation, #thanks').fadeOut('slow');
        }
    });


});

