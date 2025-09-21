import React from 'react'
import { FaVirus, FaSun, FaSearch, FaHeartbeat, FaEye, FaMicroscope } from 'react-icons/fa'
import type { ServicesProps } from '../types'
import './ServicesPage.scss'

function Services(props: ServicesProps) {
  return (
    <div className="services">
      <section className="page-hero">
        <div className="container">
          <h1>診療内容</h1>
          <p>皮膚のトラブルを専門的に診療いたします</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                {React.createElement(FaVirus, { size: 48 })}
              </div>
              <h3>アレルギー性皮膚炎</h3>
              <ul>
                <li>アトピー性皮膚炎</li>
                <li>接触性皮膚炎</li>
                <li>蕁麻疹</li>
                <li>薬疹</li>
              </ul>
              <p>アレルギー検査と適切な治療を行います。</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                {React.createElement(FaSun, { size: 48 })}
              </div>
              <h3>日光皮膚炎・光線過敏症</h3>
              <ul>
                <li>日焼け</li>
                <li>光線過敏症</li>
                <li>日光角化症</li>
                <li>光老化</li>
              </ul>
              <p>紫外線による皮膚トラブルの診断と治療を行います。</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                {React.createElement(FaSearch, { size: 48 })}
              </div>
              <h3>皮膚がん検診</h3>
              <ul>
                <li>ダーモスコピー検査</li>
                <li>皮膚生検</li>
                <li>メラノーマ検診</li>
                <li>基底細胞がん検診</li>
              </ul>
              <p>早期発見のための精密検査を行います。</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                {React.createElement(FaHeartbeat, { size: 48 })}
              </div>
              <h3>美容皮膚科</h3>
              <ul>
                <li>シミ治療</li>
                <li>シワ治療</li>
                <li>たるみ治療</li>
                <li>ニキビ治療</li>
              </ul>
              <p>美しい肌を保つための治療を行います。</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                {React.createElement(FaMicroscope, { size: 48 })}
              </div>
              <h3>感染性皮膚疾患</h3>
              <ul>
                <li>細菌感染症</li>
                <li>真菌感染症</li>
                <li>ウイルス感染症</li>
                <li>寄生虫感染症</li>
              </ul>
              <p>感染症の診断と適切な治療を行います。</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                {React.createElement(FaEye, { size: 48 })}
              </div>
              <h3>その他の皮膚疾患</h3>
              <ul>
                <li>乾癬</li>
                <li>白斑</li>
                <li>円形脱毛症</li>
                <li>皮膚腫瘍</li>
              </ul>
              <p>様々な皮膚疾患の診断と治療を行います。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">検査・治療機器</h2>
          <div className="equipment-grid">
            <div className="equipment-item">
              <div className="equipment-image">
                <div className="placeholder-image">
                  <span>🔬</span>
                  <p>ダーモスコピー</p>
                </div>
              </div>
              <h3>ダーモスコピー</h3>
              <p>皮膚の表面を拡大して観察し、皮膚がんの早期発見に役立ちます。</p>
            </div>
            
            <div className="equipment-item">
              <div className="equipment-image">
                <div className="placeholder-image">
                  <span>💡</span>
                  <p>Wood灯検査</p>
                </div>
              </div>
              <h3>Wood灯検査</h3>
              <p>特殊な光線で皮膚の状態を詳しく観察し、診断の精度を高めます。</p>
            </div>
            
            <div className="equipment-item">
              <div className="equipment-image">
                <div className="placeholder-image">
                  <span>🧪</span>
                  <p>パッチテスト</p>
                </div>
              </div>
              <h3>パッチテスト</h3>
              <p>アレルギーの原因物質を特定し、適切な治療方針を決定します。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services
