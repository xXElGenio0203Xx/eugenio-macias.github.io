---
layout: default
title: Home
---

<canvas id="stars" aria-hidden="true"></canvas>
<div class="aurora" aria-hidden="true"></div>
<div class="spotlight" aria-hidden="true"></div> <section class="hero">
  <div class="hero-inner">

    <div class="pfp-wrap" data-tilt data-magnetic> <picture>
        <source type="image/heic" srcset="{{ site.baseurl }}/assets/images/profile%20pic.HEIC" />
        <source type="image/webp" srcset="{{ site.baseurl }}/assets/images/profile-pic.webp" />
        <source type="image/jpeg" srcset="{{ site.baseurl }}/assets/images/profile-pic.jpg" />
        <img class="profile-pic"
             src="{{ site.baseurl }}/assets/images/profile_pic.jpg"
             alt="Profile picture">
      </picture>
      <div class="ring"></div>
    </div>

    <div class="intro">
      <h1 class="title">
        <span class="badge">BS Applied Mathematics–Computer Science & BA Mathematics</span>
      </h1>

      <p class="typing" aria-label="Probability × Statistics × PDEs × Machine Learning under uncertainty">
        <span>Probability × Statistics × PDEs × ML under uncertainty</span>
      </p>

      <article class="glass about" data-tilt data-magnetic> <h2>About me</h2>
        <div class="text-bg">
          <p>
            I’m an international student from Mexico at Brown University. I focus on the intersection of
            <strong>probability</strong>, <strong>mathematical statistics</strong>, and <strong>differential equations</strong>
            with <strong>machine learning under uncertainty</strong>. I pair <em>measure-theoretic</em> foundations with
            <em>numerical methods</em> and <em>algorithm design</em> to build robust, data-driven models. I’m currently writing a thesis on
            <strong>weak-form PDE discovery for collective stochastic dynamics</strong>—developing sparse-regression (WSINDy) and
            equation-free approaches that recover governing laws from high-dimensional, noisy trajectories—methods directly applicable to
            modeling <strong>complex markets and risk</strong>.
            Outside of math, I love <strong>♟ chess</strong>, <strong>🎸 classical guitar</strong>, and <strong>✈️ traveling</strong>—
            I’ve visited <strong>34 countries</strong>, starting from my IB at <strong>UWC Mostar</strong>.
          </p>
        </div>
      </article>

      <div class="cool-trigger">
        <button id="coolBtn" class="cool-btn" type="button">Click here to see something cool ✨</button>
      </div>
    </div>
  </div>
</section>

<section class="highlights compact-top">
  <h2 class="section-title">Highlights</h2>
  <div class="cards">

    <article class="card glow tilt-card" data-tilt data-magnetic> <header>Citi Markets — Quantitative Analyst Intern (NYC, Summer 2025)</header>
      <ul>
        <li>Built <strong>Python–C++ Monte Carlo & PDE solvers</strong>; validated pricing/Greeks and accelerated runtimes.</li>
        <li>Trained <strong>LightGBM-DART</strong> & <strong>neural nets</strong> with Bayesian optimization on <strong>6M+ structured-note</strong> rows; used <strong>SHAP</strong> for diagnostics.</li>
        <li><strong>1st place</strong> out of 540 in the firm-wide ML Quant competition.</li>
      </ul>
    </article>

    <article class="card tilt-card" data-tilt data-magnetic> <header>D. E. Shaw · Bridgewater · Buddywise</header>
      <ul>
        <li><strong>Latitude Fellowship</strong> at The D. E. Shaw Group (NYC): multivariate time-series & sector forecasting.</li>
        <li><strong>Investment Immersion</strong> at Bridgewater Associates: macro indicators & stat-arb backtests.</li>
        <li>Intern at <strong>Buddywise</strong> (Berlin): data tooling for safety-critical computer vision.</li>
      </ul>
    </article>

    <article class="card tilt-card" data-tilt data-magnetic> <header>What I’m pursuing</header>
      <ul>
        <li><strong>Option A:</strong> <em>MSc in Mathematical Statistics / Applied Mathematics</em>.</li>
        <li><strong>Option B:</strong> <em>Quant full-time</em> (research / trading / developer) starting 2026.</li>
        <li><strong>Option C:</strong> <em>AI startup with my brother</em> — applied ML systems & decision-intelligence tooling.</li>
      </ul>
      <div class="badges">
        <span class="badge">Quant</span><span class="badge">Stat ML</span><span class="badge">PDEs</span>
      </div>
    </article>

  </div>
