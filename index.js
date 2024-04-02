// ==UserScript==
// @name         安兔兔排行榜配置分析
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description
// @author       poozhu
// @include      https://antutu.com/ranking/rank1.htm
// @grant        none
// ==/UserScript==

const elements = [...document.getElementsByClassName("memory")];
const list = elements.map((element) => {
  return element.innerText.match(/\(.*?\s(\d+)\/(\d+)\)/);
});

const RAM = {};
const ROM = {};
list.forEach((item) => {
  const [_, ram, rom] = item;
  RAM[ram] = RAM[ram] ? RAM[ram] + 1 : 1;
  ROM[rom] = ROM[rom] ? ROM[rom] + 1 : 1;
});

console.log(RAM, ROM);
