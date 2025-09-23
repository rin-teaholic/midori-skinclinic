import React, { useState, memo, useRef } from 'react'
import { FaUser, FaPhone, FaEnvelope, FaCheckCircle, FaCheck, FaTimes, FaCircle, FaPlay, FaUserPlus, FaRedo, FaIdCard } from 'react-icons/fa'
import type { ReservationProps } from '../types'
import './Reservation.scss'

function Reservation(props: ReservationProps) {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		date: '',
		time: '',
		service: '',
		visitType: '',
		message: '',
		medicalCardNumber: '',
		hasMedicalCard: true
	})

	const [isSubmitted, setIsSubmitted] = useState(false)
	const [selectedDate, setSelectedDate] = useState<string>('')
	const [selectedTime, setSelectedTime] = useState<string>('')
	const [currentStep, setCurrentStep] = useState(1)
	const [completedSteps, setCompletedSteps] = useState<number[]>([])
	const stepContainerRef = useRef<HTMLDivElement>(null)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value
		}))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// フォーム送信処理（実際の実装ではAPIコールなど）
		console.log('予約データ:', formData)
		setIsSubmitted(true)
	}

	const handleDateSelect = (date: string) => {
		setSelectedDate(date)
		setFormData(prev => ({ ...prev, date }))
		setSelectedTime('') // 日付変更時は時間をリセット
	}

	const handleTimeSelect = (time: string) => {
		setSelectedTime(time)
		setFormData(prev => ({ ...prev, time }))
	}

	const nextStep = () => {
		if (currentStep < 6) {
			setCompletedSteps(prev => [...prev, currentStep])
			setCurrentStep(prev => prev + 1)
			// ステップ変更時にステップコンテナの一番上にスクロール
			stepContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}

	const prevStep = () => {
		if (currentStep > 1) {
			setCurrentStep(prev => prev - 1)
			// ステップ変更時にステップコンテナの一番上にスクロール
			stepContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}

	const goToStep = (step: number) => {
		if (completedSteps.includes(step - 1) || step === 1) {
			setCurrentStep(step)
			// ステップ変更時にステップコンテナの一番上にスクロール
			stepContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}

	const timeSlots = [
		'09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
		'14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
	]

	const visitTypes = [
		{ value: 'first', label: '初診', icon: FaUserPlus },
		{ value: 'return', label: '再診', icon: FaRedo }
	]

	const services = [
		'アレルギー性皮膚炎',
		'皮膚がん検診',
		'美容皮膚科',
		'アトピー性皮膚炎',
		'にきび治療',
		'シミ・そばかす治療',
		'その他'
	]

	// 空き状況をシミュレートする関数
	const getAvailableSlots = (date: string) => {
		// ダミーの空き状況データ
		const unavailableSlots = ['10:00', '14:30', '16:00'] // 例：これらの時間は予約済み
		return timeSlots.filter(slot => !unavailableSlots.includes(slot))
	}

	// カレンダー用の日付生成
	const generateCalendarDates = () => {
		const today = new Date()
		const dates = []
		
		// 今日から30日後まで
		for (let i = 0; i < 30; i++) {
			const date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000)
			const dateStr = date.toISOString().split('T')[0]
			const dayOfWeek = date.getDay()
			
			// 日曜日(0)と土曜日の午後は除外
			const isAvailable = dayOfWeek !== 0 && !(dayOfWeek === 6 && i > 0)
			
			dates.push({
				date: dateStr,
				day: date.getDate(),
				month: date.getMonth() + 1,
				year: date.getFullYear(),
				isAvailable,
				isToday: i === 0
			})
		}
		
		return dates
	}

	// ステップのタイトル
	const stepTitles = [
		'診療時間・注意事項',
		'診察種別',
		'診療内容',
		'日時選択',
		'個人情報',
		'確認・送信'
	]

	// 各ステップのコンテンツをレンダリング
	const renderStepContent = () => {
		switch (currentStep) {
			case 1:
				return (
					<div className="step-content">
						<div className="info-section">
							<h3 className="info-title">診療時間</h3>
							<div className="about-hours-table">
								<div className="hours-content">
									<div className="hours-row">
										<div className="day-label"></div>
										<div className="day-label">月</div>
										<div className="day-label">火</div>
										<div className="day-label">水</div>
										<div className="day-label">木</div>
										<div className="day-label">金</div>
										<div className="day-label">土</div>
										<div className="day-label">日・祝</div>
									</div>
									<div className="hours-row">
										<div className="time-label"><span className="period-label">午前</span><br />9:00-12:00</div>
										<div className="availability"><FaCircle /></div>
										<div className="availability"><FaCircle /></div>
										<div className="availability"><FaTimes /></div>
										<div className="availability"><FaCircle /></div>
										<div className="availability"><FaCircle /></div>
										<div className="availability"><FaCircle /></div>
										<div className="availability"><FaTimes /></div>
									</div>
									<div className="hours-row">
										<div className="time-label"><span className="period-label">午後</span><br />14:00-18:00</div>
										<div className="availability"><FaCircle /></div>
										<div className="availability"><FaCircle /></div>
										<div className="availability"><FaTimes /></div>
										<div className="availability"><FaCircle /></div>
										<div className="availability"><FaCircle /></div>
										<div className="availability"><FaTimes /></div>
										<div className="availability"><FaTimes /></div>
									</div>
								</div>
							</div>
						</div>

						<div className="info-section">
							<h3 className="info-title">ご注意事項</h3>
							<ul className="info-list">
								<li>初診の方は診察開始30分前までにお越しください</li>
								<li>予約時間の変更・キャンセルは前日までにご連絡ください</li>
								<li>急な症状の場合は直接お電話でご相談ください</li>
								<li>保険証・診察券をお忘れなくお持ちください</li>
								<li>初診料は3,000円、再診料は1,000円です</li>
								<li>美容皮膚科は自費診療となります</li>
							</ul>
						</div>

						<div className="step-actions">
							<button 
								type="button"
								className="button button--primary button--large"
								onClick={nextStep}
							>
								<FaPlay className="btn-icon" />
								予約を開始する
							</button>
						</div>
					</div>
				)

			case 2:
				return (
					<div className="step-content">
						<h3 className="step-question">診察種別を選択してください</h3>
						<div className="option-grid">
							{visitTypes.map((visitType) => {
								const IconComponent = visitType.icon
								return (
									<button
										key={visitType.value}
										type="button"
										className={`option-card ${formData.visitType === visitType.value ? 'selected' : ''}`}
										onClick={() => {
											setFormData(prev => ({ ...prev, visitType: visitType.value }))
										}}
									>
										<div className="option-icon">
											<IconComponent />
										</div>
										<div className="option-label">{visitType.label}</div>
										{formData.visitType === visitType.value && (
											<div className="option-check">
												<FaCheck />
											</div>
										)}
									</button>
								)
							})}
						</div>

						<div className="step-actions">
							<button 
								type="button"
								className="button button--secondary"
								onClick={prevStep}
							>
								戻る
							</button>
							<button 
								type="button"
								className="button button--primary"
								onClick={nextStep}
								disabled={!formData.visitType}
							>
								次へ
							</button>
						</div>
					</div>
				)

			case 3:
				return (
					<div className="step-content">
						<h3 className="step-question">診療内容を選択してください</h3>
						<div className="option-grid">
							{services.map((service) => (
								<button
									key={service}
									type="button"
									className={`option-card ${formData.service === service ? 'selected' : ''}`}
									onClick={() => {
										setFormData(prev => ({ ...prev, service }))
									}}
								>
									<div className="option-label">{service}</div>
									{formData.service === service && (
										<div className="option-check">
											<FaCheck />
										</div>
									)}
								</button>
							))}
						</div>

						<div className="step-actions">
							<button 
								type="button"
								className="button button--secondary"
								onClick={prevStep}
							>
								戻る
							</button>
							<button 
								type="button"
								className="button button--primary"
								onClick={nextStep}
								disabled={!formData.service}
							>
								次へ
							</button>
						</div>
					</div>
				)

			case 4:
				return (
					<div className="step-content">
						<h3 className="step-question">日時を選択してください</h3>
						
						<div className="calendar-container">
							<div className="calendar-grid">
								{generateCalendarDates().map((dateInfo) => (
									<button
										key={dateInfo.date}
										type="button"
										className={`calendar-date ${!dateInfo.isAvailable ? 'unavailable' : ''} ${selectedDate === dateInfo.date ? 'selected' : ''} ${dateInfo.isToday ? 'today' : ''}`}
										onClick={() => dateInfo.isAvailable && handleDateSelect(dateInfo.date)}
										disabled={!dateInfo.isAvailable}
									>
										<span className="date-day">{dateInfo.day}</span>
										<span className="date-month">{dateInfo.month}月</span>
									</button>
								))}
							</div>
						</div>
						
						{selectedDate && (
							<div className="time-slots-section">
								<h4 className="time-slots-title">
									{new Date(selectedDate).toLocaleDateString('ja-JP', { 
										year: 'numeric', 
										month: 'long', 
										day: 'numeric',
										weekday: 'long'
									})} の空き時間
								</h4>
								<div className="time-slots-grid">
									{getAvailableSlots(selectedDate).map((time) => (
										<button
											key={time}
											type="button"
											className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
											onClick={() => handleTimeSelect(time)}
										>
											{time}
										</button>
									))}
								</div>
							</div>
						)}

						<div className="step-actions">
							<button 
								type="button"
								className="button button--secondary"
								onClick={prevStep}
							>
								戻る
							</button>
							<button 
								type="button"
								className="button button--primary"
								onClick={nextStep}
								disabled={!selectedDate || !selectedTime}
							>
								次へ
							</button>
						</div>
					</div>
				)

			case 5:
				return (
					<div className="step-content">
						<h3 className="step-question">個人情報を入力してください</h3>
						
						{/* 再診の場合の診察券番号入力欄 */}
						{formData.visitType === 'return' && (
							<div className="medical-card-section">
								<div className="form-group">
									<label htmlFor="medicalCardNumber" className="form-label">
										<FaIdCard className="label-icon" />
										診察券番号 <span className="required">*</span>
									</label>
									<input
										type="text"
										id="medicalCardNumber"
										name="medicalCardNumber"
										value={formData.medicalCardNumber}
										onChange={handleInputChange}
										className="form-input"
										required
										placeholder="例: 123456"
									/>
								</div>

								{/* 診察券番号をお忘れの方セクション */}
								<div className="forgot-card-section">
									<button
										type="button"
										className="forgot-card-toggle"
										onClick={() => setFormData(prev => ({ ...prev, hasMedicalCard: !prev.hasMedicalCard }))}
									>
										{formData.hasMedicalCard ? '診察券番号をお忘れの方はこちら' : '診察券番号を入力する'}
									</button>

									{!formData.hasMedicalCard && (
										<div className="forgot-card-form">
											<div className="form-fields">
												<div className="form-group">
													<label htmlFor="name" className="form-label">
														<FaUser className="label-icon" />
														お名前 <span className="required">*</span>
													</label>
													<input
														type="text"
														id="name"
														name="name"
														value={formData.name}
														onChange={handleInputChange}
														className="form-input"
														required
														placeholder="山田 太郎"
													/>
												</div>

												<div className="form-group">
													<label htmlFor="phone" className="form-label">
														<FaPhone className="label-icon" />
														電話番号 <span className="required">*</span>
													</label>
													<input
														type="tel"
														id="phone"
														name="phone"
														value={formData.phone}
														onChange={handleInputChange}
														className="form-input"
														required
														placeholder="090-1234-5678"
													/>
												</div>

												<div className="form-group">
													<label htmlFor="email" className="form-label">
														<FaEnvelope className="label-icon" />
														メールアドレス
													</label>
													<input
														type="email"
														id="email"
														name="email"
														value={formData.email}
														onChange={handleInputChange}
														className="form-input"
														placeholder="example@email.com"
													/>
												</div>

												<div className="form-group">
													<label htmlFor="message" className="form-label">
														ご質問・ご要望
													</label>
													<textarea
														id="message"
														name="message"
														value={formData.message}
														onChange={handleInputChange}
														className="form-textarea"
														rows={4}
														placeholder="症状やご質問がございましたら、こちらにご記入ください。"
													/>
												</div>
											</div>
										</div>
									)}
								</div>
							</div>
						)}

						{/* 初診の場合の通常の個人情報入力欄 */}
						{formData.visitType === 'first' && (
							<div className="form-fields">
								<div className="form-group">
									<label htmlFor="name" className="form-label">
										<FaUser className="label-icon" />
										お名前 <span className="required">*</span>
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleInputChange}
										className="form-input"
										required
										placeholder="山田 太郎"
									/>
								</div>

								<div className="form-group">
									<label htmlFor="phone" className="form-label">
										<FaPhone className="label-icon" />
										電話番号 <span className="required">*</span>
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleInputChange}
										className="form-input"
										required
										placeholder="090-1234-5678"
									/>
								</div>

								<div className="form-group">
									<label htmlFor="email" className="form-label">
										<FaEnvelope className="label-icon" />
										メールアドレス
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										className="form-input"
										placeholder="example@email.com"
									/>
								</div>

								<div className="form-group">
									<label htmlFor="message" className="form-label">
										ご質問・ご要望
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleInputChange}
										className="form-textarea"
										rows={4}
										placeholder="症状やご質問がございましたら、こちらにご記入ください。"
									/>
								</div>
							</div>
						)}

						<div className="step-actions">
							<button 
								type="button"
								className="button button--secondary"
								onClick={prevStep}
							>
								戻る
							</button>
							<button 
								type="button"
								className="button button--primary"
								onClick={nextStep}
								disabled={
									formData.visitType === 'return' 
										? (formData.hasMedicalCard ? !formData.medicalCardNumber : (!formData.name || !formData.phone))
										: (!formData.name || !formData.phone)
								}
							>
								次へ
							</button>
						</div>
					</div>
				)

			case 6:
				return (
					<div className="step-content">
						<h3 className="step-question">予約内容を確認してください</h3>
						
						<div className="confirmation-details">
							<div className="detail-section">
								<h4>診察情報</h4>
								<div className="detail-item">
									<strong>診察種別:</strong> {visitTypes.find(v => v.value === formData.visitType)?.label}
								</div>
								<div className="detail-item">
									<strong>診療内容:</strong> {formData.service}
								</div>
							</div>

							<div className="detail-section">
								<h4>日時</h4>
								<div className="detail-item">
									<strong>希望日:</strong> {selectedDate && new Date(selectedDate).toLocaleDateString('ja-JP', { 
										year: 'numeric', 
										month: 'long', 
										day: 'numeric',
										weekday: 'long'
									})}
								</div>
								<div className="detail-item">
									<strong>希望時間:</strong> {selectedTime}
								</div>
							</div>

							<div className="detail-section">
								<h4>個人情報</h4>
								{formData.visitType === 'return' && formData.hasMedicalCard && (
									<div className="detail-item">
										<strong>診察券番号:</strong> {formData.medicalCardNumber}
									</div>
								)}
								<div className="detail-item">
									<strong>お名前:</strong> {formData.name}
								</div>
								<div className="detail-item">
									<strong>電話番号:</strong> {formData.phone}
								</div>
								{formData.email && (
									<div className="detail-item">
										<strong>メールアドレス:</strong> {formData.email}
									</div>
								)}
								{formData.message && (
									<div className="detail-item">
										<strong>ご質問・ご要望:</strong> {formData.message}
									</div>
								)}
							</div>
						</div>

						<div className="step-actions">
							<button 
								type="button"
								className="button button--secondary"
								onClick={prevStep}
							>
								戻る
							</button>
							<button 
								type="submit"
								className="button button--primary button--large"
								onClick={handleSubmit}
							>
								<FaCheckCircle className="btn-icon" />
								予約を確定する
							</button>
						</div>
					</div>
				)

			default:
				return null
		}
	}


	if (isSubmitted) {
		return (
			<div className="reservation">
				<section className="reservation-header">
					<div className="container">
						<h1 className="reservation-title">Reservation</h1>
					</div>
				</section>
				
				<section className="reservation-content">
					<div className="container">
						<div className="reservation-success">
						<div className="success-icon">
							<FaCheckCircle size={80} />
						</div>
						<h2 className="success-title">予約を受け付けました</h2>
						<p className="success-message">
							ご予約ありがとうございます。<br />
							予約内容を確認の上、当院よりご連絡いたします。
						</p>
						<div className="success-details">
							<div className="detail-item">
								<strong>お名前:</strong> {formData.name}
							</div>
							<div className="detail-item">
								<strong>希望日時:</strong> {formData.date} {formData.time}
							</div>
							<div className="detail-item">
								<strong>診療内容:</strong> {formData.service}
							</div>
						</div>
						<div className="success-actions">
							<button 
								className="button button--primary"
								onClick={() => {
									setIsSubmitted(false)
									setFormData({
										name: '',
										phone: '',
										email: '',
										date: '',
										time: '',
										service: '',
										visitType: '',
										message: '',
										medicalCardNumber: '',
										hasMedicalCard: true
									})
									setSelectedDate('')
									setSelectedTime('')
									setCurrentStep(1)
									setCompletedSteps([])
								}}
							>
								新しい予約をする
							</button>
						</div>
						</div>
					</div>
				</section>
			</div>
		)
	}

	return (
		<div className="reservation">
			<section className="reservation-header">
				<div className="container">
					<h1 className="reservation-title">Reservation</h1>
					<p className="reservation-description">
						ステップごとに進めて、簡単にご予約いただけます。
					</p>
				</div>
			</section>

			<section className="reservation-content">
				<div className="container">
					{/* ステップインジケーター */}
					<div className="step-indicator">
						{stepTitles.map((title, index) => (
							<button
								key={index + 1}
								type="button"
								className={`step-item ${currentStep === index + 1 ? 'active' : ''} ${completedSteps.includes(index + 1) ? 'completed' : ''}`}
								onClick={() => goToStep(index + 1)}
								disabled={!completedSteps.includes(index) && index > 0}
							>
								<div className="step-number">
									{completedSteps.includes(index + 1) ? <FaCheck /> : index + 1}
								</div>
								<div className="step-title">{title}</div>
							</button>
						))}
					</div>

					{/* ステップコンテンツ */}
					<div className="step-container" ref={stepContainerRef}>
						<div className="step-header">
							<h2 className="step-title">ステップ {currentStep}: {stepTitles[currentStep - 1]}</h2>
						</div>
						
						<div className="step-body">
							{renderStepContent()}
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default memo(Reservation)
