<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Repertoire | Classical Guitar</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    
    <style>
        :root {
            --primary-bg: #f9f7f6;
            --primary-text: #2c3e50;
            --secondary-text: #6c7a89;
            --accent-color: #9c6c52;
            --border-color: #e0e0e0;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background-color: var(--primary-bg);
            color: var(--primary-text);
            line-height: 1.7;
            margin: 0;
            padding: 0;
            background-image: radial-gradient(at 0% 0%, #fffbf5 0%, #f9f7f6 100%);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
        }

        header {
            text-align: center;
            padding: 60px 0 40px;
            background: linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(249,247,246,1) 100%), url('https://images.unsplash.com/photo-1547466547-062e08a096c4?q=80&w=1974&auto=format&fit=crop');
            background-size: cover;
            background-position: center;
        }

        header h1 {
            font-family: 'Playfair Display', serif;
            font-size: 3.5rem;
            color: var(--primary-text);
            margin-bottom: 5px;
            letter-spacing: 2px;
            font-weight: 600;
        }
        
        header p.subtitle {
            font-style: italic;
            color: var(--secondary-text);
            font-size: 1.1rem;
            margin: 0;
        }

        main {
            display: grid;
            grid-template-columns: 1fr;
            gap: 40px;
        }
        
        @media (min-width: 768px) {
            main {
                grid-template-columns: 1fr 2fr;
                gap: 60px;
            }
        }
        
        .sidebar {
            order: 2;
        }
        
        @media (min-width: 768px) {
            .sidebar {
                order: 1;
            }
        }
        
        .main-content {
            order: 1;
        }

        section {
            padding-bottom: 25px;
            border-bottom: 1px solid var(--border-color);
            margin-bottom: 25px;
        }

        section:last-of-type {
            border-bottom: none;
            margin-bottom: 0;
        }

        h2 {
            font-family: 'Playfair Display', serif;
            font-size: 2rem;
            color: var(--accent-color);
            margin-top: 0;
            margin-bottom: 15px;
            border-bottom: 2px solid var(--accent-color);
            padding-bottom: 5px;
            display: inline-block;
        }
        
        h3 {
            font-family: 'Playfair Display', serif;
            color: var(--primary-text);
            font-size: 1.3rem;
            margin-top: 20px;
            margin-bottom: 10px;
        }

        p, ul {
            font-size: 1rem;
            color: var(--secondary-text);
        }

        ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        li {
            padding: 8px 0;
            border-bottom: 1px dotted var(--border-color);
            transition: transform 0.2s ease, color 0.2s ease;
        }

        li:last-of-type {
            border-bottom: none;
        }
        
        li:hover {
            transform: translateX(10px);
            color: var(--primary-text);
        }

        li i {
            color: var(--accent-color);
            margin-right: 10px;
            width: 20px;
            text-align: center;
        }

        li span.piece {
            font-weight: 500;
            color: var(--primary-text);
        }

        li span.composer {
            font-style: italic;
            color: var(--secondary-text);
        }

        .repertoire-list li {
            font-size: 1.1rem;
        }
        
        .performances-list li {
            padding: 15px 0;
        }
        
        .performances-list li .info {
            display: block;
            font-size: 0.9rem;
            color: var(--secondary-text);
            margin-top: 5px;
        }

        footer {
            text-align: center;
            padding: 40px 20px;
            font-size: 0.9rem;
            color: var(--secondary-text);
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>Music Repertoire</h1>
            <p class="subtitle">A Classical Guitar Portfolio</p>
        </div>
    </header>

    <div class="container">
        <main>
            <div class="main-content">
                <section>
                    <h2>TUTELAGE</h2>
                    <p>I began my career as a guitarist in 2010 under the guidance of the Professor and Composer <strong>Carlos Alfredo Gonzales Olvera</strong>. An excellent professor whom I deeply admire for his dedication and teaching, he was the one from whom I learned the most. In 2022, I joined the Applied Music Program at Brown University, where I studied under Professor <strong>Mychal Gendron</strong>.</p>
                </section>
                
                <section>
                    <h2>REPERTOIRE</h2>
                    <ul class="repertoire-list">
                        <li><i class="fa-solid fa-music"></i><span class="piece">Recuerdos de la Alhambra, Lágrima, Capricho Árabe</span> - <span class="composer">Francisco Tárrega (Spain)</span></li>
                        <li><i class="fa-solid fa-music"></i><span class="piece">Un día de Noviembre, Etude No. 1</span> - <span class="composer">Leo Brouwer (Cuba)</span></li>
                        <li><i class="fa-solid fa-music"></i><span class="piece">Choro No.1, Etude No. 1</span> - <span class="composer">Heitor Villa-lobos (Brazil)</span></li>
                        <li><i class="fa-solid fa-music"></i><span class="piece">Gymnopédie No.1, Gnossiene No.1</span> - <span class="composer">Erik Satié (France)</span></li>
                        <li><i class="fa-solid fa-music"></i><span class="piece">Suite del Plata No.1: I Preludio, II Tango, III Milonga</span> - <span class="composer">Máximo Diego Pujol (Argentina)</span></li>
                        <li><i class="fa-solid fa-music"></i><span class="piece">El Colibrí</span> - <span class="composer">Julio Sagreras (Argentina)</span></li>
                        <li><i class="fa-solid fa-music"></i><span class="piece">Lute Suite No.4: I Prelude</span> - <span class="composer">Johan Sebastian Bach (Germany)</span></li>
                        <li><i class="fa-solid fa-music"></i><span class="piece">El Testament d´Amèlia, Romance Anónimo</span> - <span class="composer">Miguel Llobet (Spain)</span></li>
                        <li><i class="fa-solid fa-music"></i><span class="piece">Suite Castellana: I Fandanguillo, II Arada</span> - <span class="composer">Federico Moreno Torroba (Spain)</span></li>
                        <li><i class="fa-solid fa-music"></i><span class="piece">Suite Aires de Son</span> - <span class="composer">Gerardo Támez (Mexico)</span></li>
                        <li><i class="fa-solid fa-music"></i><span class="piece">Diferencias Sobre Guárdame las Vacas</span> - <span class="composer">Luis de Narvaez (Spain)</span></li>
                        <li><i class="fa-solid fa-music"></i><span class="piece">Etude No. 7, Op. 60</span> - <span class="composer">Mateo Carcassi (Italy)</span></li>
                        <li><i class="fa-solid fa-music"></i><span class="piece">l'ultimo caffe insieme</span> - <span class="composer">Simone Iarannelli (Italy)</span></li>
                        <li><i class="fa-solid fa-music"></i><span class="piece">Suite Montebello: Tisú I</span> - <span class="composer">Julio Cesar Oliva (Mexico)</span></li>
                        <li><i class="fa-solid fa-music"></i><span class="piece">Asturias (Leyenda)</span> - <span class="composer">Isaac Álbeniz (Spain)</span></li>
                        <li><i class="fa-solid fa-music"></i><span class="piece">Una Limosna por el Amor de Dios</span> - <span class="composer">Agustín Pío Barrios (Paraguay)</span></li>
                    </ul>
                </section>

                <section>
                    <h2>PERFORMANCES & MASTERCLASSES</h2>
                    <ul class="performances-list">
                        <li>
                            <i class="fa-solid fa-graduation-cap"></i>
                            <span class="piece">Final Recital (Sophomore year)</span>
                            <span class="info"><strong>Piece:</strong> Asturias (Leyenda) by Isaac Álbeniz</span>
                            <span class="info"><strong>Venue:</strong> Riley Hall, Brown University, December 2023</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-graduation-cap"></i>
                            <span class="piece">Final Recital (Freshman year)</span>
                            <span class="info"><strong>Pieces:</strong> Una Limosna por el Amor de Dios by Agustín Barrios; Suite Castellana: Fandanguillo by Federico Moreno Torroba</span>
                            <span class="info"><strong>Venue:</strong> Grant Recital Hall, Brown University, May 2023</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-certificate"></i>
                            <span class="piece">Recuerdos de la Alhambra</span>
                            <span class="info"><strong>Masterclass with:</strong> Javier Xara (USA) at Guitar Foundation of America XII, Denver, CO</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-certificate"></i>
                            <span class="piece">Diferencias Sobre Guárdame las Vacas</span>
                            <span class="info"><strong>Masterclass with:</strong> Marek Pasiesczny (Poland) at Guitar Foundation of America XII, Fullerton, CA</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-certificate"></i>
                            <span class="piece">Choro No.1</span>
                            <span class="info"><strong>Masterclass with:</strong> Mark Delpriora (USA) at Guitar Foundation of America XII, Denver, CO</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-certificate"></i>
                            <span class="piece">Milonga from Suite del Plata</span>
                            <span class="info"><strong>Masterclass with:</strong> Rodrigo Nefthalí (Mexico) at Décimo Cuarto Festival Internacional Guitarra sin Fronteras</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-certificate"></i>
                            <span class="piece">Choro No. 1</span>
                            <span class="info"><strong>Masterclass with:</strong> Juan Carlos López (México) at Décimo Cuarto Festival Internacional Guitarra sin Fronteras</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-certificate"></i>
                            <span class="piece">Recuerdos de la Alhambra</span>
                            <span class="info"><strong>Masterclass with:</strong> Omán Kaminsky (Mexico) at Décimo Cuarto Festival Internacional Guitarra sin Fronteras</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-certificate"></i>
                            <span class="piece">El Colibrí</span>
                            <span class="info"><strong>Masterclass with:</strong> Hugo Gracián (Mexico) at Décimo Quinto Festival Internacional Guitarra sin Fronteras</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-certificate"></i>
                            <span class="piece">Suite del Plata</span>
                            <span class="info"><strong>Masterclass with:</strong> Cecilia Siqueira (Uruguay) at Guitar Foundation of America XII, Fullerton, CA</span>
                        </li>
                    </ul>
                </section>
            </div>
            
            <div class="sidebar">
                <section>
                    <h2>FESTIVALS</h2>
                    <ul>
                        <li><i class="fa-solid fa-trophy"></i>Guitar Foundation of America XII (Fullerton, CA)</li>
                        <li><i class="fa-solid fa-trophy"></i>Guitar Foundation of America XI (Denver, CO)</li>
                        <li><i class="fa-solid fa-trophy"></i>Honorific Mention for Young Talent at Décimo Quinto Festival Internacional Guitarra sin Fronteras</li>
                        <li><i class="fa-solid fa-trophy"></i>XIV Festival Internacional Guitarra sin Fronteras</li>
                        <li><i class="fa-solid fa-trophy"></i>VIII & IX Festival Encuentro Internacional de Guitarra Salamanca</li>
                        <li><i class="fa-solid fa-trophy"></i>VII & VI Concurso Nacional de Guitarra Salamanca, Youth Category</li>
                        <li><i class="fa-solid fa-trophy"></i>IV State Contest “Cleofás Villegas”</li>
                    </ul>
                </section>
                <section>
                    <h2>ENSEMBLE EXPERIENCE</h2>
                    <p>Youth Orchestra directed by Chuck Hulihan, performing “Around the World” by Patrick Roux (1962) in Fullerton, CA:</p>
                    <ul>
                        <li><i class="fa-solid fa-users"></i>II C Ayre (Homage to the Air and the Sea)</li>
                        <li><i class="fa-solid fa-users"></i>III Ama-zone-E (Homage to the Forests)</li>
                        <li><i class="fa-solid fa-users"></i>IV A Round for the World (Homage to the world)</li>
                    </ul>
                </section>
            </div>
        </main>
    </div>

    <footer>
        <p>This page is dedicated to the study and performance of classical guitar repertoire.</p>
    </footer>
</body>
</html>
