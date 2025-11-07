const deckContainer = document.getElementById('deck');
const drawBtn = document.getElementById('drawBtn');

const suits = [
    { symbol: '♥', color: 'red' },
    { symbol: '♦', color: 'red' },
    { symbol: '♣', color: 'black' },
    { symbol: '♠', color: 'black' }
];

const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

let deck = [];

// Генерация колоды
function generateDeck() {
    deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push({ value, suit });
        }
    }
}

generateDeck();

drawBtn.addEventListener('click', () => {
    if (deck.length === 0) {
        alert("Колода пуста! Перезагрузите страницу, чтобы начать заново.");
        return;
    }

    // Выбор случайной карты
    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck.splice(randomIndex, 1)[0];

    // Создание HTML карты
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', card.suit.color);
    cardDiv.innerHTML = `
        <div class="corner top">${card.value}<br>${card.suit.symbol}</div>
        <div class="center">${card.suit.symbol}</div>
        <div class="corner bottom">${card.value}<br>${card.suit.symbol}</div>
    `;

    // Анимация переворота
    const oldCard = document.getElementById('card');
    oldCard.style.transform = "rotateY(180deg)";
    setTimeout(() => {
        deckContainer.innerHTML = "";
        cardDiv.id = "card";
        deckContainer.appendChild(cardDiv);
    }, 300);
});
