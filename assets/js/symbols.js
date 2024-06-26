### JavaScript (symbols.js)

Create a new JavaScript file `symbols.js` in your `assets/js` directory:

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const symbolsContainer = document.getElementById('math-symbols-container');
  const symbols = ['+', '-', '=', '×', '÷', '√', 'π', '∑', '∫', '∞'];
  const symbolCount = 20; // Adjust the number of symbols

  function createSymbol() {
    const symbol = document.createElement('div');
    symbol.classList.add('math-symbol');
    symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    symbolsContainer.appendChild(symbol);

    const size = Math.random() * 20 + 10;
    symbol.style.fontSize = `${size}px`;
    symbol.style.left = `${Math.random() * 100}vw`;
    symbol.style.top = `${Math.random() * 100}vh`;

    animateSymbol(symbol);
  }

  function animateSymbol(symbol) {
    const direction = Math.random() < 0.5 ? -1 : 1;
    const duration = Math.random() * 20 + 10;

    symbol.style.setProperty('--direction', direction);
    symbol.style.setProperty('--duration', `${duration}s`);

    symbol.addEventListener('mouseover', () => {
      symbol.style.transform = 'scale(1.5)';
      symbol.style.opacity = '0';
      setTimeout(() => {
        symbolsContainer.removeChild(symbol);
        createSymbol();
      }, 200);
    });

    symbol.style.animation = `moveSymbol var(--duration) linear infinite`;
  }

  for (let i = 0; i < symbolCount; i++) {
    createSymbol();
  }
});

@keyframes moveSymbol {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(var(--direction) * 100vw, var(--direction) * 100vh);
  }
}
