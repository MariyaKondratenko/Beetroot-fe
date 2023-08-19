// Створити сторінку, що показує нумерований список пісень:

const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

const ol = document.createElement("ol");
playList.forEach((playItem) => {
  const li = document.createElement("li");
  li.textContent = `Song: ${playItem.song} Author: ${playItem.author}`;
  ol.appendChild(li);
});
document.body.appendChild(ol);

// Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном.
// На модальном вікні повинен бути текст і кнопка "Закрити".
// Спочатку модальне вікно не відображається.
// При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

const openBtn = document.createElement("button");
openBtn.textContent = "Open";
document.body.appendChild(openBtn);

const modalWrapper = document.createElement("section");
modalWrapper.style.width = "1000px";
modalWrapper.style.height = innerHeight + "100px";
modalWrapper.classList.add("modal-wrapper");
document.body.appendChild(modalWrapper);

const modal = document.createElement("section");
modal.style.width = "1000px";
modal.style.height = "250px";
modal.style.backgroundColor = "lightgreen";
modal.classList.add("modal");
modal.textContent = "Modal";
modalWrapper.appendChild(modal);

const closeBtn = document.createElement("button");
// closeBtn.style.marginRight = o;
closeBtn.textContent = "Close";
modal.appendChild(closeBtn);

modalWrapper.addEventListener("click", () => {
  modalWrapper.style.display = "none";
});

openBtn.addEventListener("click", () => {
  modalWrapper.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modalWrapper.style.display = "none";
});
