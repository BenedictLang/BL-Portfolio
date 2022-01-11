/*
* General
*/

/*
* Media Breakpoints
* Import from stylesheet
*/
const style = getComputedStyle(document.body);
export const bpTablet = window.matchMedia(`(min-width:${style.getPropertyValue("--bpTablet")}`),
    bpWs = window.matchMedia(`(min-width:${style.getPropertyValue("--bpWideS")}`),
    bpLandscape = window.matchMedia(`(max-width:${style.getPropertyValue("--bpLandscape")}`);

/* ==== MOVE TO MOUSE POSITION ====*/
const moveForce = 30; // max popup movement in pixels
const rotateForce = 20; // max popup rotation in deg

$(document).mousemove(function (e) {
    const docX = $(document).width();
    const docY = $(document).height();

    const moveX = (e.pageX - docX / 2) / (docX / 2) * -moveForce;
    const moveY = (e.pageY - docY / 2) / (docY / 2) * -moveForce;

    const rotateY = (e.pageX / docX * rotateForce * 2) - rotateForce;
    const rotateX = -((e.pageY / docY * rotateForce * 2) - rotateForce);

    $('.moveToMouse')
        .css('left', moveX + 'px')
        .css('top', moveY + 'px')
        .css('transform', 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
});

/* ==== NAV MENU HEADER ====*/
const navMenu = document.getElementById('nav-menu'),
    menuList = document.getElementById('menu-list'),
    navMobileToggle = document.getElementById('nav-mobile-toggle'),
    navDesktopToggle = document.getElementById('nav-desktop-toggle'),
    accSettingsToggle = document.getElementById('accessibility-cbx'),
    navClose = document.getElementById('nav-close'),
    header = document.getElementById('header'),
    contentWrapper = document.getElementById('content-wrapper'),
    main = document.getElementById('main'),
    footer = document.getElementById('footer'),
    bannerSection = document.querySelector('.banner-section'),
    navItem = document.querySelectorAll('.nav__item'),
    dropdownArrow = document.querySelector('.dropdown-arrow'),
    scrollToTop = document.getElementById('scroll-to-top');

//Show Menu & Acc
if ((navMobileToggle || navDesktopToggle) && accSettingsToggle) {
    navMobileToggle.addEventListener('click', showMenu);
    navDesktopToggle.addEventListener('click', showMenu);
    accSettingsToggle.addEventListener('click', () => toggleAccSettings(false));
}

function showMenu() {
    if (!bpWs.matches) {
        bannerSection.classList.add('shrinkY');
        navDesktopToggle.nextElementSibling.classList.add('open');
        navMenu.classList.add('show__menu');
        scrollToTop.classList.add('hidden');
        blurBG(true);
        disableScroll(document.body);
    }
}

//Hide Menu
navDesktopToggle.addEventListener('change', function () {
    if (this.checked) {
        showMenu();
    } else {
        closeMenu();
    }
});
const subMenu = document.querySelectorAll('.nav__list-sub');
if (navClose || main) {
    navClose.addEventListener('click', closeMenu);
    //close on click on body
    main.addEventListener('click', () => {
        closeMenu();
        accSettingsToggle.checked = false;
        toggleAccSettings(true);
        subMenu.forEach(($menu) => {
            $menu.classList.add('hidden');
            rotate90($menu.parentElement.querySelector('.dropdown-arrow'), false);
        });
    });
}
//hide menu if link clicked
const navLink = document.querySelectorAll('.nav__link');
navLink.forEach(n => n.addEventListener('click', linkAction));

function linkAction() {
    closeMenu();
}

function closeMenu() {
    navDesktopToggle.nextElementSibling.classList.remove('open');
    enableScroll(document.body);
    blurBG(false);
    navMenu.classList.remove('show__menu');
    scrollToTop.classList.remove('hidden');
    bannerSection.classList.remove('shrinkY');
}


//ACCESSIBILITY SETTINGS
//Accessibility toggle
function toggleAccSettings($mainClicked) {
    const accSettings = document.getElementById('accessibility');
    if (accSettingsToggle.checked) {
        accSettings.classList.remove('hidden');
        navMenu.style.maxHeight = "90vh";
        menuList.classList.add('hidden');
        bannerSection.classList.add('shrinkY');
        blurBG(true);
        disableScroll(document.body);
    } else if ($mainClicked || (bpWs.matches && !accSettingsToggle.checked)) {
        menuList.classList.remove('hidden');
        bannerSection.classList.remove('shrinkY');
        accSettings.classList.add('hidden');
        blurBG(false);
        enableScroll(document.body);
    } else {
        menuList.classList.remove('hidden');
        accSettings.classList.add('hidden');
    }
}

//toggle sticky desktop navbar
let prevScrollPos = window.pageYOffset;
['scroll', 'load'].forEach(evt =>
    window.addEventListener(evt, () => {
        subMenu.forEach(($menu) => {
            $menu.classList.add('hidden');
            rotate90($menu.parentElement.querySelector('.dropdown-arrow'), false);
        });
        if (bpTablet.matches || bpLandscape.matches) {
            const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollPos > prevScrollPos) {
                header.classList.add('headerHidden');
            } else {
                header.classList.remove('headerHidden');
            }
            prevScrollPos = currentScrollPos;
            if (window.pageYOffset <= 50) {
                header.classList.add('headerSticky');
                navMenu.classList.add('nav__menu-sticky');
                menuList.classList.add('menu__list-sticky');
            } else {
                header.classList.remove('headerSticky');
                navMenu.classList.remove('nav__menu-sticky');
                menuList.classList.remove('menu__list-sticky');
            }
        }
    }, false)
);

