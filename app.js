"use strict";

const imagesList = [
    {img: 'images/1.jpg'},
    {img: 'images/2.jpg'},
    {img: 'images/3.jpg'},
    {img: 'images/4.jpg'},
    {img: 'images/5.jpg'},
    {img: 'images/6.jpg'},
    {img: 'images/7.jpg'},
];

let currentIndex = 0;
const sliderLength = imagesList.length;
const slider = document.querySelector('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelector('.dots');

function showSlider() {
    imagesList.forEach((image, index) => {
        const imageItem = document.createElement('img');
        imageItem.setAttribute('src', image.img);
        index === 0 ? imageItem.classList.add('show') : imageItem.classList.add('hide');
        slider.appendChild(imageItem);
    });

    createDots();
    updateSlider();
}

function updateSlider() {
    const images = document.querySelectorAll('.slide img');

    images.forEach((image, index) => {
        image.classList.toggle('show', index === currentIndex);
        image.classList.toggle('hide', index !== currentIndex);
    });

    prevBtn.classList.toggle('disabled', currentIndex === 0);
    nextBtn.classList.toggle('disabled', currentIndex === (sliderLength - 1));

    updateDots();
}

function showNextSlide() {
    if(currentIndex < (sliderLength - 1)) {
        currentIndex++;
    }
    updateSlider();
}

function showPrewSlide() {
    if(currentIndex > 0) {
        currentIndex--;
    }
    updateSlider();
}

function createDots() {
    for(let i = 0; i < sliderLength; i++) {
        const dotsItem = document.createElement('li');
        dotsItem.classList.add('dotsItem');
        dotsItem.addEventListener('click', () => {
            currentIndex = i;
            updateSlider();
        });
        dots.appendChild(dotsItem);
    }
}

function updateDots() {
    const dotsList = document.querySelectorAll('.dotsItem');

    dotsList.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    })
}

showSlider();

document.querySelector('.next').addEventListener('click', () => {
    showNextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    showPrewSlide();
});