import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>みどり皮ふ科</h3>
            <p>患者様一人ひとりに寄り添う<br />皮膚科専門クリニック</p>
            <div className="contact-info">
              <p>〒123-4567 東京都渋谷区みどり町1-2-3</p>
              <p>TEL: 03-1234-5678</p>
              <p>FAX: 03-1234-5679</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>診療案内</h4>
            <ul>
              <li><Link to="/services">診療内容</Link></li>
              <li><Link to="/about">医院について</Link></li>
              <li><Link to="/contact">アクセス</Link></li>
              <li><Link to="/news">お知らせ</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>診療時間</h4>
            <div className="hours">
              <p><strong>平日</strong> 9:00 - 12:00 / 14:00 - 18:00</p>
              <p><strong>土曜</strong> 9:00 - 12:00 / 14:00 - 16:00</p>
              <p><strong>休診日</strong> 日曜・祝日</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>お問い合わせ</h4>
            <p>ご予約・ご相談は<br />お気軽にお電話ください</p>
            <a href="tel:03-1234-5678" className="phone-link">
              <span className="phone-icon">📞</span>
              03-1234-5678
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 みどり皮ふ科. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/privacy">プライバシーポリシー</Link>
            <Link to="/terms">利用規約</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
