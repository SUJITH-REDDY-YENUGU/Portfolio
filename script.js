
const text = "Hi, I'm Yenugu Sujith Reddy";
const typewriter = document.getElementById('typewriter');
let i = 0;

function type() {
  if (i < text.length) {
    typewriter.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  } else {
    typewriter.style.borderRight = '3px solid transparent';
    setTimeout(() => {
      typewriter.style.borderRight = '3px solid cyan';
    }, 500);
  }
}

document.querySelectorAll('.skill-bar').forEach(bar => {
  const width = bar.textContent;
  bar.style.width = width;
  bar.textContent = '';
});

window.onload = function() {
  type();
};