//Dropdown menu
navItem.forEach($entry => {
    let navLink = $entry.querySelector('.nav__link');
    let arrow = $entry.querySelector('.dropdown-arrow');
    let subMenu = $entry.querySelector('.nav__list-sub');
    if (arrow != null) {
        ['click'].forEach(evt => {
            navLink.addEventListener(evt, () => {
                if (subMenu.classList.contains('hidden')) {
                    rotate90(arrow, true);
                    subMenu.classList.remove('hidden');
                } else {
                    rotate90(arrow, false);
                    subMenu.classList.add('hidden');
                }
            });
        });
    }
});

function rotate90($element, $activated) {
    if ($activated) {
        $element.classList.add('rotate90')
    } else {
        $element.classList.remove('rotate90')
    }
}

function blurBG($show) {
    if ($show) {
        if (bpTablet.matches || bpLandscape.matches) {
            contentWrapper.classList.add('blur');
        } else {
            contentWrapper.classList.add('blur-light');
        }
    } else {
        contentWrapper.classList.remove('blur');
        contentWrapper.classList.remove('blur-light');
    }
}


/* ==== HERO SECTION ====*/
const home = document.getElementById('home');
const bgLines = document.getElementById('background-anim');

function resizeBG() {
    bgLines.style.minHeight = home.clientHeight + "px";
}

/* ==== SKILLS SECTION ====*/
const wClouds = document.querySelectorAll('.cloud');
wClouds.forEach(cloud => {
    const cloudItems = cloud.querySelectorAll('li')
    cloudItems.forEach(item => {
        ['mouseover', 'focus'].forEach(e => {
            item.addEventListener(e, function () {
                cloudItems.forEach(cItem => {
                    if (cItem !== item) cItem.classList.add('blur-light');
                });
            });
        });
        item.addEventListener('mouseleave', function () {
            cloudItems.forEach(cItem => cItem.classList.remove('blur-light'));
        });
    });
});

/* ==== 3D HEADER ====*/
//TODO

/* ==== 3D FOOTER ====*/

