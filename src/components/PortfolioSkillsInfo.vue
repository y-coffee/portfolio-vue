<template>
  <div class="skills-info">
    <table class="skills-info-table">
      <tbody>
        <tr v-for="skillinfo in skillinfos" v-bind:key="skillinfo.id">
          <th style="vertical-align: top;"><img v-bind:src="skillinfo.image"></th>
          <td><p>{{ skillinfo.explain }}</p></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>



<script>
export default {
  data() {
    return {
      skillinfos: [
        {id: 1,
         image: require('../assets/skills/html5-logo.png'),
         explain: '－ HTML5 －\nWebサイトの骨組みを組むことができます。'
        },
        {id: 2,
         image: require('../assets/skills/css3-logo.png'),
         explain: '－ CSS3 －\nWebサイトのレスポンシブ対応ができます。\nflexやanimationの使用や、クリックされた際のデザイン変更など、CSSで表現できることを意識しながら使用しています。'
        },
        {id: 3,
         image: require('../assets/skills/javascript-logo.png'),
         explain: '－ JavaScript －\n条件分岐やユーザー定義関数を用いてアプリケーションを組むことができます。\nたとえば、本サイト「Works」内にある「架空耳鼻咽喉科サイト」上の子供向けスロットゲームや「NativeApp紹介サイト」上にある外部APIを利用した検索サービスの実装などです。\n\nWebアプリケーションやネイティブアプリ制作を通じて同期処理だけでなく非同期処理のプログラムの学習と実装をしています。'
        },
        {id: 4,
         image: require('../assets/skills/jquery-logo.png'),
         explain: '－ jQuery －\n現在はJavaScriptの理解を深めるためにjQueryを多く使用することは避けていますが、基本的な文法は理解しています。',
        },
        {id: 5,
         image: require('../assets/skills/php-logo.png'),
         explain: '－ PHP －\n本サイト「Works」内にある「架空写真家サイトSHOTS」上のお問合せフォームをPHPで作りました。\n入力チェックのバリデーションの他に、セキュリティ面ではサニタイズ、クロスサイトスクリプティング、クロスサイトリクエストフォージェリ対策の施策を行っています。'
        },
        {id: 6,
         image: require('../assets/skills/vuejs-logo.png'),
         explain: '－ Vue.js －\nVue.jsを用いて本サイトを制作しました。\nコンポーネント管理による修正・保守のしやすさが売りのJavaScriptフレームワークなので、サイト内で再利用ができそうなUI部品はコンポーネント化するようにしています。',
        },
        {id: 7,
         image: require('../assets/skills/react-logo3.png'),
         explain: '－ React －\n本サイト「Works」内にある「NativeApp紹介サイト」の制作をこちらで行っています。\nコンポーネント管理に優れたJavaScriptライブラリという特徴を活かして、Vue.jsを用いた際と同様に再利用できそうなUI部品は適宜スタイルを変更したり、propsで値を渡すことで条件分岐させてレンダリングしたりするなどしながら積極的に利用しています。',
        },
        {id: 8,
         image: require('../assets/skills/bootstrap-logo.png'),
         explain: '－ Bootstrap －\n本ポートフォリオサイト上の問合せフォームのスタイルを整えるために一部使用しました。'
        },
        {id: 9,
         image: require('../assets/skills/photoshop-logo.png'),
         explain: '－ Adobe Photoshop －\nサイト制作で必要になった画像の編集はこちらで行っています。\n画像の編集・加工などをすることができます。',
        },
        {id: 10,
         image: require('../assets/skills/xd-logo.png'),
         explain: '－ Adobe XD －\n本サイトや他の架空サイトのデザインカンプはこれを用いて作成しました。',
        },
        {id: 11,
         image: require('../assets/skills/figma-logo.png'),
         explain: '－ Figma －\n本サイト「Works」内にあるCRUDネイティブアプリ「NativeApp『今日のトレメニュー』」のデザインカンプをこちらで行っています。',
        },
        {id: 12,
         image: require('../assets/skills/react-native-logo.png'),
         explain: '－ React Native －\n「NativeApp『今日のトレメニュー』」の制作をこちらで行っています。',
        },
        {id: 13,
         image: require('../assets/skills/expo-logo.png'),
         explain: '－ Expo －\n「NativeApp『今日のトレメニュー』」の制作時にクライアントサイドでチェックするために利用しました。',
        },
        {id: 14,
         image: require('../assets/skills/android-studio-logo.png'),
         explain: '－ Andriod Studio －\n「NativeApp『今日のトレメニュー』」をPC上のエミュレーターを利用して制作するために利用しました。',
        },
        {id: 15,
         image: require('../assets/skills/firebase-logo.png'),
         explain: '－ Firebase －\n本サイト「Works」内にある以下の3つの制作物のバックエンドとして利用しました。\n\n1つ目は「うれしかったリスト」で、ユーザー登録にAuthenticationを、データベースにFirestoreを利用しました。\n2つ目は本ポートフォリオサイトで、お問い合わせフォームから送られたデータの保存にFirestoreを利用しました。\n3つ目はネイティブアプリ「今日のトレメニュー」で、ログイン認証機能にAuthentication、ユーザーが作成したデータの保存にFirestoreを利用しました。',
        }
      ]
    }
  },
  name: 'PortfolioSkillsInfo',
}
</script>



<style scoped>
.skills-info {
  margin-top: 100px;
}

.skills-info-table {
  width: 80%;
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 0px 40px;
}

.skills-info-table th {
  width: 10%;
}

.skills-info-table td {
  width: 80%;
  font-size: 20px;
  color: #000000;
}

.skills-info-table img {
  width: 70px;
  height: 70px;
  filter: drop-shadow(5px 10px 0.01px #DDDDDD);
}

.skills-info-table p {
  white-space: pre-line;
}


@media (max-width: 480px){

  .skills-info {
    margin-top: 50px;
  }

  .skills-info-table {
    width: 75%;
  }

  .skills-info-table img {
    width: 50px;
    height: 50px;
    display: block;
    margin: 0 auto;
  }

  .skills-info-table td {
    display: block;
    width: 100%;
    font-size: 3.5vw;
    margin-top: 30px;
  }

  .skills-info-table th {
    display: block;
    width: 100%;
    font-size: 3.5vw;
  }

}


@media (min-width: 480px) and (max-width: 896px) {

  .skills-info {
    margin-top: 150px;
  }

  .skills-info-table td {
    font-size: 2.7vw;
    padding-bottom: 50px;
  }

}

</style>
