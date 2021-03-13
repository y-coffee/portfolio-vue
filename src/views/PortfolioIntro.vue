<template>
  <div>
    <div class="works-header">
      <h1>本ポートフォリオサイト</h1>
      <ul>
        <li><router-link class="works-header-router" to="/">/ TOP</router-link></li>
        <li><router-link class="works-header-router" to="zibika">/ 耳鼻科</router-link></li>
        <li><router-link class="works-header-router" to="shots">/ SHOTS</router-link></li>
        <li><router-link class="works-header-router" to="ureshii">/ リスト</router-link></li>
        <li><router-link class="works-header-router" to="TMTSite">/ Appサイト</router-link></li>
        <li><router-link class="works-header-router" to="TMTApp">/ NativeApp</router-link></li>
      </ul>
    <div class="sp-works-ul">
      <ul>
        <li><router-link class="sp-works-header-router" to="/">/ TOP</router-link></li>
        <li><router-link class="sp-works-header-router" to="zibika">/ 耳鼻科</router-link></li>
        <li><router-link class="sp-works-header-router" to="shots">/ SHOTS</router-link></li>
        <li><router-link class="works-header-router" to="ureshii">/ リスト</router-link></li>
        <li><router-link class="works-header-router" to="TMTSite">/ Appサイト</router-link></li>
        <li><router-link class="works-header-router" to="TMTApp">/ NativeApp</router-link></li>
      </ul>
    </div>
    </div>
    <div class="clearfix"></div>
    <div class="portfoliointro-content">
      <div class="img-box">
        <img class="site-img animate__animated animate__flipInX" src="../assets/works/portfolio2.jpg" alt="">
        <p class="site-link-box"><a href="https://github.com/y-coffee/portfolio-vue" target="_blank">Githubはこちらから<img  class="site-link-img" src="../assets/works/newpage.png"></a></p>
      </div>
      <div class="skills-box">
        <h2>－ 使用言語・ツール －</h2>
        <table>
          <tbody>
            <tr v-for="showskill in showskills" v-bind:key="showskill.id">
              <th><img v-bind:src="showskill.image"></th>
              <td><p>{{ showskill.explain }}</p></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="clearfix"></div>
    <div class="portfoliointro-intro-box">
      <div class="portfoliointro-intro"><h3>－ 制作期間 －</h3><br> 約1.5ヶ月。3つ目のサイトです。<br><br><h3>－ 設定 －</h3><br>私自身のポートフォリオサイト。PC・スマートフォン・タブレットのレスポンシブ対応。<br><br><h3>－ 内容 －</h3><br><span style="font-weight: bold;">＜Vue CLI、Vue Router＞</span><br>Vue.jsを用いたSPAサイトの制作をしてみたいと思い、Vue CLI3を用いて本サイトの構築に取り組みました。<br>縦長ランディングページ式のTOPページに主要な情報を大まかにまとめ、これまでに制作したWebサイトの詳細情報についての個別ページを「Works」内で紹介しています。TOPページとこれらのページをVue Routerを用いてつないでいます。<br><br><span style="font-weight: bold;">＜v-onディレクティブ＞</span><br>TOPページ最上部のナビゲーションバー内にある「Skills」「Works」「About and Contact」がクリックされると、該当する項目へとスムーズにスクロールされるように設定しています。このメソッドは、リストレンダリングで生成したli要素へと入れられる変数を引数に取りそれと配列キーとを一緒に用いて条件分岐付きのメソッドの形で実装しました。また、一定距離スクロールされると画面右下にTOPページ最上部へと戻るためのボタン(Font Awesome)が表示されるようにしてあります。<br><br><span style="font-weight: bold;">＜v-for・v-bindディレクティブ、props＞</span><br>Vue.jsの強みである修正・保守のしやすさを支えるUI部品の再利用を行っています。たとえば、「Skills」内にある画像付きの説明パートはコンポーネント化してtable要素の内容をv-forディレクティブで生成しています。同内容はオブジェクトとしてまとめ、画像のsrcをv-bind、説明のテキストを宣言的レンダリングで表示させています。パート毎のサブタイトルもコンポーネント化し親コンポーネントからの情報をpropsで渡しています。<br><br><span style="font-weight: bold;">＜v-model・v-if、axiosを用いた非同期処理＞</span><br>お問い合わせフォームの名前の項目に文字を入力すると「こんにちは、さん」の箇所に入力された名前がレンダリングされるようになっています。また、inputタグに入力された情報は名前と同様にv-modelを用いてバインディングしFirebaseのFirestoreへと送信しています。この非同期処理のために使用されているのはaxiosです。<br>FirebaseのAPIを叩く際にはenvファイルで設定した環境変数を用いています。<br>送信ボタンがクリックされた際に入力項目に漏れがあると送信せずにエラー項目を表示するメソッドと、メールアドレス入力が形式としてメールアドレスになっているかのバリデーションをするメソッドが実装されています。また、エラー項目はエラーが見つかって初めて表示されるようにv-ifによってコントロールされています。<br><br>今後は、ページスクロールに合わせたアニメーションの実装やバックエンド側の知識を身に着けていきたいと思っています。</div>
    </div>
    <footer><p>(C)2020 Smash Create</p></footer>
  </div>
