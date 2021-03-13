<template>
    <div class="top animate__animated animate__fadeInDown">
      <div>
        <nav style="font-weight: bold;" class="header-nav">
          <ul v-for="navname in navnames" v-bind:key="navname.id" style="color: #000000">
            <li style="color: #ffffff;" v-on:click="navScroll(navname)">{{ navname.name }}</li>
          </ul>
        </nav>
      </div>
      <div style="clear: both;"></div>
      <h1 class="pc-site-title">{{ title }}</h1>
      <div class="sp-site-title-box">
        <p class="sp-site-title1">{{ sptitle1 }}</p>
        <p class="sp-site-title2">{{ sptitle2 }}</p>
      </div>
      <div class="arrow"><p>>></p></div>
    </div>
</template>



<script>
export default {
  name: 'PortfolioHeader',
  data() {
    return {
      title: 'Y. U\'s Portfolio Site',
      sptitle1: 'Y. U\'s',
      sptitle2: 'Portfolio Site',
      navnames: [
        {
          id: 1,
          name: 'Skills'
        },
        {
          id: 2,
          name: 'Works'
        },
        {
          id: 3,
          name: 'About and Contact'
        }
      ]
    }
  },
  methods: {
    navScroll: function(navname) {
      if(navname.id===1){
        window.scrollTo({
          top: 850,
          behavior: 'smooth'
      });
      } else if(navname.id===2){
        window.scrollTo({
          top: 5300,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({
          top: 6900,
          behavior: 'smooth'
        });
      }
    }
  }
}
</script>



<style scoped>
.top {
  background-image: url(../assets/portfolio-header/portfolio-firstview-bg4.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 900px;
  overflow: hidden;
}

.header-nav {
  font-size: 25px;
  color: #ffffff;
  padding-left: 0px;
  margin-right: 20px;
  list-style: none;
  float: right;
  width: 50%;
  display: flex;
  justify-content: flex-end;
}

.header-nav li {
  list-style: none;
  cursor: pointer;

}

.pc-site-title {
  display: block;
  font-size: 75px;
  font-weight: bold;
  text-align: center;
  margin-top: 170px;
  color: #ffffff;
  text-shadow:0 0 2px #000,0 0 2px #000,0 0 2px #000,0 0 2px #000,0 0 2px #000,0 0 2px #000,0 0 2px #000,0 0 2px #000,0 0 2px #000,0 0 2px #000,0 0 2px #000,0 0 2px #000,0 0 2px #000,0 0 2px #000,0 0 2px #000,0 0 2px #000;
}

.sp-site-title1 {
  display: none;
}

.sp-site-title2 {
  display: none;
}

.move-up-icon {
  position: fixed;
  right: 30px;
  bottom: 60px;
  opacity: 0.6;
}

.arrow  {
  transform: rotate(90deg);
  margin-top: 100vh;
  opacity: 0.5;
}

.arrow p {
  font-size: 70px;
  animation: arrow 3s infinite;
}

@keyframes arrow {
  0% { transform:translateX(0px); }
  50% { transform:translateX(50px); }
  100% { transform:translateX(  0px); }
}


/* スマートフォン*/
@media (max-width: 480px){

  .top {
    width: 100vw;
    height: 700px;
    background-image: none;
    background-size: contain;
    background-repeat: no-repeat;
    background-size: 170%;
  }

  .header-nav {
    display: none;
  }

  .arrow  {
    transform: rotate(90deg);
    margin-top: 220px;
    opacity: 0.5;
  }

  .arrow p {
        font-size: 13vw;
    animation: arrow 3s infinite;
  }

  @keyframes arrow {
    0% { transform:translateX(0px); }
    50% { transform:translateX(50px); }
    100% { transform:translateX(  0px); }
  }

  .pc-site-title {
    display: none;
  }

  .sp-site-title1 {
    display: block;
    text-align: center;
    font-size: 13vw;
    text-shadow:0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000;
    color: #ffffff;
    margin-top: 150px;
  }

  .sp-site-title2 {
    display: block;
    text-align: center;
    font-size: 13vw;
    text-shadow:0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000;
    color: #ffffff;
    margin-top: -40px;
  }

  .header-nav {
    width: 100%;
    font-size: 3vw;
  }

}

/* タブレット */
@media (min-width: 480px) and (max-width: 896px) {

  .top {
    background-image: none;
    width: 100%;
    height: 1000px;
  }

  .header-nav {
    display: none;
  }

  .pc-site-title {
    display: none;
  }

  .sp-site-title1 {
    display: block;
    text-align: center;
    font-size: 10vw;
    text-shadow:0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000;
    color: #ffffff;
    margin-left: 40px;
    margin-top: 300px;
  }

  .sp-site-title2 {
    display: block;
    text-align: center;
    font-size: 10vw;
    text-shadow:0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000,0 0 1px #000;
    color: #ffffff;
    margin-left: 40px;
    margin-top: -80px;
  }

  .arrow  {
    transform: rotate(90deg);
    font-size: 10vw;
    margin-top: 400px;
    opacity: 0.5;
  }

  .arrow p {
    animation: arrow 3s infinite;
  }

  @keyframes arrow {
    0% { transform:translateX(0px); }
    50% { transform:translateX(50px); }
    100% { transform:translateX(  0px); }
  }


}
</style>
