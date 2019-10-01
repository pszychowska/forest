// rozwijane menu portrait

const mobileNav = document.querySelector('.mobileList');
mobileNav.addEventListener('click', () => mobileNav.classList.toggle('showMobileNav'));

// rozwijane menu landscape

const landscapeNav = document.querySelector('.landscapeList');
landscapeNav.addEventListener('click', () => landscapeNav.classList.toggle('showLandscapeNav'));

// js - modal

//funkcje do pojawiania się/zamykania modala
const rightModal = () => {
    document.querySelector('.rightAnswear-wrap').classList.add('active');
    document.querySelector('.riddle').classList.add('blur')
}

const hideRightModal = () => {
    document.querySelector('.rightAnswear-wrap').classList.remove('active');
    document.querySelector('.riddle').classList.remove('blur')
}

const wrongModal = () => {
    document.querySelector('.wrongAnswear-wrap').classList.add('active');
    document.querySelector('.riddle').classList.add('blur')
}

const hideWrongModal = () => {
    document.querySelector('.wrongAnswear-wrap').classList.remove('active');
    document.querySelector('.riddle').classList.remove('blur')
}

//nasłuchiwanie elementów
document.querySelector('.right').addEventListener("click", rightModal);
const wrongAnimals = document.querySelectorAll('.wrong');
wrongAnimals.forEach((wrongAnimal) => {
    wrongAnimal.addEventListener('click', wrongModal)
});
document.querySelector('span.hide').addEventListener("click", hideRightModal);
document.querySelector('span.hide2').addEventListener("click", hideWrongModal);

// jQuery - scrollowanie

$('.home').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.header').offset().top
    }, 500)
})
$('.forestNav').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.forest').offset().top
    }, 500)
})
$('.reviewsNav').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.reviews').offset().top
    }, 500)
})
$('.riddleNav').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.riddle').offset().top
    }, 500)
})
$('.gameNav').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.game').offset().top
    }, 500)
})
$('.contactNav').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.contacts').offset().top
    }, 500)
})