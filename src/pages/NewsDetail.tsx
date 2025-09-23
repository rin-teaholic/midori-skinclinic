import React, { memo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import type { NewsItem } from '../types'
import './NewsDetailPage.scss'

// ダミーデータ
const newsData: Record<string, Omit<NewsItem, 'id' | 'category'>> = {
	'1': {
		date: '2024.12.15',
		title: '年末年始の診療時間について',
		content: '12月29日（日）から1月3日（金）まで休診いたします。\n\nご不便をおかけいたしますが、よろしくお願いいたします。\n\n緊急の場合は、近隣の医療機関をご利用ください。'
	},
	'2': {
		date: '2024.12.01',
		title: '新しい治療機器の導入について',
		content: 'より精度の高い診断のため、最新のダーモスコピー機器を導入いたしました。\n\nこれにより、より正確な診断が可能になります。\n\n患者様により良い医療サービスを提供できるよう、今後も最新の医療技術の導入に努めてまいります。'
	},
	'3': {
		date: '2024.11.20',
		title: 'オンライン予約システム開始',
		content: 'より便利な予約のため、オンライン予約システムを開始いたします。\n\n24時間いつでもご予約いただけます。\n\nご利用方法については、受付スタッフまでお気軽にお尋ねください。'
	},
	'4': {
		date: '2024.11.10',
		title: '駐車場の拡張について',
		content: '患者様のご利便性向上のため、駐車場を拡張いたしました。\n\nより多くの患者様にご利用いただけます。\n\n駐車場のご利用についてご不明な点がございましたら、お気軽にお声がけください。'
	},
	'5': {
		date: '2024.10.25',
		title: '美容皮膚科の診療開始',
		content: 'シミ、シワ、たるみなどの美容的治療を開始いたします。\n\nお気軽にご相談ください。\n\n美容皮膚科では、患者様一人ひとりに最適な治療プランをご提案いたします。'
	},
	'6': {
		date: '2024.10.15',
		title: '医院開院のお知らせ',
		content: '2024年10月15日、みどり皮膚科を開院いたしました。\n\n地域の皆様の健康な肌づくりをサポートしてまいります。\n\n皆様のご来院を心よりお待ちしております。'
	}
}

function NewsDetail() {
	const { id } = useParams<{ id: string }>()
	
	const news = newsData[id || '1'] || newsData['1']
	
	return (
		<div className="news-detail">
			<div className="container">
				
				
				<article className="news-detail__article">
					<header className="news-detail__header">
						<h1 className="news-detail__title">{news.title}</h1>
						<time className="news-detail__date" dateTime={news.date}>
							{news.date}
						</time>
					</header>
					
					<div className="news-detail__content">
						{news.content.split('\n').map((paragraph, index) => (
							paragraph.trim() ? (
								<p key={index} className="news-detail__paragraph">
									{paragraph}
								</p>
							) : (
								<br key={index} />
							)
						))}
					</div>
				</article>
				
				<footer className="news-detail__footer">
					<Link to="/news" className="news-detail__button">
						<FaArrowLeft className="btn-icon" />
						お知らせ一覧に戻る
					</Link>
				</footer>
			</div>
		</div>
	)
}

export default memo(NewsDetail)
