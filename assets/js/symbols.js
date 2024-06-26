  c$(document).ready(function() {
    const symbolsContainer = $('#math-symbols-container');
    const symbols = ['√', 'π', '∑', '∫', '∞', '∂', '∆', '∇', '⊕', '⊗', '∃', '∀', '∴', '∵', '≈', '≠',
    'α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 
    'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω', 'Γ', 'Δ', 'Θ', 'Λ', 'Ξ', 'Π', 'Σ', 'Φ', 'Ψ', 'Ω', 
    '±', '≡', '≤', '≥', '∂', '∇', '∫', '∬', '∭', '∮', '∯', '∰', '∴'];
    const totalSymbols = 15;

    function getRandomSymbol() {
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    function getRandomPosition() {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        return { x, y };
    }

    function createSymbolElement() {
        const symbol = getRandomSymbol();
        const position = getRandomPosition();
        const symbolElement = $('<div class="math-symbol"></div>').text(symbol);

        symbolElement.css({
            left: `${position.x}vw`,
            top: `${position.y}vh`,
            '--direction-x': Math.random() > 0.5 ? 1 : -1,
            '--direction-y': Math.random() > 0.5 ? 1 : -1,
        });

        symbolElement.on('mouseenter', function() {
            $(this).addClass('bubblePop');
            setTimeout(() => {
                $(this).remove();
                createSymbolElement(); // Create a new symbol after popping
            }, 500); // Match the duration of the bubblePop animation
        });

        symbolsContainer.append(symbolElement);
    }

    function populateSymbols() {
        for (let i = 0; i < totalSymbols; i++) {
            createSymbolElement();
        }
    }

    populateSymbols();
});
