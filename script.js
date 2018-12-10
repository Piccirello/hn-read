// ==UserScript==
// @name         Hacker News visited highlighter
// @namespace    https://piccirello.com/
// @version      0.2
// @description  Highlights visited post links for better visibility
// @author       Tom Piccirello
// @match        https://news.ycombinator.com/*
// ==/UserScript==

(function() {
    'use strict';

    var addStyle = function (css) {
      var style = document.createElement('style');
      style.textContent = css;
      document.documentElement.appendChild(style);
      // return style; //optional, but convenient for changing the styling later.
    };

    addStyle (".storylink:visited { color: #ff6600; }");
    addStyle (".subtext>a:nth-of-type(3):visited { color: #ff6600; }");
})();
