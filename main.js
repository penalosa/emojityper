document.addEventListener("DOMContentLoaded", function() {
  initApp();
});
const parseEmoji = t => {
  t = t.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  t = t.replace(/\s{2,}/g, " ");
  let r = "";
  const emoji = document.getElementById("emoji");
  while (emoji.firstChild) {
    emoji.removeChild(emoji.firstChild);
  }
  let words = t.split(" ");
  console.log(words);
  words.forEach(w => {
    w = w.toLowerCase();
    if (window.emoji[w]) {
      let c = window.emoji[w].char;
      r += c;
    } else {
      w.split("").forEach(l => {
        if (window.emoji[l]) {
          r += window.emoji[l].char;
          r += "⁣";
        }
      });
    }
    r += " ";
  });
  emoji.innerHTML = twemoji.parse(r);
};
const initApp = () => {
  const text = document.getElementById("text");
  text.style.height = "";
  text.style.height = text.scrollHeight + "px";
  parseEmoji(text.value);

  text.addEventListener("input", e => {
    text.style.height = "";
    text.style.height = text.scrollHeight + "px";
    parseEmoji(e.target.value);
  });
};
