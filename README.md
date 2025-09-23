# みどり皮ふ科 HP

## 特徴

- **レスポンシブデザイン**: モバイル・タブレット・デスクトップに対応
- **モダンなUI/UX**: ハルメクサイトを参考にした美しいデザイン
- **アニメーション効果**: 滑らかなスクロールアニメーション
- **アクセシビリティ**: 読みやすいフォントとコントラスト
- **SEO対応**: 適切なメタタグと構造化データ
- **BEM記法**: 保守性の高いCSS設計
- **統一されたデザインシステム**: カラーパレットとタイポグラフィの一貫性

## 技術スタック

- **React 18** - フロントエンドフレームワーク
- **TypeScript** - 型安全性
- **SCSS** - スタイリング（BEM記法採用）
- **React Router** - ルーティング
- **React Icons** - アイコンライブラリ
- **GitHub Pages** - デプロイメント

## ページ構成

- **ホーム**: 医院の紹介と主要な診療内容
- **医院について**: 院長挨拶と医院の特徴
- **診療内容**: 詳細な診療内容と検査機器
- **お知らせ**: 医院からの最新情報（詳細ページ対応）
- **アクセス**: 診療時間とアクセス情報

## セットアップ

### 必要な環境
- Node.js 18以上
- npm 8以上

### インストール
```bash
# リポジトリをクローン
git clone https://github.com/rin-teaholic/midori-skinclinic.git
cd midori-skinclinic

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
│   ├── HeaderComponent.scss # ヘッダーのスタイル
│   ├── Footer.tsx      # フッターコンポーネント
│   ├── FooterComponent.scss # フッターのスタイル
│   └── icons/          # アイコンコンポーネント
├── pages/              # ページコンポーネント
│   ├── Home.tsx        # ホームページ
│   ├── HomePage.scss   # ホームページのスタイル
│   ├── About.tsx       # 医院についてページ
│   ├── AboutPage.scss  # 医院についてのスタイル
│   ├── Services.tsx    # 診療内容ページ
│   ├── ServicesPage.scss # 診療内容のスタイル
│   ├── News.tsx        # お知らせページ
│   ├── NewsPage.scss   # お知らせのスタイル
│   ├── NewsDetail.tsx  # お知らせ詳細ページ
│   ├── NewsDetailPage.scss # お知らせ詳細のスタイル
│   ├── Contact.tsx     # アクセスポージ
│   └── ContactPage.scss # アクセスのスタイル
├── styles/             # 共通スタイル
│   ├── variables.scss  # 変数定義（カラー、スペーシング等）
│   ├── mixins.scss     # ミックスイン定義
│   ├── buttons.scss    # ボタンスタイル（横長デザイン対応）
│   ├── typography.scss # タイポグラフィ設定
│   └── animations.scss # アニメーション定義
├── assets/             # 静的リソース
│   └── images/         # 画像ファイル
├── types/              # TypeScript型定義
├── App.tsx             # メインアプリケーション
├── App.scss            # グローバルスタイル
└── index.tsx           # エントリーポイント
```

## カスタマイズ

### 医院情報の変更
各ページのコンポーネント内で医院名、住所、電話番号などを変更できます。

### 色の変更
`src/styles/variables.scss`でカラーパレットを変更できます：
```scss
// プライマリー・アクセントカラー
$primary-color: #B1D91C;
$accent-color: #B1D91C;

// ボタンカラー
$button-color: #9EC317;

// テキストカラー
$text-color-primary: #333;
$text-color-white: #fff;

// 背景カラー
$background-dark: #9EC317;
$background-gradient-start: #F5FDDA;
$background-gradient-end: #E1F1F0;
```

### ボタンデザインの設定
`src/styles/buttons.scss`でボタンのスタイルを管理しています。テキストに対してやや横長の印象を与えるように設計されています：

```scss
// ボタン専用余白変数（横長デザイン対応）
$button-padding-horizontal: 24px;    // 水平パディング（PC表示での横伸びを抑制）
$button-padding-vertical: 12px;      // 垂直パディング
$button-min-width: 120px;           // 最小幅
$button-max-width: 200px;           // 最大幅（PC表示での横伸びを抑制）
$button-height: 48px;               // 高さ
```

#### ボタンの使用例
```scss
// プライマリボタン
.button {
  @include button-primary;
  @include button-spacing;
}

// セカンダリボタン
.button--secondary {
  @include button-secondary;
  @include button-spacing;
}

// ボタングループ
.button-group {
  @include button-group-horizontal;
}
```

### 画像の追加
`src/assets/images/`フォルダに画像を追加し、コンポーネントで参照してください。
詳細は`IMAGE_GUIDE.md`を参照してください。

## デプロイ

### GitHub Pages（推奨）

#### 自動デプロイ（GitHub Actions）
1. GitHubリポジトリを作成
2. `package.json`の`homepage`フィールドを実際のリポジトリURLに更新：
   ```json
   "homepage": "https://rin-teaholic.github.io/midori-skinclinic"
   ```
3. リポジトリのSettings > Pagesで、Sourceを「GitHub Actions」に設定
4. mainブランチにプッシュすると自動的にデプロイされます

#### 手動デプロイ
```bash
# 本番用ビルド
npm run build

# GitHub Pagesにデプロイ
npm run deploy
```

### その他のホスティング
- Netlify
- Vercel
- Firebase Hosting

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 開発ガイドライン

### コーディング規約
- **BEM記法**: CSSクラス名は`.block__element--modifier`形式で記述
- **TypeScript**: 型安全性を重視し、適切な型定義を行う
- **SCSS**: 変数とミックスインを活用した保守性の高いスタイル
- **レスポンシブ**: モバイルファーストでデザイン

### コミット規約
```
<type>[optional scope]: <説明>

feat: 新機能追加
fix: バグ修正
docs: ドキュメント更新
style: コードスタイル変更
refactor: リファクタリング
test: テスト追加・修正
chore: ビルド・設定変更
```

### ブランチ運用
- **main**: 本番環境用ブランチ
- **feat/**: 新機能開発用ブランチ
- 1日以内にmainブランチにマージする

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## お問い合わせ

プロジェクトに関する質問や提案がございましたら、Issueを作成してください。