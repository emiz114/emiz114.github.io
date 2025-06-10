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

const cat = document.getElementById('cat');
  let mouseX = 0, mouseY = 0;
  let catX = 0, catY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function followMouse() {
    // Move the cat a fraction of the way toward the cursor
    catX += (mouseX - catX) * 0.05;
    catY += (mouseY - catY) * 0.05;
    cat.style.transform = `translate(${catX}px, ${catY}px)`;
    requestAnimationFrame(followMouse);
  }

  followMouse();