import React, { useEffect, useRef } from 'react'
import type { ContactProps } from '../types'
import './AccessPage.scss'

function Access(props: ContactProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  // ページ遷移時にトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Google Maps APIを使用した地図の初期化（オプション）
  useEffect(() => {
    // Google Maps APIを使用する場合は、ここで地図を初期化
    // 注意: Google Maps APIキーが必要です
    /*
    if (window.google && mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 35.6585805, lng: 139.6917067 }, // 渋谷駅の座標
        zoom: 15,
      })
      
      new window.google.maps.Marker({
        position: { lat: 35.6585805, lng: 139.6917067 },
        map: map,
        title: 'みどり皮膚科',
      })
    }
    */
  }, [])
  
  return (
    <div className="access">
      <section className="access__hero">
        <div className="container">
          <h1 className="access__hero-title">Access</h1>
          <p className="access__hero-description">アクセス情報</p>
        </div>
      </section>

      <section className="access__info">
        <div className="container">
          <div className="access__info-content">
            <div className="access__info-details">
              <div className="access__info-item">
                <h3 className="access__info-item-title">医院名</h3>
                <p className="access__info-item-text">みどり皮膚科</p>
              </div>
              <div className="access__info-item">
                <h3 className="access__info-item-title">住所</h3>
                <p className="access__info-item-text">〒123-4567<br />東京都渋谷区みどり町1-2-3</p>
              </div>
            </div>
            
            <div className="access__map">
              {/* iframe方式（推奨） */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7477985333!2d139.6917067!3d35.6585805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b57efbd57c7%3A0x217e9d9fe306f05!2z44CSMTUwLTAwMDIg5p2x5Lqs6YO95riL6LC35Yy65riL6LC377yS5LiB55uu77yR77yR4oiS77yR77yT!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="みどり皮膚科の場所"
              />
              
              {/* Google Maps API方式（コメントアウト） */}
              {/* 
              <div 
                ref={mapRef} 
                style={{ width: '100%', height: '400px' }}
                title="みどり皮膚科の場所"
              />
              */}
            </div>
          </div>
        </div>
      </section>

      <section className="access__transport">
        <div className="container">
          <div className="access__transport-content">
            <div className="access__transport-item">
              <h3 className="access__transport-item-title">電車でお越しの場合</h3>
              <ul className="access__transport-item-list">
                <li className="access__transport-item-list-item">JR山手線「渋谷駅」より徒歩10分</li>
                <li className="access__transport-item-list-item">東急東横線「渋谷駅」より徒歩10分</li>
                <li className="access__transport-item-list-item">京王井の頭線「渋谷駅」より徒歩10分</li>
                <li className="access__transport-item-list-item">東京メトロ各線「渋谷駅」より徒歩10分</li>
              </ul>
            </div>
            
            <div className="access__transport-item">
              <h3 className="access__transport-item-title">お車でお越しの場合</h3>
              <ul className="access__transport-item-list">
                <li className="access__transport-item-list-item">駐車場完備（無料・10台まで）</li>
                <li className="access__transport-item-list-item">国道246号線「渋谷駅前」交差点より3分</li>
                <li className="access__transport-item-list-item">渋谷区役所より徒歩5分</li>
              </ul>
            </div>
            
            <div className="access__transport-item">
              <h3 className="access__transport-item-title">バスでお越しの場合</h3>
              <ul className="access__transport-item-list">
                <li className="access__transport-item-list-item">都営バス「渋谷駅前」停留所より徒歩5分</li>
                <li className="access__transport-item-list-item">東急バス「渋谷駅前」停留所より徒歩5分</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Access
