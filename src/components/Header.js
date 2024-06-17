// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import PiaLogo from '../asets/images/KaitPiaLogo.png'


const Header = () => {
    return (
        <header className="header">
            <img className="Logo" src={PiaLogo} alt="Piaのロゴ" align="left"></img>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/sosiki">組織構成</Link></li>
                    <li className="nav-item"><Link to="/katudou">活動報告</Link></li>
                    <li className="nav-item"><Link to="/piakoe">ピアメンバーの声</Link></li>
                    <li className="nav-item"><Link to="/QandA">Q&A</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;