---
layout: default
title: Projects
---
<div class="center">
    <h1> Projects</h1>
</div>
<div style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 30px;">
    <div style="display: flex; justify-content: space-between; width: 100%;">
        <div>
            <strong>Structure-Preserving Deep Learning for Charged Particle Dynamics</strong> <i class="fas fa-atom" style="color: #9b59b6;"></i> <br>
            <span style="color: white;">
            &nbsp;&nbsp;&nbsp;- Developed a framework for learning charged particle dynamics in electromagnetic fields using Symplectic, Poisson, and Physics-Informed Neural Networks (PINNs).<br>
            &nbsp;&nbsp;&nbsp;- Modeled dynamical systems with Hamiltonian and non-canonical Poisson structure using neural architectures aligned with structure-preserving flows.<br>
            &nbsp;&nbsp;&nbsp;- Solved inverse problems by estimating physical parameters (mass and charge) via hybrid loss minimization that balances data and physical consistency.<br>
            &nbsp;&nbsp;&nbsp;- Implemented custom symplectic blocks, latent diffeomorphic mappings, and evaluated volume preservation to approximate symplectomorphisms in learned dynamics.
            </span>
        </div>
        <div style="flex-shrink: 0; margin-left: 20px;">
            <a href="assets/files/electron_dynamics_DL.pdf" target="_blank" title="Charged Particle Dynamics with DL">
                <img src="{{ site.baseurl }}/assets/images/thumbnails/electron.png" alt="Electron Dynamics Thumbnail" style="width: 270px; height: auto;">
            </a>
        </div>
    </div>
</div>
<div style="display: flex; flex-direction: column; align-items: flex-start;">
    <div style="display: flex; justify-content: space-between; width: 100%;">
        <div>
            <strong>PCA Investing: Principal Component Analysis for Stock Portfolios</strong> <i class="fas fa-chart-line" style="color: #3498db;"></i> <br>
            <span style="color: white;">
            &nbsp;&nbsp;&nbsp;- Conducted PCA on stock returns to identify principal components capturing the majority of variance in market data. <br>
            &nbsp;&nbsp;&nbsp;- Built a market-neutral trading strategy based on risk-normalized eigenportfolios and factor returns.<br>
            &nbsp;&nbsp;&nbsp;- Evaluated in-sample and out-of-sample performance, visualizing cumulative returns and computing Sharpe and Information Ratios. <br>
            &nbsp;&nbsp;&nbsp;- Simulated dynamic portfolio allocation strategies to mitigate look-ahead bias and optimize alpha prediction.<br>
            </span>
        </div>
        <div style="flex-shrink: 0; margin-left: 20px;">
            <a href="ECON_1750_PCA (1).pdf" target="_blank" title="PCA Investing Project">
                <img src="{{ site.baseurl }}/assets/images/thumbnails/PCA_thumbnail.jpg" alt="PCA Investing Thumbnail" style="width: 270px; height: auto;">
            </a>
        </div>
    </div>
</div>

<div style="display: flex; flex-direction: column; align-items: flex-start;">
    <div style="display: flex; justify-content: space-between; width: 100%;">
        <div>
            <strong>Research: Fourier Analysis and Laplace’s Equation</strong> <i class="fas fa-book" style="color: #f39c12;"></i>  <br>
            <span style="color: white;">
            &nbsp;&nbsp;&nbsp;- Authored a 50-page research paper in Real Analysis and Linear Algebra: complex-real function theory, convergence criteria  <br>
            &nbsp;&nbsp;&nbsp;- Explored the importance of Fourier Series to Laplace’s 2-D Equation complete solution space with 4 Boundary Dirichlet conditions  
            </span>
        </div>
        <div style="flex-shrink: 0; margin-left: 20px;">
            <a href="assets/files/Extended_Essay.pdf" target="_blank" title="Fourier Analysis Research">
                <img src="{{ site.baseurl }}/assets/images/thumbnails/EE_thumbnail.jpg" alt="Fourier Analysis Thumbnail" style="width: 270px; height: auto;">
            </a>
        </div>
    </div>
