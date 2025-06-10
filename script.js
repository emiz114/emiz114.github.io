const text = "Senior at Penn Engineering";
  const element = document.getElementById("typewriter");

  let i = 0;
  function typeChar() {
    if (i < text.length) {
      const currentChar = text[i] === '\n' ? '<br>' : text[i];
      element.innerHTML += currentChar;
      i++;
      setTimeout(typeChar, 100); // speed in ms
    }
  }

  typeChar();