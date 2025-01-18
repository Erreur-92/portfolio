import React from 'react';
import './Header-Home.css';

const HeaderHome = () => {
    return (
        <header>
            <div className="terminal-loader">
                <div className="terminal-header">
                    <div className="terminal-title">fish</div>
                    <div className="terminal-controls">
                        <div className="control close"></div>
                        <div className="control minimize"></div>
                        <div className="control maximize"></div>
                    </div>
                </div>
                <div className="text">Bienvenue sur mon PorteFolio...</div>
            </div>
            <nav>
                <a href="#about">À propos</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default HeaderHome;