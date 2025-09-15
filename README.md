# みどり皮ふ科 公式ウェブサイト

ハルメクホールディングスのサイトデザインを参考にした皮膚科クリニックの公式ウェブサイトです。

## 特徴

- **レスポンシブデザイン**: モバイル・タブレット・デスクトップに対応
- **モダンなUI/UX**: ハルメクサイトを参考にした美しいデザイン
- **アニメーション効果**: 滑らかなスクロールアニメーション
- **アクセシビリティ**: 読みやすいフォントとコントラスト
- **SEO対応**: 適切なメタタグと構造化データ

## 技術スタック

- **React 19** - フロントエンドフレームワーク
- **TypeScript** - 型安全性
- **SCSS** - スタイリング
- **React Router** - ルーティング
- **GitHub Pages** - デプロイメント

## ページ構成

- **ホーム**: 医院の紹介と主要な診療内容
- **医院について**: 院長挨拶と医院の特徴
- **診療内容**: 詳細な診療内容と検査機器
- **お知らせ**: 医院からの最新情報
- **アクセス**: 診療時間とアクセス情報

## セットアップ

### 必要な環境
- Node.js 16以上
- npm または yarn

### インストール
```bash
# リポジトリをクローン
git clone https://github.com/yourusername/midori-hifuka.git
cd midori-hifuka

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm start
```

### ビルド
```bash
# 本番用ビルド
npm run build

# GitHub Pagesにデプロイ
npm run deploy
```

## プロジェクト構造

```
src/
├── components/          # 再利用可能なコンポーネント
│   ├── Header.tsx      # ヘッダーコンポーネント
│   ├── Header.scss     # ヘッダーのスタイル
│   ├── Footer.tsx      # フッターコンポーネント
│   └── Footer.scss     # フッターのスタイル
├── pages/              # ページコンポーネント
│   ├── Home.tsx        # ホームページ
│   ├── Home.scss       # ホームページのスタイル
│   ├── About.tsx       # 医院についてページ
│   ├── About.scss      # 医院についてのスタイル
│   ├── Services.tsx    # 診療内容ページ
│   ├── Services.scss   # 診療内容のスタイル
│   ├── News.tsx        # お知らせページ
│   ├── News.scss       # お知らせのスタイル
│   ├── Contact.tsx     # アクセスポージ
│   └── Contact.scss    # アクセスのスタイル
├── styles/             # 共通スタイル
│   └── animations.scss # アニメーション定義
├── App.tsx             # メインアプリケーション
├── App.scss            # グローバルスタイル
└── index.tsx           # エントリーポイント
```

## カスタマイズ

### 医院情報の変更
各ページのコンポーネント内で医院名、住所、電話番号などを変更できます。

### 色の変更
`src/App.scss`でカラーパレットを変更できます：
```scss
// メインカラー
$primary-color: #2c5530;  // 緑色
$secondary-color: #4a90e2; // 青色
```

### 画像の追加
`src/assets/images/`フォルダに画像を追加し、コンポーネントで参照してください。
詳細は`IMAGE_GUIDE.md`を参照してください。

## デプロイ

### GitHub Pages
1. GitHubリポジトリを作成
2. `package.json`の`homepage`を更新
3. `npm run deploy`でデプロイ

### その他のホスティング
- Netlify
- Vercel
- Firebase Hosting

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## お問い合わせ

プロジェクトに関する質問や提案がございましたら、Issueを作成してください。