import React, { useEffect } from 'react'
import type { ContactProps } from '../types'
import './ContactPage.scss'

function Contact(props: ContactProps) {
  // ページ遷移時にトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="contact">
      <section className="contact__hero">
        <div className="container">
          <h1 className="contact__hero-title">アクセス・診療時間</h1>
          <p className="contact__hero-description">お気軽にご来院ください</p>
        </div>
      </section>

      <section className="contact__info">
        <div className="container">
          <div className="contact__info-content">
            <div className="contact__info-details">
              <h2 className="contact__info-title">医院情報</h2>
              <div className="contact__info-item">
                <h3 className="contact__info-item-title">医院名</h3>
                <p className="contact__info-item-text">みどり皮ふ科</p>
              </div>
              <div className="contact__info-item">
                <h3 className="contact__info-item-title">住所</h3>
                <p className="contact__info-item-text">〒123-4567<br />東京都渋谷区みどり町1-2-3</p>
              </div>
              <div className="contact__info-item">
                <h3 className="contact__info-item-title">電話番号</h3>
                <p className="contact__info-item-text">
                  <a href="tel:03-1234-5678" className="contact__info-link">03-1234-5678</a>
                </p>
              </div>
              <div className="contact__info-item">
                <h3 className="contact__info-item-title">FAX</h3>
                <p className="contact__info-item-text">03-1234-5679</p>
              </div>
            </div>
            
            <div className="contact__map">
              <div className="contact__map-placeholder">
                <span className="contact__map-icon">🗺️</span>
                <p className="contact__map-title">Google Map</p>
                <small className="contact__map-description">実際の地図をここに埋め込みます</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact__hours">
        <div className="container">
          <h2 className="contact__hours-title">診療時間</h2>
          <div className="contact__hours-content">
            <div className="contact__hours-table">
              <table className="contact__table">
                <thead className="contact__table-header">
                  <tr className="contact__table-row">
                    <th className="contact__table-cell">曜日</th>
                    <th className="contact__table-cell">午前</th>
                    <th className="contact__table-cell">午後</th>
                  </tr>
                </thead>
                <tbody className="contact__table-body">
                  <tr className="contact__table-row">
                    <td className="contact__table-cell">月曜日</td>
                    <td className="contact__table-cell">9:00 - 12:00</td>
                    <td className="contact__table-cell">14:00 - 18:00</td>
                  </tr>
                  <tr className="contact__table-row">
                    <td className="contact__table-cell">火曜日</td>
                    <td className="contact__table-cell">9:00 - 12:00</td>
                    <td className="contact__table-cell">14:00 - 18:00</td>
                  </tr>
                  <tr className="contact__table-row">
                    <td className="contact__table-cell">水曜日</td>
                    <td className="contact__table-cell">9:00 - 12:00</td>
                    <td className="contact__table-cell">14:00 - 18:00</td>
                  </tr>
                  <tr className="contact__table-row">
                    <td className="contact__table-cell">木曜日</td>
                    <td className="contact__table-cell">9:00 - 12:00</td>
                    <td className="contact__table-cell">14:00 - 18:00</td>
                  </tr>
                  <tr className="contact__table-row">
                    <td className="contact__table-cell">金曜日</td>
                    <td className="contact__table-cell">9:00 - 12:00</td>
                    <td className="contact__table-cell">14:00 - 18:00</td>
                  </tr>
                  <tr className="contact__table-row">
                    <td className="contact__table-cell">土曜日</td>
                    <td className="contact__table-cell">9:00 - 12:00</td>
                    <td className="contact__table-cell">14:00 - 16:00</td>
                  </tr>
                  <tr className="contact__table-row">
                    <td className="contact__table-cell">日曜日</td>
                    <td className="contact__table-cell" colSpan={2}>休診</td>
                  </tr>
                  <tr className="contact__table-row">
                    <td className="contact__table-cell">祝日</td>
                    <td className="contact__table-cell" colSpan={2}>休診</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="contact__hours-notes">
              <h3 className="contact__hours-notes-title">ご予約について</h3>
              <ul className="contact__hours-notes-list">
                <li className="contact__hours-notes-item">初診・再診ともに予約制です</li>
                <li className="contact__hours-notes-item">お電話またはオンラインでご予約ください</li>
                <li className="contact__hours-notes-item">急患の場合はお電話でご相談ください</li>
                <li className="contact__hours-notes-item">診療時間の変更がある場合は、お知らせページでご案内いたします</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="contact__access">
        <div className="container">
          <h2 className="contact__access-title">アクセス</h2>
          <div className="contact__access-content">
            <div className="contact__access-item">
              <h3 className="contact__access-item-title">電車でお越しの場合</h3>
              <ul className="contact__access-item-list">
                <li className="contact__access-item-list-item">JR山手線「渋谷駅」より徒歩10分</li>
                <li className="contact__access-item-list-item">東急東横線「渋谷駅」より徒歩10分</li>
                <li className="contact__access-item-list-item">京王井の頭線「渋谷駅」より徒歩10分</li>
                <li className="contact__access-item-list-item">東京メトロ各線「渋谷駅」より徒歩10分</li>
              </ul>
            </div>
            
            <div className="contact__access-item">
              <h3 className="contact__access-item-title">お車でお越しの場合</h3>
              <ul className="contact__access-item-list">
                <li className="contact__access-item-list-item">駐車場完備（無料・10台まで）</li>
                <li className="contact__access-item-list-item">国道246号線「渋谷駅前」交差点より3分</li>
                <li className="contact__access-item-list-item">渋谷区役所より徒歩5分</li>
              </ul>
            </div>
            
            <div className="contact__access-item">
              <h3 className="contact__access-item-title">バスでお越しの場合</h3>
              <ul className="contact__access-item-list">
                <li className="contact__access-item-list-item">都営バス「渋谷駅前」停留所より徒歩5分</li>
                <li className="contact__access-item-list-item">東急バス「渋谷駅前」停留所より徒歩5分</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="contact__cta">
        <div className="container">
          <div className="contact__cta-content">
            <h2 className="contact__cta-title">ご予約・お問い合わせ</h2>
            <p className="contact__cta-description">お困りの症状がございましたら、お気軽にお電話ください。</p>
            <div className="contact__cta-buttons">
              <a href="tel:03-1234-5678" className="contact__cta-button contact__cta-button--primary">
                <span className="contact__cta-button-icon">📞</span>
                03-1234-5678
              </a>
              <a href="mailto:info@midori-hifuka.com" className="contact__cta-button contact__cta-button--secondary">
                <span className="contact__cta-button-icon">✉️</span>
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