</div>

**Go Hybrid Agent: (PyTorch, NumPy, OpenSpiel)** <i class="fab fa-python" style="color: #3776AB;"></i>  
&nbsp;&nbsp;&nbsp;- Built an AI agent for Go using neural networks for policy-value estimation, integrated with Alpha-Beta and Monte Carlo Tree Search.  
&nbsp;&nbsp;&nbsp;- Achieved a 60% win rate against baseline models and validated performance through cross-validation.  

**Blackjack ReinforcedAI: (Python, NumPy, Gymnasium)** <i class="fab fa-python" style="color: #3776AB;"></i>  
&nbsp;&nbsp;&nbsp;- Developed an AI for Blackjack using Markov Decision Processes (MDPs) based on player totals, visible cards, usable aces.  
&nbsp;&nbsp;&nbsp;- Implemented Value-Iteration for policy optimization (43% win rate), Q-Learning off-policy exploration (41% win rate).  
&nbsp;&nbsp;&nbsp;- Conducted Monte Carlo simulations across (100,000 episodes) to evaluate policy performance and refine state-action transitions.  

**Balancing a stick on a Cartpole Problem  (Python)** <i class="fab fa-python" style="color: #3776AB;"></i>  
&nbsp;&nbsp;&nbsp;- Implemented Q-learning algorithms for solving the Cartpole problem, transitioning from discrete state spaces to continuous function approximation.  
&nbsp;&nbsp;&nbsp;- Applied linear regression techniques with feature engineering and regularization (L1 penalty) to approximate Q-values for policy improvement.  
&nbsp;&nbsp;&nbsp;- Designed and evaluated custom reward structures and featurization strategies, balancing exploration and exploitation for optimal policy learning. 

**SAT Solving (Python)** <i class="fab fa-python" style="color: #3776AB;"></i>  
&nbsp;&nbsp;&nbsp;- Developed GSAT and WalkSAT algorithms to solve Boolean Satisfiability (SAT) problems using local search.  
&nbsp;&nbsp;&nbsp;- Translated Sudoku and N-Queens puzzles into Conjunctive Normal Form (CNF) and implemented SAT solvers to find solutions.  
&nbsp;&nbsp;&nbsp;- Integrated randomized restarts to improve solution success

**Time-Series Forecasting (Python, ongoing)** <i class="fab fa-python" style="color: #3776AB;"></i>  
&nbsp;&nbsp;&nbsp;- Implemented a time series predictor algorithm in Python utilizing Bollinger-bands and Monte-Carlo Simulations  
&nbsp;&nbsp;&nbsp;- Utilized changepoint detection, multiple linear regressions, ARIMA models, and Matplotlib-Seaborn for visualizations  
&nbsp;&nbsp;&nbsp;- Employed the Etrade API for real-time data and parsed index pricing and variance statistics using XML Etree Libraries  
&nbsp;&nbsp;&nbsp;- Plan to integrate the Backtrader library for trading simulation. Calculated KPIs using the Scikit library  

**Adversarial Search (Python)** <i class="fab fa-python" style="color: #3776AB;"></i>  
&nbsp;&nbsp;&nbsp;- Implemented minimax and alpha-beta pruning algorithms for adversarial games like Tic-Tac-Toe and Connect Four.  
&nbsp;&nbsp;&nbsp;- Developed depth-limited versions of the algorithms, using heuristics to evaluate game states for larger boards.  
&nbsp;&nbsp;&nbsp;- Created a Tic-Tac-Toe heuristic function capable of evaluating arbitrary-sized boards, favoring states advantageous to the starting player. 

