// ==UserScript==
// @name         publico
// @namespace    http://tampermonkey.net/
// @version      2.2
// @description  try to take over the world!
// @author       SaltAzar
// @match        www.publico.pt/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
/*
Não esquecer de bloquear na infos os cookies do site especifico

*/
    function deleteC() {

        var allcookies = document.cookie;
        var cookiearray = allcookies.split(';');
        for(var i=0; i<cookiearray.length; i++)
        {
            var name = cookiearray[i].split('=')[0];
            var value = cookiearray[i].split('=')[1];
            console.log("Key is : " + name + " and Value is : " + value);

            if(name.includes("publicoUid")){
                document.cookie = name + "=" + value + "; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/;domain=.publico.pt";
                console.log(name)}
            if(name.includes("n_gate_new")){
                document.cookie = name + "=" + value + "; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/;domain=.publico.pt";
                console.log(name)}
            if(name.includes("pubID")){
                document.cookie = name + "=" + value + "; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/;domain=s.publicoid.com";
                console.log(name)}
            if(name.includes("legacyId")){
                document.cookie = name + "=" + value + "; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/;domain=.publico.pt";
                console.log(name)}


        }
}
localStorage.clear()
deleteC()
})();
