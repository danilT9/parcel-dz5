import {alert,defaultModules} from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});

const keyStatus = document.getElementById("key");

const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const newGame = document.getElementById("new-game");
let currentKeyIndex = 0;
keyStatus.textContent = keys[currentKeyIndex]


document.addEventListener("click", e => {
    if (e.target.tagName.toLowerCase() === "button") {
        currentKeyIndex = 0
        keyStatus.textContent = keys[currentKeyIndex];
        alert({text: "Нова гра!"});
    }
});

document.addEventListener("keydown", e => {
    if (e.key === keys[currentKeyIndex]) {
        if (currentKeyIndex === 9) {
            currentKeyIndex = 0;
            keyStatus.textContent = keys[currentKeyIndex];
            alert({text: "Перемога!"});
        } else {
            currentKeyIndex += 1;
            keyStatus.textContent = keys[currentKeyIndex];
        }
    } else {
        currentKeyIndex = 0;
        keyStatus.textContent = keys[currentKeyIndex];
        alert({text: "Помилка! Спробуй знову."});
    }
});

document.addEventListener("keypress", e => {
    e.preventDefault();
});