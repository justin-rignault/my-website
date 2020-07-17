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
}

const addEventListeners = () => {

}

const setFavicon = () => {
    const isDark = detectDarkMode()
    const documentHead = document.querySelector('head')
    const linkTag = document.getElementById('favicon')

    if (isDark) {
        linkTag.setAttribute('href', '/JR-darkTheme.ico?')
    } else {
        linkTag.setAttribute('href', '/JR.ico?')
    }

    documentHead.appendChild(linkTag)
}

const detectDarkMode = () => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return isDark
}