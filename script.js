const letters = ['أ', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'هـ', 'و', 'ي'];

// لیستەی وشە عەرەبییەکان لەگەڵ مانای کوردی
const words = [
    { ar: 'تفاحة', ku: 'سێو 🍎' },
    { ar: 'كتاب', ku: 'کتێب 📖' },
    { ar: 'مدرسة', ku: 'قوتابخانە 🏫' },
    { ar: 'شمس', ku: 'خۆر ☀️' },
    { ar: 'قمر', ku: 'مانگ 🌙' },
    { ar: 'ماء', ku: 'ئاو 💧' },
    { ar: 'بيت', ku: 'ماڵ 🏠' }
];

const lettersContainer = document.getElementById('lettersContainer');
const wordsContainer = document.getElementById('wordsContainer');
const selectedWord = document.getElementById('selectedWord');
const kurdishMeaning = document.getElementById('kurdishMeaning');

// لێدانی دەنگی عەرەبی
function speakArabic(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    window.speechSynthesis.speak(utterance);
}

// دروستکردنی دوگمەی پیتەکان
letters.forEach(letter => {
    const btn = document.createElement('button');
    btn.className = 'btn-item';
    btn.innerText = letter;
    btn.onclick = () => {
        speakArabic(letter);
        selectedWord.innerText = `پیتی: ${letter}`;
        kurdishMeaning.innerText = `دەنگی پیتی (${letter})`;
    };
    lettersContainer.appendChild(btn);
});

// دروستکردنی دوگمەی وشەکان
words.forEach(wordObj => {
    const btn = document.createElement('button');
    btn.className = 'btn-item';
    btn.innerText = wordObj.ar;
    btn.onclick = () => {
        speakArabic(wordObj.ar);
        selectedWord.innerText = `وشەی عەرەبی: ${wordObj.ar}`;
        kurdishMeaning.innerText = `بە کوردی: ${wordObj.ku}`;
    };
    wordsContainer.appendChild(btn);
});
