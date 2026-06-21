// ============================================
// FLASHCARDS - Atelier A2: Negation (nicht vs kein)
// Claudia Toth · 32 carduri: concept + kein + nicht + poziție + capcane + recap
// REGULĂ: NICIODATĂ ghilimele interne ASCII — emfază cu CAPS; EXACT 6 ghilimele ASCII per linie
// ============================================

const flashcardsData = [
    // === Concept (6) ===
    { de: "kein", ro: "nu un / niciun (neagă substantiv cu ein / fără articol)", audio: "audio/letters/konzept-kein.wav" },
    { de: "nicht", ro: "nu (neagă verb / adjectiv / restul)", audio: "audio/letters/konzept-nicht.wav" },
    { de: "ein → kein", ro: "ein devine kein la negație", audio: "audio/letters/konzept-ein-kein.wav" },
    { de: "der/mein → nicht", ro: "substantiv cu der/mein → nicht (NU kein)", audio: "audio/letters/konzept-der-nicht.wav" },
    { de: "nicht am Ende", ro: "negi tot → nicht la finalul propoziției", audio: "audio/letters/konzept-final.wav" },
    { de: "nicht davor", ro: "negi o parte → nicht înaintea ei", audio: "audio/letters/konzept-vor.wav" },

    // === kein (6) ===
    { de: "kein Auto", ro: "nicio mașină (n)", audio: "audio/letters/k-auto.wav" },
    { de: "keine Zeit", ro: "niciun timp (f, necontabil)", audio: "audio/letters/k-zeit.wav" },
    { de: "keinen Hund", ro: "niciun câine (m, Akkusativ)", audio: "audio/letters/k-hund.wav" },
    { de: "keine Kinder", ro: "niciun copil (plural)", audio: "audio/letters/k-kinder.wav" },
    { de: "kein Geld", ro: "niciun ban (n, necontabil)", audio: "audio/letters/k-geld.wav" },
    { de: "mit keinem Mann", ro: "cu niciun bărbat (Dativ)", audio: "audio/letters/k-mann.wav" },

    // === nicht (6) ===
    { de: "Ich arbeite nicht.", ro: "Nu lucrez.", audio: "audio/letters/n-arbeiten.wav" },
    { de: "Das ist nicht schön.", ro: "Nu e frumos.", audio: "audio/letters/n-schoen.wav" },
    { de: "Er kommt nicht oft.", ro: "Nu vine des.", audio: "audio/letters/n-oft.wav" },
    { de: "Ich wohne nicht in Berlin.", ro: "Nu locuiesc în Berlin.", audio: "audio/letters/n-berlin.wav" },
    { de: "Ich kann nicht kommen.", ro: "Nu pot veni.", audio: "audio/letters/n-kommen.wav" },
    { de: "Ich rufe dich nicht an.", ro: "Nu te sun.", audio: "audio/letters/n-anrufen.wav" },

    // === Fraze model (4) ===
    { de: "Ich habe kein Auto.", ro: "Nu am mașină.", audio: "audio/letters/m-auto.wav" },
    { de: "Ich kenne ihn nicht.", ro: "Nu îl cunosc.", audio: "audio/letters/m-kennen.wav" },
    { de: "Das ist nicht mein Auto.", ro: "Nu e mașina mea.", audio: "audio/letters/m-mein.wav" },
    { de: "Ich trinke keinen Kaffee.", ro: "Nu beau cafea.", audio: "audio/letters/m-kaffee.wav" },

    // === Capcane (4) ===
    { de: "nichts", ro: "nimic (≠ nicht)", audio: "audio/letters/c-nichts.wav" },
    { de: "Ich sehe nichts.", ro: "Nu văd nimic.", audio: "audio/letters/c-sehe.wav" },
    { de: "doch", ro: "ba da (răspuns afirmativ la întrebare negativă)", audio: "audio/letters/c-doch.wav" },
    { de: "Hast du kein Auto? — Doch!", ro: "Nu ai mașină? — Ba da!", audio: "audio/letters/c-frage.wav" },

    // === Recap & vocab (6) ===
    { de: "nein", ro: "nu (răspuns)", audio: "audio/letters/v-nein.wav" },
    { de: "kein Problem", ro: "nicio problemă", audio: "audio/letters/v-problem.wav" },
    { de: "nie", ro: "niciodată", audio: "audio/letters/v-nie.wav" },
    { de: "niemand", ro: "nimeni", audio: "audio/letters/v-niemand.wav" },
    { de: "noch nicht", ro: "încă nu", audio: "audio/letters/v-noch.wav" },
    { de: "gar nicht", ro: "deloc / câtuși de puțin", audio: "audio/letters/v-gar.wav" }
];

let currentCard = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} flashcards cu pronunție.</strong><br>
            Apasă pe card pentru a vedea traducerea · butonul 🔊 pentru pronunție · navigare cu săgețile.
        </div>
        <div class="flashcard-counter">
            Card <span id="card-num">1</span> / ${flashcardsData.length}
        </div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playCardAudio(event)" title="Ascultă">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="card-de"></div>
                <div class="ro" id="card-ro"></div>
            </div>
            <div class="flashcard-hint" id="card-hint">Click pentru traducere</div>
        </div>
        <div class="flashcard-nav">
            <button class="btn btn-prev" onclick="prevCard()">← Anterior</button>
            <button class="btn btn-next" onclick="nextCard()">Următor →</button>
        </div>
    `;
    updateCard();
}

function updateCard() {
    const card = flashcardsData[currentCard];
    const fc = document.getElementById('flashcard');
    document.getElementById('card-de').textContent = card.de;
    document.getElementById('card-ro').textContent = card.ro;
    if (fc) fc.classList.toggle('flipped', isFlipped);
    document.getElementById('card-hint').textContent = isFlipped ? 'Click pentru DE' : 'Click pentru RO';
    document.getElementById('card-num').textContent = currentCard + 1;
}

function flipCard() {
    isFlipped = !isFlipped;
    updateCard();
}

function nextCard() {
    if (currentCard < flashcardsData.length - 1) {
        currentCard++;
        isFlipped = false;
        updateCard();
    }
}

function prevCard() {
    if (currentCard > 0) {
        currentCard--;
        isFlipped = false;
        updateCard();
    }
}

function playCardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCard];
    if (card.audio) {
        const audio = new Audio(card.audio);
        audio.play().catch(err => console.log('Audio nu poate fi redat:', err));
    }
}

document.addEventListener('DOMContentLoaded', buildFlashcards);
