import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const [showCarte, setShowCarte] = useState(false);
  const fullText = 'Bienvenue sur la page d\'accueil de mon portfolio. Ici, vous découvrirez mes projets, mon parcours et comment me contacter.';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust typing speed here (50ms per character)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const cardTimeout = setTimeout(() => {
      setShowCards(true);
    }, 3000); // Show cards after 3 seconds

    return () => clearTimeout(cardTimeout);
  }, []);

  useEffect(() => {
    const carteTimeout = setTimeout(() => {
      setShowCarte(true);
    }, 3000); // Show carte after 3 seconds

    return () => clearTimeout(carteTimeout);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="terminal-title">Bienvenue sur mon Portfolio...</div>
        <div className="honeycomb">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav>
          <a href="#home">Accueil</a>
          <a href="#about">À propos</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <h1>Accueil</h1>
      <main id="home" className="home-section">
        <p className="terminal-text">
          {text}
          <span className="cursor" style={{ visibility: showCursor ? 'visible' : 'hidden' }}>|</span>
        </p>
      </main>
      {showCards && (
        <div className="card-container">
          <div className="card">
            <div className="card-details">
              <p className="text-title">Projets</p>
              <p className="text-body">Ici vous pourrez voir mes projets, mes programmes et des explications</p>
            </div>
            <button className="card-button">En savoir plus</button>
          </div>
          <div className="card">
            <div className="card-details">
              <p className="text-title">Contact</p>
              <p className="text-body">Ici vous pourrez trouver où et comment me contacter</p>
            </div>
            <button className="card-button">En savoir plus</button>
          </div>
          <div className="card">
            <div className="card-details">
              <p className="text-title">À propos</p>
              <p className="text-body">Ici vous pourrez en apprendre plus sur moi, mes compétences et mon parcours</p>
            </div>
            <button className="card-button">En savoir plus</button>
          </div>
        </div>
      )}
      {showCarte && (
        <div className="carte">
          <div className="loader">
            <p>Coding</p>
            <div className="words">
              <span className="word">Python</span>
              <span className="word">C</span>
              <span className="word">HTML</span>
              <span className="word">CSFML</span>
              <span className="word">CSS</span>
            </div>
          </div>
        </div>
      )}
      <footer>© 2025 - Mon Portfolio. Tous droits réservés.</footer>
    </div>
  );
}

export default Home;
