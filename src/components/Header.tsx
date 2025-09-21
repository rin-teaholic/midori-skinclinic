import React, { useState, useCallback, memo } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Header.scss'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>みどり皮膚科</h1>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} id="navigation-menu">
            <ul className="nav-list">
              <li><Link to="/" className="nav-link">ホーム</Link></li>
              <li><Link to="/about" className="nav-link">当院について</Link></li>
              <li><Link to="/services" className="nav-link">診療内容</Link></li>
              <li><Link to="/contact" className="nav-link">アクセス</Link></li>
            </ul>
          </nav>
          
          <div className="header-actions">
            <Link to="/contact" className="btn-web-reservation">
              Web予約
            </Link>
            <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={handleToggleMenu}
              aria-label="メニューを開く"
              aria-expanded={isMenuOpen}
              aria-controls="navigation-menu"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
