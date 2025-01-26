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
  const [cpuUsage, setCpuUsage] = useState(0);
  const [memoryUsage, setMemoryUsage] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [pressedKey, setPressedKey] = useState(null);

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
    if (isLoginComplete) {
      startLoadingSimulation();
    }
  }, [isLoginComplete]);

  useEffect(() => {
    simulateLogin();
  }, []);

  useEffect(() => {
    const cpuInterval = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * 100));
      setMemoryUsage(Math.floor(Math.random() * 100));
    }, 2000);

    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(cpuInterval);
      clearInterval(timeInterval);
    };
  }, []);

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
      ">>> démarrage_achevé_bienvenue_admin <<<",
    ];

    let index = 0;
    const maxLines = 15;
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
          setTimeout(() => setIsSiteVisible(true), 500);
        }, 1000);
      }
    }, 100);
  };

  const toggleNav = () => {
    setIsNavVisible((prev) => !prev);
  };

  // Gestion des événements clavier physiques
  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key.toUpperCase(); // Récupère la touche pressée et la met en majuscule
      setPressedKey(key); // Enregistre la touche pressée
      setTimeout(() => setPressedKey(null), 200); // Réinitialise après un court délai
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // Liste des touches en AZERTY, organisées en lignes
  const keys = [
    ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'],
    ['W', 'X', 'C', 'V', 'B', 'N'],
    ['Shift', 'Ctrl', 'Alt', 'Space', 'Entrée']
  ];

  // Fonction de gestion des clics sur les touches du clavier virtuel
  const handleVirtualKeyPress = (key) => {
    setPressedKey(key);
    setTimeout(() => setPressedKey(null), 200); // Réinitialise après un court délai
  };

  return (
    <div className={`App ${isSiteVisible ? 'fade-in cathodic-effect' : ''}`}>
      {isTerminalVisible ? (
        <div id="terminal" className="terminal-fullscreen">
          <div className="line">
            Login: <span id="login">{loginInput}</span>
          </div>
          <div className="line">
            Password: <span id="password">{passwordInput}</span>
          </div>
          {loadingLines.map((line, index) => (
            <div key={index} className="line">
              {line}
            </div>
          ))}
          <div className="system-stats">
            <div>CPU: {cpuUsage}%</div>
            <div>MEM: {memoryUsage}%</div>
            <div>Time: {currentTime.toLocaleTimeString()}</div>
          </div>
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
            <p className="hours">{currentTime.toLocaleTimeString()}</p>
            <div className="information-system">
              <pre id="terminal-output">
                <p>User: Evan_Verplaetse</p> <br />
                <p>OS: Ubuntu 24.04 LTS</p> <br />
                <p>CPU: Intel i7-10700K</p> <br />
                <p>GPU: NVIDIA GeForce RTX 3060</p> <br />
                <p>Version du projet: 1.0.0</p> <br />
                <p>Dernière mise à jour: Jan 2025</p> <br />
                <p>Disk Usage: 75% full</p> <br />
                <p>Memory: 8GB RAM</p> <br />
                <p>Connection: Online</p> <br />
                <p className="cpu">CPU: {cpuUsage}%</p>
                <p>Mémoire: {memoryUsage}%</p>
              </pre>
              <h2 className="info-system">Informations Système</h2>
            </div>
            <div className="system-info">
              <div className="info-panel"></div>
              <h2 className="file-manager-title">Gestionnaire de fichiers</h2>
              <div className="file-manager">
                <div className="file">amaze.wow</div>
                <div className="file">archiv.txt</div>
                <div className="file">src/</div>
                <div className="file">easter.egg</div>
                <div className="file">folio.jsx</div>
                <div className="file">my_hunter.c</div>
                <div className="file">readme.md</div>
                <div className="file">.gitignore</div>
                <div className="file">forkbomb.c</div>
                <div className="file">file.json</div>
                <div className="file">core.c</div>
                <div className="file">neutrinos.py</div>
              </div>
            </div>
            <div className="keyboard-container">
              <div className="keyboard">
                {keys.map((row, rowIndex) => (
                  <div className="keyboard-row" key={rowIndex}>
                    {row.map((key) => (
                      <button
                        key={key}
                        className={`key ${pressedKey === key ? 'pressed' : ''}`}
                        onClick={() => handleVirtualKeyPress(key)}
                      >
                        {key}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default Home;
