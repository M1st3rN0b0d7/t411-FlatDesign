// ==UserScript==
// @name         Flat Design for T411
// @version      1.0
// @namespace    https://www.t411.ch
// @description  Thème Flat Design pour T411
// @author       M1st3rN0b0d7
// @match        https://www.t411.ch/*
// @grant        none
// @require      none
// ==/UserScript==

if (!document.getElementById("FlatDesign")){
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = "FlatDesign";
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdn.rawgit.com/M1st3rN0b0d7/t411-flat-design/master/style.css';
    link.media = 'all';
    head.appendChild(link);
}