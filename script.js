const words = [
  { word: "corollary", note: "A result that follows directly from another." },
  { word: "opaque", note: "Hard to see through or understand." },
  { word: "regression", note: "A method to model relationships between variables." }
];

let i = 0;

function render() {
  const w = words[i];
  document.getElementById("card").innerHTML =
    `<strong>${w.word}</strong><p>${w.note}</p>`;
}

function next() {
  i = (i + 1) % words.length;
  render();
}

render();
