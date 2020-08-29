/***************************************************************************
Filename: code.js
Author: Justin Rignault
Description: main javascript file linked to index.html for my personal website
****************************************************************************/
'use strict'

function init() {
    setFavicon()
    addEventListeners()
    activateSwiper()
    activateSwiper2()
    copyrightMessage()
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
}

const activateSwiper = () => {
    const swiper = new Swiper('.swiper-container', {
        spaceBetween: 100,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
}

const activateSwiper2 = () => {
    const swiper = new Swiper('.swiper-container2', {
        spaceBetween: 300
      });
    document.querySelector('.swipe-skills').addEventListener('click', () => {
        swiper.slideNext()
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
    console.log(copyrightTag)
    copyrightTag.innerHTML = `&copy; Copyright ${year} - Justin Rignault. All Rights Reserved`
}

document.addEventListener('DOMContentLoaded', init)
