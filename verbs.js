// ============================================
// VERB-KONJUGATION - Atelier A2: Negation (nicht vs kein)
// 6 verbe pentru exemple de negație: kennen · mögen · brauchen · verstehen · glauben · essen
// ============================================

const verbsData = [
    {
        inf: 'kennen', ro: 'a cunoaște', typ: 'neregulat (Mischverb)', aux: 'haben', part: 'gekannt',
        praes: [
            ['ich','kenne','cunosc'],['du','kennst','cunoști'],['er/sie/es','kennt','cunoaște'],
            ['wir','kennen','cunoaștem'],['ihr','kennt','cunoașteți'],['sie/Sie','kennen','cunosc']
        ],
        praet: [
            ['ich','kannte','cunoșteam'],['du','kanntest','cunoșteai'],['er/sie/es','kannte','cunoștea'],
            ['wir','kannten','cunoșteam'],['ihr','kanntet','cunoșteați'],['sie/Sie','kannten','cunoșteau']
        ],
        perf: [
            ['ich','habe gekannt','am cunoscut'],['du','hast gekannt','ai cunoscut'],['er/sie/es','hat gekannt','a cunoscut'],
            ['wir','haben gekannt','am cunoscut'],['ihr','habt gekannt','ați cunoscut'],['sie/Sie','haben gekannt','au cunoscut']
        ],
        note: '🚨 Mischverb (kannte → gekannt). „Ich kenne ihn nicht" (nicht la final).'
    },
    {
        inf: 'mögen', ro: 'a plăcea / a-i plăcea', typ: 'neregulat', aux: 'haben', part: 'gemocht',
        praes: [
            ['ich','mag','îmi place'],['du','magst','îți place'],['er/sie/es','mag','îi place'],
            ['wir','mögen','ne place'],['ihr','mögt','vă place'],['sie/Sie','mögen','le place']
        ],
        praet: [
            ['ich','mochte','îmi plăcea'],['du','mochtest','îți plăcea'],['er/sie/es','mochte','îi plăcea'],
            ['wir','mochten','ne plăcea'],['ihr','mochtet','vă plăcea'],['sie/Sie','mochten','le plăcea']
        ],
        perf: [
            ['ich','habe gemocht','mi-a plăcut'],['du','hast gemocht','ți-a plăcut'],['er/sie/es','hat gemocht','i-a plăcut'],
            ['wir','haben gemocht','ne-a plăcut'],['ihr','habt gemocht','v-a plăcut'],['sie/Sie','haben gemocht','le-a plăcut']
        ],
        note: '🚨 NEREGULAT (ich/er mag; Prät mochte). „Ich mag keinen Kaffee" (substantiv → kein).'
    },
    {
        inf: 'brauchen', ro: 'a avea nevoie', typ: 'regulat', aux: 'haben', part: 'gebraucht',
        praes: [
            ['ich','brauche','am nevoie'],['du','brauchst','ai nevoie'],['er/sie/es','braucht','are nevoie'],
            ['wir','brauchen','avem nevoie'],['ihr','braucht','aveți nevoie'],['sie/Sie','brauchen','au nevoie']
        ],
        praet: [
            ['ich','brauchte','aveam nevoie'],['du','brauchtest','aveai nevoie'],['er/sie/es','brauchte','avea nevoie'],
            ['wir','brauchten','aveam nevoie'],['ihr','brauchtet','aveați nevoie'],['sie/Sie','brauchten','aveau nevoie']
        ],
        perf: [
            ['ich','habe gebraucht','am avut nevoie'],['du','hast gebraucht','ai avut nevoie'],['er/sie/es','hat gebraucht','a avut nevoie'],
            ['wir','haben gebraucht','am avut nevoie'],['ihr','habt gebraucht','ați avut nevoie'],['sie/Sie','haben gebraucht','au avut nevoie']
        ],
        note: '✅ Regulat. „Ich brauche keine Hilfe" (substantiv → keine).'
    },
    {
        inf: 'verstehen', ro: 'a înțelege', typ: 'tare (neregulat)', aux: 'haben', part: 'verstanden',
        praes: [
            ['ich','verstehe','înțeleg'],['du','verstehst','înțelegi'],['er/sie/es','versteht','înțelege'],
            ['wir','verstehen','înțelegem'],['ihr','versteht','înțelegeți'],['sie/Sie','verstehen','înțeleg']
        ],
        praet: [
            ['ich','verstand','înțelegeam'],['du','verstandest','înțelegeai'],['er/sie/es','verstand','înțelegea'],
            ['wir','verstanden','înțelegeam'],['ihr','verstandet','înțelegeați'],['sie/Sie','verstanden','înțelegeau']
        ],
        perf: [
            ['ich','habe verstanden','am înțeles'],['du','hast verstanden','ai înțeles'],['er/sie/es','hat verstanden','a înțeles'],
            ['wir','haben verstanden','am înțeles'],['ihr','habt verstanden','ați înțeles'],['sie/Sie','haben verstanden','au înțeles']
        ],
        note: '🚨 TARE + neseparabil (verstand → verstanden, fără ge). „Ich verstehe das nicht."'
    },
    {
        inf: 'glauben', ro: 'a crede', typ: 'regulat', aux: 'haben', part: 'geglaubt',
        praes: [
            ['ich','glaube','cred'],['du','glaubst','crezi'],['er/sie/es','glaubt','crede'],
            ['wir','glauben','credem'],['ihr','glaubt','credeți'],['sie/Sie','glauben','cred']
        ],
        praet: [
            ['ich','glaubte','credeam'],['du','glaubtest','credeai'],['er/sie/es','glaubte','credea'],
            ['wir','glaubten','credeam'],['ihr','glaubtet','credeați'],['sie/Sie','glaubten','credeau']
        ],
        perf: [
            ['ich','habe geglaubt','am crezut'],['du','hast geglaubt','ai crezut'],['er/sie/es','hat geglaubt','a crezut'],
            ['wir','haben geglaubt','am crezut'],['ihr','habt geglaubt','ați crezut'],['sie/Sie','haben geglaubt','au crezut']
        ],
        note: '✅ Regulat. „Das glaube ich nicht" (negi propoziția → nicht).'
    },
    {
        inf: 'essen', ro: 'a mânca', typ: 'tare (neregulat)', aux: 'haben', part: 'gegessen',
        praes: [
            ['ich','esse','mănânc'],['du','isst','mănânci'],['er/sie/es','isst','mănâncă'],
            ['wir','essen','mâncăm'],['ihr','esst','mâncați'],['sie/Sie','essen','mănâncă']
        ],
        praet: [
            ['ich','aß','mâncam'],['du','aßest','mâncai'],['er/sie/es','aß','mânca'],
            ['wir','aßen','mâncam'],['ihr','aßt','mâncați'],['sie/Sie','aßen','mâncau']
        ],
        perf: [
            ['ich','habe gegessen','am mâncat'],['du','hast gegessen','ai mâncat'],['er/sie/es','hat gegessen','a mâncat'],
            ['wir','haben gegessen','am mâncat'],['ihr','habt gegessen','ați mâncat'],['sie/Sie','haben gegessen','au mâncat']
        ],
        note: '🚨 TARE (e→i: isst; aß → gegessen). „Ich esse kein Fleisch" (substantiv → kein).'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#5A5147;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    const exampleRow = v.perf[2] || v.perf[0];
    const exSubj = exampleRow[0] || 'er';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + exSubj + ' <strong>' + exampleRow[1] + '</strong> · <em style="color:#5A5147;">' + exampleRow[2] + '</em></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe pentru exemple de negație</strong> — Präsens + Präteritum (complet) · Perfekt (pe scurt).<br>' +
        'Click pe un verb. Cu kein (substantiv): „Ich mag keinen Kaffee"; cu nicht (verb): „Ich verstehe das nicht".' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Cu aceste verbe exersezi ambele negații: <strong>kennen</strong>, <strong>verstehen</strong>, <strong>glauben</strong> (+ nicht: „kenne ihn nicht"); <strong>mögen</strong>, <strong>brauchen</strong>, <strong>essen</strong> (+ kein la substantiv: „mag keinen Kaffee", „esse kein Fleisch"). 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="andreea-note" style="margin-top:6px;"><img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar"><div class="andreea-note-content"><div class="speaker">Notă:</div><div class="text">' + v.note + '</div></div></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

function toggleVerb(i) {
    const content = document.getElementById('verb-' + i);
    if (!content) return;
    content.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
