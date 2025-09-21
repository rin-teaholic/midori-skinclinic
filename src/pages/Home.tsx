import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { FaUserPlus, FaRedo, FaQuestionCircle, FaMapMarkerAlt } from 'react-icons/fa'
import heroClinicImage from '../assets/images/hero-clinic.jpg'
import './Home.scss'

interface HomeProps {}

function Home({}: HomeProps) {
  return (
    <div className="home">
      {/* ヒーローセクション */}
      <section className="hero">
        <div className="hero-image-background">
          <img 
            src={heroClinicImage} 
            alt="みどり皮ふ科外観" 
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              健康な肌で、毎日を輝かせよう
            </h1>
            <div className="hero-subtitle">
              <span className="bright-skin">BRIGHT SKIN FOR</span>
              <span className="bright-smile">BRIGHT SMILE</span>
            </div>
          </div>
        </div>
        <div className="floating-icons">
          <div className="icon-bar">
            <div className="icon-item">
              <div className="icon">
                <FaUserPlus size={48} />
              </div>
              <div className="icon-text">初診の方</div>
            </div>
            <div className="icon-item">
              <div className="icon">
                <FaRedo size={48} />
              </div>
              <div className="icon-text">再診の方</div>
            </div>
            <div className="icon-item">
              <div className="icon">
                <FaQuestionCircle size={48} />
              </div>
              <div className="icon-text">（未定）</div>
            </div>
            <div className="icon-item">
              <div className="icon">
                <FaQuestionCircle size={48} />
              </div>
              <div className="icon-text">（未定）</div>
            </div>
            <div className="icon-item">
              <div className="icon">
                <FaMapMarkerAlt size={48} />
              </div>
              <div className="icon-text">アクセス</div>
            </div>
          </div>
        </div>
      </section>

      {/* Infoセクション */}
      <section className="info-section">
        <div className="container">
          <div className="info-header">
            <h2 className="info-title">Info</h2>
            <span className="info-subtitle">おしらせ</span>
          </div>
          <div className="info-list">
            <div className="info-item">
              <div className="info-date">2025.09.15</div>
              <div className="info-category">当院について</div>
              <div className="info-content">お盆休み期間の営業について</div>
            </div>
            <div className="info-item">
              <div className="info-date">2025.09.15</div>
              <div className="info-category">当院について</div>
              <div className="info-content">お盆休み期間の営業について</div>
            </div>
            <div className="info-item">
              <div className="info-date">2025.09.15</div>
              <div className="info-category">当院について</div>
              <div className="info-content">お盆休み期間の営業について</div>
            </div>
          </div>
          <div className="info-button">
            <Link to="/news" className="btn-info">
              お知らせ一覧
            </Link>
          </div>
        </div>
      </section>

      {/* Aboutセクション（医院について） */}
      <section className="about-section">
        <div className="container">
          <div className="about-header">
            <h2 className="about-title">About</h2>
            <span className="about-subtitle">当院について</span>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p className="about-description">
                みどり皮ふ科は、患者様一人ひとりに寄り添い、最適な治療を提供することを使命としています。経験豊富な医師と最新の医療設備で、安心してご来院いただけます。
              </p>
              <Link to="/about" className="btn-about">
                当院について
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

      {/* 営業時間セクション */}
      <section className="operating-hours-section">
        <div className="container">
          <div className="hours-table">
            <div className="hours-header">
              <h3>営業時間</h3>
            </div>
            <div className="hours-content">
              <div className="hours-row">
                <div className="day-label">月</div>
                <div className="day-label">火</div>
                <div className="day-label">水</div>
                <div className="day-label">木</div>
                <div className="day-label">金</div>
                <div className="day-label">土</div>
                <div className="day-label">日・祝</div>
              </div>
              <div className="hours-row">
                <div className="time-label">午前</div>
                <div className="time-label">9:00-12:00</div>
                <div className="availability">O</div>
                <div className="availability">X</div>
                <div className="availability">O</div>
                <div className="availability">X</div>
                <div className="availability">O</div>
                <div className="availability">X</div>
                <div className="availability">O</div>
              </div>
              <div className="hours-row">
                <div className="time-label">午後</div>
                <div className="time-label">14:00-18:00</div>
                <div className="availability">O</div>
                <div className="availability">O</div>
                <div className="availability">O</div>
                <div className="availability">O</div>
                <div className="availability">O</div>
                <div className="availability">O</div>
                <div className="availability">O</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aboutセクション（診療内容） */}
      <section className="services-section">
        <div className="container">
          <div className="services-header">
            <h2 className="services-title">About</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-image">
                <div className="placeholder-image">
                  <span>🦠</span>
                </div>
              </div>
              <div className="service-label">アレルギー性皮膚炎</div>
            </div>
            <div className="service-card">
              <div className="service-image">
                <div className="placeholder-image">
                  <span>🔍</span>
                </div>
              </div>
              <div className="service-label">皮膚がん検診</div>
            </div>
            <div className="service-card">
              <div className="service-image">
                <div className="placeholder-image">
                  <span>💉</span>
                </div>
              </div>
              <div className="service-label">美容皮膚科</div>
            </div>
          </div>
          <div className="services-button">
            <Link to="/services" className="btn-services">
              診療内容の一覧
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(Home)
