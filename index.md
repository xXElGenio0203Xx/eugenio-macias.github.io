---
layout: default
title: Home
---

<!-- Background FX -->
<canvas id="stars" aria-hidden="true"></canvas>
<div class="aurora" aria-hidden="true"></div>

<section class="hero">
  <div class="hero-inner">

    <div class="pfp-wrap" data-tilt>
      <img class="profile-pic" src="{{ site.baseurl }}/assets/images/profile_pic.png" alt="Profile picture of Eugenio Macias">
      <div class="ring"></div>
    </div>

    <div class="intro">
      <h1 class="title">
        Eugenio Macias
        <span class="badge">BS Applied Mathematics–Computer Science & BA Mathematics</span>
      </h1>

      <p class="typing" aria-label="Probability × Statistics × PDEs × Machine Learning under uncertainty">
        <span>Probability × Statistics × PDEs × ML under uncertainty</span>
      </p>

      <article class="glass about" data-tilt>
        <h2>About me</h2>
        <p>
          I’m an international student from Mexico at Brown University. I focus on the intersection of <strong>probability</strong>,
          <strong>mathematical statistics</strong>, and <strong>differential equations</strong> with <strong>machine learning under uncertainty</strong>.
          I enjoy pairing <em>measure-theoretic</em> foundations with <em>numerical methods</em> and <em>algorithm design</em> to build robust, data-driven models.
          Currently, I’m writing a thesis on <strong>weak-form PDE discovery for collective stochastic dynamics</strong>—developing
          sparse-regression (WSINDy) and equation-free approaches that recover governing laws from high-dimensional, noisy trajectories—methods directly applicable to modeling
          <strong>complex markets and risk</strong>.
        </p>
      </article>
    </div>
  </div>
</section>

<!-- Highlights -->
<section class="highlights">
  <h2 class="section-title">Highlights</h2>
  <div class="cards">

    <!-- Citi Markets -->
    <article class="card glow">
      <header>Citi Markets — Quantitative Analyst Intern (NYC, Summer 2025)</header>
      <ul>
        <li>Built <strong>Python–C++ Monte Carlo & PDE solvers</strong>; validated pricing/Greeks and accelerated runtimes.</li>
        <li>Trained <strong>LightGBM-DART</strong> & <strong>neural nets</strong> with Bayesian optimization on <strong>6M+ structured-note</strong> rows; used <strong>SHAP</strong> for diagnostics.</li>
        <li><strong>1st place</strong> out of 540 in the firm-wide ML Quant competition.</li>
      </ul>
    </article>

    <!-- DE Shaw / Bridgewater / Buddywise -->
    <article class="card">
      <header>D. E. Shaw · Bridgewater · Buddywise</header>
      <ul>
        <li><strong>Latitude Fellowship</strong> at The D. E. Shaw Group (NYC): multivariate time-series & sector forecasting.</li>
        <li><strong>Investment Immersion</strong> at Bridgewater Associates: macro indicators & stat-arb backtests.</li>
        <li>Intern at <strong>Buddywise</strong> (Berlin): data tooling for safety-critical computer vision.</li>
      </ul>
    </article>

    <!-- Current paths -->
    <article class="card">
      <header>What I’m pursuing</header>
      <ul>
        <li><strong>Option A:</strong> <em>MSc in Mathematical Statistics / Applied Mathematics</em>.</li>
        <li><strong>Option B:</strong> <em>Quant full-time</em> (research / trading / developer) starting 2026.</li>
        <li><strong>Option C:</strong> <em>AI startup with my brother</em> — applied ML systems and decision-intelligence tooling.</li>
      </ul>
      <div class="badges">
        <span class="badge">Quant</span><span class="badge">Stat ML</span><span class="badge">PDEs</span>
      </div>
    </article>

  </div>
</section>

