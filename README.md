サイト名
====

Y.U's Portfolio Site

概要
====

![portfolio2](https://user-images.githubusercontent.com/68333078/92983172-c860f000-f4dc-11ea-8d63-33b7b55104fa.jpg)

Vue.jsで制作したレスポンシブ対応のSPAサイトです。スキルや制作物をまとめています。PC・スマートフォン・タブレットのレスポンシブ対応。

サイトURL
====

サイトはこちらからどうぞ：[リンク](https://y-u-portfolio.netlify.app/)

使用技術一覧(言語・ライブラリ・ツール)
===

- Vue.js 2.6.11

- Vue Router 3.3.4

- axios 0.19.2(お問い合わせフォームの非同期通信)

- Bootstrap 4.5.0

- Font Awesome 5.13.1(スマートフォンのハンバーガーメニュー用アイコン)

- Animate.css

- Firebase(SDK未使用)

- Adobe Photoshop(画像の編集加工)

- Adobe XD(デザインカンプ)

## Vue.js

保守管理がしやすいように再利用可能なものはコンポーネント化しています。また、TOPページのナビゲーションバーをクリックすると該当箇所へスクロールする機能にv-on、スキル群の画像と説明の生成にv-for(各要素はオブジェクトとしてまとめ、画像はv-bindによって、説明文は宣言的レンダリングによって表示させています)、お問い合わせフォームに入力された内容をブラウザ側に表示させるためにv-model(入力内容に誤りがあった場合はv-ifにてバリデーションの結果が表示されます)といったように、Vue.jsが持つ各種ディレクティブを使用しています。CSSやJavaScriptメソッドのレスポンシブ対応はプラグインを使わずコーディングしています。

※Firebaseに関するデータはenvファイル内で環境変数にしています。

機能一覧
===

- ページ遷移機能(Vue Router)

- 画像アニメーション(Animate.css)

- お問い合わせフォーム(FirebaseのFirestoreをデータベースに利用)
