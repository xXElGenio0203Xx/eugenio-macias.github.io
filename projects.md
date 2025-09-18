---
layout: default
title: Projects
---

<section class="projects-page">

  <!-- ====== HERO / TITLE ====== -->
  <header class="projects-hero">
    <h1>Projects</h1>
    <p>Selected work across quantitative research, ML, optimization, and systems.</p>
  </header>

  <!-- ====== HONORS THESIS (HERO CARD) ====== -->
  <article class="project-card hero-card">
    <div class="pc-text">
      <h2 class="pc-title">Honors Thesis — Weak-Form Sparse Cell-to-Cell Interaction PDE Discovery on Curved Manifolds</h2>
      <p class="pc-sub">Aug 2025 – Present · Brown University</p>
      <p class="pc-desc">
        Data-driven identification of interaction laws in collective dynamics on Riemannian manifolds,
        grounded in measure-theoretic probability and operator-theoretic dynamical systems (curvature,
        geodesics, Laplace–Beltrami).
      </p>

      <details>
        <summary>Key components</summary>
        <ul class="bullets">
          <li><strong>WSINDy (primary):</strong> Sobolev/Galerkin weak form with compactly supported tests; convolutional weak derivatives; sparse regression over flux-form operators (Vicsek alignment, Morse attraction–repulsion, manifold diffusion); MSTLS with nondimensional preconditioning.</li>
          <li><strong>Equation-Free ROM (benchmark):</strong> Geodesic KDE → smooth densities → POD/SVD (with mass mode) → latent evolution (MVAR; LSTM as nonlinear comparator) → mass-conserving lifting for fast forecasts.</li>
          <li><strong>Spectral & topological diagnostics:</strong> Koopman/transfer operator eigenstructure; persistent homology (VR complexes, barcodes; bottleneck/Wasserstein robustness).</li>
          <li><strong>Stochastic evaluation:</strong> Finite-sample/bootstrapped uncertainty; parameter recovery; OOS generalization across initial conditions/manifolds.</li>
          <li><strong>Tooling:</strong> Python/Matlab (NumPy/SciPy, scikit-learn, PyTorch or JAX); modular, reproducible benchmarking pipeline.</li>
        </ul>
      </details>

      <div class="badges">
        <span class="badge">PDEs</span><span class="badge">Operator Learning</span><span class="badge">Sparse Regression</span>
        <span class="badge">Riemannian Geometry</span><span class="badge">Uncertainty</span>
      </div>
    </div>
    <div class="pc-media hero-media">
      <div class="hero-glow"></div>
      <div class="hero-grid"></div>
    </div>
  </article>

  <!-- ====== FEATURED ====== -->
  <h3 class="section-title">Featured</h3>
  <div class="projects-grid">

    <!-- Structure-Preserving DL -->
    <a class="project-card" href="assets/files/electron_dynamics_DL.pdf" target="_blank" rel="noopener">
      <div class="pc-text">
        <h3 class="pc-title">Structure-Preserving Deep Learning for Charged Particle Dynamics</h3>
        <p class="pc-desc">
          Symplectic/Poisson/PINN architectures aligned with Hamiltonian flows; inverse problems for mass/charge;
          custom symplectic blocks & latent diffeomorphisms with volume-preserving checks.
        </p>
        <div class="badges">
          <span class="badge">Symplectic NN</span><span class="badge">Physics-ML</span><span class="badge">Dynamical Systems</span>
        </div>
        <span class="pc-cta">View PDF →</span>
      </div>
      <div class="pc-media">
        <img src="{{ site.baseurl }}/assets/images/thumbnails/electron.png" alt="Electron Dynamics Thumbnail">
        <div class="overlay">View PDF →</div>
      </div>
    </a>

    <!-- PCA Investing -->
    <a class="project-card" href="ECON_1750_PCA (1).pdf" target="_blank" rel="noopener">
      <div class="pc-text">
        <h3 class="pc-title">PCA Investing: Eigen-Portfolios for Market-Neutral Strategies</h3>
        <p class="pc-desc">
          PCA on returns → risk-normalized eigen-portfolios; OOS evaluation (Sharpe/IR), cumulative-return visualizations,
          dynamic allocation to limit look-ahead bias.
        </p>
        <div class="badges">
          <span class="badge">Quant</span><span class="badge">PCA</span><span class="badge">Portfolio</span>
        </div>
        <span class="pc-cta">View PDF →</span>
      </div>
      <div class="pc-media">
        <img src="{{ site.baseurl }}/assets/images/thumbnails/PCA_thumbnail.jpg" alt="PCA Investing Thumbnail">
        <div class="overlay">View PDF →</div>
      </div>
    </a>

    <!-- Fourier / Laplace Research -->
    <a class="project-card" href="assets/files/Extended_Essay.pdf" target="_blank" rel="noopener">
      <div class="pc-text">
        <h3 class="pc-title">Research: Fourier Analysis & Laplace’s Equation</h3>
        <p class="pc-desc">
          50-page analysis of Fourier methods for 2-D Laplace with Dirichlet boundaries; convergence criteria and
          solution space characterization.
        </p>
        <div class="badges">
          <span class="badge">Fourier</span><span class="badge">PDE</span><span class="badge">Analysis</span>
        </div>
        <span class="pc-cta">View PDF →</span>
      </div>
      <div class="pc-media">
        <img src="{{ site.baseurl }}/assets/images/thumbnails/EE_thumbnail.jpg" alt="Fourier Analysis Thumbnail">
        <div class="overlay">View PDF →</div>
      </div>
    </a>

  </div>

  <!-- ====== MORE PROJECTS ====== -->
  <h3 class="section-title">More Projects</h3>
  <div class="projects-grid">

    <!-- Go Hybrid Agent -->
    <article class="project-card">
      <div class="pc-text">
        <h3 class="pc-title">Go Hybrid Agent (PyTorch, NumPy, OpenSpiel)</h3>
        <ul class="bullets">
          <li>Policy–value networks integrated with α-β and MCTS; 60% win-rate vs baselines.</li>
          <li>Cross-validated evaluation across board sizes/openings.</li>
        </ul>
        <div class="badges"><span class="badge">RL</span><span class="badge">Search</span></div>
      </div>
    </article>

    <!-- Blackjack ReinforcedAI -->
    <article class="project-card">
      <div class="pc-text">
        <h3 class="pc-title">Blackjack ReinforcedAI (Python, NumPy, Gymnasium)</h3>
        <ul class="bullets">
          <li>MDP state design (totals, dealer up-card, usable aces); Value-Iteration (43%) & Q-Learning (41%).</li>
          <li>100k+ Monte Carlo episodes; policy improvement via state-action refinements.</li>
        </ul>
        <div class="badges"><span class="badge">RL</span><span class="badge">MDP</span></div>
      </div>
    </article>

    <!-- Cartpole -->
    <article class="project-card">
      <div class="pc-text">
        <h3 class="pc-title">Cartpole Control (Q-Learning)</h3>
        <ul class="bullets">
          <li>From discrete to continuous approximation with engineered features + L1 regularization.</li>
          <li>Custom rewards balancing exploration & exploitation.</li>
        </ul>
        <div class="badges"><span class="badge">Control</span><span class="badge">RL</span></div>
      </div>
    </article>

    <!-- SAT Solving -->
    <article class="project-card">
      <div class="pc-text">
        <h3 class="pc-title">SAT Solving (GSAT / WalkSAT)</h3>
        <ul class="bullets">
          <li>Local-search SAT with randomized restarts; Sudoku & N-Queens CNF encodings.</li>
        </ul>
        <div class="badges"><span class="badge">Algorithms</span><span class="badge">Search</span></div>
      </div>
    </article>

    <!-- Time Series -->
    <article class="project-card">
      <div class="pc-text">
        <h3 class="pc-title">Time-Series Forecasting (ongoing)</h3>
        <ul class="bullets">
          <li>Bollinger bands, Monte Carlo, changepoints, ARIMA; real-time E*TRADE API ingestion.</li>
          <li>Planned: Backtrader integration; KPI dashboards.</li>
        </ul>
        <div class="badges"><span class="badge">Quant</span><span class="badge">TS</span></div>
      </div>
    </article>

    <!-- Adversarial Search -->
    <article class="project-card">
      <div class="pc-text">
        <h3 class="pc-title">Adversarial Search</h3>
        <ul class="bullets">
          <li>Minimax + α-β pruning for Tic-Tac-Toe & Connect Four; scalable heuristics.</li>
        </ul>
        <div class="badges"><span class="badge">AI</span><span class="badge">Search</span></div>
      </div>
    </article>

    <!-- Bias-Variance -->
    <article class="project-card">
      <div class="pc-text">
        <h3 class="pc-title">Linear Regression & Bias–Variance</h3>
        <ul class="bullets">
          <li>Ridge/LASSO; real + synthetic data; WHO life-expectancy prediction.</li>
        </ul>
        <div class="badges"><span class="badge">ML</span><span class="badge">Stats</span></div>
      </div>
    </article>

    <!-- Portfolio site -->
    <article class="project-card">
      <div class="pc-text">
        <h3 class="pc-title">Personal Portfolio (GitHub Pages)</h3>
        <ul class="bullets">
          <li>Static site with responsive layout, deploy via GitHub Actions.</li>
        </ul>
        <div class="badges"><span class="badge">Web</span><span class="badge">DevOps</span></div>
      </div>
    </article>

    <!-- Decision Tree -->
    <article class="project-card">
      <div class="pc-text">
        <h3 class="pc-title">Decision-Tree Algorithm (Java)</h3>
        <ul class="bullets">
          <li>CSV ingestion, impurity-based splits; up to 96% accuracy on large datasets.</li>
        </ul>
        <div class="badges"><span class="badge">ML</span><span class="badge">Java</span></div>
      </div>
    </article>

    <!-- ReasonML Game-AI -->
    <article class="project-card">
      <div class="pc-text">
        <h3 class="pc-title">Game-AI (ReasonML)</h3>
        <ul class="bullets">
          <li>Connect-4 on M×N boards; minimax with heuristics outperforming human baselines.</li>
        </ul>
        <div class="badges"><span class="badge">AI</span><span class="badge">ReasonML</span></div>
      </div>
    </article>

    <!-- Graph Optimizer -->
    <article class="project-card">
      <div class="pc-text">
        <h3 class="pc-title">Graph-Optimizer (Python)</h3>
        <ul class="bullets">
          <li>Dijkstra/BFS/DFS variants; tested on 500+ node graphs with multi-objective costs.</li>
        </ul>
        <div class="badges"><span class="badge">Algorithms</span><span class="badge">Graphs</span></div>
      </div>
    </article>

    <!-- ReasonML–Racket Interpreter -->
    <article class="project-card">
      <div class="pc-text">
        <h3 class="pc-title">ReasonML–Racket Interpreter</h3>
        <ul class="bullets">
          <li>Advanced pattern matching to evaluate Racket programs (500+ LOC) inside ReasonML.</li>
        </ul>
        <div class="badges"><span class="badge">PL</span><span class="badge">Interpreters</span></div>
      </div>
    </article>

    <!-- Mutex DB -->
    <article class="project-card">
      <div class="pc-text">
        <h3 class="pc-title">Mutex-Safe Database (C)</h3>
        <ul class="bullets">
          <li>Multithreaded server with dynamic thread pool; 100+ concurrent clients.</li>
        </ul>
        <div class="badges"><span class="badge">Systems</span><span class="badge">C</span></div>
      </div>
    </article>

    <!-- Unix Shell -->
    <article class="project-card">
      <div class="pc-text">
        <h3 class="pc-title">Unix Shell (C)</h3>
        <ul class="bullets">
          <li>Custom shell with parsing, I/O redirection, signal handling, and process control.</li>
        </ul>
        <div class="badges"><span class="badge">Systems</span><span class="badge">C</span></div>
      </div>
    </article>

  </div>
