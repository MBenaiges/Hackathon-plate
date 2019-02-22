'use strict';

function main () {
  console.log('JS Running');
}

console.clear();
//console.log("ScrollMagic v%s loaded", ScrollMagic.version);

// init
var ctrl = new ScrollMagic.Controller();

var $s = $("div.square").first();

$s.css("opacity", 0);
var scene1 = new ScrollMagic.Scene({
       offset: 10,
       duration: 80
   })
   .on("enter leave", function (e) {
       TweenMax.to($s, 0.5, {opacity: e.type === "enter" ? 1 : 0});
   })
   .addTo(ctrl)
   .addIndicators();
var scene2 = new ScrollMagic.Scene({
       offset: 500,
       duration: 80
   })
   .on("enter leave", function (e) {
       TweenMax.to($s, 0.5, {opacity: e.type === "enter" ? 1 : 0}, {right: e.type === "enter" ? -10 : 0});
   })
   .addTo(ctrl)
   .addIndicators();


window.addEventListener('load', main);