<template>
  <div class="works">
    <portfolio-subtitle subtitle="Works"></portfolio-subtitle>
    <p class="works-help">Webサイトをクリックするとサイト説明や使用されたスキルを見ることができます。</p>
    <div>
      <ul class="works-introdaction" ontouchstart="">
        <li v-for="work in works" v-bind:key="work.id">
          <p>{{ work.title }}</p>
          <router-link :to="work.url"><img class="work-image" ontouchstart="" v-bind:src="work.image"></router-link>
        </li>
        <li>
          <p>－ 準備中 －</p>
          <img src="../assets/works/comingsoon.jpg" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>



<script>
import PortfolioSubtitle from '../components/PortfolioSubtitle.vue'

export default {
  data() {
    return {
      works: [
        {id: 1,
         title: '－ 本ポートフォリオサイト －',
         image: require('../assets/works/portfolio2.jpg'),
         url: 'portfoliointro'
        },
        {id: 2,
         title: '－ うれしかったリスト －',
         image: require('../assets/works/ureshii-list-firstview.jpg'),
         url: 'ureshii'
        },
        {id: 3,
         title: '－ NativeApp「今日のトレメニュー」 －',
         image: require('../assets/works/app-firstview.png'),
         url: 'TMTApp'
        },
        {id: 4,
         title: '－ NativeApp紹介サイト －',
         image: require('../assets/works/tremenu-site-firstview.png'),
         url: 'TMTSite'
        },
        {id: 5,
         title: '－ 架空耳鼻咽喉科サイト －',
         image: require('../assets/works/zibika-firstview.jpg'),
         url: 'zibika'
        },
        {id: 6,
         title: '－ 架空写真家サイト －',
         image: require('../assets/works/shots-firstview.jpg'),
         url: 'shots'
        },
        // {id: 3,
        //  title: '－ 架空家カフェサイト －',
        //  image: require('../assets/works/iecafe-firstview.jpg'),
        //  url: 'iecafe'
        // },
        // {id: 5,
        //  title: '－ 今日のトレメニュー －',
        //  image: require('../assets/works/kinntore-first-view.png'),
        //  url: 'trainingtoday'
        // },
        // {id: 6,
        //  title: '－ Androidアプリ －',
        //  image: require('../assets/works/app-firstview.png'),
        //  url: 'wp1'
        // },
        // {id: 6,
        //  title: '－ WordPressサイト －',
        //  image: require('../assets/works/wp1-firstview.jpg'),
        //  url: 'wp1'
        // },
      ]
    }
  },
  components: {
    PortfolioSubtitle
  },
  name: 'PortfolioWorks'
}
</script>



<style scoped>
.works {
  margin-top: 150px;
}

.works-help{
  font-size: 2vw;
  text-align: center;
}

.works-introdaction {
  padding-left: 0px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
}

.works-introdaction li {
  width: 45%;
}

.works-introdaction p {
  font-size: 20px;
  padding-top: 30px;
  text-align: center;
}

.works-introdaction img {
  transition-duration: 0.3s;
  width: 350px;
  height: 200px;
  display: block;
  margin: 0 auto;
  box-shadow: 5px 10px 0.01px 0 #dddddd;
}

.works-introdaction img:hover {
  transform: scale(1.1);	/*画像の拡大率*/
	transition-duration: 0.2s;
}


@media (max-width: 480px){

  .works {
    margin-top: 100px;
  }

  .works-help {
    font-size: 4vw;
    width: 80%;
    margin: 50px auto 30px;
  }

  .works-introdaction {
    width: 90%;
    display: block;
  }

  .works-introdaction li {
    width: 100%;
  }

  .works-introdaction p {
    font-size: 3.5vw;
  }

  .works-introdaction img {
    width: 270px;
    height: 180px;
    margin: 0 auto;
    margin-bottom: 30px;
  }

}


@media (min-width: 480px) and (max-width: 896px) {

  .works{
    height: 2750px;
  }

  .works-help {
    font-size: 2.7vw;
    width: 80%;
    margin: 50px auto 100px;
  }

  .works-introdaction {
    width: 90%;
    display: block;
  }

  .works-introdaction li {
    width: 100%;
    margin-bottom: 100px;
  }

  .works-introdaction p {
    font-size: 3.5vw;
  }

  .works-introdaction img {
    width: 540px;
    height: 360px;
    margin: 0 auto;
  }

}
</style>
