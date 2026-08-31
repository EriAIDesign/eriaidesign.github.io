# Eri — つくったもの

Eriが作ったアプリや道具をまとめる、GitHub Pages向けの静的サイト。

## 構成

- `index.html` — トップページとアプリ一覧
- `styles.css` — サイト共通の見た目
- `js/main.js` — 困りごとに線を引く演出
- `icons/` — アプリのアイコン画像
- `privacy/` — アプリごとのプライバシーポリシー
- `assets/` — favicon、Apple Touch Icon、OGP画像

## アプリを追加する

1. `index.html` の該当セクションで `article.product` を丸ごと複製する。
2. 困りごと、アプリ名、対応OS、説明、リンクを編集する。
3. `icons/<slug>.png` を置き、`img` のパスと頭文字フォールバックを編集する。
4. 既存のポリシー本文を `privacy/<slug>.html` に配置してからリンクを有効にする。

未確定URLに `#` や推測したURLは入れず、`todo-link` と `TODO` コメントを残す。

現在、「そのほか」にはEri名義のnoteのみ掲載している。ハンドルネームで公開している制作物や、掲載品質を確認中の制作物は含めない。
