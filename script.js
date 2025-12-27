let words = [];
let i = 0;

async function loadWords() {
  const res = await fetch("words.json");
  words = await res.json();
  render();
}

function render() {
  if (words.length === 0) return;
  const w = words[i];
  document.getElementById("card").innerHTML =
    `<strong>${w.word}</strong><p>${w.note}</p>`;
}

function next() {
  i = (i + 1) % words.length;
  render();
}

loadWords();
