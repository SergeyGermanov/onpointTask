//change color when scroll for navigation dots via adding or removing "orangeDot" class
let slideChangeLinks = document.querySelectorAll(".right-slider a");

window.addEventListener("scroll", e => {
    let distanceFromTop = window.scrollY;
    slideChangeLinks.forEach(el => {
        let section = document.querySelector(el.hash);

        section.offsetTop <= distanceFromTop && section.offsetTop + section.offsetHeight > distanceFromTop
            ? el.classList.add("right-slider__dots--orange")
            : el.classList.remove("right-slider__dots--orange");

    });
});

//make smooth scroll to next full screen when a button pressed
let smoothScrool = (targetId, duration) => {
    let target = document.querySelector(targetId);
    let targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    //start the animation
    let animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    //ease animation effect in place
    let ease = (time, position, distance, duration) => {
        time /= duration / 2;
        if (time < 1) return distance / 2 * time * time * time + position;
        time -= 2;
        return distance / 2 * (time * time * time + 2) + position;
    }
    requestAnimationFrame(animation);
}

// add smoothness when we press a link directed to parts of a page 
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let section1 = document.querySelector('#btn1');
let section2 = document.querySelector('#btn2');

let rangeSlider = document.querySelector('.section-x__wrapper__input');

// add click event listeners to buttons at the bottom of section 1 and 3 and starts smoothScroll on click 
section1.addEventListener('click', function () {
    smoothScrool('.section2', 1000);
});

section2.addEventListener('click', function () {
    smoothScrool('.section-x', 1000);
});

// clicks anchor links to a slide on section-x according to the Number input on range slider
let rangeClicker = (num) => {
    let slide1 = document.querySelector('.section-x__slider-nav__link-0');
    let slide2 = document.querySelector('.section-x__slider-nav__link-1');
    let slide3 = document.querySelector('.section-x__slider-nav__link-2');

    if (Number(num) >= 0 && Number(num) <= 5) slide1.click();
    if (Number(num) >= 12 && Number(num) <= 17) slide2.click();
    if (Number(num) >= 25 && Number(num) <= 30) slide3.click();
}

//add event listener to the range slider input to change slides according to the position
rangeSlider.addEventListener('change', (e) => {
    rangeClicker(e.target.value);
});





