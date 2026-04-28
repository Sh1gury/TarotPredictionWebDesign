const formSection = document.querySelector('.container');
const resultSection = document.getElementById('result-section');
const buttons = document.querySelectorAll('.buttons-group button');

const btnThreeCards = buttons[0];
const btnCardOfDay = buttons[1];
const btnYesNo = buttons[2];

function getRandomCards(count) {
    const shuffled = [...cardsDatabase].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function showLoader(message) {
    formSection.style.display = 'none';
    resultSection.style.display = 'block';
    resultSection.innerHTML = `
        <h2 style="color: #EEEEEE;">${message} 🔮</h2>
        <div class="mystic-loader"></div>
    `;
}

btnThreeCards.addEventListener('click', function() {
    showLoader('Зосереджуємось на минулому, теперішньому та майбутньому...');

    setTimeout(function() {
        const cards = getRandomCards(3);
        const labels = ['Минуле', 'Теперішнє', 'Майбутнє'];

        let cardsHTML = `<div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">`;

        for (let i = 0; i < 3; i++) {
            cardsHTML += `
                <div class="card fade-in" style="background: transparent; border: none; box-shadow: none; animation-delay: ${i * 0.3}s;">
                    <p style="color: #EEEEEE; margin-bottom: 10px;">${labels[i]}</p>
                    <img src="${cards[i].image}" alt="${cards[i].name}" style="width: 150px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0, 173, 181, 0.5);">
                    <p style="font-size: 16px; margin-top: 15px; color: #00ADB5;">${cards[i].name}</p>
                </div>
            `;
        }
        cardsHTML += `</div>`;

        resultSection.innerHTML = `
            <h2 style="color: #EEEEEE; margin-bottom: 30px;">Ваш Розклад</h2>
            ${cardsHTML}
            <button class="btn-main fade-in" onclick="location.reload()" style="margin-top: 40px; animation-delay: 1s;">Зробити новий розклад</button>
        `;
    }, 2000);
});

btnCardOfDay.addEventListener('click', function() {
    showLoader('Тасуємо колоду...');

    setTimeout(function() {
        const card = getRandomCards(1)[0];

        resultSection.innerHTML = `
            <h2 style="color: #EEEEEE; margin-bottom: 20px;">Ваша Карта Дня</h2>
            <div class="card fade-in" style="background: transparent; border: none; box-shadow: none;">
                <img src="${card.image}" alt="${card.name}" style="max-width: 250px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0, 173, 181, 0.5);">
                <p style="font-size: 20px; margin-top: 15px; color: #00ADB5;">${card.name}</p>
            </div>
            <button class="btn-main fade-in" onclick="location.reload()" style="margin-top: 30px; animation-delay: 0.5s;">Зробити новий розклад</button>
        `;
    }, 2000);
});

btnYesNo.addEventListener('click', function() {
    showLoader('Запитуємо у вищих сил...');

    setTimeout(function() {
        const card = getRandomCards(1)[0];

        const isYes = Math.random() > 0.5;
        const answerText = isYes ? "ТАК" : "НІ";
        const answerColor = isYes ? "#00ADB5" : "#e94560";

        resultSection.innerHTML = `
            <h2 style="color: #EEEEEE; margin-bottom: 20px;">Відповідь карт: <span style="color: ${answerColor}; font-size: 32px;">${answerText}</span></h2>
            <div class="card fade-in" style="background: transparent; border: none; box-shadow: none;">
                <img src="${card.image}" alt="${card.name}" style="max-width: 200px; border-radius: 12px; box-shadow: 0 10px 30px rgba(${isYes ? '0, 173, 181' : '233, 69, 96'}, 0.5);">
                <p style="font-size: 18px; margin-top: 15px; color: #EEEEEE;">Енергія карти: ${card.name}</p>
            </div>
            <button class="btn-main fade-in" onclick="location.reload()" style="margin-top: 30px; animation-delay: 0.5s;">Зробити новий розклад</button>
        `;
    }, 2000);
});