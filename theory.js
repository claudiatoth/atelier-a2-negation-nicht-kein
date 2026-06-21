// ============================================
// TEORIE - Atelier A2: Negation (nicht vs kein)
// Claudia Toth · Annettes Deutschkurs · Atelier de aprofundare
// kein (la substantiv) vs nicht (rest) + poziția lui nicht + capcane (nichts/doch)
// ============================================

const theoryHTML = `
    <!-- 0: Intro -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🙅 1. Două feluri de „nu": kein și nicht</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="cast-banner">
                <h4>🎭 Personajele Atelierului</h4>
                <div class="cast-grid">
                    <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><span class="name">Andreea</span><span class="detail">Spune NU 🙅</span></div>
                    <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><span class="name">Carolina</span><span class="detail">Pune întrebări 📸</span></div>
                    <div class="cast-card"><img src="images/annette.png" alt="Annette"><span class="name">Annette</span><span class="detail">Profesoara · Berlin</span></div>
                    <div class="cast-card"><img src="images/florian.png" alt="Florian"><span class="name">Florian</span><span class="detail">Doctor · Berlin</span></div>
                    <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><span class="name">Mihai</span><span class="detail">Bucătar · Potsdam</span></div>
                    <div class="cast-card"><img src="images/acar.png" alt="Acar"><span class="name">Acar</span><span class="detail">Maistru · Oranienburg</span></div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📖 Regula de aur</h4>
                <p>În germană ai DOUĂ cuvinte pentru „nu", și alegerea e simplă:</p>
                <div class="example-box">
                    <p class="de"><strong>kein</strong> → neagă un <strong>substantiv</strong> cu „ein" sau fără articol.</p>
                    <p class="de"><strong>nicht</strong> → neagă <strong>tot restul</strong> (verb, adjectiv, adverb, nume, substantiv cu der/mein).</p>
                </div>
                <div class="example-box">
                    <p class="de">Ich habe <strong>ein</strong> Auto → Ich habe <strong>kein</strong> Auto. <span style="color:#5A5147;">(substantiv cu ein)</span></p>
                    <p class="de">Ich arbeite → Ich arbeite <strong>nicht</strong>. <span style="color:#5A5147;">(verb)</span></p>
                </div>
            </div>

            <div class="theory-box info-box">
                <h4>🗺️ Ce vezi în atelier</h4>
                <ul>
                    <li><strong>2.</strong> <strong>kein</strong> — neagă substantive (ein → kein)</li>
                    <li><strong>3.</strong> <strong>nicht</strong> — neagă verbe, adjective, restul</li>
                    <li><strong>4.</strong> Poziția lui <strong>nicht</strong> în propoziție</li>
                    <li><strong>5.</strong> kein vs nicht + capcane (nichts / doch) + dialog</li>
                </ul>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Întreabă-te mereu: „neg un SUBSTANTIV cu ein/fără articol?" → da = kein, nu = nicht. E cea mai sigură regulă! 🦋</em>
                </div>
            </div>

            <!-- ===== SCHREIBWERKSTATT — Trimite textul Claudiei ===== -->
            <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border: 2px solid #10B981; border-radius: 14px; padding: 24px 22px; margin-top: 22px; text-align: center; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.12);">
                <div style="font-size: 2.2rem; margin-bottom: 4px;">✍️</div>
                <h4 style="color: #065f46; font-size: 1.2rem; margin: 0 0 8px; font-weight: bold;">Schreibwerkstatt — vrei să-ți corectez textul?</h4>
                <p style="color: #047857; font-size: 0.95rem; margin: 0 0 16px; max-width: 540px; margin-left: auto; margin-right: auto; line-height: 1.5;">
                    Scrie 6 propoziții negative despre o zi proastă, alternând <strong>kein</strong> (Ich habe keine Zeit) și <strong>nicht</strong> (Ich komme nicht; Das ist nicht schön). Atenție unde stă nicht! <strong>Min. 60 cuvinte.</strong> Îți răspund personal pe email. 🦋
                </p>
                <a href="https://forms.gle/aJU2dxDhQNTNygZe9" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #10B981; color: white; padding: 13px 30px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1rem; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);">
                    Trimite textul Claudiei →
                </a>
                <p style="color: #5A5147; font-size: 0.78rem; margin-top: 12px; font-style: italic;">
                    ʚଓ Răspuns personal pe email · Nu uita să-ți treci adresa de email în formular
                </p>
            </div>
        </div>
    </div>

    <!-- 1: kein -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🟢 2. kein — neagă substantive (ein → kein)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-kein.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 kein = „nu un / niciun"</h4>
                <p style="margin:0;">Folosești <strong>kein</strong> când substantivul ar avea <strong>ein/eine</strong> sau e <strong>fără articol</strong> (la plural sau necontabil). Se declină ca <strong>ein-/mein-</strong>:</p>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Caz</th><th>masculin</th><th>feminin</th><th>neutru</th><th>plural</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Nom</strong></td><td>kein</td><td>keine</td><td>kein</td><td>keine</td></tr>
                    <tr><td><strong>Akk</strong></td><td>keinen</td><td>keine</td><td>kein</td><td>keine</td></tr>
                    <tr><td><strong>Dat</strong></td><td>keinem</td><td>keiner</td><td>keinem</td><td>keinen</td></tr>
                </tbody>
            </table>

            <div class="theory-box info-box">
                <h4>💡 ein → kein, _ (fără articol) → kein</h4>
                <p style="margin:0;">Ich habe <strong>ein</strong> Auto → Ich habe <strong>kein</strong> Auto.<br>
                Ich habe <strong>Zeit</strong> → Ich habe <strong>keine</strong> Zeit. <em>(necontabil → keine)</em><br>
                Ich habe <strong>Kinder</strong> → Ich habe <strong>keine</strong> Kinder. <em>(plural → keine)</em></p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>kein are exact terminațiile lui „ein" + „mein": kein/keine/keinen/keinem/keiner. Dacă știi articolul nehotărât, știi deja kein! 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 2: nicht -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🔵 3. nicht — neagă verbe, adjective, restul</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-nicht.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 nicht = „nu" pentru tot ce NU e substantiv cu ein/fără articol</h4>
                <p style="margin:0;">Folosești <strong>nicht</strong> pentru:</p>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Ce negi</th><th>Exemplu</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>verbul</strong> (toată propoziția)</td><td>Ich arbeite <strong>nicht</strong>.</td></tr>
                    <tr><td><strong>adjectiv</strong></td><td>Das ist <strong>nicht</strong> schön.</td></tr>
                    <tr><td><strong>adverb</strong></td><td>Er kommt <strong>nicht</strong> oft.</td></tr>
                    <tr><td><strong>nume propriu</strong></td><td>Das ist <strong>nicht</strong> Anna.</td></tr>
                    <tr><td><strong>substantiv cu der/mein</strong></td><td>Das ist <strong>nicht</strong> mein Auto.</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#F5F0E8; border-left-color:#D4A574;">
                <h4>⚡ Atenție: substantiv cu articol hotărât → nicht (nu kein)</h4>
                <p style="margin:0;">kein se folosește DOAR cu ein/fără articol. Dacă substantivul are <strong>der/die/das</strong> sau <strong>mein/dein</strong>, negi cu <strong>nicht</strong>:<br>
                Das ist <strong>nicht</strong> der Bus. · Das ist <strong>nicht</strong> meine Tasche.</p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Regula scurtă: ein/fără articol → <strong>kein</strong>. der/mein/verb/adjectiv → <strong>nicht</strong>. Atât! 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Poziția lui nicht -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>📍 4. Poziția lui nicht în propoziție</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-position.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 Două situații</h4>
                <p style="margin:0;"><strong>(1) Negi toată propoziția</strong> → nicht stă cât mai la <strong>FINAL</strong>:<br>
                Ich kenne ihn <strong>nicht</strong>. · Ich komme heute <strong>nicht</strong>.</p>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>nicht stă ÎNAINTE de…</th><th>Exemplu</th></tr>
                </thead>
                <tbody>
                    <tr><td>adjectiv</td><td>Das ist <strong>nicht</strong> schön.</td></tr>
                    <tr><td>adverb</td><td>Er fährt <strong>nicht</strong> schnell.</td></tr>
                    <tr><td>complement prepozițional</td><td>Ich wohne <strong>nicht</strong> in Berlin.</td></tr>
                    <tr><td>al doilea verb (Inf./Part.)</td><td>Ich kann <strong>nicht</strong> kommen. · Ich habe <strong>nicht</strong> gearbeitet.</td></tr>
                    <tr><td>prefixul separabil</td><td>Ich rufe dich <strong>nicht</strong> an.</td></tr>
                </tbody>
            </table>

            <div class="theory-box info-box">
                <h4>💡 Truc</h4>
                <p style="margin:0;">Dacă negi <strong>tot</strong> (verbul) → nicht la final. Dacă negi o <strong>singură parte</strong> (un adjectiv, un loc, un al doilea verb) → nicht stă <strong>chiar înaintea</strong> ei.</p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>„Ich kenne ihn nicht" (final, negi totul) vs „Ich wohne nicht in Berlin" (înainte de „in Berlin", negi locul). Pronumele-obiect (ihn) rămâne ÎNAINTEA lui nicht! 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 4: kein vs nicht + capcane + dialog -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🗣️ 5. kein vs nicht + capcane + dialog</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-recap-dialog.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box" style="border-left-color:#047857;">
                <h4>📝 Recap rapid</h4>
                <ul>
                    <li><strong>kein</strong> → substantiv cu ein / fără articol (ein → kein; Zeit → keine Zeit).</li>
                    <li><strong>nicht</strong> → verb, adjectiv, adverb, nume, substantiv cu der/mein.</li>
                    <li>Poziția: negi tot → nicht la <strong>final</strong>; negi o parte → nicht <strong>înaintea</strong> ei.</li>
                </ul>
            </div>

            <div class="theory-box" style="background:#F5F0E8; border-left-color:#D4A574;">
                <h4>⚠️ Două capcane</h4>
                <p style="margin:0;">
                <strong>nichts</strong> (= „nimic") NU e „nicht": Ich sehe <strong>nichts</strong>. (nu văd nimic) vs Ich sehe <strong>nicht</strong>. (nu văd / nu mă uit).<br>
                <strong>doch</strong> = răspuns AFIRMATIV la o întrebare negativă: „Hast du <strong>kein</strong> Auto?" — „<strong>Doch</strong>, ich habe eins!" (Ba da!)</p>
            </div>

            <div class="theory-box">
                <h4>💬 Dialog: Andreea & Carolina</h4>
                <p><strong style="color:#065f46;">Carolina:</strong> Kommst du heute Abend?<br><span class="ro-translation">Vii diseară?</span></p>
                <p><strong style="color:#065f46;">Andreea:</strong> Nein, ich komme <strong>nicht</strong>. Ich habe <strong>keine</strong> Zeit.<br><span class="ro-translation">Nu, nu vin. Nu am timp.</span></p>
                <p><strong style="color:#065f46;">Carolina:</strong> Schade! Magst du <strong>keinen</strong> Kaffee mit mir?<br><span class="ro-translation">Păcat! Nu vrei o cafea cu mine?</span></p>
                <p><strong style="color:#065f46;">Andreea:</strong> <strong>Doch</strong>, Kaffee mag ich! Aber heute geht es <strong>nicht</strong> — und nicht <strong>in</strong> der Stadt.<br><span class="ro-translation">Ba da, cafea îmi place! Dar azi nu merge — și nu în oraș.</span></p>
                <p><strong style="color:#065f46;">Carolina:</strong> Kein Problem! Dann morgen. 😄<br><span class="ro-translation">Nicio problemă! Atunci mâine.</span></p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Le-ai prins: <strong>nicht</strong> (komme nicht — verb), <strong>keine</strong> Zeit / <strong>keinen</strong> Kaffee (substantiv), poziția (nicht in der Stadt) și <strong>Doch!</strong> (ba da). Mult succes! 🦋</em>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
