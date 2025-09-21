import React, { memo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import './NewsDetailPage.scss'

function NewsDetail() {
	const { id } = useParams<{ id: string }>()
	
	// ダミーデータ
	const newsData = {
		'1': {
			title: 'お盆休み期間の営業について',
			date: '2025.09.15',
			content: '8月13日（火）から8月16日（金）まで休診いたします。\n\nご不便をおかけいたしますが、ご理解のほどよろしくお願いいたします。\n\n緊急の場合は、近隣の医療機関をご利用ください。'
		},
		'2': {
			title: 'お盆休み期間の営業について',
			date: '2025.09.15',
			content: '8月13日（火）から8月16日（金）まで休診いたします。\n\nご不便をおかけいたしますが、ご理解のほどよろしくお願いいたします。\n\n緊急の場合は、近隣の医療機関をご利用ください。'
		},
		'3': {
			title: 'お盆休み期間の営業について',
			date: '2025.09.15',
			content: '8月13日（火）から8月16日（金）まで休診いたします。\n\nご不便をおかけいたしますが、ご理解のほどよろしくお願いいたします。\n\n緊急の場合は、近隣の医療機関をご利用ください。'
		}
	}
	
	const news = newsData[id as keyof typeof newsData] || newsData['1']
	
	return (
		<div className="news-detail">
			<div className="container">
				<div className="news-header">
					<Link to="/" className="back-link">
						<FaArrowLeft />
						<span>トップページに戻る</span>
					</Link>
				</div>
				
				<article className="news-article">
					<header className="article-header">
						<h1 className="article-title">{news.title}</h1>
						<div className="article-date">{news.date}</div>
					</header>
					
					<div className="article-content">
						{news.content.split('\n').map((paragraph, index) => (
							<p key={index} className="article-paragraph">
								{paragraph}
							</p>
						))}
					</div>
				</article>
				
				<div className="news-footer">
					<Link to="/news" className="btn-back-to-list">
						お知らせ一覧に戻る
					</Link>
				</div>
			</div>
		</div>
	)
}

export default memo(NewsDetail)
