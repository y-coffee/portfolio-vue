<template>
  <div class="about-and-contact">
    <portfolio-subtitle subtitle="About and Contact"></portfolio-subtitle>
    <div>
      <table class="about-contact-table">
        <tbody>
          <tr v-for="about in abouts" v-bind:key="about.id">
            <th>{{ about.title }}</th>
            <td><p>{{ about.content }}</p></td>
          </tr>
          <tr>
            <th>連絡</th>
            <td>－ 直接 －<br>y.coffee.engineer[あっと]gmail.com<br>[あっと]を@に変更してご連絡ください。<br><br>－ お問合せフォーム －<br>FirebaseのFirestoreを使用したお問い合わせフォームを設置しています。<br><b>▶</b><router-link style="contact-link" to="/contactform"> お問い合わせフォーム</router-link></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>



<script>
import PortfolioSubtitle from '../components/PortfolioSubtitle.vue'

export default {
  data() {
    return {
      abouts: [
        {id: 1,
         title: '略歴',
         content: '大学院進学を機に故郷の静岡県から上京。卒業後はサービス業に従事しつつ、小規模ですが副業としていわゆるesportsの分野にてWebライターをしたり、ホテルや学習塾で用いられる黒板やホワイトボードのポップ作成をしたりしていました。\n\nこれらの活動の中でWebを支える諸技術に触れ、次第にその業界で働きたいと考えるようになり、現在フロントエンドエンジニアを目指し求職中です。\n\n未経験の分野なので、独学で可能な限りできることを増やそうと本ポートフォリオサイト(とここで紹介している架空サイト群やネイティブアプリ)を制作しました。まだまだ知識や経験値の足りなさを実感していますが、前向きに自走しているところを少しでもお伝えできればと思います。\n\nコーディングとプログラミングで心がけていることは読みやすく書くことです。UIデザインのコンセプトやUX上の知識などどんどん採り入れていきたいと考えながら制作をしています。'
        },
        {id: 2,
         title: '趣味',
         content: '筋トレ。柔道再開のために始めました。ある程度身体的なパフォーマンスは戻ってきましたが、コロナ禍にフルコンタクト競技はできないのでこのままウエイトトレーニングを続けようという今日この頃です。挙上重量の目標数値を設定し、それを達成するための効果的なトレーニングを時期に合わせて着実に実行することが得意です。\n\n対戦ゲーム。狭くプレイしています。好きが高じて上記のWebライターの経験につながりました。\n\n少しでも興味を持った事柄についてはまずやってみる性格です。'
        }
      ]
    }
  },
  name: 'PortofolioAboutContact',
  components: {
    PortfolioSubtitle
  }
}
</script>



<style scoped>

.about-and-contact {
  margin-top: 250px;
  padding-bottom: 40px;

}

.about-contact-table {
  width: 75%;
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 0px 40px;
}

.about-contact-table th {
  width: 20%;
  font-size: 30px;
  vertical-align: top;
}

.about-contact-table td {
  width: 80%;
  font-size: 20px;
  white-space: pre-line;
  padding-bottom: 60px;
}

.contact-link {
  text-decoration: none;
  border-bottom: none;
}

a:hover {
  text-decoration: none;
  border-bottom: none;
}


@media (max-width: 480px){

  .about-and-contact {
    margin-top: 150px;
    padding-bottom: 0px;
  }

  .about-contact-table {
    margin-top: -40px;
  }

  .about-contact-table td {
    font-size: 3.5vw;
    display: block;
    width: 100%;
  }

  .about-contact-table th {
    font-size: 6vw;
    display: block;
    width: 100%;
  }

}


@media (min-width: 480px) and (max-width: 896px) {

  .about-and-contact {
    margin-top: 2300px;
  }

}

</style>
