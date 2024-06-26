document.addEventListener("DOMContentLoaded", function() {
    const symbolsContainer = document.getElementById('math-symbols-container');
    const symbols = ['√', 'π', '∑', '∫', '∞', '∂', '∆', '∇', '∫', '∬', '∭', '∮', '∯', '∰''⊕', '⊗', '∃', '∀', '∴', '∵', '≈', '≠', 'α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω'];

    function getRandomPosition() {
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        return { x, y };
    }

    function createSymbol() {
        const symbolElement = document.createElement('div');
        symbolElement.classList.add('math-symbol');
        symbolElement.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        const position = getRandomPosition();
        symbolElement.style.left = `${position.x}px`;
        symbolElement.style.top = `${position.y}px`;

        symbolElement.addEventListener('animationend', function() {
            if (symbolElement.style.opacity == 0) {
                setTimeout(() => {
                    symbolsContainer.removeChild(symbolElement);
                    createSymbol();
                }, 500); // Delay removal to allow animation to complete
            }
        });

        symbolsContainer.appendChild(symbolElement);
    }

    for (let i = 0; i < 50; i++) {
        createSymbol();
    }
});
