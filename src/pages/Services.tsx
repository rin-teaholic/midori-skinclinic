import React, { useEffect } from 'react'
import { FaVirus, FaSun, FaSearch, FaHeartbeat, FaEye, FaMicroscope, FaStethoscope } from 'react-icons/fa'
import './ServicesPage.scss'

function Services() {
  // ページ遷移時にトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="services">
      <section className="services__hero">
        <div className="container">
          <h1 className="services__hero-title">Services</h1>
          <p className="services__hero-description">皮膚のトラブルを専門的に診療いたします</p>
        </div>
      </section>

      <section className="services__content">
        <div className="container">
          <div className="services__grid">
            <div className="services__card">
              <div className="services__card-icon">
                <FaVirus size={48} />
              </div>
              <h3 className="services__card-title">アレルギー性皮膚炎</h3>
              <ul className="services__card-list">
                <li className="services__card-list-item">アトピー性皮膚炎</li>
                <li className="services__card-list-item">接触性皮膚炎</li>
                <li className="services__card-list-item">蕁麻疹</li>
                <li className="services__card-list-item">薬疹</li>
              </ul>
              <p className="services__card-description">アレルギー検査と適切な治療を行います。</p>
            </div>
            
            <div className="services__card">
              <div className="services__card-icon">
                <FaSun size={48} />
              </div>
              <h3 className="services__card-title">日光皮膚炎・光線過敏症</h3>
              <ul className="services__card-list">
                <li className="services__card-list-item">日焼け</li>
                <li className="services__card-list-item">光線過敏症</li>
                <li className="services__card-list-item">日光角化症</li>
                <li className="services__card-list-item">光老化</li>
              </ul>
              <p className="services__card-description">紫外線による皮膚トラブルの診断と治療を行います。</p>
            </div>
            
            <div className="services__card">
              <div className="services__card-icon">
                <FaSearch size={48} />
              </div>
              <h3 className="services__card-title">皮膚がん検診</h3>
              <ul className="services__card-list">
                <li className="services__card-list-item">ダーモスコピー検査</li>
                <li className="services__card-list-item">皮膚生検</li>
                <li className="services__card-list-item">メラノーマ検診</li>
                <li className="services__card-list-item">基底細胞がん検診</li>
              </ul>
              <p className="services__card-description">早期発見のための精密検査を行います。</p>
            </div>
            
            <div className="services__card">
              <div className="services__card-icon">
                <FaHeartbeat size={48} />
              </div>
              <h3 className="services__card-title">美容皮膚科</h3>
              <ul className="services__card-list">
                <li className="services__card-list-item">シミ治療</li>
                <li className="services__card-list-item">シワ治療</li>
                <li className="services__card-list-item">たるみ治療</li>
                <li className="services__card-list-item">ニキビ治療</li>
              </ul>
              <p className="services__card-description">美しい肌を保つための治療を行います。</p>
            </div>
            
            <div className="services__card">
              <div className="services__card-icon">
                <FaMicroscope size={48} />
              </div>
              <h3 className="services__card-title">感染性皮膚疾患</h3>
              <ul className="services__card-list">
                <li className="services__card-list-item">細菌感染症</li>
                <li className="services__card-list-item">真菌感染症</li>
                <li className="services__card-list-item">ウイルス感染症</li>
                <li className="services__card-list-item">寄生虫感染症</li>
              </ul>
              <p className="services__card-description">感染症の診断と適切な治療を行います。</p>
            </div>
            
            <div className="services__card">
              <div className="services__card-icon">
                <FaEye size={48} />
              </div>
              <h3 className="services__card-title">その他の皮膚疾患</h3>
              <ul className="services__card-list">
                <li className="services__card-list-item">乾癬</li>
                <li className="services__card-list-item">白斑</li>
                <li className="services__card-list-item">円形脱毛症</li>
                <li className="services__card-list-item">皮膚腫瘍</li>
              </ul>
              <p className="services__card-description">様々な皮膚疾患の診断と治療を行います。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services__equipment">
        <div className="container">
          <h2 className="services__equipment-title">
            <FaStethoscope className="services__equipment-title-icon" />
            検査・治療機器
          </h2>
          <div className="services__equipment-grid">
            <div className="services__equipment-item">
              <div className="services__equipment-image">
                <img 
                  src={require('../assets/images/dermoscopy.jpg')} 
                  alt="ダーモスコピー検査機器" 
                  className="services__equipment-photo"
                />
              </div>
              <h3 className="services__equipment-item-title">ダーモスコピー</h3>
              <p className="services__equipment-item-description">皮膚の表面を拡大して観察し、皮膚がんの早期発見に役立ちます。</p>
            </div>
            
            <div className="services__equipment-item">
              <div className="services__equipment-image">
                <img 
                  src={require('../assets/images/wood-lamp-examination.jpg')} 
                  alt="Wood灯検査機器" 
                  className="services__equipment-photo"
                />
              </div>
              <h3 className="services__equipment-item-title">Wood灯検査</h3>
              <p className="services__equipment-item-description">特殊な光線で皮膚の状態を詳しく観察し、診断の精度を高めます。</p>
            </div>
            
            <div className="services__equipment-item">
              <div className="services__equipment-image">
                <img 
                  src={require('../assets/images/patch-test.jpg')} 
                  alt="パッチテスト検査" 
                  className="services__equipment-photo"
                />
              </div>
              <h3 className="services__equipment-item-title">パッチテスト</h3>
              <p className="services__equipment-item-description">アレルギーの原因物質を特定し、適切な治療方針を決定します。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services