</section>

<div id="symbolLayer" class="symbol-layer" aria-hidden="true"></div>

<style>
  /* High-contrast palette */
  :root{
    --bg:#0a0b0e; --ink:#ffffff; --muted:#e5e7eb; --line:#23262d; --card:#0f1115;
    --g1:#7c83ff; --g2:#22d3ee; --g3:#34d399; --g4:#f59e0b;
    --shadow:0 24px 60px rgba(0,0,0,.55);
    /* For new spotlight effect */
    --mouse-x: 50%;
    --mouse-y: 50%;
  }
  html{ scroll-behavior:smooth; } /* nicer anchor scrolling */
  body { background: var(--bg); color: var(--ink); overflow-x:hidden; }

  /* Starfield, Aurora & NEW Spotlight */
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
    will-change: transform;
  }
  @keyframes drift{ 0%{ transform: translate3d(0,0,0) scale(1); } 100%{ transform: translate3d(2vw,-1vh,0) scale(1.04); } }

  .spotlight {
    position: fixed; inset: 0; z-index: -1; pointer-events: none;
    background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.045), transparent 35%);
  }

  /* Hero */
  .hero{ position:relative; padding: clamp(20px, 4.5vw, 40px) 16px; }
  .hero{ padding-bottom: clamp(8px, 2vw, 16px); } /* tighter bottom */
  .hero-inner{ max-width:1120px; margin:0 auto; display:grid; grid-template-columns:1fr; gap:18px; align-items:center; }
  @media (min-width:980px){ .hero-inner{ grid-template-columns:.95fr 1.65fr; gap:28px; } }

  /* Profile + ring */
  .pfp-wrap{
    position:relative; width:min(340px,78vw); aspect-ratio:1/1; margin:0 auto;
    border-radius:24px; overflow:hidden; border:1px solid var(--line);
    background: linear-gradient(145deg, rgba(255,255,255,.04), rgba(255,255,255,.01));
    box-shadow:var(--shadow); transform-style:preserve-3d;
    transition:transform .2s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Smoother transition */
    will-change: transform;
  }
  .profile-pic{ width:100%; height:100%; object-fit:cover; display:block; opacity:.98; transform:scale(1.02); transition:transform .35s ease, opacity .35s ease; }
  .pfp-wrap:hover .profile-pic{ transform:scale(1.06); opacity:1; }
  .ring{
    position:absolute; inset:0; pointer-events:none;
    background: conic-gradient(from 180deg, var(--g1), var(--g2), var(--g3), var(--g1));
    mask: radial-gradient(farthest-side, transparent calc(100% - 6px), #000 0);
    mix-blend-mode: screen; opacity:.38; animation: spin 10s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* Intro */
  .intro{ position:relative; }
  .title{ margin:0 0 .35rem; font-size:clamp(1.6rem,3.2vw,2.2rem); line-height:1.08; color:var(--ink); }
  .title::after{ content:""; display:block; height:2px; width:86px; margin-top:.4rem; background:linear-gradient(90deg,var(--g1),var(--g2),var(--g3)); border-radius:2px; }
  .badge{ display:inline-block; font-size:.92rem; font-weight:700; padding:6px 12px; border-radius:999px; color:#0b1220; background:linear-gradient(90deg,var(--g2),var(--g3)); }
  .typing{ margin:.4rem 0 1.0rem; color:var(--ink); opacity:.95; font-size:clamp(1rem,1.6vw,1.1rem); min-height:1.4em; }
  .typing span{ display:inline-block; white-space:nowrap; overflow:hidden; border-right:2px solid currentColor; animation: typing 5s steps(42,end) infinite alternate, caret 700ms steps(1) infinite; }
  @keyframes typing { from { width: 0; } to { width: 42ch; } }
  @keyframes caret { 50% { border-color: transparent; } }

  /* Glass card */
  .glass{ background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.04)); border:1px solid var(--line); border-radius:16px; padding:18px 20px; box-shadow:var(--shadow); backdrop-filter: blur(8px); transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease; }
  .glass:hover{ transform: translateY(-2px) rotateX(1deg); border-color:#2a2f39; box-shadow:0 24px 60px rgba(0,0,0,.35); }
  .about h2{ margin:.2rem 0 .5rem; font-size:1.15rem; letter-spacing:.2px; color:var(--ink); }

  /* Badge-style background */
  .text-bg{
    position:relative; padding:12px 14px; border-radius:14px;
    background: linear-gradient(180deg, rgba(124,131,255,.18), rgba(34,211,238,.14) 50%, rgba(52,211,153,.12) 100%);
    border:1px solid #2a2f39;
  }
  .text-bg::before{
    content:""; position:absolute; inset:-1px; border-radius:14px;
    background: conic-gradient(from 0deg, var(--g1), var(--g2), var(--g3), var(--g1));
    filter: blur(14px); opacity:.16; pointer-events:none;
  }
  .about p{ margin:0; color:var(--ink); opacity:.98; }

  /* Cool button */
  .cool-trigger{ margin-top:14px; }
  .cool-btn{
    appearance:none; border:1px solid #2a2f39; border-radius:999px;
    padding:10px 16px; font-weight:800; letter-spacing:.2px; cursor:pointer;
    color:#0b1220; background:linear-gradient(90deg,var(--g2),var(--g3));
    transition: transform .15s ease, box-shadow .15s ease, filter .15s ease;
  }
  .cool-btn:hover{ transform: translateY(-2px) scale(1.02); box-shadow: 0 10px 24px rgba(0,0,0,.30); filter:saturate(1.1); }

  /* Highlights section */
  .highlights.compact-top{ margin-top: -6px; }
  .highlights{ max-width:1280px; margin: 0 auto 40px; padding: 0 16px; }
  .section-title{ margin:4px 0 12px; font-size:1.18rem; letter-spacing:.2px; color:var(--ink); }
  .section-title::after{ content:""; display:block; height:2px; width:86px; margin-top:.35rem; background:linear-gradient(90deg,var(--g1),var(--g2),var(--g3)); border-radius:2px; }

  /* 3-Column Card Layout */
  .cards{ display:grid; gap:14px; grid-template-columns:1fr; perspective:1000px; }
  @media (min-width: 1024px){
    .cards{ grid-template-columns: repeat(3, minmax(0,1fr)); gap:18px; }
  }

  .card{
    background:var(--card); border:1px solid var(--line); border-radius:16px; padding:20px 22px; box-shadow:var(--shadow);
    color:var(--ink); position:relative; overflow:hidden; font-size:1.04rem;
    will-change: transform, opacity;
    /* Styles for scroll-reveal animation */
    opacity: 0;
    transform: translateY(30px);
    transition: transform .5s cubic-bezier(0.215, 0.610, 0.355, 1), box-shadow .25s ease, border-color .25s ease, opacity .5s ease;
  }
  /* Staggered animation delay */
  .card:nth-child(2) { transition-delay: .1s; }
  .card:nth-child(3) { transition-delay: .2s; }

  /* When card is visible (triggered by JS) */
  .card.is-visible {
      opacity: 1;
      transform: translateY(0);
  }

  .card header{ font-weight:900; margin-bottom:8px; color:var(--ink); font-size:1.06rem; }
  .card ul{ margin:.2rem 0 0 1.1rem; }
  .card li{ margin:.35rem 0; color:var(--ink); opacity:.95; line-height:1.35; }
  .card::after{
    content:""; position:absolute; inset:-1px; border-radius:18px; pointer-events:none; opacity:0;
    background: conic-gradient(from 0deg, var(--g1), var(--g2), var(--g3), var(--g1));
    transition: opacity .25s ease; filter: blur(16px);
  }
  .card:hover{
    transform: translateY(-3px) rotateX(1.2deg) rotateY(-1.2deg) scale(1.012);
    border-color:#2a2f39; box-shadow:0 22px 52px rgba(0,0,0,.45);
  }
  .card:hover::after{ opacity:.25; }
  .card:hover:before{
    content:""; position:absolute; top:0; left:-40%; width:40%; height:100%; transform:skewX(-20deg);
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.10), transparent);
    animation: sheen .9s ease;
  }
  @keyframes sheen{ from{ left:-40%; } to{ left:120%; } }

  .tilt-card:hover{ transform: translateY(-3px) rotateX(2deg) rotateY(-2deg) scale(1.02); }

  /* Floating math symbols (unchanged) */
  .symbol-layer{ position: fixed; inset: 0; z-index: 3; pointer-events: none; display: none; }
  .symbol-layer.active{ display:block; }
  .symbol{
    position:absolute; pointer-events:auto; user-select:none;
    color: rgba(255,255,255,.9); text-shadow: 0 0 8px rgba(255,255,255,.28);
    font-weight: 900; filter: drop-shadow(0 6px 20px rgba(0,0,0,.35));
    transform: translate3d(0,0,0) rotate(var(--rot,0deg));
    animation: float var(--dur,12s) ease-in-out var(--delay,0s) infinite alternate;
    will-change: transform, opacity, filter;
  }
  @keyframes float{ to{ transform: translate3d(var(--tx, 20px), var(--ty, -30px), 0) rotate(calc(var(--rot,0deg) + 12deg)); } }
  .symbol.pop{ animation: pop .45s ease-out forwards; }
  .symbol.pop::after{
    content:""; position:absolute; inset:-6px; border-radius:999px; border:2px solid rgba(255,255,255,.5);
    animation: ripple .45s ease-out forwards;
  }
  @keyframes pop{
    0%   { transform: scale(1) translateZ(0); opacity:.95; filter: drop-shadow(0 8px 26px rgba(0,0,0,.35)); }
    60%  { transform: scale(1.25) translateZ(0); }
    100% { transform: scale(.3) translateZ(0); opacity:0; filter: drop-shadow(0 0 0 rgba(0,0,0,0)); }
  }
  @keyframes ripple{
    0%   { opacity:.35; transform: scale(1); }
    100% { opacity:0;  transform: scale(1.8); }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce){
    .aurora, .ring, .profile-pic, .glass, .card, .symbol, .spotlight { animation: none !important; transition: none !important; }
    .typing span{ animation: none; border-right: none; }
    .card { opacity: 1; transform: none; } /* Disable scroll animation */
  }
