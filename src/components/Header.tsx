import React, { useState, useCallback, memo } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import type { HeaderProps } from '../types'
import './HeaderComponent.scss'

function Header(props: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const handleToggleMenu = useCallback((): void => {
    setIsMenuOpen(prev => !prev)
  }, [])

  return (
    <header className="header" role="banner">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" aria-label="みどり皮膚科ホームページ">
            <h1>みどり皮膚科</h1>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} id="navigation-menu" role="navigation" aria-label="メインナビゲーション">
            <ul className="nav-list" role="menubar">
              <li role="none"><Link to="/" className="nav-link" role="menuitem">ホーム</Link></li>
              <li role="none"><Link to="/about" className="nav-link" role="menuitem">当院について</Link></li>
              <li role="none"><Link to="/services" className="nav-link" role="menuitem">診療内容</Link></li>
              <li role="none"><Link to="/contact" className="nav-link" role="menuitem">アクセス</Link></li>
            </ul>
          </nav>
          
          <div className="header-actions">
            <Link to="/contact" className="btn-web-reservation">
              Web予約
            </Link>
            <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={handleToggleMenu}
              aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
              aria-expanded={isMenuOpen}
              aria-controls="navigation-menu"
              type="button"
            >
              {isMenuOpen ? <FaTimes size={20} aria-hidden="true" /> : <FaBars size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
