// ============================================
// EXERCIȚII - Atelier A2: Negation (nicht vs kein)
// Claudia Toth · 5 exerciții cu rezolvări complete
// kein- · MC nicht/kein · poziția lui nicht · negare · traducere
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
        .replace(/ae/g, 'a').replace(/oe/g, 'o').replace(/ue/g, 'u')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/[.!?;:]/g, '').replace(/\s+/g, ' ').trim();
}

function answerMatches(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(target => {
        const t = normalizeAnswer(target);
        return user === t || user.includes(t) || t.includes(user);
    });
}

function answerExact(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(a => normalizeAnswer(a) === user);
}

// ============================================
// EX 1: Forma lui „kein-" (Nom/Akk/Dativ) (10 itemi)
// ============================================
const ex1Data = [
    { id: 'a', prompt: 'Ich habe ____ Auto. (n, Akk)', hint: 'ca ein → ?', correct: 'kein', accept: ['kein'] },
    { id: 'b', prompt: 'Ich habe ____ Zeit. (f, Akk — necontabil)', hint: 'feminin → ?', correct: 'keine', accept: ['keine'] },
    { id: 'c', prompt: 'Ich habe ____ Hund. (m, Akk)', hint: 'ca einen → ?', correct: 'keinen', accept: ['keinen'] },
    { id: 'd', prompt: 'Das ist ____ Problem. (n, Nom)', hint: 'ca ein → ?', correct: 'kein', accept: ['kein'] },
    { id: 'e', prompt: 'Ich brauche ____ Hilfe. (f, Akk)', hint: 'feminin → ?', correct: 'keine', accept: ['keine'] },
    { id: 'f', prompt: 'Ich spreche mit ____ Mann. (m, Dativ)', hint: 'ca einem → ?', correct: 'keinem', accept: ['keinem'] },
    { id: 'g', prompt: 'Hier sind ____ Kinder. (pl, Nom)', hint: 'plural → ?', correct: 'keine', accept: ['keine'] },
    { id: 'h', prompt: 'Ich habe ____ Geld. (n, Akk — necontabil)', hint: 'neutru → ?', correct: 'kein', accept: ['kein'] },
    { id: 'i', prompt: 'Sie hat ____ Schwester. (f, Akk)', hint: 'feminin → ?', correct: 'keine', accept: ['keine'] },
    { id: 'j', prompt: 'Wir wohnen in ____ Haus. (n, Dativ)', hint: 'ca einem → ?', correct: 'keinem', accept: ['keinem'] }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Completează forma corectă a lui „kein-".</strong><br>
        Se declină ca ein-/mein-: kein/keine/keinen/keinem/keiner.
    </div>`;
    ex1Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex1-${it.id}" placeholder="kein...">
            </div>
            <div class="feedback" id="ex1-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex1Data.length };
}

function resetEx1() {
    buildEx1();
    const s = document.getElementById('score-1');
    if (s) s.textContent = '';
}

// ============================================
// EX 2: nicht sau kein? (8 itemi)
// ============================================
const ex2Data = [
    { id: 'a', text: 'Ich habe ____ Auto. (substantiv cu ein)', a: 'kein', b: 'nicht', correct: 'kein', expl: 'Substantiv cu ein → kein.' },
    { id: 'b', text: 'Ich arbeite ____. (verb)', a: 'nicht', b: 'kein', correct: 'nicht', expl: 'Negi verbul → nicht.' },
    { id: 'c', text: 'Das ist ____ schön. (adjectiv)', a: 'nicht', b: 'kein', correct: 'nicht', expl: 'Negi un adjectiv → nicht.' },
    { id: 'd', text: 'Ich habe ____ Zeit. (necontabil)', a: 'keine', b: 'nicht', correct: 'keine', expl: 'Substantiv fără articol → keine.' },
    { id: 'e', text: 'Das ist ____ mein Auto. (cu mein)', a: 'nicht', b: 'kein', correct: 'nicht', expl: 'Substantiv cu mein → nicht (kein doar la ein/fără articol).' },
    { id: 'f', text: 'Er kommt ____ oft. (adverb)', a: 'nicht', b: 'kein', correct: 'nicht', expl: 'Negi un adverb → nicht.' },
    { id: 'g', text: 'Ich habe ____ Kinder. (plural fără articol)', a: 'keine', b: 'nicht', correct: 'keine', expl: 'Plural fără articol → keine.' },
    { id: 'h', text: 'Das ist ____ der Bus. (cu der)', a: 'nicht', b: 'kein', correct: 'nicht', expl: 'Substantiv cu der → nicht.' }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>⚖️ nicht sau kein?</strong><br>
        Substantiv cu ein / fără articol → kein. Verb / adjectiv / der / mein → nicht.
    </div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:8px;"><strong>${it.text}</strong></p>
                <label style="display:block; margin-bottom:5px;"><input type="radio" name="ex2-${it.id}" value="${it.a}"> ${it.a}</label>
                <label style="display:block;"><input type="radio" name="ex2-${it.id}" value="${it.b}"> ${it.b}</label>
            </div>
            <div class="feedback" id="ex2-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex2-${it.id}"]:checked`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        if (sel && sel.value === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.expl}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.expl}`;
        }
    });
    return { correct, total: ex2Data.length };
}

function resetEx2() {
    buildEx2();
    const s = document.getElementById('score-2');
    if (s) s.textContent = '';
}

// ============================================
// EX 3: Poziția lui „nicht" — inserează corect (8 itemi)
// ============================================
const ex3Data = [
    { id: 'a', prompt: 'Ich kenne ihn. (+ nicht)', hint: 'negi tot → nicht la final', correct: 'Ich kenne ihn nicht.', accept: ['ich kenne ihn nicht'] },
    { id: 'b', prompt: 'Das ist schön. (+ nicht)', hint: 'înaintea adjectivului', correct: 'Das ist nicht schön.', accept: ['das ist nicht schön', 'das ist nicht schoen'] },
    { id: 'c', prompt: 'Ich wohne in Berlin. (+ nicht)', hint: 'înaintea complementului prepozițional', correct: 'Ich wohne nicht in Berlin.', accept: ['ich wohne nicht in berlin'] },
    { id: 'd', prompt: 'Ich kann kommen. (+ nicht)', hint: 'înaintea verbului la infinitiv', correct: 'Ich kann nicht kommen.', accept: ['ich kann nicht kommen'] },
    { id: 'e', prompt: 'Ich rufe dich an. (+ nicht)', hint: 'înaintea prefixului separabil', correct: 'Ich rufe dich nicht an.', accept: ['ich rufe dich nicht an'] },
    { id: 'f', prompt: 'Er fährt schnell. (+ nicht)', hint: 'înaintea adverbului', correct: 'Er fährt nicht schnell.', accept: ['er fährt nicht schnell', 'er faehrt nicht schnell'] },
    { id: 'g', prompt: 'Ich habe gearbeitet. (+ nicht)', hint: 'înaintea participiului', correct: 'Ich habe nicht gearbeitet.', accept: ['ich habe nicht gearbeitet'] },
    { id: 'h', prompt: 'Sie kommt heute. (+ nicht)', hint: 'negi tot → la final', correct: 'Sie kommt heute nicht.', accept: ['sie kommt heute nicht'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📍 Pune „nicht" la locul corect și scrie propoziția.</strong><br>
        Negi tot → nicht la final. Negi o parte → nicht înaintea ei.
    </div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex3-${it.id}" placeholder="Scrie propoziția cu nicht...">
            </div>
            <div class="feedback" id="ex3-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        if (answerMatches(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex3Data.length };
}

function resetEx3() {
    buildEx3();
    const s = document.getElementById('score-3');
    if (s) s.textContent = '';
}

// ============================================
// EX 4: Neagă propoziția (kein sau nicht) (8 itemi)
// ============================================
const ex4Data = [
    { id: 'a', prompt: 'Ich habe ein Auto.', hint: 'substantiv cu ein → kein', correct: 'Ich habe kein Auto.', accept: ['ich habe kein auto'] },
    { id: 'b', prompt: 'Ich arbeite heute.', hint: 'verb → nicht (la final)', correct: 'Ich arbeite heute nicht.', accept: ['ich arbeite heute nicht'] },
    { id: 'c', prompt: 'Das ist schön.', hint: 'adjectiv → nicht', correct: 'Das ist nicht schön.', accept: ['das ist nicht schön', 'das ist nicht schoen'] },
    { id: 'd', prompt: 'Sie hat Zeit.', hint: 'necontabil → keine', correct: 'Sie hat keine Zeit.', accept: ['sie hat keine zeit'] },
    { id: 'e', prompt: 'Wir haben Kinder.', hint: 'plural → keine', correct: 'Wir haben keine Kinder.', accept: ['wir haben keine kinder'] },
    { id: 'f', prompt: 'Er kommt.', hint: 'verb → nicht', correct: 'Er kommt nicht.', accept: ['er kommt nicht'] },
    { id: 'g', prompt: 'Das ist mein Buch.', hint: 'cu mein → nicht', correct: 'Das ist nicht mein Buch.', accept: ['das ist nicht mein buch'] },
    { id: 'h', prompt: 'Ich trinke Kaffee.', hint: 'substantiv necontabil (m) → keinen', correct: 'Ich trinke keinen Kaffee.', accept: ['ich trinke keinen kaffee'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🙅 Neagă propoziția (cu kein sau nicht).</strong><br>
        Substantiv cu ein/fără articol → kein; restul → nicht.
    </div>`;
    ex4Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex4-${it.id}" placeholder="Scrie propoziția negativă...">
            </div>
            <div class="feedback" id="ex4-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        if (answerMatches(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex4Data.length };
}

