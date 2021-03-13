<template>
  <div>
    <div class="works-header">
      <h1>今日のトレメニュー</h1>
      <ul>
        <li><router-link class="works-header-router" to="/">/ TOP</router-link></li>
        <li><router-link class="works-header-router" to="zibika">/ 耳鼻科</router-link></li>
        <li><router-link class="works-header-router" to="shots">/ SHOTS</router-link></li>
        <li><router-link class="works-header-router" to="iecafe">/ 家カフェ</router-link></li>
        <li><router-link class="works-header-router" to="ureshii">/ App1</router-link></li>
        <li><router-link class="works-header-router" to="wp1">/ WP</router-link></li>        
        <li><router-link class="works-header-router" to="portfoliointro">/ ポートフォリオ</router-link></li>
      </ul>
    <div class="sp-works-ul">
      <ul>
        <li><router-link class="sp-works-header-router" to="/">/ TOP</router-link></li>
        <li><router-link class="sp-works-header-router" to="zibika">/ 耳鼻科</router-link></li>
        <li><router-link class="works-header-router" to="shots">/ SHOTS</router-link></li>
        <li><router-link class="works-header-router" to="iecafe">/ カフェ</router-link></li>
        <li><router-link class="works-header-router" to="ureshii">/ App1</router-link></li>
        <li><router-link class="works-header-router" to="wp1">/ WP</router-link></li>
        <li><router-link class="sp-works-header-router" to="portfoliointro">/ ポートフォリオ</router-link></li>
      </ul>
    </div>
    </div>
    <div class="clearfix"></div>
    <div class="ureshii-content">
      <div class="img-box">
        <img class="site-img animate__animated animate__flipInX" src="../assets/works/kinntore-first-view.png" alt="">
        <p class="site-link-box"><a href="https://training-today-app.netlify.app" target="_blank">サイトはこちらから<img  class="site-link-img" src="../assets/works/newpage.png"></a></p>
        <p class="site-link-box"><a href="https://github.com/y-coffee/training-today-app" target="_blank">Githubはこちらから<img  class="site-link-img" src="../assets/works/newpage.png"></a></p>      
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
    <div class="ureshii-intro-box">
      <div class="ureshii-intro"><h3>－ 制作期間 －</h3><br>約1週間。SPAのWebアプリケーションです。<br><br><h3>－ 設定 －</h3><br>ジムで筋トレを行う際に持ち物を少なくしモチベーションのコントロールも可能にするWebアプリケーション。PC・スマートフォン・タブレットのレスポンシブ対応。<br><br><h3>－ 内容 －</h3><br>このWebアプリケーションは、趣味の筋トレをジムで行う際に感じていた不便さを解決する目的で制作しました。<br>具体的には、メニューを記載したノートや筆記用具そしてBGM用のデバイスを持ち歩くと荷物が増えるだけでなくジム内でもスペースをとってしまうため、これらを1つのWebアプリケーションにまとめることで最も荷物が少ないトレーニング環境を用意することに成功しています。<br>FirebaseのFirestoreをデータベースとして活用し、登録したデータ（筋トレメニュー）をクライアントサイドで表示させています。他のVue.jsを用いたSPAではaxiosを用いてデータのやり取りを行っていましたが、今回はdotenvを利用してデータのやり取りをしています。<br>実行し終えたメニューは、削除するか取り消し線を引くか選ぶことができ、帰宅後にトレーニングノートやログを記録したりするなど、環境に合わせて利用することが可能です。取り消し線のCSSはDOM操作によって切り替えています。</div>
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
          image: require('../assets/skills/nuxt-logo.png'),
          explain: 'サイトの枠組みとスタイルとクリック時の振舞いを決める関数作り。'
        },
        {
          id: 2,
          image: require('../assets/skills/firebase-logo.png'),
          explain: '入力されたデータのFirestoreへの保存。連携にはdotenvを利用'
        },
        {
          id: 3,
          image: require('../assets/skills/photoshop-logo.png'),
          explain: '画像の編集と加工。'
        },
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
  padding-left: 50px;
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
  width: 50%;
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


.ureshii-content {
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

.site-img {
  width: 100%;
  height: 400px;
  margin-top: 20px;
  box-shadow: 5px 5px 0.01px 0 #dddddd;
}

.site-link-img {
  width: 20px;
  height: 20px;
  margin-left: 10px;
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

.ureshii-intro-box {
  margin: 130px auto 0px;
  width: 90%;
}

.ureshii-intro {
  font-size: 20px;
  line-height: 2;
}

.ureshii-intro h3 {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: -30px;
  margin-top:60px;
}

.ureshii-intro a {
  text-decoration: none;
  color: #000000;
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

  .ureshii-content {
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
    height: 200px;
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


  .ureshii-intro-box {
    width: 75%;
  }

  .ureshii-intro {
    font-size: 3.5vw;
    margin-top: 0px
  }

  .ureshii-intro h3 {
    font-size: 5vw;
    text-align: center;
    margin-bottom: 5px;
    margin-top: 30px;
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
    margin-right: 10px;
  }

  .sp-works-header-router {
    color: #ffffff;
    text-decoration: none;
  }

  .ureshii-content {
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
    height: 225px;
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

  .ureshii-intro-box {
    margin: 70px auto 0px;
    width: 90%;
  }

  .ureshii-intro {
    font-size: 2vw;
    line-height: 2;
  }

  .ureshii-intro h3 {
    font-size: 3vw;
    font-weight: bold;
    margin-bottom: -30px;
  }

  .ureshii-intro a {
    text-decoration: none;
    color: #000000;
  }

  .ureshii-intro img {
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