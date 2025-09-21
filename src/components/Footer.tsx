import React, { memo } from 'react'
import './Footer.scss'

interface FooterProps {}

function Footer({}: FooterProps) {
  return (
    <footer className="footer">
      {/* 画像のデザインに合わせてシンプルな緑色のフッター */}
    </footer>
  )
}

export default memo(Footer)
