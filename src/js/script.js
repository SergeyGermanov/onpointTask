//change color when scroll for navigation dots
let mainNavLinks = document.querySelectorAll("#rightSlideChanger a");


window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;
    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {

            link.classList.add("dotOrange");
        } else {
            link.classList.remove("dotOrange");
        }
    });
});

function smoothScrool(targetId, duration) {
    let target = document.querySelector(targetId);
    let targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
}

// add smoothness to going to anchor
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


let section1 = document.querySelector('.btn1');
let section2 = document.querySelector('.btn2');
let section3 = document.querySelector('.btn3');

section1.addEventListener('click', function () {
    smoothScrool('.section2', 1000);


});

section2.addEventListener('click', function () {
    smoothScrool('.slide-x', 1000);
});

function rangeClicker(num) {
    let slide1 = document.querySelector('#slider-nav-0');
    let slide2 = document.querySelector('#slider-nav-1');
    let slide3 = document.querySelector('#slider-nav-2');

    if (Number(num) >= 0 && Number(num) <= 5) {
        slide1.click();
    }
    if (Number(num) >= 12 && Number(num) <= 17) {
        slide2.click();
    }
    if (Number(num) >= 25 && Number(num) <= 30) {
        slide3.click();
    }
}

document.querySelector('#rangeSlider').addEventListener('change', (e) => {


    rangeClicker(e.target.value);
});





