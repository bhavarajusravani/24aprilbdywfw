document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.querySelector('.play-button');
    const backgroundMusic = document.getElementById('background-music');

    playButton.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            playButton.textContent = 'Pause Music';
        } else {
            backgroundMusic.pause();
            playButton.textContent = 'Play Music';
        }
    });
});
