import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import presImg from './image/image.jpg'; // Ensure the correct path to the image
import aboutImg from './image/aboutImg.jpg'; // Ensure the correct path to the image
import cvPdf from './image/Evan_VERPLAETSE_CV.pdf.pdf'; // Ensure the correct path to the PDF
import backgroundMusic from './audio/BG_song.mp3'; // Ensure the correct path to the audio file
import clickSound from './audio/click.mp3'; // Ensure the correct path to the audio file

function Home() {
  const [volume, setVolume] = useState(0.1);
  const audioRef = useRef(null);
  const clickSoundRef = useRef(null);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  const handleClick = () => {
    if (clickSoundRef.current) {
      clickSoundRef.current.play().catch(error => {
        console.error("Failed to play click sound:", error);
      });
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (clickSoundRef.current) {
      clickSoundRef.current.volume = 0.2;
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Failed to play background music:", error);
      });
    }
  }, []);


  return (
    <div className="Home">
      <audio ref={audioRef} src={backgroundMusic} autoPlay loop></audio>
      <audio ref={clickSoundRef} src={clickSound}></audio>
      <div className="volume-control">
        <label htmlFor="volume">Volume: </label>
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
      <div className="lander">
        <div className="nav">
          <div className="nav-text">
            <p onClick={handleClick}>Bienvenue</p>
          </div>
          <p className="cross" onClick={handleClick}>x</p>
        </div>
        <img src={presImg} alt="Image de présentation" className="home-image" />
        <div className="home-text">
          <h1 onClick={handleClick}>Bienvenue sur mon Portfolio</h1>
          <p onClick={handleClick}>
            Je m'appelle Evan Verplaetse. Ici, vous pourrez découvrir comment me contacter, retrouver mes projets et en
            savoir plus sur moi !
          </p>
          <p onClick={handleClick}>
            Ce site Web cache quelque petits secrets. Je vous laisse explorer afin de découvrir toutes ses
            fonctionnalités cachées.
          </p>
          <p onClick={handleClick}>Bonne chance !</p>
        </div>
        <div className="home-footer">
          <div className="about-card" onClick={handleClick}>
            <div className="about-text">
              <span>En savoir plus</span>
              <p>En cliquant sur ce bouton, vous pourrez en savoir un peu plus sur moi !</p>
            </div>
          </div>
          <div className="contact-card" onClick={handleClick}>
            <div className="contact-text">
              <span>Contact</span>
              <p>En cliquant sur ce bouton, vous trouverez les moyens de me contacter !</p>
            </div>
          </div>
        </div>
        <div className="project-section">
          <h1 onClick={handleClick}>Mes projets</h1>
          <div className="link-to-project" onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height="200" width="200">
              <g style={{ order: -1 }}>
                <polygon
                  transform="rotate(45 100 100)"
                  strokeWidth="1"
                  stroke="#d3a410"
                  fill="none"
                  points="70,70 148,50 130,130 50,150"
                  id="bounce"
                ></polygon>
                <polygon
                  transform="rotate(45 100 100)"
                  strokeWidth="1"
                  stroke="#d3a410"
                  fill="none"
                  points="70,70 148,50 130,130 50,150"
                  id="bounce2"
                ></polygon>
                <polygon
                  transform="rotate(45 100 100)"
                  strokeWidth="2"
                  stroke=""
                  fill="#414750"
                  points="70,70 150,50 130,130 50,150"
                ></polygon>
                <polygon
                  strokeWidth="2"
                  stroke=""
                  fill="url(#gradiente)"
                  points="100,70 150,100 100,130 50,100"
                ></polygon>
                <defs>
                  <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente">
                    <stop style={{ stopColor: '#1e2026', stopOpacity: 1 }} offset="20%"></stop>
                    <stop style={{ stopColor: '#414750', stopOpacity: 1 }} offset="60%"></stop>
                  </linearGradient>
                </defs>
                <polygon
                  transform="translate(20, 31)"
                  strokeWidth="2"
                  stroke=""
                  fill="#b7870f"
                  points="80,50 80,75 80,99 40,75"
                ></polygon>
                <polygon
                  transform="translate(20, 31)"
                  strokeWidth="2"
                  stroke=""
                  fill="url(#gradiente2)"
                  points="40,-40 80,-40 80,99 40,75"
                ></polygon>
                <defs>
                  <linearGradient y2="100%" x2="0%" y1="-17%" x1="10%" id="gradiente2">
                    <stop style={{ stopColor: '#d3a51000', stopOpacity: 1 }} offset="20%"></stop>
                    <stop style={{ stopColor: '#d3a51054', stopOpacity: 1 }} offset="100%" id="animatedStop"></stop>
                  </linearGradient>
                </defs>
                <polygon
                  transform="rotate(180 100 100) translate(20, 20)"
                  strokeWidth="2"
                  stroke=""
                  fill="#d3a410"
                  points="80,50 80,75 80,99 40,75"
                ></polygon>
                <polygon
                  transform="rotate(0 100 100) translate(60, 20)"
                  strokeWidth="2"
                  stroke=""
                  fill="url(#gradiente3)"
                  points="40,-40 80,-40 80,85 40,110.2"
                ></polygon>
                <defs>
                  <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente3"></linearGradient>
                    <stop style={{ stopColor: '#d3a51000', stopOpacity: 1 }} offset="20%"></stop>
                    <stop style={{ stopColor: '#d3a51054', stopOpacity: 1 }} offset="100%" id="animatedStop"></stop>
                </defs>
                <polygon
                  transform="rotate(45 100 100) translate(80, 95)"
                  strokeWidth="2"
                  stroke=""
                  fill="#ffe4a1"
                  points="5,0 5,5 0,5 0,0"
                  id="particles"
                ></polygon>
                <polygon
                  transform="rotate(45 100 100) translate(80, 55)"
                  strokeWidth="2"
                  stroke=""
                  fill="#ccb069"
                  points="6,0 6,6 0,6 0,0"
                  id="particles"
                ></polygon>
                <polygon
                  transform="rotate(45 100 100) translate(70, 80)"
                  strokeWidth="2"
                  stroke=""
                  fill="#fff"
                  points="2,0 2,2 0,2 0,0"
                  id="particles"
                ></polygon>
                <polygon strokeWidth="2" stroke="" fill="#292d34" points="29.5,99.8 100,142 100,172 29.5,130"></polygon>
                <polygon
                  transform="translate(50, 92)"
                  strokeWidth="2"
                  stroke=""
                  fill="#1f2127"
                  points="50,50 120.5,8 120.5,35 50,80"
                ></polygon>
              </g>
            </svg>
          </div>
        </div>
        <div className="media-section">
          <a href="https://www.linkedin.com/in/evan-verplaetse/" target="_blank" rel="noopener noreferrer" onClick={handleClick}>
            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/evan_verplaetse/" target="_blank" rel="noopener noreferrer" onClick={handleClick}>
            <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="Instagram" />
          </a>
          <img src="https://img.icons8.com/color/48/000000/discord-logo.png" alt="Discord" onClick={handleClick} />
          <p>._._404_._.</p>
        </div>
        <div className="cv-section">
          <p onClick={handleClick}>Vous pourrez consulter mon CV juste ici !</p>
          <iframe src={cvPdf} title="CV"></iframe>
          <a href={cvPdf} download="Evan_VERPLAETSE_CV.pdf" className="download-button" onClick={handleClick}>Télécharger le CV</a>
        </div>
      </div>
      <div className="footer">
        <p>© 2025 - Evan Verplaetse. Tous droits réservés. Aucune partie de ce site ne peut être reproduite ou utilisée sans l'autorisation explicite d'Evan Verplaetse.</p>
      </div>
      <div className="container"></div>
    </div>
  );
}

export default Home;