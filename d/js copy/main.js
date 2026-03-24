document.addEventListener("DOMContentLoaded", function () {
    // 1. Elementlarni aniq ID orqali ushlaymiz (innerHTML ishlatmaymiz!)
    const minDisplay = document.querySelector('#minutes');
    const secDisplay = document.querySelector('#seconds');
    
    const initialTime = 2 * 60 + 59; // 02:59
    let time = initialTime;

    // Ekranni yangilash funksiyasi
    function updateUI() {
        let m = Math.floor(time / 60);
        let s = time % 60;

        // Faqat textContent ni o'zgartiramiz, shunda dizayn (boxlar) buzilmaydi
        if (minDisplay) minDisplay.textContent = m < 10 ? '0' + m : m;
        if (secDisplay) secDisplay.textContent = s < 10 ? '0' + s : s;
    }

    // Sahifa yuklanganda birinchi marta ko'rsatish
    updateUI();

    // 2. Taymerni ishga tushirish
    setInterval(() => {
        if (time <= 0) {
            time = initialTime; // Tugasa yana 02:59 ga qaytadi
        } else {
            time--;
        }
        updateUI();
    }, 1000);
});