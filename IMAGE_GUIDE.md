# 画像・アイコンについて

## 現在の状況
現在、サイト内では以下のプレースホルダー画像を使用しています：

### プレースホルダー画像の場所
1. **ヒーローセクション**: クリニック外観画像
2. **医院についてページ**: 院長・医師の写真
3. **診療内容ページ**: 検査機器の画像（ダーモスコピー、Wood灯検査、パッチテスト）
4. **アクセスページ**: Google Map

## 商用フリー画像の推奨サイト

### 医療・クリニック関連
1. **Unsplash** (https://unsplash.com/)
   - 検索キーワード: "hospital", "clinic", "doctor", "medical"
   - 高品質な写真が豊富

2. **Pixabay** (https://pixabay.com/)
   - 検索キーワード: "医療", "病院", "医師", "診察"
   - 日本語検索に対応

3. **Pexels** (https://www.pexels.com/)
   - 検索キーワード: "medical", "healthcare", "doctor"
   - 商用利用可能

### アイコン
1. **Font Awesome** (https://fontawesome.com/)
   - 医療関連のアイコンが豊富
   - 無料版でも十分な種類

2. **Material Icons** (https://fonts.google.com/icons)
   - Google提供のアイコン
   - 医療・健康関連のアイコンあり

3. **Feather Icons** (https://feathericons.com/)
   - シンプルで美しいアイコン
   - 商用利用可能

## 画像の置き換え方法

### 1. 画像ファイルの配置
```
src/
├── assets/
│   ├── images/
│   │   ├── hero-clinic.jpg
│   │   ├── doctor-profile.jpg
│   │   ├── dermoscopy.jpg
│   │   ├── wood-lamp.jpg
│   │   └── patch-test.jpg
│   └── icons/
│       ├── medical.svg
│       └── phone.svg
```

### 2. コンポーネントでの使用例
```tsx
// プレースホルダーの代わりに実際の画像を使用
<img 
  src="/assets/images/hero-clinic.jpg" 
  alt="みどり皮膚科外観" 
  className="hero-image"
/>
```

### 3. SCSSでのスタイル調整
```scss
.hero-image {
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
  }
}
```

## 推奨する画像の種類

### ヒーロー画像
- クリニックの外観
- 清潔感のある内装
- 自然光が入る診察室

### 院長写真
- プロフェッショナルな印象
- 白いコートを着用
- 信頼感のある表情

### 検査機器
- 実際のダーモスコピー機器
- Wood灯検査の様子
- パッチテストの実施風景

### 地図
- Google Mapsの埋め込み
- クリニックの正確な位置
- 周辺の目印となる建物

## 注意事項
- 肖像権に注意（患者様の写真は使用不可）
- 医療機器の写真は実際の機器に近いものを選択
- 画像の解像度は適切なサイズに調整
- alt属性を適切に設定してアクセシビリティを確保
