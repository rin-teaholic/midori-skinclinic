import React, { useEffect } from 'react'
import { FaUserMd, FaStethoscope } from 'react-icons/fa'
import type { AboutProps } from '../types'
import './AboutPage.scss'

function About(props: AboutProps) {
  // ページ遷移時にトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="about">
      <section className="about__hero">
        <div className="container">
          <h1 className="about__hero-title">About</h1>
          <p className="about__hero-description">患者様一人ひとりに寄り添う皮膚科専門クリニック</p>
        </div>
      </section>

      <section className="about__greeting">
        <div className="container">
          <div className="about__greeting-content">
            <div className="about__greeting-wrapper">
              <div className="about__greeting-image">
                <img 
                  src={require('../assets/images/profile.jpg')} 
                  alt="院長 田中みどり" 
                  className="about__greeting-photo"
                />
              </div>
              <div className="about__greeting-text">
                <h2 className="about__greeting-title">
                  <FaUserMd className="about__greeting-icon" />
                  院長挨拶
                </h2>
                <div className="about__greeting-intro">
                  <p className="about__greeting-paragraph about__greeting-paragraph--lead">
                    みどり皮膚科の院長を務めております、田中みどりと申します。
                  </p>
                </div>
                
                <div className="about__greeting-main">
                  <p className="about__greeting-paragraph">
                    皮膚科医として20年以上の経験を積み、数多くの患者様の
                    皮膚トラブルと向き合ってまいりました。その中で学んだのは、
                    皮膚の病気は単なる身体的な問題ではなく、患者様の
                    生活の質や精神的な面にも大きく影響するということです。
                  </p>
                  
                  <p className="about__greeting-paragraph">
                    アトピー性皮膚炎、にきび、シミ、しわなど、それぞれの症状には
                    患者様の生活環境や体質、ストレスなどが複雑に絡み合っています。
                    だからこそ、私は患者様一人ひとりの状況を詳しくお聞きし、
                    最適な治療法をご提案することを大切にしています。
                  </p>
                  
                  <p className="about__greeting-paragraph">
                    患者様が安心してご相談いただけるよう、分かりやすい説明を心がけ、
                    疑問や不安があれば遠慮なくお話しください。一緒に最良の解決策を
                    見つけていきましょう。
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="about__policy">
        <div className="container">
          <h2 className="about__policy-title">
            <FaStethoscope className="about__policy-icon" />
            診療方針
          </h2>
          <div className="about__policy-content">
            <div className="about__policy-item">
              <h3 className="about__policy-item-title">1. 患者様中心の医療</h3>
              <p className="about__policy-item-description">患者様の症状やご希望を十分に伺い、最適な治療方針をご提案いたします。</p>
            </div>
            <div className="about__policy-item">
              <h3 className="about__policy-item-title">2. 確実な診断</h3>
              <p className="about__policy-item-description">最新の検査機器と豊富な経験を活かし、正確な診断を行います。</p>
            </div>
            <div className="about__policy-item">
              <h3 className="about__policy-item-title">3. 継続的なケア</h3>
              <p className="about__policy-item-description">治療後の経過観察も含め、長期的なスキンケアのサポートを行います。</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About