</template>



<script>
export default {
  data() {
    return {
      showskills: [
        {
          id: 1,
          image: require('../assets/skills/vuejs-logo.png'),
          explain: '単一ファイルコンポーネントを用いてSPAサイトを構築。Vue CLI3とVue Routerを併せて使用。スタイルやメソッドのレスポンシブ対応はプラグインを使用せずにコーディング。'
        },
        {
          id: 2,
          image: require('../assets/skills/firebase-logo.png'),
          explain: 'お問い合わせフォームのバックエンド。データの送信にはpromiseベースのHTTP通信ライブラリaxiosとFirestoreのWeb APIを利用。'
        },
        {
          id: 3,
          image: require('../assets/skills/photoshop-logo.png'),
          explain: '画像の編集と加工。'
        },
        {
          id: 4,
          image: require('../assets/skills/xd-logo.png'),
          explain: 'デザインカンプの作成。'
        }
      ]
    }
  }
}
</script>



<style scoped>
.clearfix {
  content: '';
  clear: both;
}

.sp-works-header {
  display: none;
}

.works-header {
  width: 100%;
  height: 92px;
  background-color: #43A1FF;
  padding: 0px;
  margin: 0px;
  text-align: center;
  box-shadow: 0px 10px 0.01px 0 #dddddd;
  position: fixed;
  z-index: 100;

}

.works-header h1 {
  padding-left: 20px;
  font-weight: bold;
  margin: 0px;
  color: #ffffff;
  line-height: 92px;
  float: left;
}

.works-header ul {
  display: flex;
  justify-content: space-between;
  float: right;
  padding-top: 60px;
  padding-right: 20px;
  margin: 0px;
  color: #ffffff;
  width: 53%;
  list-style: none;
}

.works-header li {
  font-weight: bold;
}

.works-header-router {
  text-decoration: none;
  color: #ffffff;
}

.sp-works-ul {
  display: none;
}

.portfoliointro-content {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 140px;
}

.img-box {
  float: left;
  width: 50%;
}

.site-link-box{
  margin-top: 30px;
  text-decoration: none;
  color: #000000;
  text-align: center;
}

.site-link-box a {
  color: #000000;
}

.site-link-img {
  width: 20px;
  height: 20px;
  margin-left: 10px;
}

.site-img {
  width: 100%;
  height: 330px;
  margin-top: 20px;
  box-shadow: 5px 5px 0.01px 0 #dddddd;
}

.skills-box {
  float: right;
  padding-right: 0px;
  width: 45%;
}

.skills-box h2 {
  font-size: 25px;
}

