'use strict'

const words = [
    `Научная статья - законченное авторское произведение, описывающее результаты оригинального научного исследования (первичная научная статья) или посвящённая рассмотрению ранее опубликованных научных статей, связанных общей темой (обзорная научная статья). В первичных научных статьях авторами излагается существенная информация о проведённом исследовании в форме, позволяющей другим членам научного сообщества оценить исследование, воспроизвести эксперименты, а также оценить рассуждения и сделанные из них выводы. Обзорные научные статьи предназначены для обобщения, анализа, оценки, суммирования или синтеза ранее опубликованной информации (первичных научных публикаций). Нередко научная статья сочетает в себе эти два типа`,
    `В настоящее время основным представлением для научной статьи является печатная форма. Эта ситуация постепенно меняется - некоторые издательства наряду с выпуском печатного номера журнала выкладывают тексты опубликованных научных статей в интернет в свободный доступ. Однако в большинстве случаев это делается для подписчиков или на платной основе, что означает фактическое отсутствие статей в интернете и затрудняет поиск научной информации для исследователя. Проект "КиберЛенинка" призван исправить ситуацию в этой области`,
    `Заболеванию подвержены и взрослые растения, совсем молодая рассада - уже в возрасте семядолей, когда из земли появляются первые ростки. Основание стебелька чернеет и истончается, он легко отрывается от корня. Болезни растений такого типа называются фузариозами, поскольку вызываются грибками, - рассказывает Иван Михальчик. - Это чаще всего бесполые аскомицетовые (сумчатые) грибы, которые патогенны и могут вызвать токсикозы у человека, а некоторые фузарии вызывают дерматиты. Так что шутить с фузариозами не стоит.`,
    `Вы, конечно, знаете, что такое графы - столько раз это в Квантике1 обсуждалось, как же не знать? Если говорить просто, это точки, соединённые линиями. Точки называются вершинами графа, линии (не обязательно прямые) - его рёбрами. Вершины графа могут быть просто-так-сами-по-себе-точки, а могут что-нибудь означать. Например, в родословных вершины графа - люди, а рёбра графа соединяют мужей с жёнами и родителей с их детьми. Или вершины графа могут обозначать ребят в классе, а линии - кто с кем дружит. Нарисовать такой граф можно по-разному - важно лишь, какие вершины с какими соединены.`,
    `Марс, четвертая планета от Солнца, является объектом пристального изучения ученых. Это каменистая планета земной группы, известная своим красным цветом, обусловленным оксидом железа на поверхности. Марс обладает тонкой атмосферой и значительными геологическими особенностями, такими как вулканы, долины и полярные шапки. В настоящее время ведутся активные исследования, направленные на поиск признаков прошлой или настоящей жизни на планете. Марс издавна вызывал интерес не только у астрономов, но и у философов и деятелей искусства.`,
    `Меркурий - самая маленькая планета Солнечной системы и ближайшая к Солнцу, вокруг которого она совершает один оборот каждые 87.97 земных суток. Названа в честь древнеримского бога торговли - быстрого Меркурия. Информация о Меркурии относительно скудна, так как в наземные телескопы можно наблюдать только один освещенный полумесяц без особых подробностей. Первым из двух космических аппаратов, посетивших планету, был "Маринер-10", которому удалось сфотографировать около 45% поверхности планеты с 1974 по 1975 год. Физические характеристики планеты аналогичны Луне. Поверхность Меркурия имеет множество кратеров и гладких плоских участков, как и Луна, у него нет известных естественных спутников и почти нет атмосферы.`,
    `Коста-Рика - небольшое государство в Центральной Америке, известное своей природной красотой и приверженностью к экологическому туризму. Страна славится своими тропическими лесами, вулканами, пляжами и богатым биоразнообразием. Коста-Рика также является одной из самых безопасных стран Латинской Америки, хотя рекомендуется соблюдать осторожность в крупных городах.Коста-Рика расположена между Никарагуа и Панамой, имеет выход к Тихому океану и Карибскому морю. Более четверти территории страны занимают национальные парки и заповедники.`,
    `Попав в Аргентину, можно сразу заметить, что эта страна отличается своеобразием от других стран этого континента. Это южноамериканское государство прославилось самобытной культурой, нестандартной атмосферой и смешанными обычаями Старого и Нового Света. Ее неповторимые рукодельные изделия и памятные места привлекают туристов со всего света. Нетипичные стандарты и достопримечательности Аргентины способны покорить сердца гостей этой удивительной страны. Занимая лидирующие позиции южноамериканского континента по демографическому расположению, государство является третьим после Бразилии и Колумбии. Население Аргентины составляет свыше сорока миллионов человек.`
];

document.addEventListener('DOMContentLoaded', () => {
    if(window.innerWidth < 960) {
        gameState.wrap.innerHTML = `
        <div class="warn">
            Приложение работает на экранах шире 960px с клавиатурой!
        </div>`
    }
});


const gameState = {
    wrap: document.querySelector('.wrap'),
    startBtn: document.querySelector('.nav__start-btn'),
    inputName: document.querySelector('.popup-name__input'),
    popupNameButton: document.querySelector('.popup-name__btn'),
    popupName: document.querySelector('.popup-name'),
    recordsSectionTable: document.querySelector('.records-section__table'),
    name: '',
    currentIndex: 0,
    currentLetters: [],
    error: 0,
    saveArr: JSON.parse(localStorage.getItem('players')) || [],
    keydown: null
};

function randomWords(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const normalizedText = arr[randomIndex].replace(/\s+/g, ' ').trim();
    return normalizedText
        .split('')
        .map(el => `<span class="letter">${el}</span>`)
        .join('');
}