</section>

<style>
  :root{
    --bg:#fff; --ink:#0f172a; --muted:#6b7280; --line:#e5e7eb; --card:#fff;
    --grad1:#6366f1; --grad2:#06b6d4; --grad3:#22c55e;
    --shadow:0 10px 30px rgba(0,0,0,.08);
  }
  @media (prefers-color-scheme: dark){
    :root{
      --bg:#0a0b0e; --ink:#e5e7eb; --muted:#a3a3a3; --line:#1f2937; --card:#0f1115;
      --grad1:#7c83ff; --grad2:#22d3ee; --grad3:#34d399;
      --shadow:0 24px 50px rgba(0,0,0,.5);
    }
  }

  .projects-page{ max-width:1100px; margin:0 auto; color:var(--ink); }
  .projects-hero{ text-align:center; margin:10px 0 18px; }
  .projects-hero h1{ margin:0; font-size:clamp(1.8rem,2.6vw,2.3rem); }
  .projects-hero p{ margin:.25rem 0 0; color:var(--muted); }

  .section-title{
    margin:20px 0 10px; font-size:1.1rem; letter-spacing:.2px;
  }
  .section-title::after{
    content:""; display:block; height:2px; width:76px; margin-top:.35rem;
    background:linear-gradient(90deg,var(--grad1),var(--grad2),var(--grad3));
    border-radius:2px;
  }

  .projects-grid{
    display:grid; gap:14px; grid-template-columns:1fr;
    margin:0 0 24px;
  }
  @media (min-width:880px){
    .projects-grid{ grid-template-columns:1fr 1fr; }
  }

  /* ===== Card Base ===== */
  .project-card{
    position:relative; display:grid; grid-template-columns:1.4fr .9fr; gap:14px;
    text-decoration:none; color:inherit; background:var(--card); border:1px solid var(--line);
    border-radius:16px; padding:14px; box-shadow:var(--shadow);
    transition:transform .18s ease, box-shadow .18s ease, border-color .18s ease;
    overflow:hidden; isolation:isolate;
  }
  .project-card:hover{ transform:translateY(-3px); border-color:transparent; box-shadow:0 18px 40px rgba(0,0,0,.14); }
  .project-card .pc-title{ margin:0 0 .35rem; font-size:1.02rem; line-height:1.25; }
  .project-card .pc-sub{ margin:.1rem 0 .5rem; color:var(--muted); font-size:.92rem; }
  .project-card .pc-desc{ margin:0; color:var(--muted); }
  .project-card .pc-cta{ margin-top:.7rem; display:inline-block; font-weight:600; background:linear-gradient(90deg,var(--grad1),var(--grad2)); -webkit-background-clip:text; background-clip:text; color:transparent; }
  .project-card .pc-media{ position:relative; border-radius:12px; overflow:hidden; border:1px solid var(--line); background:#0b0c0e; min-height:150px; }
  .project-card .pc-media img{ width:100%; height:100%; max-height:190px; object-fit:cover; display:block; transform:scale(1.02); opacity:.93; transition:transform .35s ease, opacity .35s ease; }
  .project-card:hover .pc-media img{ transform:scale(1.06); opacity:1; }
  .overlay{ position:absolute; inset:0; display:grid; place-items:end; padding:10px; color:#fff; font-weight:700; font-size:.92rem; opacity:0; transition:opacity .25s ease;
            background:linear-gradient(180deg,rgba(0,0,0,0) 40%,rgba(0,0,0,.6) 86%); }
  .project-card:hover .overlay{ opacity:1; }

  .bullets{ margin:.35rem 0 0 1.1rem; padding:0; }
  .bullets li{ margin:.25rem 0; }

  .badges{ margin-top:.6rem; display:flex; flex-wrap:wrap; gap:6px; }
  .badge{ font-size:.72rem; padding:3px 8px; border-radius:999px; color:#fff; background:linear-gradient(90deg,var(--grad1),var(--grad2)); }
  .badge:nth-child(3n){ background:linear-gradient(90deg,var(--grad2),var(--grad3)); }
  .badge:nth-child(3n+2){ background:linear-gradient(90deg,var(--grad3),var(--grad1)); }

  /* ===== Hero Card Variant ===== */
  .hero-card{ grid-template-columns:1.5fr .8fr; margin-bottom:8px; }
  .hero-card .pc-title{ font-size:1.15rem; }
  @media (min-width:880px){
    .hero-card{ grid-column:1 / -1; }
  }
  .hero-media{ position:relative; display:grid; place-items:center; }
  .hero-glow{
    position:absolute; width:120%; height:120%; filter:blur(38px); opacity:.55; z-index:-1;
    background:radial-gradient(60% 60% at 50% 50%, rgba(99,102,241,.30), rgba(34,197,94,.12) 60%, rgba(6,182,212,.08) 80%, transparent 100%);
  }
  .hero-grid{
    --s:18px;
    position:absolute; inset:10px; border-radius:12px; opacity:.22; mix-blend:screen;
    background:
      linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px) calc(var(--s)/2) 0 / var(--s) var(--s),
      linear-gradient(   0, rgba(255,255,255,.06) 1px, transparent 1px) 0 calc(var(--s)/2) / var(--s) var(--s),
      linear-gradient(90deg, rgba(0,0,0,.20), rgba(0,0,0,0));
    border:1px solid var(--line);
  }

  /* ===== Accessibility & Mobile ===== */
  @media (max-width:680px){
    .project-card{ grid-template-columns:1fr; }
    .hero-card{ grid-template-columns:1fr; }
    .project-card .pc-media{ order:-1; min-height:140px; }
  }
</style>