**Linear Regression & The Bias-Variance Tradeoff (Python)** <i class="fab fa-python" style="color: #3776AB;"></i>  
&nbsp;&nbsp;&nbsp;- Implemented simple, multiple, and polynomial regression models to analyze the bias-variance tradeoff on real-world and synthetic data.  
&nbsp;&nbsp;&nbsp;- Developed and evaluated Ridge and LASSO regression models to address overfitting, leveraging regularization to balance bias and variance.  
&nbsp;&nbsp;&nbsp;- Predicted life expectancy using WHO data and explored correlations among health and economic factors to build impactful models. 

**Personal Portfolio (HTML, CSS, JavaScript, GitHub Pages)** <i class="fab fa-html5" style="color: #e34c26;"></i> <i class="fab fa-css3-alt" style="color: #1572B6;"></i> <i class="fab fa-js" style="color: #f7df1e;"></i> <i class="fab fa-github" style="color: #181717;"></i>  
&nbsp;&nbsp;&nbsp;- Designed and developed a personal portfolio website to showcase projects, skills, and achievements.  
&nbsp;&nbsp;&nbsp;- Utilized HTML for structure, CSS for styling, and JavaScript for interactive elements.  
&nbsp;&nbsp;&nbsp;- Hosted the website on GitHub Pages, ensuring continuous deployment and version control.  
&nbsp;&nbsp;&nbsp;- Implemented responsive design principles to ensure the website is accessible on various devices.  

**Decision-Tree Algorithm (Java) (School-Related)** <i class="fab fa-java" style="color: #007396;"></i>  
&nbsp;&nbsp;&nbsp;- Implemented an ML decision-tree algorithm in Java that achieved up to 96% accuracy in large CSV datasets  
&nbsp;&nbsp;&nbsp;- Utilized tree structures and classification algorithms enabling decision-making based on input features and a CSV parser  

**Game-AI (ReasonML) (School-Related)** <i class="fas fa-gamepad" style="color: #e74c3c;"></i>  
&nbsp;&nbsp;&nbsp;- Implemented a Connect-4 game calculator and module for MxN-board dimensions using matrix representations  
&nbsp;&nbsp;&nbsp;- Assigned numerical values to a Mini-Max Algorithm allowing the AI to outperform 100% of human moves  

**Graph-Optimizer Algorithm (Python) (School-Related)** <i class="fab fa-python" style="color: #3776AB;"></i>  
&nbsp;&nbsp;&nbsp;- Created a graph algorithm that optimizes edge-paths based on cost, distance, time-efficiency, and customizable parameters  
&nbsp;&nbsp;&nbsp;- Employed graph structure algorithms like Dijkstra, BFS, and DFS. Tested with graphs with 500+ vertices and edges  

**ReasonML-Racket Interpreter (ReasonML, Racket)(School-Related)** <i class="fas fa-code" style="color: #2ecc71;"></i>  
&nbsp;&nbsp;&nbsp;- Developed an interpreter in ReasonML capable of interpreting and processing all inputs from Racket  
&nbsp;&nbsp;&nbsp;- Implemented advanced pattern matching techniques to efficiently analyze and interpret Racket code entered into the ReasonML environment  
&nbsp;&nbsp;&nbsp;- It replicates the behavior of DrRacket, providing precise Racket code output while executing within the ReasonML environment  
&nbsp;&nbsp;&nbsp;- Processed complex DrRacket programs, including those exceeding 500+ lines of code, demonstrating the scalability of the interpreter  

**Mutex-Safe Database (C) (School-Related)** <i class="fas fa-database" style="color: #3498db;"></i>  
&nbsp;&nbsp;&nbsp;- Implemented a multithreaded server database that listens for client connections, tested to work with 100+ server clients  
&nbsp;&nbsp;&nbsp;- The server utilizes dynamic thread management, and a flexible mutex mechanism to allow concurrency between clients  

**Unix Shell (C) (School-Related)** <i class="fas fa-terminal" style="color: #1abc9c;"></i>  
&nbsp;&nbsp;&nbsp;- Implemented a custom Unix shell using C, working with system calls and process management  
&nbsp;&nbsp;&nbsp;- Developed features such as command parsing, executing external commands, handling signals, and file redirections  
