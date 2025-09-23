import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock, 
  FaEnvelope
} from 'react-icons/fa'
import './FooterComponent.scss'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* メインコンテンツエリア */}
        <div className="footer-content">
          {/* 医院情報セクション */}
          <div className="footer-section footer-section--clinic">
            <h3 className="footer-title">みどり皮膚科</h3>
            <div className="clinic-info">
              <div className="clinic-address">
                <FaMapMarkerAlt className="footer-icon" />
                <span>〒123-4567<br />東京都渋谷区みどり町1-2-3</span>
              </div>
              <div className="clinic-phone">
                <FaPhone className="footer-icon" />
                <a href="tel:03-1234-5678">03-1234-5678</a>
              </div>
              <div className="clinic-email">
                <FaEnvelope className="footer-icon" />
                <a href="mailto:info@midori-hifuka.com">info@midori-hifuka.com</a>
              </div>
            </div>
          </div>

          {/* 営業時間セクション */}
          <div className="footer-section footer-section--hours">
            <h3 className="footer-title">診療時間</h3>
            <div className="hours-info">
              <div className="hours-item">
                <FaClock className="footer-icon" />
                <div className="hours-details">
                  <div className="hours-period">午前</div>
                  <div className="hours-time">9:00 - 12:00</div>
                </div>
              </div>
              <div className="hours-item">
                <FaClock className="footer-icon" />
                <div className="hours-details">
                  <div className="hours-period">午後</div>
                  <div className="hours-time">14:00 - 18:00</div>
                </div>
              </div>
              <div className="hours-note">
                水曜日・日曜日・祝日は休診<br />
                土曜日は午後のみ診療
              </div>
            </div>
          </div>

          {/* ナビゲーションセクション */}
          <div className="footer-section footer-section--nav">
            <h3 className="footer-title">サイトマップ</h3>
            <nav className="footer-nav">
              <Link to="/" className="footer-link">ホーム</Link>
              <Link to="/about" className="footer-link">当院について</Link>
              <Link to="/services" className="footer-link">診療内容</Link>
              <Link to="/news" className="footer-link">お知らせ</Link>
              <Link to="/contact" className="footer-link">アクセス・お問い合わせ</Link>
            </nav>
          </div>

        </div>

        {/* フッター下部 */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2024 みどり皮膚科. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <Link to="/privacy" className="footer-legal-link">プライバシーポリシー</Link>
            <Link to="/terms" className="footer-legal-link">利用規約</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
