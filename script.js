/**
 * ICS3U - 4.4 Interaction with HTML
 * Mr. Brash 🐿️
 *
 * Make sure you read the lesson and watch the in-class demo.
 *
 * Author: Mr. Squirrel
 */

'use strict';

document.getElementById("add_click_btn").addEventListener("click", increment);

let counter = 0;

function increment() {
  counter++;
  document.getElementById("click_count").innerText = counter;
  return counter;
}