.skills-box img {
  width: 40px;
  height: 40px;
  margin-top: 0px;
  filter: drop-shadow(2px 5px 0.01px #DDDDDD);
}

.skills-box p {
  font-size: 20px;
  margin-top: 15px;
}

.portfoliointro-intro-box {
  margin: 70px auto 0px;
  width: 90%;
}

.portfoliointro-intro {
  font-size: 20px;
  line-height: 2;
}

.portfoliointro-intro h3 {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: -30px;
  margin-top:60px;
}

.portfoliointro-intro a {
  text-decoration: none;
  color: #000000;
}

.portfoliointro-intro img {
  width: 20px;
  height: 20px;
}

footer {
  height: 46px;
  background-color: #43A1FF;
  margin-top: 50px;
}

footer p {
  font-size: 15px;
  color: #ffffff;
  font-weight: bold;
  line-height: 2;
  text-align: center;
  padding-top: 10px;
  margin-bottom: 0px;
}


@media (max-width: 480px){

  .works-header {
    width: 100%;
    height: 95px;
    box-shadow: none;
    position: fixed;
    z-index: 100;
    overflow: hidden;
    box-shadow: 0px 10px 0.01px 0 #dddddd;
  }

  .works-header h1 {
    font-size: 6vw;
    padding: 0px;
    height: 50%;
    margin-bottom: 20px;
    margin-top: -15px;
    margin-left: 20px;
  }

  .works-header ul {
    display: none;
  }

  .sp-works-ul {
    display: block;
    overflow: hidden;
    background-color: #43A1FF;
    width: 100%;
    height: 35px;
    border-top: 3px solid oldlace;
  }

  .sp-works-ul ul {
    float: right;
    width: 90%;
    padding: 0px;
    margin-top: 4px;
    margin-right: 20px;
    list-style: none;
    display: flex;
    justify-content: space-between;
  }

  .sp-works-ul li {
    font-size: 3vw;
  }

  .sp-works-header-router {
    color: #ffffff;
    text-decoration: none;
  }

  .portfoliointro-content {
    margin-top: 0px;
    padding-top: 130px;
  }

  .img-box {
    float: none;
    width: 90%;
    display: block;
    margin: 0 auto;
  }

  .site-img {
    width: 100%;
    height: 180px;
  }

  .site-link-img {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }

  .site-link-box {
    font-size: 3.5vw;
  }

  .skills-box {
    float: none;
    width: 100%;
    margin-top: 80px;
  }

  .skills-box h2 {
    font-size: 5vw;
    text-align: center;
  }

  .skills-box table {
    width: 80%;
    display: block;
    margin: 0 auto;
  }

  .skills-box td {
    padding-left: 20px;
  }

  .skills-box p {
    font-size: 3.5vw;
  }

  .portfoliointro-intro-box {
    width: 75%;
  }

  .portfoliointro-intro {
    font-size: 3.5vw;
    margin-top: 0px
  }

  .portfoliointro-intro h3 {
    font-size: 5vw;
    text-align: center;
    margin-bottom: 5px;
    margin-top: 30px;
  }

  .portfoliointro-intro img {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }

  footer p {
    font-size: 2.5vw;
  }

}


@media (min-width: 480px) and (max-width: 896px) {

  .works-header {
    width: 100%;
    height: 150px;
    box-shadow: none;
    position: fixed;
    z-index: 100;
    overflow: hidden;
    box-shadow: 0px 10px 0.01px 0 #dddddd;
  }

  .works-header h1 {
    font-size: 4vw;
    padding: 0px;
    height: 50%;
    margin-bottom: 20px;
    margin-top: 0px;
    margin-left: 30px;
  }

  .works-header ul {
    display: none;
  }

  .sp-works-ul {
    display: block;
    overflow: hidden;
    background-color: #43A1FF;
    width: 100%;
    height: 60px;
    border-top: 3px solid oldlace;
  }

  .sp-works-ul ul {
    float: right;
    width: 80%;
    padding: 0px;
    margin-top: 10px;
    margin-right: 20px;
    list-style: none;
    display: flex;
    justify-content: flex-end;
  }

  .sp-works-ul li {
    font-size: 2.5vw;
    margin-right: 10px;;
  }

  .sp-works-header-router {
    color: #ffffff;
    text-decoration: none;
  }

  .portfoliointro-content {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 250px;
  }

  .img-box {
    float: left;
    width: 50%;
  }

  .site-img {
    width: 100%;
    height: 200px;
    margin-top: 20px;
    box-shadow: 5px 5px 0.01px 0 #dddddd;
  }

  .site-link-img {
    width: 20px;
    height: 20px;
  }

  .skills-box {
    float: right;
    padding-right: 0px;
    width: 45%;
  }

  .skills-box h2 {
    font-size: 3vw;
  }

  .skills-box img {
    width: 40px;
    height: 40px;
    margin-top: 0px;
    filter: drop-shadow(2px 5px 0.01px #DDDDDD);
  }

  .skills-box p {
    font-size: 2vw;
    margin-top: 15px;
  }

  .portfoliointro-intro-box {
    margin: 70px auto 0px;
    width: 90%;
  }

  .portfoliointro-intro {
    font-size: 2vw;
    line-height: 2;
  }

  .portfoliointro-intro h3 {
    font-size: 3vw;
    font-weight: bold;
    margin-bottom: -30px;
  }

  .portfoliointro-intro a {
    text-decoration: none;
    color: #000000;
  }

  .portfoliointro-intro img {
    width: 20px;
    height: 20px;
  }

  footer {
    height: 46px;
    background-color: #43A1FF;
    margin-top: 50px;
  }

  footer p {
    font-size: 1.5vw;
    color: #ffffff;
    font-weight: bold;
    line-height: 2;
    text-align: center;
    padding-top: 10px;
  }

}

</style>
