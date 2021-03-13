<template>
  <div style="height: 100%; margin-top: 0px;  ">
    <portfolio-subtitle subtitle="Skills"></portfolio-subtitle>
    <div>
      <ul class="skills-ul-01">
        <li v-for="upperskill in upperskills" v-bind:key="upperskill.id">
          <img class="skills-image" v-bind:src="upperskill.image"/>
          <p class="skills-name">{{ upperskill.tag }}</p>
        </li>
      </ul>
    </div>
    <div>
      <ul class="skills-ul-02">
        <li v-for="lowerskill in lowerskills01" v-bind:key="lowerskill.id">
          <img class="skills-image" v-bind:src="lowerskill.image"/>
          <p class="skills-name">{{ lowerskill.tag }}</p>
        </li>
      </ul>
    </div>
    <div>
      <ul class="skills-ul-03">
        <li v-for="lowerskill in lowerskills02" v-bind:key="lowerskill.id">
          <img class="skills-image" v-bind:src="lowerskill.image"/>
          <p class="skills-name">{{ lowerskill.tag }}</p>
        </li>
      </ul>
    </div>
    <div>
      <ul class="skills-ul-04">
        <li v-for="lowerskill in lowerskills03" v-bind:key="lowerskill.id">
          <img class="skills-image" v-bind:src="lowerskill.image"/>
          <p class="skills-name">{{ lowerskill.tag }}</p>
        </li>
      </ul>
    </div>
    <p class="skills-help">各言語とAdobeツールについては下記をご覧ください。</p>
  </div>
</template>



<script>
import PortfolioSubtitle from '../components/PortfolioSubtitle.vue'

export default {
  name: 'PortfolioSkills',
  components: {
    PortfolioSubtitle
  },
  data() {
    return {
      upperskills: [
        {id: 1,
         image: require('../assets/skills/html5-logo.png'),
         tag: 'html5',
        },
        {id: 2,
         image: require('../assets/skills/css3-logo.png'),
         tag: 'css3',
        },
        {id: 3,
         image: require('../assets/skills/javascript-logo.png'),
         tag: 'JavaScript',
        },
      ],
      lowerskills01: [
        {id: 4,
         image: require('../assets/skills/jquery-logo.png'),
         tag: 'jQuery',
        },
        {id: 5,
         image: require('../assets/skills/php-logo.png'),
         tag: 'PHP'
        },
        {id: 6,
         image: require('../assets/skills/vuejs-logo.png'),
         tag: 'Vue.js',
        },
        {id: 7,
         image: require('../assets/skills/react-logo3.png'),
         tag: 'React.js'
        }
      ],
      lowerskills02: [
        {id: 8,
         image: require('../assets/skills/bootstrap-logo.png'),
         tag: 'Bootstrap',
        },
        {id: 9,
         image: require('../assets/skills/photoshop-logo.png'),
         tag: 'Photoshop',
        },
        {id: 10,
         image: require('../assets/skills/xd-logo.png'),
         tag: 'XD',
        },
        {id: 11,
         image: require('../assets/skills/figma-logo.png'),
         tag: 'Figma',
        },
      ],
      lowerskills03: [
        {id: 12,
         image: require('../assets/skills/react-native-logo.png'),
         tag: 'React Native'
        },
        {id: 13,
         image: require('../assets/skills/expo-logo.png'),
         tag: 'Expo'
        },
        {id: 14,
         image: require('../assets/skills/android-studio-logo.png'),
         tag: 'Android Studio'
        },
        {id: 15,
         image: require('../assets/skills/firebase-logo.png'),
         tag: 'Firebase'
        }
      ]
    }
  }
}
</script>



<style scoped>

.skills-ul-01 {
  list-style: none;
  padding-left: 0px;
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
}

.skills-ul-02 {
  list-style: none;
  padding-left: 0px;
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
}

.skills-ul-03 {
  list-style: none;
  padding-left: 0px;
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
}

.skills-ul-04 {
  list-style: none;
  padding-left: 0px;
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
}

.skills-image {
  width: 120px;
  height: 120px;
  filter: drop-shadow(5px 10px 0.01px #DDDDDD);
  margin: 0 auto;
  display: block;
}

.skills-name {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.skills-help {
  width: 80%;
  margin: 0 auto;
  font-size: 2vw;
  text-align: center;
  margin-top: 100px;
}


@media (max-width: 480px){

  .skills-ul-01 {
    width: 60%;
  }

  .skills-ul-02 {
    width: 80%;
  }

  .skills-ul-03 {
    width: 80%;
  }

  .skills-ul-04 {
    width: 80%;
  }

  .skills-image {
    width: 60px;
    height: 60px;
    margin: 0 auto;
  }

  .skills-name {
    font-size: 3vw;
    margin-top: 10px;
  }

  .skills-help {
    font-size: 4vw;
    width: 85%;
    margin: 50px auto 0;
  }


}


@media (min-width: 480px) and (max-width: 896px) {

  .skills-image {
    width: 100px;
    height: 100px;
  }

  /* .skills-ul-04 {
    width: 50%;
  } */

  .skills-help {
    font-size: 3vw;
    width: 80%;
    margin: 100px auto 0;
  }

}
</style>
