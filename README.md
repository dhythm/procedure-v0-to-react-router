# How to convert Next.js to React Router

## Overview

**v0** is a tool enable to generate frontend code easily.
This feature strongly supports to create a landing page (LP) well.
However, v0 generates Next.js code and it would be complicated for LP.
To simplify the code, it is better to convert to react-router.

## Prompt

### Requirement definition with ChatGPT

```
## role
あなたはベテランのシステムエンジニアです。
要件定義工程に長けています。

## prompt
v0 でプロダクトの LP を作成します。
最高の出力を得るためのプロンプトを出力してください。
出力したいアプリケーションの概要は ## input に記載します。

## input
1. アップロードされたエクセルを読み込む
2. 読み込んだエクセルから翻訳するテキストを選択する（複数可）
3. 翻訳前の前処理として、選択されたテキストを校正・校閲する（意図を細くしたり読みやすく変換。変換パターンは指定できる）
4. 原文と補正された日本語を比較できる。補正後の日本語は書き換えも可能
5. 補正後・修正後の日本語を英語、韓国語、中国語に翻訳する
6. 原文、補正後、英語、韓国語、中国語を確認できるようにする
```

### Create LP with v0

```
【プロダクト名】：ExcelTranslator

【キャッチコピー】
「Excelをアップロードするだけ！AIで校正して多言語翻訳まで、もう悩まない！」

【ターゲットユーザー】
- 多言語対応が求められる業務に携わるビジネスパーソン
- 文書校正や翻訳作業に時間を奪われている事務職・管理職
- グローバルに展開する企業や団体の担当者

【ユーザーの課題】
- Excelファイルの大量のテキストを手作業で校正し翻訳する時間と手間
- 翻訳前の原稿品質が低いことで翻訳後の精度が下がる
- 原文と翻訳文の確認や修正の煩雑さ

【提供する価値・解決する課題】
- Excelから直接テキストを選択し、AIによる迅速かつ正確な校正・校閲を実施
- 校正後テキストと原文を簡単に比較、自由に修正可能
- 英語・韓国語・中国語へのAI翻訳をワンクリックで提供
- 原文、校正後、各言語への翻訳結果を一画面で直感的に管理

【主な機能】
1. Excelファイルアップロードによるテキスト取り込み
2. 複数のセルからのテキスト選択と一括処理
3. 自然な日本語へのAI自動校正（パターン指定対応）
4. 原文・校正後テキスト比較ビューと修正機能
5. 校正済テキストの多言語（英・韓・中）自動翻訳
6. 原文・補正後・翻訳後を同時確認可能なダッシュボード

【ユーザーに響くポイント】
- 手間のかかる「校正作業」と「翻訳作業」を一気に効率化
- AIによる校正精度と多言語翻訳精度の高さ
- 直感的で誰でも簡単に操作できるインターフェース

【CTA（行動喚起）】
「まずは無料で試してみる」
「業務の効率化を今すぐ実感！」
```

## Procedure to convert

1. Uninstall next

```sh
pnpm remove next
```

2. Install react-router v7

```sh
pnpm install react-router
```

3. Rename app directory

```sh
mkdir src
mv app src/pages
```

4. Create entry point

```sh
mv src/pages/layout.tsx src/App.tsx
mv src/pages/global.css src/
touch src/main.tsx
```

5. Rename pages

```sh
mv src/pages/pages.tsx src/pages/Home.tsx
mv src/pages/dashboard/pages.tsx src/pages/dashboard/DashboardPage.tsx
```

6. Replace Next's Link with React Router's Link

Search `next/link` and replace it with 'react-router'.

7. Install Vite

```sh
pnpm add -D vite @vitejs/plugin-react vite-tsconfig-paths
touch index.html
touch vite.config.ts
```