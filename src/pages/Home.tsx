import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* ヒーローセクション */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              健康な肌で<br />
              毎日を輝かせよう
            </h1>
            <p className="hero-subtitle">
              患者様一人ひとりに寄り添う<br />
              皮膚科専門クリニック
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">
                ご予約・お問い合わせ
              </Link>
              <Link to="/services" className="btn btn-secondary">
                診療内容を見る
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="placeholder-image">
              <span>🏥</span>
              <p>クリニック外観画像</p>
            </div>
          </div>
        </div>
      </section>

      {/* 診療内容セクション */}
      <section className="services-preview section">
        <div className="container">
          <h2 className="section-title">診療内容</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🦠</div>
              <h3>アレルギー性皮膚炎</h3>
              <p>アトピー性皮膚炎、接触性皮膚炎などの診断と治療を行います。</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌞</div>
              <h3>日光皮膚炎</h3>
              <p>日焼け、光線過敏症などの紫外線による皮膚トラブルを治療します。</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3>皮膚がん検診</h3>
              <p>ダーモスコピー検査による早期発見と適切な治療を提供します。</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💉</div>
              <h3>美容皮膚科</h3>
              <p>シミ、シワ、たるみなどの美容的治療も行っています。</p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/services" className="btn btn-primary">
              詳しい診療内容を見る
            </Link>
          </div>
        </div>
      </section>

      {/* 医院についてセクション */}
      <section className="about-preview section section-gray">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">医院について</h2>
              <p className="about-description">
                みどり皮ふ科は、患者様一人ひとりに寄り添い、<br />
                最適な治療を提供することを使命としています。<br />
                経験豊富な医師と最新の医療設備で、<br />
                安心してご来院いただけます。
              </p>
              <div className="about-features">
                <div className="feature">
                  <span className="feature-icon">👨‍⚕️</span>
                  <div>
                    <h4>経験豊富な医師</h4>
                    <p>皮膚科専門医による確かな診断と治療</p>
                  </div>
                </div>
                <div className="feature">
                  <span className="feature-icon">🏥</span>
                  <div>
                    <h4>最新設備</h4>
                    <p>ダーモスコピーなど最新の検査機器を完備</p>
                  </div>
                </div>
                <div className="feature">
                  <span className="feature-icon">💬</span>
                  <div>
                    <h4>丁寧な説明</h4>
                    <p>患者様に分かりやすい説明と治療方針のご提案</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary">
                医院について詳しく見る
              </Link>
            </div>
            <div className="about-image">
              <div className="placeholder-image">
                <span>👨‍⚕️</span>
                <p>院長・医師の写真</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お知らせセクション */}
      <section className="news-preview section">
        <div className="container">
          <h2 className="section-title">お知らせ</h2>
          <div className="news-list">
            <div className="news-item">
              <div className="news-date">2024.12.15</div>
              <div className="news-content">
                <h3>年末年始の診療時間について</h3>
                <p>12月29日（日）から1月3日（金）まで休診いたします。</p>
              </div>
            </div>
            <div className="news-item">
              <div className="news-date">2024.12.01</div>
              <div className="news-content">
                <h3>新しい治療機器の導入について</h3>
                <p>より精度の高い診断のため、最新のダーモスコピー機器を導入しました。</p>
              </div>
            </div>
            <div className="news-item">
              <div className="news-date">2024.11.20</div>
              <div className="news-content">
                <h3>オンライン予約システム開始</h3>
                <p>より便利な予約のため、オンライン予約システムを開始いたします。</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link to="/news" className="btn btn-secondary">
              すべてのお知らせを見る
            </Link>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="cta section section-gray">
        <div className="container">
          <div className="cta-content">
            <h2>お困りの症状はありませんか？</h2>
            <p>皮膚のトラブルでお悩みの方は、お気軽にご相談ください。</p>
            <div className="cta-buttons">
              <a href="tel:03-1234-5678" className="btn btn-primary">
                <span className="phone-icon">📞</span>
                03-1234-5678
              </a>
              <Link to="/contact" className="btn btn-secondary">
                アクセス・診療時間
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
