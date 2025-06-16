const audioButton = document.getElementById('audioButton');
const audioIcon = document.getElementById('audioIcon');
const backgroundMusic = document.getElementById('backgroundMusic');
let isPlaying = false;

audioButton.addEventListener('click', function() {
    if (isPlaying) {
        backgroundMusic.pause();
        audioIcon.classList.remove('fa-volume-up');
        audioIcon.classList.add('fa-volume-mute');
    } else {
        backgroundMusic.play();
        audioIcon.classList.remove('fa-volume-mute');
        audioIcon.classList.add('fa-volume-up');
    }
    isPlaying = !isPlaying;
});

    const cardsContainer = document.getElementById('cards');
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    const cardsToShow = 5;
    let currentIndex = 0;

    function updateCardsPosition() {
        const offset = currentIndex * -(100 / cardsToShow);
        cardsContainer.style.transform = `translateX(${offset}%)`;
    }

    document.querySelector('.left-arrow').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        }
        updateCardsPosition();
    });

    document.querySelector('.right-arrow').addEventListener('click', () => {
        if (currentIndex < (totalCards / cardsToShow) - 1) {
            currentIndex++;
        }
        updateCardsPosition();
    });