/*$(document).ready(function($) {

    //Scroll to top btn
    $(window).on('scroll', function() {

        //ADD .TIGHT
        if ($(window).scrollTop() + $(window).height() > $('.wrapper').outerHeight()) {
            $('body').addClass('tight');
        } else {
            $('body').removeClass('tight');
            if ($(window).width() > 767) {
            }
        }
    });

    //BACK TO PRESENTATION MODE
    $("html").on("click", "body.tight .wrapper", function() {
        $('html, body').animate({
            scrollTop: $('.wrapper').outerHeight() - $(window).height()
        }, 500);
        $('nav-menu').classList.remove('show__menu');
    });
});*/

/**
 * Toggle y-scroll
 */
function disableScroll(element) {
    element.classList.add("stop-scroll");
}

function enableScroll(element) {
    element.classList.remove("stop-scroll");
}

//disable animations on resize or orientation change
let resizeTimer;
["resize"].forEach(evt => {
    window.addEventListener(evt, () => {
        document.body.classList.add("animation__hidden");
        /*closeMenu();*/
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove("animation__hidden");
        }, 100);
        resizeBG();
    });
});

//banner interaction
const banners = document.querySelectorAll('.banner-close');
banners.forEach(bannerBtn => {
    bannerBtn.addEventListener('click', function () {
        bannerBtn.parentElement.style.opacity = '0';
        setTimeout(() => {
            bannerBtn.parentElement.classList.add('shrinkY');
        }, 200);
        setTimeout(() => {
            //setHeaderOffset();
            bannerBtn.parentElement.classList.add('hidden');
        }, 700);
    });
});

/*const bannerWrapper = document.querySelector('.banner-section');
function setHeaderOffset() {
    if(bpTablet.matches || bpLandscape.matches){
        header.style.top = bannerWrapper.clientHeight + "px";
    }
}
setHeaderOffset();*/


//reCaptcha for forms
function onSubmit($token) {
    document.getElementById("contact-form").submit();
}

let nameCorrect = function check(element) {
        return (element.id === 'contact-input__name' && element.value.length > 3);
    },
    subjectExists = function check(element) {
        return (element.id === 'contact-input__subject' && element.value.length > 10);
    },
    mailCorrect = function check(element) {
        return (element.id === 'contact-input__mail' && (element.value.includes('@') && element.value.includes('.') && element.value.indexOf('.') < element.value.length - 2));
    },
    messageExists = function check(element) {
        return (element.id === 'contact-input__message' && element.value.length > 30);
    };


document.querySelectorAll('.contact-form__input').forEach(input => {
    input.addEventListener('input', (e) => {
        let indicator = e.target.parentElement.querySelector('.input-border');
        if (nameCorrect(e.target) || subjectExists(e.target) || mailCorrect(e.target) || messageExists(e.target)) {
            valid(indicator);
        } else {
            invalid(indicator);
        }

        function invalid($element) {
            $element.classList.remove('input-valid');
        }

        function valid($element) {
            $element.classList.add('input-valid');
        }
    });
});

document.querySelector('.contact-form__submit').addEventListener('click', (event) => {
    event.preventDefault();
    let name = document.getElementById('contact-input__name'),
        subject = document.getElementById('contact-input__subject'),
        mail = document.getElementById('contact-input__mail'),
        msg = document.getElementById('contact-input__message');
    if (nameCorrect(name) && subjectExists(subject) && mailCorrect(mail) && messageExists(msg)) {
        document.getElementById('contact-form__submit-message').innerText = '';
        console.info("Form submitted");
        console.info(name.value, subject.value, mail.value, msg.value);
        //TODO
        event.target.innerText = 'Nachricht abgeschickt!';
        name.value = '';
        subject.value = '';
        mail.value = '';
        msg.value = '';
        event.target.disable = true;
        return false;
    } else {
        document.getElementById('contact-form__submit-message').innerHTML = '<i class="uil uil-exclamation-triangle"></i> Überprüfen Sie die markierte Eingabe!';
    }
});


//*************
//year adaption
//*************

