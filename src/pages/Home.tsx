import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { FaUserPlus, FaRedo, FaQuestionCircle, FaMapMarkerAlt } from 'react-icons/fa'
import heroClinicImage from '../assets/images/hero-clinic.jpg'
import type { HomeProps, IconItem } from '../types'
import './HomePage.scss'

function Home(props: HomeProps) {
	// アイコンデータの定義
	const iconItems: IconItem[] = [
		{
			id: 'new-patient',
			icon: FaUserPlus,
			text: '初診の方',
			href: '/contact'
		},
		{
			id: 'return-patient',
			icon: FaRedo,
			text: '再診の方',
			href: '/contact'
		},
		{
			id: 'service-1',
			icon: FaQuestionCircle,
			text: '（未定）',
			href: '/services'
		},
		{
			id: 'service-2',
			icon: FaQuestionCircle,
			text: '（未定）',
			href: '/services'
		},
		{
			id: 'access',
			icon: FaMapMarkerAlt,
			text: 'アクセス',
			href: '/contact'
		}
	]

	return (
    <div className="home">
      {/* ヒーローセクション */}
      <section className="hero" role="banner">
        <div className="hero-image-background">
          <img 
            src={heroClinicImage} 
            alt="みどり皮ふ科外観" 
            className="hero-bg-image"
            loading="eager"
          />
          <div className="hero-overlay" aria-hidden="true"></div>
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
        <nav className="floating-icons" role="navigation" aria-label="クイックアクセス">
          <div className="icon-bar">
            {iconItems.map((item) => {
              const IconComponent = item.icon
              return (
                <a 
                  key={item.id} 
                  href={item.href}
                  className="icon-item"
                  role="button"
                  aria-label={item.text}
                >
                  <div className="icon" aria-hidden="true">
                    <IconComponent size={48} />
                  </div>
                  <div className="icon-text">{item.text}</div>
                </a>
              )
            })}
          </div>
        </nav>
      </section>

      {/* Infoセクション */}
      <section className="info-section" role="region" aria-labelledby="info-title">
        <div className="container">
          <div className="info-header">
            <h2 id="info-title" className="info-title">Info</h2>
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
      <section className="about-section" role="region" aria-labelledby="about-title">
        <div className="container">
          <div className="about-header">
            <h2 id="about-title" className="about-title">About</h2>
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
      <section className="operating-hours-section" role="region" aria-labelledby="hours-title">
        <div className="container">
          <div className="hours-table">
            <div className="hours-header">
              <h3 id="hours-title">営業時間</h3>
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
      <section className="services-section" role="region" aria-labelledby="services-title">
        <div className="container">
          <div className="services-header">
            <h2 id="services-title" className="services-title">About</h2>
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