</style>

<script>
/* ===== Tiny Starfield (GPU-friendly + perf-aware) ===== */
(function(){
  const canvas = document.getElementById('stars');
  if(!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: true });
  let w, h, dpr = Math.min(window.devicePixelRatio || 1, 1.35);
  let stars = [], N = 120;
  let paused = false;
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
      r: rnd(0.4, 1.6)*dpr, a: rnd(.3,.9),
      vx: rnd(-.02,.02)*dpr, vy: rnd(.02,.10)*dpr
    }));
  }
  function draw(){
    ctx.clearRect(0,0,w,h);
    ctx.save(); ctx.globalCompositeOperation = 'lighter';
    for(const s of stars){
      ctx.globalAlpha = s.a;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2); ctx.fill();
    }
    ctx.restore();
  }
  function update(){
    for(const s of stars){
      s.x += s.vx; s.y += s.vy;
      if(s.x < -5 || s.x > w+5 || s.y > h+5) { s.x = rnd(0,w); s.y = -5; }
    }
  }
  function step(){
    draw();
    if(!paused) update();
    if(!reduce) requestAnimationFrame(step);
  }

  let lastY = 0, ticking = false;
  function onScroll(){
    lastY = window.scrollY || 0;
    if(!ticking){
      window.requestAnimationFrame(()=>{
        paused = lastY > innerHeight * 0.7;
        ticking = false;
      });
      ticking = true;
    }
  }
  addEventListener('scroll', onScroll, { passive:true });
  addEventListener('resize', resize, { passive: true });
  resize(); if(!reduce) step();
})();

