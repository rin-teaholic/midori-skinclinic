import React from 'react';
import './About.scss';

const About: React.FC = () => {
  return (
    <div className="about">
      <section className="page-hero">
        <div className="container">
          <h1>医院について</h1>
          <p>患者様一人ひとりに寄り添う皮膚科専門クリニック</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>院長挨拶</h2>
              <div className="greeting">
                <div className="greeting-image">
                  <div className="placeholder-image">
                    <span>👨‍⚕️</span>
                    <p>院長写真</p>
                  </div>
                </div>
                <div className="greeting-text">
                  <p>
                    みどり皮ふ科の院長を務めております、田中みどりと申します。
                    皮膚科医として20年以上の経験を活かし、患者様一人ひとりに
                    最適な治療を提供することを心がけております。
                  </p>
                  <p>
                    皮膚のトラブルは見た目だけでなく、日常生活にも大きな影響を
                    与えることがあります。そんな患者様の不安や悩みに寄り添い、
                    安心して治療を受けていただけるよう、丁寧な説明と
                    確実な治療を心がけています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">医院の特徴</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">👨‍⚕️</div>
              <h3>経験豊富な医師</h3>
              <p>皮膚科専門医として20年以上の経験を持つ院長が、確かな診断と治療を提供します。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h3>最新の検査設備</h3>
              <p>ダーモスコピー検査など、最新の検査機器を完備し、正確な診断を行います。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>丁寧な説明</h3>
              <p>患者様に分かりやすい説明を行い、治療方針について十分にご相談いただきます。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏥</div>
              <h3>清潔な環境</h3>
              <p>院内は常に清潔に保たれ、患者様が安心してご来院いただける環境を整えています。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">診療方針</h2>
          <div className="policy-content">
            <div className="policy-item">
              <h3>1. 患者様中心の医療</h3>
              <p>患者様の症状やご希望を十分に伺い、最適な治療方針をご提案いたします。</p>
            </div>
            <div className="policy-item">
              <h3>2. 確実な診断</h3>
              <p>最新の検査機器と豊富な経験を活かし、正確な診断を行います。</p>
            </div>
            <div className="policy-item">
              <h3>3. 継続的なケア</h3>
              <p>治療後の経過観察も含め、長期的なスキンケアのサポートを行います。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
