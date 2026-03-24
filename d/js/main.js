function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    
    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        // Vaqt 0 ga yetganda
        if (--timer < 0) {
            // Taymerni to'xtatmaymiz (clearInterval qilmaymiz)
            // Shunchaki timer qiymatini yana boshlang'ich vaqtga qaytaramiz
            timer = duration; 
        }
    }, 1000);
}

window.onload = function () {
    const fiftyNineSeconds = 59; // Necha sekunddan boshlanishi
    const display = document.querySelector('.timer__text');
    startTimer(fiftyNineSeconds, display);
};