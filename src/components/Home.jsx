import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const [showCarte, setShowCarte] = useState(false);
  const [isTerminalVisible, setIsTerminalVisible] = useState(true);
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isLoginComplete, setIsLoginComplete] = useState(false);
  const [loadingLines, setLoadingLines] = useState([]);
  const [isSiteVisible, setIsSiteVisible] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const fullText = 'Bienvenue sur la page d\'accueil de mon portfolio. Ici, vous découvrirez mes projets, mon parcours et comment me contacter.';
  const loginTarget = "admin";
  const passwordTarget = "********";

  useEffect(() => {
    if (!isTerminalVisible) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < fullText.length) {
          setText((prev) => prev + fullText[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isTerminalVisible]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (!isTerminalVisible) {
      const cardTimeout = setTimeout(() => {
        setShowCards(true);
      }, 3000);

      return () => clearTimeout(cardTimeout);
    }
  }, [isTerminalVisible]);

  useEffect(() => {
    if (!isTerminalVisible) {
      const carteTimeout = setTimeout(() => {
        setShowCarte(true);
      }, 3000);

      return () => clearTimeout(carteTimeout);
    }
  }, [isTerminalVisible]);

  useEffect(() => {
    if (isLoginComplete) {
      startLoadingSimulation();
    }
  }, [isLoginComplete]);

  const simulateLogin = () => {
    let loginIndex = 0;
    let passwordIndex = 0;

    const loginInterval = setInterval(() => {
      if (loginIndex < loginTarget.length) {
        setLoginInput((prev) => prev + loginTarget[loginIndex]);
        loginIndex++;
      } else {
        clearInterval(loginInterval);
        const passwordInterval = setInterval(() => {
          if (passwordIndex < passwordTarget.length) {
            setPasswordInput((prev) => prev + passwordTarget[passwordIndex]);
            passwordIndex++;
          } else {
            clearInterval(passwordInterval);
            setIsLoginComplete(true);
          }
        }, 200);
      }
    }, 200);
  };

  const startLoadingSimulation = () => {
    const lines = [
      "initialisation_portfolio.exe772 23.4M/bits 100%",
      "chargement_modules.css 1.1M/bits 100%",
      "installation_fichiers_requis.js 3.2M/bits 100%",
      "connexion_serveur_deployé 512K/bits 100%",
      "synchronisation_données 8.3M/bits 100%",
      "optimisation_ressources_systeme 5.4M/bits 100%",
      "vérification_intégrité_systèmes 7.7M/bits 100%",
      "chargement_interface_utilisateur 12.1M/bits 100%",
      "déploiement_finalisation_portfolio.exe 15.6M/bits 100%",
      "préparation_démarrage_serveur 10.3M/bits 100%",
      "scan_memoires.viruscheck_safe 0.0%",
      "cryptage_données_utilisateur 1.4M/bits 100%",
      "mise_en_ligne_profil_technique 9.2M/bits 100%",
      "exécution_script_final.js 20.3M/bits 100%",
      "activation_interfaces_réseau 3.5M/bits 100%",
      "connexion_au_serveur_principal 18.9M/bits 100%",
      "chargement_terminal_hack_simulation 6.4M/bits 100%",
      "execution_honeycomb_ui_loader 7.3M/bits 100%",
      "startup_initial_sequence_check OK",
      "portefeuille_déployé_succès.exe 100%",
      " ",
      " ",
      ">>> démarrage_achevé_bienvenue_admin <<<",
    ];

    let index = 0;
    const maxLines = 15; // Increased to show more lines
    const interval = setInterval(() => {
      if (index < lines.length) {
        setLoadingLines((prev) => {
          const updatedLines = [...prev, lines[index]];
          return updatedLines.length > maxLines ? updatedLines.slice(1) : updatedLines;
        });
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsTerminalVisible(false);
          setTimeout(() => setIsSiteVisible(true), 500); // Delay before showing site with fade-in
        }, 1000);
      }
    }, 100);
  };

  useEffect(() => {
    simulateLogin();
  }, []);

  const toggleNav = () => {
    setIsNavVisible((prev) => !prev);
  };

  return (
    <div className={`App ${isSiteVisible ? 'fade-in cathodic-effect' : ''}`}>
      {isTerminalVisible ? (
        <div id="terminal" className="terminal-fullscreen">
          <div className="line">Login: <span id="login">{loginInput}</span></div>
          <div className="line">Password: <span id="password">{passwordInput}</span></div>
          {loadingLines.map((line, index) => (
            <div key={index} className="line">{line}</div>
          ))}
        </div>
      ) : (
        <>
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
            <button className="burger-menu" onClick={toggleNav}>
              ☰
            </button>
            <nav className={isNavVisible ? 'visible' : ''}>
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
        </>
      )}
    </div>
  );
}

export default Home;
