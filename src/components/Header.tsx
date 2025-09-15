import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>みどり皮ふ科</h1>
            <p>皮膚科専門クリニック</p>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><Link to="/" className="nav-link">ホーム</Link></li>
              <li><Link to="/about" className="nav-link">医院について</Link></li>
              <li><Link to="/services" className="nav-link">診療内容</Link></li>
              <li><Link to="/news" className="nav-link">お知らせ</Link></li>
              <li><Link to="/contact" className="nav-link">アクセス</Link></li>
            </ul>
          </nav>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="メニューを開く"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
