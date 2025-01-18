import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
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

      <main id="home" className="home-section">
        <h1>Accueil</h1>
        <p className="terminal-text">
          {text}
          <span className="cursor" style={{ visibility: showCursor ? 'visible' : 'hidden' }}>|</span>
        </p>
      </main>

      <footer>© 2025 - Mon Portfolio. Tous droits réservés.</footer>
    </div>
  );
}

export default Home;
