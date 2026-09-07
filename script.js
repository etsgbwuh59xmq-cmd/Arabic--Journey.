const arabicAlphabet = [
    'أ', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 
    'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 
    'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 
    'ك', 'ل', 'م', 'ن', 'هـ', 'و', 'ي'
];

document.getElementById('letter-count').innerText = arabicAlphabet.length;

const grid = document.getElementById('alphabet-grid');
const select = document.getElementById('letter-select');

arabicAlphabet.forEach(letter => {
    const btn = document.createElement('button');
    btn.className = 'letter-btn';
    btn.innerText = letter;
    btn.onclick = () => playSound(letter);
    grid.appendChild(btn);

    const option = document.createElement('option');
    option.value = letter;
    option.innerText = letter;
    select.appendChild(option);
});

function playSound(text) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
}

function speakHarakah(harakah) {
    const selectedLetter = select.value;
    const combinedText = selectedLetter + harakah;
    
    document.getElementById('harakah-display').innerText = combinedText;
    playSound(combinedText);
}