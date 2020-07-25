/***************************************************************************
Filename: code.js
Author: Justin Rignault
Description: main javascript file linked to index.html for my personal website
****************************************************************************/
'use strict'

document.addEventListener('DOMContentLoaded', init)

function init() {
    addEventListeners()
    setFavicon()
    setNavbar()
}

const addEventListeners = () => {

}

const setNavbar = () => {
    const mb = isMobileBrowser()
    const desktopNav = document.getElementById('desktop-nav')
    const mobileNav = document.getElementById('mobile-nav')
    const navHidden = desktopNav.classList.value.includes('hidden') && mobileNav.classList.value.includes('hidden')

    if(mb && navHidden) {
        mobileNav.classList.remove('hidden')
    } else if(!mb && navHidden) {
        desktopNav.classList.remove('hidden')
    }

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

const setFavicon = () => {
    const isDark = detectDarkMode()
    const documentHead = document.querySelector('head')
    const linkTag = document.getElementById('favicon')

    if (isDark) {
        try {
            linkTag.setAttribute('href', '/img/favicons/JR-darkTheme.ico')
        }
        catch {
            linkTag.setAttribute('href', 'https://www.github.com/justin-rignault/my-website/img/favicons/JR-darkTheme.ico')
        }
    } else {
        try {
            linkTag.setAttribute('href', '/img/favicons/JR.ico')
        }
        catch {
            linkTag.setAttribute('href', 'https://www.github.com/justin-rignault/my-website/img/favicons/JR.ico')
        }
    }

    documentHead.appendChild(linkTag)
}

const detectDarkMode = () => {
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    return isDark
}