function resetEx4() {
    buildEx4();
    const s = document.getElementById('score-4');
    if (s) s.textContent = '';
}

// ============================================
// EX 5: Traduce în germană (10 itemi)
// ============================================
const ex5Data = [
    { id: 'a', ro: 'Nu am timp.', correct: 'Ich habe keine Zeit.', accept: ['ich habe keine zeit'] },
    { id: 'b', ro: 'Nu vin.', correct: 'Ich komme nicht.', accept: ['ich komme nicht'] },
    { id: 'c', ro: 'Nu e frumos.', correct: 'Das ist nicht schön.', accept: ['das ist nicht schön', 'das ist nicht schoen'] },
    { id: 'd', ro: 'Nu am mașină.', correct: 'Ich habe kein Auto.', accept: ['ich habe kein auto'] },
    { id: 'e', ro: 'Nu locuiesc în Berlin.', correct: 'Ich wohne nicht in Berlin.', accept: ['ich wohne nicht in berlin'] },
    { id: 'f', ro: 'Nu am copii.', correct: 'Ich habe keine Kinder.', accept: ['ich habe keine kinder'] },
    { id: 'g', ro: 'Nu te sun.', correct: 'Ich rufe dich nicht an.', accept: ['ich rufe dich nicht an'] },
    { id: 'h', ro: 'Nu e mașina mea.', correct: 'Das ist nicht mein Auto.', accept: ['das ist nicht mein auto'] },
    { id: 'i', ro: 'Nu beau cafea.', correct: 'Ich trinke keinen Kaffee.', accept: ['ich trinke keinen kaffee'] },
    { id: 'j', ro: 'Ba da! (răspuns la o întrebare negativă)', correct: 'Doch!', accept: ['doch'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🗣️ Traduce în germană.</strong> substantiv cu ein/fără articol → kein; restul → nicht; „ba da" → Doch.
    </div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>🇷🇴 ${it.ro}</strong></p>
                <input type="text" id="ex5-${it.id}" placeholder="Scrie traducerea în germană...">
            </div>
            <div class="feedback" id="ex5-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        if (answerMatches(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex5Data.length };
}

function resetEx5() {
    buildEx5();
    const s = document.getElementById('score-5');
    if (s) s.textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
    buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5();
});
