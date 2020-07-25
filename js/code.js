/***************************************************************************
Filename: code.js
Author: Justin Rignault
Description: main javascript file linked to index.html for my personal website
****************************************************************************/
'use strict'

document.addEventListener('DOMContentLoaded', init)

function init() {
    setNavbar()
    setFavicon()
    addEventListeners()
}

const setNavbar = () => {
    const mb = isMobileBrowser()
    const desktopNav = document.getElementById('desktop-nav')
    const mobileNav = document.getElementById('mobile-nav')
    const navHidden = desktopNav.classList.value.includes('hidden') && mobileNav.classList.value.includes('hidden')

    if(mb && navHidden) {
        show(mobileNav)
    } else if(!mb && navHidden) {
        show(desktopNav)
    }

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
    document.getElementById('hamburger-menu').addEventListener('click', showMenu)
    document.querySelector('.x-icon').addEventListener('click', closeMenu)
}

const showMenu = () => {
    const navbar = document.getElementById('mobile-nav')
    const mobileMenu = document.getElementById('mobile-menu')

    hide(navbar)
    show(mobileMenu)
    
}

const closeMenu = () => {
    const navbar = document.getElementById('mobile-nav')
    const mobileMenu = document.getElementById('mobile-menu')

    show(navbar)
    hide(mobileMenu)
}

const hide = elem => {
    elem.classList.add('hidden')
}

const show = elem => {
    elem.classList.remove('hidden')
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