// 共通の型定義

export interface NewsItem {
	id: string
	date: string
	category: string
	title: string
	content: string
}

export interface NewsDetailItem {
	date: string
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

export interface ReservationProps {
	// 必要に応じてプロパティを追加
}

// 予約システムの型定義
export type ReservationStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed'

export interface ReservationData {
	id: string
	name: string
	phone: string
	email: string
	date: string
	time: string
	service: string
	message: string
	status: ReservationStatus
	createdAt: string
	updatedAt: string
}

export interface ReservationFormData {
	name: string
	phone: string
	email: string
	date: string
	time: string
	service: string
	message: string
}

export interface ReservationManagementProps {
	reservations: ReservationData[]
	onUpdateReservation: (id: string, status: ReservationStatus) => void
	onDeleteReservation: (id: string) => void
}

export interface ReservationListProps {
	reservations: ReservationData[]
	onStatusChange: (id: string, status: ReservationStatus) => void
	onDelete: (id: string) => void
}