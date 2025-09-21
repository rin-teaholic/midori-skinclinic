import React from 'react'
import type { ContactProps } from '../types'
import './ContactPage.scss'

function Contact(props: ContactProps) {
  return (
    <div className="contact">
      <section className="page-hero">
        <div className="container">
          <h1>アクセス・診療時間</h1>
          <p>お気軽にご来院ください</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>医院情報</h2>
              <div className="info-item">
                <h3>医院名</h3>
                <p>みどり皮ふ科</p>
              </div>
              <div className="info-item">
                <h3>住所</h3>
                <p>〒123-4567<br />東京都渋谷区みどり町1-2-3</p>
              </div>
              <div className="info-item">
                <h3>電話番号</h3>
                <p><a href="tel:03-1234-5678">03-1234-5678</a></p>
              </div>
              <div className="info-item">
                <h3>FAX</h3>
                <p>03-1234-5679</p>
              </div>
            </div>
            
            <div className="map-container">
              <div className="placeholder-map">
                <span>🗺️</span>
                <p>Google Map</p>
                <small>実際の地図をここに埋め込みます</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">診療時間</h2>
          <div className="hours-content">
            <div className="hours-table">
              <table>
                <thead>
                  <tr>
                    <th>曜日</th>
                    <th>午前</th>
                    <th>午後</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>月曜日</td>
                    <td>9:00 - 12:00</td>
                    <td>14:00 - 18:00</td>
                  </tr>
                  <tr>
                    <td>火曜日</td>
                    <td>9:00 - 12:00</td>
                    <td>14:00 - 18:00</td>
                  </tr>
                  <tr>
                    <td>水曜日</td>
                    <td>9:00 - 12:00</td>
                    <td>14:00 - 18:00</td>
                  </tr>
                  <tr>
                    <td>木曜日</td>
                    <td>9:00 - 12:00</td>
                    <td>14:00 - 18:00</td>
                  </tr>
                  <tr>
                    <td>金曜日</td>
                    <td>9:00 - 12:00</td>
                    <td>14:00 - 18:00</td>
                  </tr>
                  <tr>
                    <td>土曜日</td>
                    <td>9:00 - 12:00</td>
                    <td>14:00 - 16:00</td>
                  </tr>
                  <tr>
                    <td>日曜日</td>
                    <td colSpan={2}>休診</td>
                  </tr>
                  <tr>
                    <td>祝日</td>
                    <td colSpan={2}>休診</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="hours-notes">
              <h3>ご予約について</h3>
              <ul>
                <li>初診・再診ともに予約制です</li>
                <li>お電話またはオンラインでご予約ください</li>
                <li>急患の場合はお電話でご相談ください</li>
                <li>診療時間の変更がある場合は、お知らせページでご案内いたします</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">アクセス</h2>
          <div className="access-content">
            <div className="access-item">
              <h3>電車でお越しの場合</h3>
              <ul>
                <li>JR山手線「渋谷駅」より徒歩10分</li>
                <li>東急東横線「渋谷駅」より徒歩10分</li>
                <li>京王井の頭線「渋谷駅」より徒歩10分</li>
                <li>東京メトロ各線「渋谷駅」より徒歩10分</li>
              </ul>
            </div>
            
            <div className="access-item">
              <h3>お車でお越しの場合</h3>
              <ul>
                <li>駐車場完備（無料・10台まで）</li>
                <li>国道246号線「渋谷駅前」交差点より3分</li>
                <li>渋谷区役所より徒歩5分</li>
              </ul>
            </div>
            
            <div className="access-item">
              <h3>バスでお越しの場合</h3>
              <ul>
                <li>都営バス「渋谷駅前」停留所より徒歩5分</li>
                <li>東急バス「渋谷駅前」停留所より徒歩5分</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <div className="cta-content">
            <h2>ご予約・お問い合わせ</h2>
            <p>お困りの症状がございましたら、お気軽にお電話ください。</p>
            <div className="cta-buttons">
              <a href="tel:03-1234-5678" className="btn btn-primary">
                <span className="phone-icon">📞</span>
                03-1234-5678
              </a>
              <a href="mailto:info@midori-hifuka.com" className="btn btn-secondary">
                <span className="mail-icon">✉️</span>
                メールでお問い合わせ
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact
