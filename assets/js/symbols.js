document.addEventListener("DOMContentLoaded", function() {
    const symbolsContainer = document.getElementById('math-symbols-container');
    const symbols = ['√', 'π', '∑', '∫', '∞', '∂', '∆', '∇', '∫', '∬', '∭', '∮', '∯', '∰''⊕', '⊗', '∃', '∀', '∴', '∵', '≈', '≠', 'α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω'];

   function createSymbol() {
        const symbol = document.createElement('div');
        symbol.classList.add('math-symbol');
        symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        symbol.style.top = Math.random() * 100 + 'vh';
        symbol.style.left = Math.random() * 100 + 'vw';
        symbol.style.transform = `translate(-${Math.random() * 50}px, -${Math.random() * 50}px)`;
        symbol.style.fontSize = Math.random() * 24 + 12 + 'px'; // Randomize font size
        symbolsContainer.appendChild(symbol);

        symbol.addEventListener('mouseover', () => {
            symbol.classList.add('pop');
            setTimeout(() => {
                symbol.remove();
                createSymbol();
            }, 500);
        });
    }

    for (let i = 0; i < 20; i++) {
        createSymbol();
    }
});