/* ===== Soft 3D tilt (pfp + cards + about) ===== */
(function(){
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce) return;

  const tilts = document.querySelectorAll('[data-tilt]');
  tilts.forEach(el=>{
    const r = el.hasAttribute('data-magnetic') ? 6 : 10; // Less rotation for magnetic items
    const m = el.hasAttribute('data-magnetic') ? 0.35 : 0; // Magnetic pull factor

    el.addEventListener('mousemove', (e)=>{
      const b = el.getBoundingClientRect();
      const cx = b.left + b.width / 2, cy = b.top + b.height / 2;
      const dx = (e.clientX - cx) / (b.width / 2);
      const dy = (e.clientY - cy) / (b.height / 2);

      const tx = dx * b.width * m;
      const ty = dy * b.height * m;
      const rotX = (-dy * r).toFixed(2);
      const rotY = (dx * r).toFixed(2);

      el.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });
    el.addEventListener('mouseleave', ()=>{ el.style.transform = ''; });
  });
})();

/* ===== Floating Math Symbols (toggle + pop) ===== */
(function(){
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const layer = document.getElementById('symbolLayer');
  const btn = document.getElementById('coolBtn');
  if(!layer || !btn) return;

  const SYMBOLS = ["∑","∫","π","ℝ","ℂ","ℕ","∇","∂","λ","μ","σ","ϕ","ψ","ε","δ","Θ","∞","≈","≡","⊗","⊕","→","↦","∀","∃","𝔼","𝒩","√","≤","≥"];
  const MIN = 18, MAX = 42;

  function rand(a,b){ return a + Math.random()*(b-a); }
  function choose(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

  function spawnOne(){
    const s = document.createElement('span');
    s.className = 'symbol';
    s.textContent = choose(SYMBOLS);
    const size = rand(MIN, MAX);
    const x = rand(0, window.innerWidth - size);
    const y = rand(0, window.innerHeight - size);

    s.style.left = x + 'px';
    s.style.top  = y + 'px';
    s.style.fontSize = size + 'px';
    const tx = (Math.random() > .5 ? 1 : -1) * rand(20, 120);
    const ty = (Math.random() > .5 ? 1 : -1) * rand(20, 120);
    const rot = rand(-18, 18) + 'deg';
    const dur = rand(9, 16) + 's';
    const delay = rand(-4, 2) + 's';
    s.style.setProperty('--tx', tx + 'px');
    s.style.setProperty('--ty', ty + 'px');
    s.style.setProperty('--rot', rot);
    s.style.setProperty('--dur', dur);
    s.style.setProperty('--delay', delay);
    s.addEventListener('mouseenter', ()=>{
      if(reduce) return;
      s.classList.add('pop');
      s.addEventListener('animationend', function handler(){
        s.classList.remove('pop');
        s.style.left = rand(0, window.innerWidth - size) + 'px';
        s.style.top  = rand(0, window.innerHeight - size) + 'px';
        s.textContent = choose(SYMBOLS);
        s.removeEventListener('animationend', handler);
      });
    });
    layer.appendChild(s);
  }

  function spawnMany(n){ for(let i=0;i<n;i++) spawnOne(); }
  let active = false;

  btn.addEventListener('click', ()=>{
    active = !active;
    if(active){
      layer.classList.add('active');
      layer.innerHTML = '';
      spawnMany(36);
      btn.textContent = 'Hide the cool math ✨';
    }else{
      layer.classList.remove('active');
      layer.innerHTML = '';
      btn.textContent = 'Click here to see something cool ✨';
    }
  });

  addEventListener('resize', ()=>{
    if(!active) return;
    const syms = layer.querySelectorAll('.symbol');
    syms.forEach(s=>{
      const size = parseFloat(s.style.fontSize) || 24;
      s.style.left = Math.min(parseFloat(s.style.left)||0, innerWidth - size) + 'px';
      s.style.top  = Math.min(parseFloat(s.style.top)||0, innerHeight - size) + 'px';
    });
  });
})();

/* ===== NEW: Spotlight Cursor Effect ===== */
(function() {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    window.addEventListener('mousemove', (e) => {
        document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
        document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
    });
})();

/* ===== NEW: Scroll-Reveal Animation for Cards ===== */
(function() {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => observer.observe(card));
})();

</script>
