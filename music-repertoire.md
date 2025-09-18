<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Eugenio Macias - Classical Guitarist</title>
  <style>
    /* ===============================
       Music Repertoire — Dark Glass
       =============================== */

    :root{
      /* Dark-first palette to match your new site */
      --bg:#0a0b0e;
      --ink:#e6e8ee;
      --muted:#b0b6c3;
      --line:#1f2430;
      --card:#0f1115;

      /* Accents reused sitewide */
      --accent1:#7c83ff;
      --accent2:#22d3ee;
      --accent3:#34d399;

      /* Shadows */
      --shadow-1: 0 12px 32px rgba(0,0,0,.35);
      --shadow-2: 0 28px 64px rgba(0,0,0,.55);
    }
    @media (prefers-color-scheme: light){
      :root{
        --bg:#f8fafc;
        --ink:#0f172a;
        --muted:#475569;
        --line:#e5e7eb;
        --card:#ffffff;
        --shadow-1: 0 10px 28px rgba(0,0,0,.08);
        --shadow-2: 0 22px 54px rgba(0,0,0,.12);
      }
    }

    /* Base */
    html{ scroll-behavior:smooth; }
    body{
      margin:0;
      color:var(--ink);
      font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Inter, "Helvetica Neue", Arial, "Noto Sans";
      line-height:1.7;
      background:
        radial-gradient(80% 50% at 10% -10%, rgba(124,131,255,.10), transparent 60%),
        radial-gradient(70% 45% at 110% 10%, rgba(34,211,238,.10), transparent 60%),
        var(--bg);
      overflow-x:hidden;
    }

    a { color: var(--accent2); text-decoration: none; }
    a:hover { text-decoration: underline; }

    .container{
      max-width:1140px;
      margin:0 auto;
      padding: clamp(28px, 4vw, 48px) clamp(14px, 3vw, 24px);
    }

    /* ===============================
       Hero Header — Staff Lines + Notes
       =============================== */
    header{
      position:relative;
      text-align:center;
      padding: clamp(48px, 8vw, 84px) 16px clamp(28px, 4vw, 44px);
      border-bottom:1px solid var(--line);
      background:
        /* soft glow wash */
        radial-gradient(60% 60% at 50% -20%, rgba(124,131,255,.14), transparent 60%),
        linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
      backdrop-filter: blur(8px);
      box-shadow: var(--shadow-1);
      overflow:hidden;
    }

    /* Subtle animated staff lines across header */
    header::before{
      content:"";
      position:absolute; inset:0;
      background:
        repeating-linear-gradient(
          to bottom,
          rgba(255,255,255,.10) 0 1.5px,
          transparent 1.5px 16px
        );
      mask: linear-gradient(180deg, transparent 0%, #000 20%, #000 80%, transparent 100%);
      animation: staffSlide 22s linear infinite;
      pointer-events:none;
    }
    @keyframes staffSlide{
      0%{ transform: translateY(0); }
      100%{ transform: translateY(16px); }
    }

    /* Floating musical notes (decorative) */
    header::after{
      content:"♪ ♫ ♩ ♬";
      position:absolute;
      left:50%; top:20%;
      transform: translateX(-50%);
      font-size: clamp(18px, 3vw, 28px);
      letter-spacing:.6rem;
      color: rgba(255,255,255,.35);
      text-shadow: 0 6px 24px rgba(124,131,255,.35);
      animation: notesFloat 12s ease-in-out infinite alternate;
      pointer-events:none;
    }
    @keyframes notesFloat{
      0%{ transform: translateX(-50%) translateY(0) rotate(0deg); opacity:.65; }
      100%{ transform: translateX(-50%) translateY(-10px) rotate(-3deg); opacity:.9; }
    }

    header h1{
      margin:0 0 6px;
      font-weight:900;
      letter-spacing: .5px;
      font-size: clamp(2.2rem, 5vw, 3.2rem);
      line-height:1.1;
      background: linear-gradient(90deg, var(--accent1), var(--accent2), var(--accent3));
      -webkit-background-clip:text; background-clip:text; color:transparent;
      filter: drop-shadow(0 10px 24px rgba(0,0,0,.25));
    }
    header p.subtitle{
      margin:0 auto;
      max-width:720px;
      color:var(--muted);
      font-style:italic;
      font-size: clamp(1rem, 1.6vw, 1.1rem);
    }

    /* ===============================
       Layout Grid
       =============================== */
    main{
      display:grid; grid-template-columns: 1fr;
      gap: clamp(16px, 3vw, 26px);
      margin-top: clamp(10px, 2vw, 16px);
    }
    @media (min-width: 900px){
      main{ grid-template-columns: 1fr 1.7fr; gap: clamp(24px, 3.6vw, 36px); }
      .sidebar{ order:1; }
      .main-content{ order:2; }
    }
    .sidebar{ order:2; }
    .main-content{ order:1; }

    /* ===============================
       Section Cards (Glass)
       =============================== */
    section{
      position:relative;
      padding: clamp(16px, 2.4vw, 22px) clamp(14px, 2.2vw, 20px);
      border:1px solid var(--line);
      border-radius:16px;
      background: linear-gradient(180deg, rgba(255,255,255,.07), rgba(255,255,255,.03));
      box-shadow: var(--shadow-1);
      transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
    }
    section:hover{
      transform: translateY(-2px);
      box-shadow: var(--shadow-2);
      border-color: transparent;
    }
    section + section{ margin-top: clamp(12px, 2vw, 18px); }

    /* Headings */
    h2{
      margin:0 0 10px;
      font-weight:900;
      font-size: clamp(1.4rem, 2.4vw, 1.8rem);
      color:var(--ink);
      position:relative;
      display:inline-block;
    }
    h2::after{
      content:"";
      display:block;
      height:2px; margin-top:.4rem; width:84px;
      background: linear-gradient(90deg, var(--accent1), var(--accent2), var(--accent3));
      border-radius:2px;
      box-shadow: 0 0 20px rgba(124,131,255,.45);
    }
    h2::before{
      content:"";
      position:absolute; inset:auto -8px -8px -8px; height:10px;
      background:
        repeating-linear-gradient(
          to bottom,
          rgba(255,255,255,.12) 0 1px,
          transparent 1px 4px
        );
      opacity:.35; border-radius:6px;
      filter: blur(0.5px);
    }

    h3{
      margin:18px 0 8px;
      font-weight:800;
      color:var(--ink);
      font-size: clamp(1.02rem, 1.8vw, 1.2rem);
    }

    p, ul{ font-size:1rem; color:var(--muted); margin:0; }
    p + p{ margin-top:.6rem; }

    /* ===============================
       Lists
       =============================== */
    ul{ list-style:none; padding:0; margin:0; }
    .data-list li{
      position:relative;
      padding:12px 12px 12px 36px;
      border-bottom:1px dashed var(--line);
      transition: transform .18s ease, background .18s ease, color .18s ease, border-color .18s ease;
      border-radius:10px;
      cursor: default;
    }
    .data-list li:last-of-type{ border-bottom:none; }

    .data-list li::before{
      content:"♪";
      position:absolute; left:10px; top:12px;
      color: var(--accent2);
      opacity:.85; filter: drop-shadow(0 4px 12px rgba(34,211,238,.35));
      transition: transform .18s ease, color .18s ease, opacity .18s ease;
      font-weight:900;
    }

    .data-list li:hover{
      transform: translateY(-2px);
      color:var(--ink);
      background: linear-gradient(90deg, rgba(124,131,255,.08), rgba(34,211,238,.06));
      border-color: transparent;
      box-shadow: inset 0 0 0 1px rgba(124,131,255,.18);
    }
    .data-list li:hover::before{
      content:"♬";
      color: var(--accent1);
      transform: translateX(2px) rotate(-6deg);
      opacity:1;
    }

    li span.piece{ font-weight:700; color:var(--ink); }
    li span.composer{ font-style:italic; color:var(--muted); }
    .data-list li{ font-size:1.05rem; }
    .performances-list li .info{
      display:block; font-size:.92rem; color:var(--muted); margin-top:4px;
    }
    
    .sidebar p { line-height: 1.6; }

    /* ===============================
       Footer
       =============================== */
    footer{
      text-align:center;
      padding:28px 16px 46px;
      color:var(--muted);
    }

    /* ===============================
       Reduced Motion Respect
       =============================== */
    @media (prefers-reduced-motion: reduce){
      *{ animation: none !important; transition: none !important; }
    }
  </style>
</head>
<body>

  <header>
    <h1>Eugenio Macias</h1>
    <p class="subtitle">Classical Guitarist</p>
  </header>

  <div class="container">
    <main>

      <div class="main-content">
        <section>
          <h2>Repertoire</h2>
          <ul class="data-list">
            <li tabindex="0"><span class="composer">Francisco Tárrega (1852-1909), Spain:</span> <span class="piece">Recuerdos de la Alhambra, Lágrima, Capricho Árabe.</span></li>
            <li tabindex="0"><span class="composer">Leo Brouwer (1939), Cuba:</span> <span class="piece">Un día de Noviembre, Etude No. 1.</span></li>
            <li tabindex="0"><span class="composer">Heitor Villa-lobos (1887-1959), Brazil:</span> <span class="piece">Choro No.1, Etude No. 1.</span></li>
            <li tabindex="0"><span class="composer">Erik Satié (1866-1925), France:</span> <span class="piece">Gymnopédie No.1, Gnossiene No.1.</span></li>
            <li tabindex="0"><span class="composer">Máximo Diego Pujol (1957), Argentina:</span> <span class="piece">Suite del Plata No.1: I Preludio, II Tango, III Milonga.</span></li>
            <li tabindex="0"><span class="composer">Julio Sagreras (1879-1942), Argentina:</span> <span class="piece">El Colibrí.</span></li>
            <li tabindex="0"><span class="composer">Johann Sebastian Bach (1685-1750), Germany:</span> <span class="piece">Lute Suite No.4: I Prelude.</span></li>
            <li tabindex="0"><span class="composer">Miguel Llobet (1878-1938), Spain:</span> <span class="piece">El Testament d ́Amèlia, Romance Anónimo.</span></li>
            <li tabindex="0"><span class="composer">Federico Moreno Torroba (1891-1982), Spain:</span> <span class="piece">Suite Castellana: I Fandanguillo, II Arada.</span></li>
            <li tabindex="0"><span class="composer">Gerardo Támez (1948), Mexico:</span> <span class="piece">Suite Aires de Son.</span></li>
            <li tabindex="0"><span class="composer">Luis de Narvaez (1490-1547), Spain:</span> <span class="piece">Diferencias Sobre Guárdame las Vacas.</span></li>
            <li tabindex="0"><span class="composer">Mateo Carcassi (1792-1853), Italy:</span> <span class="piece">Etude No. 7, Op. 60.</span></li>
            <li tabindex="0"><span class="composer">Simone Iarannelli (1970), Italy:</span> <span class="piece">l'ultimo caffe insieme.</span></li>
            <li tabindex="0"><span class="composer">Julio Cesar Oliva (1947), Mexico:</span> <span class="piece">Suite Montebello: Tisú I.</span></li>
            <li tabindex="0"><span class="composer">Isaac Álbeniz (1860-1909), Spain:</span> <span class="piece">Asturias (Leyenda).</span></li>
            <li tabindex="0"><span class="composer">Agustín Pío Barrios (1885-1940):</span> <span class="piece">Una Limosna por el Amor de Dios.</span></li>
          </ul>
        </section>

        <section>
            <h2>University Recitals</h2>
            <ul class="data-list performances-list">
                <li tabindex="0">
                    <span class="piece">Final Recital (Sophomore year)</span>
                    <span class="info">Asturias (Leyenda) by Isaac Álbeniz — Riley Hall, December, 2023</span>
                </li>
                <li tabindex="0">
                    <span class="piece">Final Recital (Freshman year)</span>
                    <span class="info">(i) Una Limosna por el Amor de Dios by Agustín Barrios; (ii) Suite Castellana: Fandanguillo by Federico Moreno Torroba — Grant Recital Hall, May, 2023</span>
                </li>
            </ul>
        </section>

        <section>
          <h2>Masterclasses</h2>
            <ul class="data-list">
                <li tabindex="0"><span class="piece">Recuerdos de la Alhambra,</span> revised with Javier Xara (USA) in Guitar Foundation of America XII, Denver, CO.</li>
                <li tabindex="0"><span class="piece">Diferencias Sobre Guárdame las Vacas,</span> revised with Marek Pasiesczny (Poland) in Guitar Foundation of America XII, Fullerton, CA.</li>
                <li tabindex="0"><span class="piece">Choro No.1,</span> revised with Mark Delpriora (USA) in Guitar Foundation of America XII, Denver, CO.</li>
                <li tabindex="0"><span class="piece">Milonga from Suite del Plata,</span> revised with Rodrigo Nefthalí (Mexico) in the Décimo Cuarto Festival Internacional Guitarra sin Fronteras.</li>
                <li tabindex="0"><span class="piece">Choro No. 1,</span> revised with Juan Carlos López (México) in the Décimo Cuarto Festival Internacional Guitarra sin Fronteras.</li>
                <li tabindex="0"><span class="piece">Recuerdos de la Alhambra,</span> revised with Omán Kaminsky (Mexico) in the Décimo Cuarto Festival Internacional Guitarra sin Fronteras.</li>
                <li tabindex="0"><span class="piece">El Colibrí,</span> revised with Hugo Gracián (Mexico) in the Décimo Quinto Festival Internacional Guitarra sin Fronteras.</li>
                <li tabindex="0"><span class="piece">Suite del Plata,</span> revised with Cecilia Siqueira (Uruguay) in Guitar Foundation of America XII, Fullerton, CA.</li>
            </ul>
        </section>

        <section>
            <h2>Awards & Festivals</h2>
            <ul class="data-list">
                <li tabindex="0">Honorific Mention for Young Talent, Décimo Quinto Festival Internacional Guitarra sin Fronteras.</li>
                <li tabindex="0">Third Place, VII Concurso Nacional de Guitarra Salamanca, Youth Category.</li>
                <li tabindex="0">Second Place, VI Concurso Nacional de Guitarra Salamanca, Youth Category.</li>
                <li tabindex="0">Honorific Mention, IV State Contest “Cleofás Villegas”.</li>
                <li tabindex="0">Participation in Décimo Cuarto Festival Internacional Guitarra sin Fronteras.</li>
                <li tabindex="0">VIII & IX Festival Encuentro Internacional de Guitarra Salamanca (2014, 2015).</li>
                <li tabindex="0">Certificate of Participation, Guitar Foundation of America XI & XII (Denver, CO & Fullerton, CA).</li>
            </ul>
        </section>

        <section>
            <h2>Ensemble Experience</h2>
            <p>Performed with the Youth Orchestra directed by Chuck Hulihan at the Guitar Foundation of America XII in Fullerton, CA, performing “Around the World” by Patrick Roux (1962): II C Ayre, III Ama-zone-E, IV A Round for the World.</p>
        </section>

      </div>

      <aside class="sidebar">
        <section>
          <h2>Tutelage</h2>
          <p>
            I started my career as a guitarist in 2010 under the tutelage of the Professor and Composer Carlos Alfredo Gonzales Olvera in the city of Chihuahua. He was the one from whom I learned the most, an excellent professor whom I admire for his dedication and teaching. In 2022, I formed part of the Applied Music Program at Brown University in the city of Providence, Rhode Island, under the tutelage of Professor Mychal Gendron.
          </p>
        </section>
        <section>
            <h2>Contact</h2>
            <p>
                Eugenio Macias Orozco<br>
                69 Brown Street, Providence, RI, 02912<br>
                <a href="mailto:eugenio_macias_orozco@brown.edu">eugenio_macias_orozco@brown.edu</a><br>
                +1 (401) 346 3616<br>
                <a href="https://www.linkedin.com/in/eugenio-macias/" target="_blank" rel="noopener noreferrer">linkedin.com/in/eugenio-macias</a>
            </p>
        </section>
      </aside>

    </main>
  </div>

  <footer>
    <p>&copy; 2025 by Eugenio Macias. All rights reserved.</p>
  </footer>

</body>
</html>
