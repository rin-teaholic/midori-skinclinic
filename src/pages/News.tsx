import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'
import type { NewsProps, NewsItem } from '../types'
import './NewsPage.scss'

// ダミーデータ
const newsData: NewsItem[] = [
	{
		id: '1',
		date: '2024.12.15',
		category: '重要',
		title: '年末年始の診療時間について',
		content: '12月29日（日）から1月3日（金）まで休診いたします。ご不便をおかけいたしますが、よろしくお願いいたします。'
	},
	{
		id: '2',
		date: '2024.12.01',
		category: 'お知らせ',
		title: '新しい治療機器の導入について',
		content: 'より精度の高い診断のため、最新のダーモスコピー機器を導入いたしました。これにより、より正確な診断が可能になります。'
	},
	{
		id: '3',
		date: '2024.11.20',
		category: 'お知らせ',
		title: 'オンライン予約システム開始',
		content: 'より便利な予約のため、オンライン予約システムを開始いたします。24時間いつでもご予約いただけます。'
	},
	{
		id: '4',
		date: '2024.11.10',
		category: 'お知らせ',
		title: '駐車場の拡張について',
		content: '患者様のご利便性向上のため、駐車場を拡張いたしました。より多くの患者様にご利用いただけます。'
	},
	{
		id: '5',
		date: '2024.10.25',
		category: 'お知らせ',
		title: '美容皮膚科の診療開始',
		content: 'シミ、シワ、たるみなどの美容的治療を開始いたします。お気軽にご相談ください。'
	},
	{
		id: '6',
		date: '2024.10.15',
		category: 'お知らせ',
		title: '医院開院のお知らせ',
		content: '2024年10月15日、みどり皮膚科を開院いたしました。地域の皆様の健康な肌づくりをサポートしてまいります。'
	}
]

function News(props: NewsProps) {
	// ページ遷移時にトップにスクロール
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	
	return (
		<div className="news">
			<section className="page-hero">
				<div className="container">
					<h1 className="page-title">Info</h1>
					<p className="page-description">医院からの最新情報をお届けします</p>
				</div>
			</section>

			<section className="news-section">
				<div className="container">
					<div className="news-list">
						{newsData.map((item) => (
							<Link key={item.id} to={`/news/${item.id}`} className="news-item">
								<div className="news-item__date">{item.date}</div>
								<div className="news-item__content">
									<div className="news-item__title">{item.title}</div>
									<div className="news-item__description">{item.content}</div>
								</div>
								<div className="news-item__arrow">
									<FaChevronRight />
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}

export default News
