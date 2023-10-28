// ==UserScript==
// @name         Paper server lock HACK
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://paper-io.com/conflict/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=paper-io.com
// @grant        none
// ==/UserScript==

function func() {
    'use strict';

    function serverLock(){
        _p2_0x2c70[700] = 0
    }

  serverLock()
};

window.onload = func
