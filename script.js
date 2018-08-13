// ==UserScript==
// @name         Hacker News visited highlighter
// @namespace    https://piccirello.com/
// @version      0.1
// @description  Highlights visited links for better visibility
// @author       Tom Piccirello
// @match        https://news.ycombinator.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle (".storylink:visited { color: #ff6600; }");
    GM_addStyle (".subtext>a:nth-of-type(3):visited { color: #ff6600; }");
})();