//current year
document.getElementById("currentYear").innerHTML = new Date().getFullYear().toString();

//experience years
document.getElementById("experience-design").innerHTML = (new Date().getFullYear() - 2014).toString() + "+";

document.getElementById("experience-web").innerHTML = (new Date().getFullYear() - 2017).toString() + "+";

document.getElementById("experience-dev").innerHTML = (new Date().getFullYear() - 2019).toString() + "+";


/* ==== WORD CLOUD ====*/


/*!
 * jQCloud Plugin for jQuery
 *
 * Version 1.0.4
 *
 * Copyright 2011, Luca Ongaro
 * Licensed under the MIT license.
 *
 * Date: 2013-05-09 18:54:22 +0200
*/

(function ($) {
    "use strict";
    $.fn.jQCloud = function (word_array, options) {
        // Reference to the container element
        var $this = this;
        // Namespace word ids to avoid collisions between multiple clouds
        var cloud_namespace = $this.attr('id') || Math.floor((Math.random() * 1000000)).toString(36);

        // Default options value
        var default_options = {
            width: $this.width(),
            height: $this.height(),
            center: {
                x: ((options && options.width) ? options.width : $this.width()) / 2.0,
                y: ((options && options.height) ? options.height : $this.height()) / 2.0
            },
            delayedMode: word_array.length > 50,
            shape: false, // It defaults to elliptic shape
            encodeURI: true,
            removeOverflowing: true
        };

        options = $.extend(default_options, options || {});

        // Add the "jqcloud" class to the container for easy CSS styling, set container width/height
        $this.addClass("jqcloud").width(options.width).height(options.height);

        // Container's CSS position cannot be 'static'
        if ($this.css("position") === "static") {
            $this.css("position", "relative");
        }

        var drawWordCloud = function () {
            // Helper function to test if an element overlaps others
            var hitTest = function (elem, other_elems) {
                // Pairwise overlap detection
                var overlapping = function (a, b) {
                    if (Math.abs(2.0 * a.offsetLeft + a.offsetWidth - 2.0 * b.offsetLeft - b.offsetWidth) < a.offsetWidth + b.offsetWidth) {
                        if (Math.abs(2.0 * a.offsetTop + a.offsetHeight - 2.0 * b.offsetTop - b.offsetHeight) < a.offsetHeight + b.offsetHeight) {
                            return true;
                        }
                    }
                    return false;
                };
                var i = 0;
                // Check elements for overlap one by one, stop and return false as soon as an overlap is found
                for (i = 0; i < other_elems.length; i++) {
                    if (overlapping(elem, other_elems[i])) {
                        return true;
                    }
                }
                return false;
            };

            // Make sure every weight is a number before sorting
            for (var i = 0; i < word_array.length; i++) {
                word_array[i].weight = parseFloat(word_array[i].weight, 10);
            }

            // Sort word_array from the word with the highest weight to the one with the lowest
            word_array.sort(function (a, b) {
                if (a.weight < b.weight) {
                    return 1;
                } else if (a.weight > b.weight) {
                    return -1;
                } else {
                    return 0;
                }
            });

            var step = (options.shape === "rectangular") ? 18.0 : 2.0,
                already_placed_words = [],
                aspect_ratio = options.width / options.height;

            // Function to draw a word, by moving it in spiral until it finds a suitable empty place. This will be iterated on each word.
            var drawOneWord = function (index, word) {
                // Define the ID attribute of the span that will wrap the word, and the associated jQuery selector string
                var word_id = cloud_namespace + "_word_" + index,
                    word_selector = "#" + word_id,
                    angle = 6.28 * Math.random(),
                    radius = 0.0,

                    // Only used if option.shape == 'rectangular'
                    steps_in_direction = 0.0,
                    quarter_turns = 0.0,

                    weight = 5,
                    custom_class = "",
                    inner_html = "",
                    word_span;

                // Extend word html options with defaults
                word.html = $.extend(word.html, {id: word_id});

                // If custom class was specified, put them into a variable and remove it from html attrs, to avoid overwriting classes set by jQCloud
                if (word.html && word.html["class"]) {
                    custom_class = word.html["class"];
                    delete word.html["class"];
                }

                // Check if min(weight) > max(weight) otherwise use default
                if (word_array[0].weight > word_array[word_array.length - 1].weight) {
                    // Linearly map the original weight to a discrete scale from 1 to 10
                    weight = Math.round((word.weight - word_array[word_array.length - 1].weight) /
                        (word_array[0].weight - word_array[word_array.length - 1].weight) * 9.0) + 1;
                }
                word_span = $('<span>').attr(word.html).addClass('w' + weight + " " + custom_class);

                // Append link if word.url attribute was set
                if (word.link) {
                    // If link is a string, then use it as the link href
                    if (typeof word.link === "string") {
                        word.link = {href: word.link};
                    }

                    // Extend link html options with defaults
                    if (options.encodeURI) {
                        word.link = $.extend(word.link, {href: encodeURI(word.link.href).replace(/'/g, "%27")});
                    }

                    inner_html = $('<a>').attr(word.link).text(word.text);
                } else {
                    inner_html = word.text;
                }
                word_span.append(inner_html);

                // Bind handlers to words
                if (!!word.handlers) {
                    for (var prop in word.handlers) {
                        if (word.handlers.hasOwnProperty(prop) && typeof word.handlers[prop] === 'function') {
                            $(word_span).bind(prop, word.handlers[prop]);
                        }
                    }
                }

                $this.append(word_span);

                var width = word_span.width(),
                    height = word_span.height(),
                    left = options.center.x - width / 2.0,
                    top = options.center.y - height / 2.0;

                // Save a reference to the style property, for better performance
                var word_style = word_span[0].style;
                word_style.position = "absolute";
                word_style.left = left + "px";
                word_style.top = top + "px";

                while (hitTest(word_span[0], already_placed_words)) {
                    // option shape is 'rectangular' so move the word in a rectangular spiral
                    if (options.shape === "rectangular") {
                        steps_in_direction++;
                        if (steps_in_direction * step > (1 + Math.floor(quarter_turns / 2.0)) * step * ((quarter_turns % 4 % 2) === 0 ? 1 : aspect_ratio)) {
                            steps_in_direction = 0.0;
                            quarter_turns++;
                        }
                        switch (quarter_turns % 4) {
                            case 1:
                                left += step * aspect_ratio + Math.random() * 2.0;
                                break;
                            case 2:
                                top -= step + Math.random() * 2.0;
                                break;
                            case 3:
                                left -= step * aspect_ratio + Math.random() * 2.0;
                                break;
                            case 0:
                                top += step + Math.random() * 2.0;
                                break;
                        }
                    } else { // Default settings: elliptic spiral shape
                        radius += step;
                        angle += (index % 2 === 0 ? 1 : -1) * step;

                        left = options.center.x - (width / 2.0) + (radius * Math.cos(angle)) * aspect_ratio;
                        top = options.center.y + radius * Math.sin(angle) - (height / 2.0);
                    }
                    word_style.left = left + "px";
                    word_style.top = top + "px";
                }

                // Don't render word if part of it would be outside the container
                if (options.removeOverflowing && (left < 0 || top < 0 || (left + width) > options.width || (top + height) > options.height)) {
                    word_span.remove()
                    return;
                }


                already_placed_words.push(word_span[0]);

                // Invoke callback if existing
                if ($.isFunction(word.afterWordRender)) {
                    word.afterWordRender.call(word_span);
                }
            };

            var drawOneWordDelayed = function (index) {
                index = index || 0;
                if (!$this.is(':visible')) { // if not visible then do not attempt to draw
                    setTimeout(function () {
                        drawOneWordDelayed(index);
                    }, 10);
                    return;
                }
                if (index < word_array.length) {
                    drawOneWord(index, word_array[index]);
                    setTimeout(function () {
                        drawOneWordDelayed(index + 1);
                    }, 10);
                } else {
                    if ($.isFunction(options.afterCloudRender)) {
                        options.afterCloudRender.call($this);
                    }
                }
            };

            // Iterate drawOneWord on every word. The way the iteration is done depends on the drawing mode (delayedMode is true or false)
            if (options.delayedMode) {
                drawOneWordDelayed();
            } else {
                $.each(word_array, drawOneWord);
                if ($.isFunction(options.afterCloudRender)) {
                    options.afterCloudRender.call($this);
                }
            }
        };

        // Delay execution so that the browser can render the page before the computatively intensive word cloud drawing
        setTimeout(function () {
            drawWordCloud();
        }, 10);
        return $this;
    };
})(jQuery);

var word_arrays = [
    {text: "lost credit card", weight: 20, html: {class: "category credit"}},
    {text: "credit limit", weight: 10.5, html: {class: "category credit"}},
    {text: "news credit card", weight: 9.4, html: {class: "category credit"}},
    {text: "credit card fees", weight: 8, html: {class: "category credit"}},
    {text: "credit card stolen", weight: 7.5, html: {class: "category credit"}},
    {text: "credit card", weight: 40, html: {class: "category card"}},
    {text: "card", weight: 6.8, html: {class: "category card"}},
    {text: "debit card", weight: 6.1, html: {class: "category card"}},
    {text: "card charges", weight: 15, html: {class: "category card"}},
    {text: "new card", weight: 3, html: {class: "category card"}},
    {text: "avoid fees", weight: 30, html: {class: "category fees"}},
    {text: "banking fees", weight: 2.8, html: {class: "category fees"}},
    {text: "withdraw fees", weight: 1.75, html: {class: "category fees"}},
    {text: "deposit fees", weight: 4, html: {class: "category fees"}},
    {text: "card fees", weight: 16, html: {class: "category fees"}},
    {text: "withdraw money", weight: 70, html: {class: "category money"}},
    {text: "deposit money", weight: 1, html: {class: "category money"}},
    {text: "lodge money", weight: 9, html: {class: "category money"}},
    {text: "saving money", weight: 4, html: {class: "category money"}},
    {text: "money security", weight: 12, html: {class: "category money"}},
    {text: "atm withdraw", weight: 30, html: {class: "category withdraw"}},
    {text: "withdraw money", weight: 7, html: {class: "category withdraw"}},
    {text: "card card withdraw", weight: 3, html: {class: "category withdraw"}},
    {text: "debit card withdraw", weight: 4, html: {class: "category withdraw"}},
    {text: "withdraw", weight: 9.1, html: {class: "category withdraw"}},
];


/*$("#word-cloud").jQCloud(word_arrays, {
    width: 500,
    height: 350,
    afterCloudRender: function() {
        $('#word-cloud > span').on('click', function(e){
            e.preventDefault();
            console.log(e.target.innerHTML);
            $('.detailed-tags').prepend("<div class='tag'>" + e.target.innerHTML + "</div>")
        });
    }
});*/


/*
function jQCloud(word_array, $element, options) {
    // Reference to the container element
    const $this = $element;
    // Namespace word ids to avoid collisions between multiple clouds
    const cloud_namespace = $this.id || Math.floor((Math.random() * 1000000)).toString(36);

    // Default options value
    const default_options = {
        width: $this.clientWidth,
        height: $this.clientHeight,
        center: {
            x: ((options && options.width) ? options.width : $this.clientWidth) / 2.0,
            y: ((options && options.height) ? options.height : $this.clientHeight) / 2.0
        },
        delayedMode: word_array.length > 50,
        shape: false, // It defaults to elliptic shape
        encodeURI: true,
        removeOverflowing: true
    };

    options = {...default_options, ...options};

    // Add the "jqcloud" class to the container for easy CSS styling, set container width/height

    $this.classList.add("jqcloud");
    const cloudList = $this.querySelectorAll(".jqcloud");
    if (cloudList != null) {
        cloudList.forEach(list => {
            list.styles.width = options.width;
            list.styles.height = options.height;
        })
    }

    // Container's CSS position cannot be 'static'
    if ($this.styles.position === "static") {
        $this.styles.position = "relative";
    }

    const drawWordCloud = function () {
        // Helper function to test if an element overlaps others
        const hitTest = function (elem, other_elems) {
            // Pairwise overlap detection
            const overlapping = function (a, b) {
                if (Math.abs(2.0 * a.offsetLeft + a.offsetWidth - 2.0 * b.offsetLeft - b.offsetWidth) < a.offsetWidth + b.offsetWidth) {
                    if (Math.abs(2.0 * a.offsetTop + a.offsetHeight - 2.0 * b.offsetTop - b.offsetHeight) < a.offsetHeight + b.offsetHeight) {
                        return true;
                    }
                }
                return false;
            };
            // Check elements for overlap one by one, stop and return false as soon as an overlap is found
            for (let i = 0; i < other_elems.length; i++) {
                if (overlapping(elem, other_elems[i])) {
                    return true;
                }
            }
            return false;
        };

        // Make sure every weight is a number before sorting
        for (let i = 0; i < word_array.length; i++) {
            if (parseFloat(word_array[i].weight)) {
                word_array[i].weight = parseFloat(word_array[i].weight);
            } else word_array[i].weight = 10;
        }

        // Sort word_array from the word with the highest weight to the one with the lowest
        word_array.sort(function (a, b) {
            if (a.weight < b.weight) {
                return 1;
            } else if (a.weight > b.weight) {
                return -1;
            } else {
                return 0;
            }
        });

        const step = (options.shape === "rectangular") ? 18.0 : 2.0,
            already_placed_words = [],
            aspect_ratio = options.width / options.height;

        // Function to draw a word, by moving it in spiral until it finds a suitable empty place. This will be iterated on each word.
        const drawOneWord = function (index, word) {
            // Define the ID attribute of the span that will wrap the word, and the associated jQuery selector string
            let word_id = cloud_namespace + "_word_" + index,
                word_selector = "#" + word_id,
                angle = 6.28 * Math.random(),
                radius = 0.0,

                // Only used if option.shape == 'rectangular'
                steps_in_direction = 0.0,
                quarter_turns = 0.0,

                weight = 5,
                custom_class = "",
                inner_html,
                word_span;

            // Extend word html options with defaults
            word.html = {...word.html, ...{id: word_id}};

            // If custom class was specified, put them into a variable and remove it from html attrs, to avoid overwriting classes set by jqCloud
            if (word.html && word.html.getAttribute('class') != null) {
                custom_class = word.html.className;
                word.html.removeAttribute('class');
            }

            // Check if min(weight) > max(weight) otherwise use default
            if (word_array[0].weight > word_array[word_array.length - 1].weight) {
                // Linearly map the original weight to a discrete scale from 1 to 10
                weight = Math.round((word.weight - word_array[word_array.length - 1].weight) /
                    (word_array[0].weight - word_array[word_array.length - 1].weight) * 9.0) + 1;
            }

            $this.querySelectorAll('span').getAttribute(word.html).classList.add('w' + weight + " " + custom_class);
            word_span = $this.querySelectorAll('.' + 'w' + weight + " " + custom_class)

            // Append link if word.url attribute was set
            if (word.link) {
                // If link is a string, then use it as the link href
                if (typeof word.link === "string") {
                    word.link = {href: word.link};
                }

                // Extend link html options with defaults
                if (options.encodeURI) {
                    word.link = {...word.link, ...{href: encodeURI(word.link.href).replace(/'/g, "%27")}};
                }

                inner_html = ($this.querySelectorAll('a').getAttribute(word.link).innerText = word.text);
            } else {
                inner_html = word.text;
            }
            word_span.append(inner_html);

            // Bind handlers to words
            if (!!word.handlers) {
                for (const prop in word.handlers) {
                    if (word.handlers.hasOwnProperty(prop) && typeof word.handlers[prop] === 'function') {
                        $(word_span).bind(prop, word.handlers[prop]);
                    }
                }
            }

            $this.append(word_span);

            let width = word_span.width(),
                height = word_span.height(),
                left = options.center.x - width / 2.0,
                top = options.center.y - height / 2.0;

            // Save a reference to the style property, for better performance
            const word_style = word_span[0].styles;
            word_style.position = "absolute";
            word_style.left = left + "px";
            word_style.top = top + "px";

            while (hitTest(word_span[0], already_placed_words)) {
                // option shape is 'rectangular' so move the word in a rectangular spiral
                if (options.shape === "rectangular") {
                    steps_in_direction++;
                    if (steps_in_direction * step > (1 + Math.floor(quarter_turns / 2.0)) * step * ((quarter_turns % 4 % 2) === 0 ? 1 : aspect_ratio)) {
                        steps_in_direction = 0.0;
                        quarter_turns++;
                    }
                    switch (quarter_turns % 4) {
                        case 1:
                            left += step * aspect_ratio + Math.random() * 2.0;
                            break;
                        case 2:
                            top -= step + Math.random() * 2.0;
                            break;
                        case 3:
                            left -= step * aspect_ratio + Math.random() * 2.0;
                            break;
                        case 0:
                            top += step + Math.random() * 2.0;
                            break;
                    }
                } else { // Default settings: elliptic spiral shape
                    radius += step;
                    angle += (index % 2 === 0 ? 1 : -1) * step;

                    left = options.center.x - (width / 2.0) + (radius * Math.cos(angle)) * aspect_ratio;
                    top = options.center.y + radius * Math.sin(angle) - (height / 2.0);
                }
                word_style.left = left + "px";
                word_style.top = top + "px";
            }

            // Don't render word if part of it would be outside the container
            if (options.removeOverflowing && (left < 0 || top < 0 || (left + width) > options.width || (top + height) > options.height)) {
                word_span.remove()
                return;
            }


            already_placed_words.push(word_span[0]);

            // Invoke callback if existing
            if ($.isFunction(word.afterWordRender)) {
                word.afterWordRender.call(word_span);
            }
        };

        const drawOneWordDelayed = function (index) {
            index = index || 0;
            if (!$this.is(':visible')) { // if not visible then do not attempt to draw
                setTimeout(function () {
                    drawOneWordDelayed(index);
                }, 10);
                return;
            }
            if (index < word_array.length) {
                drawOneWord(index, word_array[index]);
                setTimeout(function () {
                    drawOneWordDelayed(index + 1);
                }, 10);
            } else {
                if ($.isFunction(options.afterCloudRender)) {
                    options.afterCloudRender.call($this);
                }
            }
        };

        // Iterate drawOneWord on every word. The way the iteration is done depends on the drawing mode (delayedMode is true or false)
        if (options.delayedMode) {
            drawOneWordDelayed();
        } else {
            $.each(word_array, drawOneWord);
            if ($.isFunction(options.afterCloudRender)) {
                options.afterCloudRender.call($this);
            }
        }
    };

    // Delay execution so that the browser can render the page before the competitively intensive word cloud drawing
    setTimeout(function () {
        drawWordCloud();
    }, 10);
    return $this;
}

const word_arrays = [
    {text: "Deutsch", weight: 20, html: {class: "category language"}},
    {text: "Englisch", weight: 18, html: {class: "category language"}},
    {text: "Italienisch", weight: 11, html: {class: "category language"}},
    {text: "Französisch", weight: 8, html: {class: "category language"}},
    {text: "Russisch", weight: 6, html: {class: "category language"}},
];

document.getElementById('word-cloud').innerHTML = jQCloud(word_arrays, this, {
    width: 500,
    height: 350
});
*/
