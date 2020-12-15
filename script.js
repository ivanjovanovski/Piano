function playSound(e) {
    let audio = document.querySelector(`audio[data-key="${e.key}"]`);
    let key = document.querySelector(`div.key[data-key="${e.key}"]`);
    console.log(audio, key);

    if (!audio) return;
    audio.play();
    key.classList.add('playing');
}

let keys = document.querySelectorAll('div.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

addEventListener('keydown', playSound);
