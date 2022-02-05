import snarkdown from "https://cdn.skypack.dev/snarkdown";
import infoData from "./assets/data.json";
import "./components/MegadriveConsole.js";

let item = -1;
const music = new Audio("/sounds/motions.mp3");
music.loop = true;
const infoText = document.querySelector(".info-text");

const findElement = (selectors) => {
  const [base, ...elements] = selectors;

  let finalElement = document.querySelector(base);
  for (let i = 0; i < elements.length; i++) {
    finalElement = finalElement.shadowRoot.querySelector(elements[i]);
  }
  return finalElement;
};

document.addEventListener("wheel", (ev) => {
  const isDown = ev.deltaY > 0;
  if (isDown) {
    infoText.style.opacity = 1;
    music.play();
  }
}, { once: true });

infoText.querySelector("a").href = infoData[0].link.substring(0, infoData[0].link.indexOf("?"));

const elements = infoData.map(item => findElement(item.dom));
elements.forEach(element => {
  element.style.opacity = 0;
  element.style.mixBlendMode = "screen";
  element.style.transition = "opacity 0.5s, mix-blend-mode 0.5s";
});

const increment = (delta) => {
  const isDown = delta > 0;
  const diff = isDown ? 1 : -1;

  if (item + diff < -1 || item + diff > elements.length - 1) {
    return;
  }

  item += diff;

  if (item >= -1 && item < elements.length) {
    const currentItem = elements[item];
    const nextItem = elements[item + 1];

    if (isDown && currentItem) {
      currentItem.style.opacity = 1;
      currentItem.style.mixBlendMode = "normal";
    }
    if (!isDown && nextItem) {
      nextItem.style.opacity = 0;
      nextItem.style.mixBlendMode = "screen";
    }

    infoText.querySelector("h1").textContent = infoData[item].title;
    infoText.querySelector("p").innerHTML = snarkdown(infoData[item].description);
    infoText.querySelector("a").href = infoData[item].link;
  }
};

document.addEventListener("wheel", (ev) => increment(ev.deltaY));
