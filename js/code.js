/***************************************************************************
Filename: code.js
Author: Justin Rignault
Description: main javascript file linked to index.html for my personal website
****************************************************************************/
'use strict'

document.addEventListener('DOMContentLoaded', init)

function init() {
    addEventListeners()
    detectDarkMode()
}

const addEventListeners = () => {

}

const detectDarkMode = () => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)')
    console.log(isDark)
}