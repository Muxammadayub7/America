function startTimer(duration, display) {
    let timer = duration;
    
    // Taymerni darrov ishlatib yuborish (1 sekund kutib o'tirmaslik uchun)
    const updateDisplay = () => {
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration; // Qayta boshlash
        }
    };

    updateDisplay(); // Birinchi marta chaqirish
    setInterval(updateDisplay, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector('.timer__text');
    
    if (display) {
        startTimer(59, display);
    } else {
        console.error("Bro, .timer__text topilmadi! HTML-ni tekshir.");
    }
});