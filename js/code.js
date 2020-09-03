/***************************************************************************
Filename: code.js
Author: Justin Rignault
Description: main javascript file linked to index.html for my personal website
****************************************************************************/
'use strict'

function init() {
    setSectionHeights()
    setFavicon()
    addEventListeners()
    activateSwipers()
    copyrightMessage()
}

const setSectionHeights = () => {
    const home = document.getElementById('home')
    const portfolio = document.getElementById('portfolio')
    const about = document.getElementById('about')
    const contact = document.getElementById('contact')
    const swiperContainer = document.querySelector('.swiper-container3')
    const aside = document.querySelector('aside')

    home.style.height = `${window.innerHeight}px`
    portfolio.style.minHeight = `${window.innerHeight}px`
    about.style.minHeight = `${window.innerHeight}px`
    contact.style.minHeight = `${window.innerHeight}px`
    swiperContainer.style.height = `${window.innerHeight - 150}px`
    aside.style.height = `${window.innerHeight * 0.4}px`
}

const setFavicon = () => {
    const isDark = detectDarkMode()
    const documentHead = document.querySelector('head')
    const linkTag = document.getElementById('favicon')

    if (isDark) {
        linkTag.setAttribute('href', '/img/favicons/JR-darkTheme.ico')
    } else {
        linkTag.setAttribute('href', '/img/favicons/JR.ico')
    }

    documentHead.appendChild(linkTag)
}

const addEventListeners = () => {
    const menu = document.getElementById('menu')
    menu.addEventListener('click', menuClick)
    document.addEventListener('click', hideMobileMenu)
}

const menuClick = ev => {
    const aside = document.querySelector('aside')
    const hamburgerClass = ev.target.closest('svg').classList.value

    if(hamburgerClass.includes('active')) {
        aside.style.transform = 'translateX(-100vw)'
    } else {
        aside.style.transform = 'translateX(100vw)'
    }
    
    
}

const hideMobileMenu = ev => {
    const aside = document.querySelector('aside')
    const menu = document.querySelector('.ham')
    const position = aside.getBoundingClientRect()
    if(position.left < window.innerWidth) {
        aside.style.transform = 'translateX(100vw)'
        menu.classList.remove('active')

    }
}

const activateSwipers = () => {
    const swiper = new Swiper('.swiper-container', {
        spaceBetween: 200,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      })

    const swiper2 = new Swiper('.swiper-container2', {
        spaceBetween: 300
      });
    document.querySelector('.swipe-skills').addEventListener('click', () => {
        swiper2.slideNext()
    })

    const swiper3 = new Swiper('.swiper-container3', {
        spaceBetween: 300
      })
    document.querySelector('.swipe-form').addEventListener('click', () => {
        swiper3.slideNext()
    })

    const swiper4 = new Swiper('.swiper-container4', {
        slidesPerView: 'auto',
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        spaceBetween: 300
    })

}

const isMobileBrowser = () => {
    let mobileBrowser = false

    if ( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i) ) {
        mobileBrowser = true
    }

    return mobileBrowser
}

const detectDarkMode = () => {
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    return isDark
}

const copyrightMessage = () => {
    const date = new Date()
    let year = date.getFullYear()
    const copyrightTag = document.getElementById('copyright')
    copyrightTag.innerHTML = `&copy; Copyright ${year} - Justin Rignault. All Rights Reserved`
}

document.addEventListener('DOMContentLoaded', init)