<style>
  /* High-contrast, white-on-deep background */
  :root{
    --bg:#0a0b0e;          /* page background */
    --ink:#ffffff;         /* primary text: pure white */
    --muted:#e5e7eb;       /* secondary text: light, still readable */
    --line:#23262d;        /* borders */
    --card:#0f1115;        /* panels/cards */
    --g1:#7c83ff; --g2:#22d3ee; --g3:#34d399; --g4:#f59e0b;
    --shadow:0 24px 60px rgba(0,0,0,.55);
  }

  body { background: var(--bg); color: var(--ink); overflow-x:hidden; }

  /* Starfield & Aurora */
  #stars{ position:fixed; inset:0; width:100%; height:100%; z-index:-3; display:block; }
  .aurora{
    position:fixed; inset:-10vmax; z-index:-2; pointer-events:none;
    filter: blur(55px) saturate(120%);
    background:
      radial-gradient(60% 50% at 20% 20%, rgba(124,131,255,.18), transparent 60%),
      radial-gradient(45% 40% at 80% 30%, rgba(34,211,238,.14), transparent 60%),
      radial-gradient(55% 45% at 50% 75%, rgba(52,211,153,.12), transparent 70%),
      conic-gradient(from 210deg at 50% 50%, rgba(245,158,11,.10), transparent 70%);
    animation: drift 22s ease-in-out infinite alternate;
  }
  @keyframes drift{ 0%{ transform: translate3d(0,0,0) scale(1); } 100%{ transform: translate3d(2vw,-1vh,0) scale(1.04); } }

  /* Hero */
  .hero{ position:relative; padding: clamp(24px, 5vw, 48px) 16px; }
  .hero-inner{
    max-width: 1100px; margin: 0 auto;
    display:grid; grid-template-columns: 1fr; gap: 20px; align-items:center;
  }
  @media (min-width: 980px){ .hero-inner{ grid-template-columns: .95fr 1.65fr; gap: 36px; } }

  .pfp-wrap{
    position: relative; width:min(340px, 78vw); aspect-ratio: 1/1; margin: 0 auto;
    border-radius: 24px; overflow: hidden; border:1px solid var(--line);
    background: linear-gradient(145deg, rgba(255,255,255,.04), rgba(255,255,255,.01));
    box-shadow: var(--shadow); transform-style: preserve-3d; transition: transform .2s ease;
  }
  .profile-pic{ width:100%; height:100%; object-fit: cover; display:block; opacity:.98; transform: scale(1.02); transition: transform .35s ease, opacity .35s ease; }
  .pfp-wrap:hover .profile-pic{ transform: scale(1.06); opacity:1; }
  .ring{
    position:absolute; inset:0; pointer-events:none;
    background: conic-gradient(from 180deg, var(--g1), var(--g2), var(--g3), var(--g1));
    mask: radial-gradient(farthest-side, transparent calc(100% - 6px), #000 0);
    mix-blend-mode: screen; opacity:.38; animation: spin 10s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  .intro{ position:relative; }
  .title{
    margin: 0 0 .35rem; font-size: clamp(1.8rem, 3.2vw, 2.6rem); line-height: 1.08;
    color: var(--ink);
  }
  /* Underline accent instead of gradient text for readability */
  .title::after{
    content:""; display:block; height:2px; width:86px; margin-top:.4rem;
    background:linear-gradient(90deg,var(--g1),var(--g2),var(--g3)); border-radius:2px;
  }

  .badge{
    display:inline-block; margin-left:.6rem; font-size:.85rem; font-weight:600;
    padding: 4px 10px; border-radius: 999px; color:#0b1220;
    background: linear-gradient(90deg, var(--g2), var(--g3));
  }

  .typing{ margin:.2rem 0 1rem; color: var(--ink); opacity:.9; font-size: clamp(.98rem, 1.6vw, 1.05rem); min-height: 1.4em; }
  .typing span{ display:inline-block; white-space:nowrap; overflow:hidden; border-right: 2px solid currentColor; animation: typing 5s steps(42, end) infinite alternate, caret 700ms steps(1) infinite; }
  @keyframes typing { from { width: 0; } to { width: 42ch; } } @keyframes caret { 50% { border-color: transparent; } }

  .glass{
    background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.04));
    border: 1px solid var(--line);
    border-radius: 16px; padding: 16px 18px;
    box-shadow: var(--shadow); backdrop-filter: blur(8px);
    transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease;
  }
  .glass:hover{ transform: translateY(-2px); border-color: #2a2f39; box-shadow: 0 24px 60px rgba(0,0,0,.35); }
  .about h2{ margin:.2rem 0 .35rem; font-size:1.15rem; letter-spacing:.2px; color: var(--ink); }
  .about p{ margin:0; color: var(--ink); opacity:.9; }

  /* Highlights Section */
  .highlights{ max-width:1100px; margin: 6px auto 40px; padding: 0 16px; }
  .section-title{ margin:8px 0 12px; font-size:1.12rem; letter-spacing:.2px; color: var(--ink); }
  .section-title::after{
    content:""; display:block; height:2px; width:76px; margin-top:.35rem;
    background:linear-gradient(90deg,var(--g1),var(--g2),var(--g3)); border-radius:2px;
  }
  .cards{ display:grid; gap:12px; grid-template-columns: 1fr; }
  @media (min-width: 980px){ .cards{ grid-template-columns: 1.2fr 1fr 1fr; } }

  .card{
    background: var(--card); border:1px solid var(--line); border-radius: 14px; padding: 12px 14px;
    box-shadow: var(--shadow); transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
    color: var(--ink);
  }
  .card:hover{ transform: translateY(-2px); border-color: #2a2f39; box-shadow: 0 18px 40px rgba(0,0,0,.45); }
  .card header{ font-weight:800; margin-bottom:6px; color: var(--ink); }
  .card ul{ margin:.2rem 0 0 1.1rem; }
  .card li{ margin:.25rem 0; color: var(--ink); opacity:.9; }

  /* Animated gradient border accent */
  .glow{
    position:relative;
  }
  .glow::before{
    content:""; position:absolute; inset:-1px; z-index:-1; border-radius: 16px;
    background: conic-gradient(from 0deg, var(--g1), var(--g2), var(--g3), var(--g1));
    filter: blur(14px); opacity:.32; animation: hue 12s linear infinite;
  }
  @keyframes hue{ to { filter: hue-rotate(360deg) blur(14px); } }

  /* Badges */
  .badges{ margin-top:.6rem; display:flex; flex-wrap:wrap; gap:6px; }
  .badge{ font-size:.72rem; padding:3px 8px; border-radius:999px; color:#0b1220; background:linear-gradient(90deg,var(--g2),var(--g3)); }
  .badge:nth-child(3n){ background:linear-gradient(90deg,var(--g3),var(--g1)); }
  .badge:nth-child(3n+2){ background:linear-gradient(90deg,var(--g1),var(--g2)); }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce){
    .aurora, .ring, .profile-pic, .glow::before, .pfp-wrap{ animation: none !important; transition: none !important; }
    .typing span{ animation: none; border-right: none; }
  }
</style>

<script>
/* ===== Tiny Starfield (GPU-friendly) ===== */
(function(){
  const canvas = document.getElementById('stars');
  if(!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: true });
  let w, h, dpr = Math.min(window.devicePixelRatio || 1, 2);
  let stars = [], N = 160;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize(){
    w = canvas.width  = Math.floor(innerWidth * dpr);
    h = canvas.height = Math.floor(innerHeight * dpr);
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    spawn();
  }
  function rnd(a,b){ return a + Math.random()*(b-a); }
  function spawn(){
    stars = Array.from({length: N}, ()=>({
      x: rnd(0, w), y: rnd(0, h),
      r: rnd(0.4, 1.8)*dpr, a: rnd(.3,.9),
      vx: rnd(-.02,.02)*dpr, vy: rnd(.02,.12)*dpr
    }));
  }
  function step(){
    ctx.clearRect(0,0,w,h);
    ctx.save(); ctx.globalCompositeOperation = 'lighter';
    for(const s of stars){
      ctx.globalAlpha = s.a;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2); ctx.fill();
      s.x += s.vx; s.y += s.vy;
      if(s.x < -5 || s.x > w+5 || s.y > h+5) { s.x = rnd(0,w); s.y = -5; }
    }
    ctx.restore();
    if(!reduce) requestAnimationFrame(step);
  }
  addEventListener('resize', resize, { passive: true });
  resize(); if(!reduce) step();
})();

/* ===== Soft 3D tilt ===== */
(function(){
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce) return;

  const tilts = document.querySelectorAll('[data-tilt]');
  tilts.forEach(el=>{
    const r = 10; // max rotate deg
    el.addEventListener('mousemove', (e)=>{
      const b = el.getBoundingClientRect();
      const cx = b.left + b.width/2, cy = b.top + b.height/2;
      const dx = (e.clientX - cx)/ (b.width/2);
      const dy = (e.clientY - cy)/ (b.height/2);
      el.style.transform = `rotateX(${(-dy*r).toFixed(2)}deg) rotateY(${(dx*r).toFixed(2)}deg) translateZ(0)`;
    });
    el.addEventListener('mouseleave', ()=>{ el.style.transform = ''; });
  });
})();
</script>
