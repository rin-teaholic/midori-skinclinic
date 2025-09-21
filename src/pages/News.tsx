import React from 'react'
import type { NewsProps } from '../types'
import './NewsPage.scss'

function News(props: NewsProps) {
  return (
    <div className="news">
      <section className="page-hero">
        <div className="container">
          <h1>お知らせ</h1>
          <p>医院からの最新情報をお届けします</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="news-list">
            <div className="news-item">
              <div className="news-date">2024.12.15</div>
              <div className="news-category">重要</div>
              <div className="news-content">
                <h3>年末年始の診療時間について</h3>
                <p>12月29日（日）から1月3日（金）まで休診いたします。ご不便をおかけいたしますが、よろしくお願いいたします。</p>
              </div>
            </div>
            
            <div className="news-item">
              <div className="news-date">2024.12.01</div>
              <div className="news-category">お知らせ</div>
              <div className="news-content">
                <h3>新しい治療機器の導入について</h3>
                <p>より精度の高い診断のため、最新のダーモスコピー機器を導入いたしました。これにより、より正確な診断が可能になります。</p>
              </div>
            </div>
            
            <div className="news-item">
              <div className="news-date">2024.11.20</div>
              <div className="news-category">お知らせ</div>
              <div className="news-content">
                <h3>オンライン予約システム開始</h3>
                <p>より便利な予約のため、オンライン予約システムを開始いたします。24時間いつでもご予約いただけます。</p>
              </div>
            </div>
            
            <div className="news-item">
              <div className="news-date">2024.11.10</div>
              <div className="news-category">お知らせ</div>
              <div className="news-content">
                <h3>駐車場の拡張について</h3>
                <p>患者様のご利便性向上のため、駐車場を拡張いたしました。より多くの患者様にご利用いただけます。</p>
              </div>
            </div>
            
            <div className="news-item">
              <div className="news-date">2024.10.25</div>
              <div className="news-category">お知らせ</div>
              <div className="news-content">
                <h3>美容皮膚科の診療開始</h3>
                <p>シミ、シワ、たるみなどの美容的治療を開始いたします。お気軽にご相談ください。</p>
              </div>
            </div>
            
            <div className="news-item">
              <div className="news-date">2024.10.15</div>
              <div className="news-category">お知らせ</div>
              <div className="news-content">
                <h3>医院開院のお知らせ</h3>
                <p>2024年10月15日、みどり皮ふ科を開院いたしました。地域の皆様の健康な肌づくりをサポートしてまいります。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News