function startGame() {
    gameState.startBtn.addEventListener('click', () => {
        gameState.wrap.innerHTML = `
            <div class="game-info">
                <div class="game-info__img"><img src="загрузка1.png" alt=""></div>	
                <div class="game-info__error">Ошибок: 0</div>
                <div class="game-info__time">60</div>
            </div>
        `;
        gameState.popupName.classList.add('popup-name--active');
        gameState.popupName.addEventListener('transitionend', () => {
            const popupClose = document.querySelector('.popup-name__close');
            popupClose.addEventListener('click', () => {
                location.reload();
            });
        }, { once: true });
    });

    gameState.popupNameButton.addEventListener('click', () => {
        gameState.name = gameState.inputName.value.trim();
        if (gameState.name !== '') {
            gameState.popupName.classList.remove('popup-name--active');
            gameState.popupName.addEventListener('transitionend', () => {
                const randomText = randomWords(words);
                gameState.wrap.innerHTML = `
                    <div class="game-info">
                         <div class="game-info__img"><img src="загрузка1.png" alt=""></div>	
                        <div class="game-info__name">${gameState.name}</div>
                        <div class="game-info__error">Ошибок: ${gameState.error}</div>
                        <div class="game-info__time">60</div>
                    </div>
                    <div class="random-text">
                        ${randomText}
                    </div>
                `;
                gameState.currentLetters = document.querySelectorAll('.letter');
                handleTyping();
                timer();
            }, { once: true });
        }
    });
}

function timer() {
    const time = document.querySelector('.game-info__time');
    const timerStop = setInterval(() => {
        let timeCount = +time.textContent;
        timeCount--;
        time.textContent = timeCount;
        console.log('Timer:', timeCount);
        if (timeCount <= 0) {
            if (gameState.keydown) {
                document.removeEventListener('keydown', gameState.keydown);
                gameState.keydown = null;
            }
            clearInterval(timerStop);
            const audioWin = new Audio('play2.mp3');
            audioWin.play().then(() => {
                audioWin.onended = () => {
                    gameState.saveArr.push({name: gameState.name, scores: gameState.currentIndex});
                    localStorage.setItem('players', JSON.stringify(gameState.saveArr));
                    gameState.popupName.classList.add('popup-name--active');
                    gameState.popupName.addEventListener('transitionend', () => {
                        gameState.wrap.innerHTML = `
                          <div class="game-info">
                            <div class="game-info__img"><img src="загрузка1.png" alt=""></div>	
                            <div class="game-info__error">Ошибок: 0</div>
                            <div class="game-info__time">60</div>
                          </div>
                          `;
                        const inputNameLabel = document.querySelector('.input-name__label');
                        inputNameLabel.textContent = 'Результат:';
                        const p = document.createElement('p');
                        p.className = 'popup-result';
                        p.textContent = `${gameState.currentIndex} зн/мин, ошибок: ${gameState.error}`;
                        gameState.inputName.replaceWith(p);
                        const resultBtn = document.createElement('button');
                        resultBtn.classList.add('resultBtn', 'popup-name__btn--btn');
                        resultBtn.textContent = 'ok';
                        gameState.popupNameButton.replaceWith(resultBtn);
                        resultBtn.onclick = () => location.reload();
                    }, { once: true });
                };
            }).catch(error => {
                console.error('Ошибка воспроизведения звука:', error);
                gameState.saveArr.push({name: gameState.name, scores: gameState.currentIndex});
                localStorage.setItem('players', JSON.stringify(gameState.saveArr));
                location.reload();
            });
        }
    }, 1000);
}

function handleTyping() {
    const ignoredKeys = ['Shift', 'CapsLock', 'Enter'];

    document.addEventListener('keydown', function keydownFn(event) {
        if (gameState.popupName.classList.contains('popup-name--active')) return;
        const pressedKey = event.key;
        if (ignoredKeys.includes(pressedKey) || !gameState.currentLetters.length || gameState.currentIndex >= gameState.currentLetters.length) return;
        const currentChar = gameState.currentLetters[gameState.currentIndex].textContent;
        console.log('Pressed:', JSON.stringify(pressedKey), 'Current:', JSON.stringify(currentChar), 'Index:', gameState.currentIndex);
        if (currentChar === pressedKey) {
            gameState.currentLetters[gameState.currentIndex].classList.add('letter--active');
            gameState.currentIndex++;
        } else {
            gameState.error++;
            const audioError = new Audio('play.mp3');
            audioError.play();
            const gameInfoError = document.querySelector('.game-info__error');
            gameInfoError.textContent = `Ошибок: ${gameState.error}`;
            if (gameState.error > 3) {
                alert('Слишком много ошибок');
                location.reload();
            }
        }
        gameState.keydown = keydownFn;
    });
}

function leaderboard() {
    if (gameState.saveArr) {
        const sortArr = gameState.saveArr.sort((a, b) => b.scores - a.scores);
        const topSaveArr = sortArr.slice(0, 5);
        const rows = topSaveArr.map((el, i) => {
            const trophy = i === 0 ? '&#9733;&#9733;&#9733;' : i === 1 ? '  &#9733;&#9733;' : i === 2 ? '&#9733;' : '';
            return `<tr>
                        <td class="records-section__table--number">${i + 1} ${trophy}</td>
                        <td class="records-section__table--player">${el.name}</td>
                        <td class="records-section__table--number">${el.scores} зн/мин</td>
                    </tr>`;
        }).join('');
        gameState.recordsSectionTable.innerHTML = `
            <h2 class="records-section__title">Таблица рекордов</h2>
            <table class="records-section__leaderboard">
                <thead>
                    <tr>
                        <th>Позиция</th>
                        <th>Имя игрока</th>
                        <th>Скорость</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>
        `;
    }
}

startGame();
leaderboard();