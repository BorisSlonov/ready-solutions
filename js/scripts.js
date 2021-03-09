var scrollMoreOpen = 0;




document.querySelector('.moveTo').appendChild(  document.querySelector('.what-in__more') )



$(document).ready(function () {

    // var moveIt = $(".what-in__more").remove();
    // $(".moveTo").insert(moveIt);




    // animations
    window.onscroll = function () {
        if (window.innerWidth > 767) {
            const wh = window.innerHeight;

            const reasonsOffset = document.getElementsByClassName('reasons')[0].offsetTop;
            const reasonsStartAnimPosition = reasonsOffset - (wh - 90);
            /*if (window.pageYOffset > reasonsStartAnimPosition) {
                $('.reasons__item').each(function (index) {
                    setTimeout(function () {
                        $('.reasons__item:nth-child(' + (index + 1) + ')').addClass('reasons__item--shown');
                    }, (index + 1) * 300);
                });
            }
            else {
                $('.reasons__item').removeClass('reasons__item--shown');
            }*/

            const galleryOffset = document.getElementsByClassName('gallery')[0].offsetTop;
            const galleryStartAnimPosition = galleryOffset - (wh - 200);
            if (window.pageYOffset > galleryStartAnimPosition) {
                $('.gallery__slider').each(function (index) {
                    setTimeout(function () {
                        $('.gallery__slider:nth-child(' + (index + 1) + ')').addClass('gallery__slider--shown');
                    }, (index + 1) * 300);
                });
            }
            else {
                $('.gallery__slider').removeClass('gallery__slider--shown');
            }

            const whatOffset = document.getElementsByClassName('what-in')[0].offsetTop;
            const whatStartAnimPosition = whatOffset - (wh - 200);
            if (window.pageYOffset > whatStartAnimPosition) {
                $('.what-in__item').each(function (index) {
                    setTimeout(function () {
                        $('.what-in__item:nth-child(' + (index + 1) + ')').addClass('what-in__item--shown');
                    }, (index + 1) * 300);
                });
            }
            else {
                $('.what-in__item').removeClass('what-in__item--shown');
            }

            const addOffset = document.getElementsByClassName('additionals')[0].offsetTop;
            const addStartAnimPosition = addOffset - (wh - 200);
            if (window.pageYOffset > addStartAnimPosition) {
                $('.additionals').addClass('additionals--shown');
            }
            else {
                $('.additionals').removeClass('additionals--shown');
            }
        }
    }
    var answers = document.getElementsByClassName('faq__answer');
    [...answers].forEach(function (ans) {
        ans.onclick = function (e) {
            e.preventDefault();
            e.stopPropagation();
        }
    });
    document.getElementsByClassName('header__mobile-menu')[0].onclick = function (e) {
        e.preventDefault();
        if (!document.getElementsByClassName('header')[0].classList.contains('header--opened_menu')) {
            document.getElementsByClassName('header')[0].classList.add('header--opened_menu');
        }
        else {
            document.getElementsByClassName('header')[0].classList.remove('header--opened_menu');
        }
    }
    $('.faq__question-text').click(function (e) {
        if (window.innerWidth < 768) {
            var block = $(this);
            setTimeout(function () {
                $('html, body').animate({ scrollTop: block.offset().top - 68 }, 200);
            }, 100);
        }
    });
    // menu scrolls
    var buttons = document.getElementsByClassName('go-to');
    [...buttons].forEach(function (but) {
        but.onclick = function (e) {
            e.preventDefault();
            var block = document.getElementById(but.getAttribute('data-href'));
            var destination = block.offsetTop;
            $('html, body').animate({ scrollTop: destination }, 600);
        }
    });
    var links = document.getElementsByTagName('a');
    console.log(links);
    var exeptLink = document.getElementsByClassName('footer__social');
    console.log(exeptLink);
    [...links].forEach(function (link) {
        if (link != exeptLink[0]) {
            link.onclick = function (e) {
                e.preventDefault();
                var id = link.getAttribute('href').slice(1);
                var block = document.getElementById(id);
                var destination = block.offsetTop;
                $('html, body').animate({ scrollTop: destination }, 600);
                document.getElementsByClassName('header')[0].classList.remove('header--opened_menu');
            }
        }
    });
    document.getElementsByClassName('header__logo')[0].onclick = function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
    }
    document.getElementsByClassName('what-in__more')[0].onclick = function () {
        if (!document.getElementsByClassName('what-in__block')[0].classList.contains('what-in__block--opened')) {
            document.getElementsByClassName('what-in__block')[0].classList.add('what-in__block--opened');
            document.getElementsByClassName('what-in__more')[0].innerText = "Скрыть";
            document.getElementsByClassName('what-in__more')[0].classList.add('special');
            scrollMoreOpen = window.pageYOffset;
        }
        else {
            document.getElementsByClassName('what-in__block what-in__block--opened')[0].classList.remove('what-in__block--opened');
            document.getElementsByClassName('what-in__more')[0].innerText = "Подробнее";
            document.getElementsByClassName('what-in__more')[0].classList.remove('special');
            $('html, body').animate({ scrollTop: scrollMoreOpen }, 200);
        }
    }
    document.getElementsByClassName('vacancies__more')[0].onclick = function () {
        if (!document.getElementsByClassName('what-in__block')[1].classList.contains('what-in__block--opened')) {
            document.getElementsByClassName('what-in__block')[1].classList.add('what-in__block--opened');
            scrollMoreOpen = window.pageYOffset;
        }
        else {
            //document.getElementsByClassName('what-in__block')[0].classList.remove('what-in__block--opened');
        }
    }
    document.getElementsByClassName('what-in__less')[0].onclick = function () {
        var block = document.getElementsByClassName('what-in__block')[0];
        block.classList.remove('what-in__block--opened');
        $('html, body').animate({ scrollTop: scrollMoreOpen }, 200);
        document.getElementsByClassName('what-in__more')[0].innerText = "Подробнее";
        document.getElementsByClassName('what-in__more')[0].classList.remove('special');
    }
    document.getElementsByClassName('what-in__less')[1].onclick = function () {
        var block = document.getElementsByClassName('what-in__block')[1];
        block.classList.remove('what-in__block--opened');
        $('html, body').animate({ scrollTop: scrollMoreOpen }, 200);
    }
    var clickCounter = 0;
    var calcStatus = document.getElementsByClassName('calculator__status');
    [...calcStatus].forEach(function (stat) {
        stat.onclick = function (e) {
            clickCounter++;
            console.log(e);
            e.preventDefault();
            if (clickCounter == 2) {
                clickCounter = 0;
                stat.children[0].classList.remove("calculator__status--hint-show");
            }
            else {
                document.getElementsByClassName('calculator__status--active')[0].classList.remove('calculator__status--active');
                stat.classList.add('calculator__status--active');
                stat.children[0].classList.add("calculator__status--hint-show");
            }
        }
    });
    const calculatorRoom = document.getElementsByClassName('calculator__room');
    Array.prototype.forEach.call(calculatorRoom, (el) => {
        el.addEventListener('click', (e) => {
            document.getElementsByClassName('calculator__room calculator__room--active')[0].classList.remove('calculator__room--active');
            e.target.classList.toggle('calculator__room--active');
        })
    });
    const calculatorColor = document.getElementsByClassName('calculator__color calculator__walls');
    Array.prototype.forEach.call(calculatorColor, (el) => {
        el.addEventListener('click', (e) => {
            document.getElementsByClassName('calculator__color calculator__walls calculator__color--active')[0].classList.remove('calculator__color--active');
            e.target.classList.toggle('calculator__color--active');
        })
    });
    const calculatorColorFloor = document.getElementsByClassName('calculator__color calculator__floor');
    Array.prototype.forEach.call(calculatorColorFloor, (el) => {
        el.addEventListener('click', (e) => {
            document.getElementsByClassName('calculator__color calculator__floor calculator__color--active')[0].classList.remove('calculator__color--active');
            e.target.classList.toggle('calculator__color--active');
        })
    });
    const btn_show = document.getElementsByClassName('send-btn');
    Array.prototype.forEach.call(btn_show, (el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            if ($('#input_name_vacans').val() != "" && $('#input_phone_vacans').val() != "") {
                document.getElementsByClassName('txt-hide')[1].classList.add('txt-show');
                text = "Вакансии Name: " + $('#input_name_vacans').val() + " Phone: " + $('#input_phone_vacans').val();
                $.ajax({
                    url: 'https://api.telegram.org/bot1384955196:AAFllAqMeeOgFsjsmFGiQHqYd_jJ2acGcxY/sendMessage?chat_id=608956935&text=' + text,
                    method: 'POST',
                    success: function () {
                        console.log('your message has been sent!');
                    }
                });
            }
        })
    });
    const btn_show2 = document.getElementsByClassName('btn-send');
    Array.prototype.forEach.call(btn_show2, (el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            if ($('#input_name_vacans_bottom').val() != "" && $('#input_phone_bottom').val() != "") {
                document.getElementsByClassName('txt-hide')[2].classList.add('txt-show');
                text = "Name: " + $('#input_name_vacans_bottom').val() + " Phone: " + $('#input_phone_bottom').val() + " \#ремонт";
                $.ajax({
                    url: 'https://api.telegram.org/bot1384955196:AAFllAqMeeOgFsjsmFGiQHqYd_jJ2acGcxY/sendMessage?chat_id=608956935&text=' + text,
                    method: 'POST',
                    success: function () {
                        console.log('your message has been sent!');
                    }
                });
            }
        })
    });
    const btn_show3 = document.getElementsByClassName('send--btn');
    Array.prototype.forEach.call(btn_show3, (el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            if ($('#input_name').val() != "" && $('#input_phone').val() != "") {
                document.getElementsByClassName('txt-hide')[0].classList.add('txt-show');
                text = "Name: " + $('#input_name').val() + " Phone: " + $('#input_phone').val() + " \#ремонт";
                $.ajax({
                    url: 'https://api.telegram.org/bot1384955196:AAFllAqMeeOgFsjsmFGiQHqYd_jJ2acGcxY/sendMessage?chat_id=608956935&text=' + text,
                    method: 'POST',
                    success: function () {
                        console.log('your message has been sent!');
                    }
                });
            }
        })
    });
    // sliders
    $('.gallery__slider').each(function () {
        $(this).slick({
            arrows: true,
            autoplay: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        dots: true
                    }
                }
            ]
        });
    });
    $('.reviews__slider').slick({
        adaptiveHeight: true,
        arrows: true,
        dots: true,
        autoplay: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
    if (window.innerWidth < 768) {
        $('.prices__slider').slick({
            arrows: false,
            dots: true,
            autoplay: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }
    window.onresize = function () {
        /*$('.gallery__slider').each(function() {
            $(this).slick('unslick');
            var slider = $(this);
            setTimeout(function() {
                slider.slick({
                    arrows: true,
                    autoplay: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 992,
                            settings: {
                                dots: true
                            }
                        }
                    ]
                });
            }, 500);
        });*/

        if (window.innerWidth < 768) {
            $('.prices__slider').slick({
                arrows: false,
                dots: true,
                autoplay: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }
        else {
            $('.prices__slider').slick('unslick');
        }
    }
    //modal window
    var modal = document.getElementById("calc_counted");
    var btn = document.getElementsByClassName("button calculator__button")[0];
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function () {
        modal.style.display = "block";
        var selectedPrice = document.getElementsByClassName("calculator__status calculator__status--active")[0].innerText;
        var meters = document.getElementsByClassName("calculator__flat-input")[0].value;
        var finCost = 0;
        document.getElementsByClassName("flat_meters")[0].innerText = meters;
        document.getElementsByClassName("flat_address")[0].innerText = document.getElementsByClassName("calculator__big-input")[0].value;
        document.getElementsByClassName("flat_rooms")[0].innerText = document.getElementsByClassName("calculator__room calculator__room--active")[0].innerText;
        var wall_check = document.getElementsByClassName("calc_walls");
        var wall_color = document.getElementsByClassName("calculator__color calculator__walls calculator__color--active")[0].style.backgroundColor;
        for (var i = 0; wall_check[i]; ++i) {
            if (wall_check[i].checked) {
                console.log(wall_check[i].value.search("Обои под покраску"));
                if (wall_check[i].value.search("Обои под покраску") >= 0) {
                    document.getElementsByClassName("flat_walls")[0].innerText = (wall_check[i].value + "(" + wall_color + ")");
                    break;
                }
                else {
                    document.getElementsByClassName("flat_walls")[0].innerText = wall_check[i].value;
                    break;
                }
            }
        }
        var floor_check = document.getElementsByClassName("calc_floor");
        var floor_color = document.getElementsByClassName("calculator__color calculator__floor calculator__color--active")[0].style.backgroundColor;
        for (var i = 0; floor_check[i]; ++i) {
            if (floor_check[i].checked) {
                if (floor_check[i].value.search("Ламинат") >= 0) {
                    document.getElementsByClassName("flat_floor")[0].innerText = floor_check[i].value + "(" + floor_color + ")";
                    break;
                }
                else {
                    document.getElementsByClassName("flat_floor")[0].innerText = floor_check[i].value;
                    break;
                }
            }
        }
        var door_check = document.getElementsByClassName("door_check");
        for (var i = 0; door_check[i]; ++i) {
            if (door_check[i].checked) {
                document.getElementsByClassName("flat_doors")[0].innerText = door_check[i].value;
                break;
            }
        }
        console.log(meters);
        console.log(selectedPrice);
        if (selectedPrice.search("Базовый") >= 0) {
            finCost = 7900 * parseInt(meters, 10);
            document.getElementsByClassName("chose_price")[0].innerText = "Базовый";
        }
        if (selectedPrice.search("Комфорт") >= 0) {
            finCost = 8900 * parseInt(meters, 10);
            document.getElementsByClassName("chose_price")[0].innerText = "Комфорт";
        }
        if (selectedPrice.search("Комфорт +") >= 0) {
            finCost = 10700 * parseInt(meters, 10);
            document.getElementsByClassName("chose_price")[0].innerText = "Комфорт +";
        }
        if (meters < 40) {
            var percent = finCost * 0.3;
            finCost += percent;
            document.getElementsByClassName("calculated_days")[0].innerText = 35;
        }
        if (meters > 40 && meters < 56) {
            document.getElementsByClassName("calculated_days")[0].innerText = 45;
        }
        if (meters > 55) {
            document.getElementsByClassName("calculated_days")[0].innerText = 60;
        }
        document.getElementsByClassName("counted_cost")[0].innerHTML = finCost;
    }
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var btnPDF = document.getElementsByClassName("button button--center btn-pdf")[0];
    btnPDF.onclick = function () {
        const element = document.getElementById("generated_doc");
        html2pdf()
            .set({ html2canvas: { scale: 4 } })
            .from(element)
            .save();
    }






});


