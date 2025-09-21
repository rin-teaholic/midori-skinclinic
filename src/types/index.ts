// 共通の型定義

export interface NewsItem {
	id: string
	date: string
	category: string
	title: string
	content: string
}

export interface ServiceItem {
	id: string
	title: string
	description: string
	icon: string
	features: string[]
}

export interface ContactInfo {
	name: string
	address: string
	phone: string
	fax: string
	email: string
}

export interface OperatingHours {
	day: string
	morning: string
	afternoon: string
}

export interface IconItem {
	id: string
	icon: React.ComponentType<{ size?: number }>
	text: string
	href?: string
}

// コンポーネントのプロパティ型定義
export interface HomeProps {
	// 必要に応じてプロパティを追加
}

export interface AboutProps {
	// 必要に応じてプロパティを追加
}

export interface ServicesProps {
	// 必要に応じてプロパティを追加
}

export interface ContactProps {
	// 必要に応じてプロパティを追加
}

export interface NewsProps {
	// 必要に応じてプロパティを追加
}

export interface HeaderProps {
	// 必要に応じてプロパティを追加
}

export interface FooterProps {
	// 必要に応じてプロパティを追加
}
