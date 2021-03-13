<template>
  <div>
    <div class="mobile-header">
      <font-awesome-icon v-on:click="show=!show" class="humberger-button" icon="bars" size="2x" :style="{color: '#ffffff'}"></font-awesome-icon>
      <nav class="humberger-menu" v-show="show">
        <ul v-for="navname in navnames" v-bind:key="navname.id">
          <li v-on:click="show=!show; spScroll(navname)" class="nav-item">{{ navname.name }}</li>
        </ul>
        <p class="attention" v-show="show">ブラウザはChromeとFirefox推奨。それ以外のブラウザをお使いの場合はTOPページをスクロールしてください。</p>
      </nav>
    </div>
  </div>
</template>



<script>
export default {
  name: 'Humberger',
  data() {
    return {
      show: false,
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
    spScroll: function(navname){
      if(window.matchMedia('(max-width: 480px)').matches){
        if(navname.id===1){
          window.scrollTo({
            top: 600,
            behavior: 'smooth',
        });
        } else if(navname.id===2){
          window.scrollTo({
            top: 5750,
            behavior: 'smooth'
          });
        } else {
          window.scrollTo({
            top: 8050,
            behavior: 'smooth'
          });
        }
      } else if (window.matchMedia('(min-width: 480px) and (max-width: 896px)').matches){
        if(navname.id===1){
          window.scrollTo({
            top: 800,
            behavior: 'smooth',
        });
        } else if(navname.id===2){
          window.scrollTo({
            top: 6950,
            behavior: 'smooth'
          });
        } else {
          window.scrollTo({
            top: 11950,
            behavior: 'smooth'
          });
        }
      }
    }
  }
}
</script>



<style scoped>
.mobile-header {
  display: none;
}


@media (max-width: 480px) {

  .mobile-header {
    display: block;
    width: 100%;
    height: 60px;
    position: fixed;
    z-index: 100;
    background-color: #43A1FF;
    box-shadow: 0px 10px 0.01px 0 #dddddd;
  }

  .humberger-button {
    position: absolute;
    top: 13px;
    right: 20px;
  }

  .humberger-button-times {
    position: absolute;
    top: 13px;
    right: 20px;
  }

  .humberger-menu {
    background-color: #43A1FF;
    background-size: cover;
    height: 100vh;
    animation: fadeIn 1.5s ease 0s 1 normal;
    margin-top: 45px;
  }

  .humberger-menu ul{
    list-style: none;
    padding-top: 100px;
  }

  .humberger-menu li {
    font-size: 8vw;
    color: #ffffff;
    margin-bottom: -100px;
    cursor: pointer;
    user-select: none;
  }

  .attention {
    font-size: 3vw;
    color: #ffffff;
    margin-bottom: -100px;
    width: 80%;
    margin: 0 auto;
    padding-top: 120px;
  }

}


@media (min-width: 480px) and (max-width: 896px) {

  .mobile-header {
    display: block;
    width: 100%;
    height: 100px;
    position: fixed;
    z-index: 100;
    background-color: #43A1FF;
    box-shadow: 0px 10px 0.01px 0 #dddddd;
  }

  .humberger-button {
    position: absolute;
    top: 13px;
    right: 20px;
    font-size: 8vw;
  }

  .humberger-button-times {
    position: absolute;
    top: 13px;
    right: 20px;
  }

  .humberger-menu {
    background-color: #43A1FF;
    background-size: cover;
    height: 100vh;
    animation: fadeIn 1.5s ease 0s 1 normal;
    margin-top: 80px;
    position: fixed;
    overflow-y: scroll;
  }

  .humberger-menu ul{
    list-style: none;
    padding-top: 100px;
    -webkit-overflow-scrolling: touch;
  }

  .humberger-menu li {
    font-size: 5vw;
    color: #ffffff;
    margin-bottom: -100px;
  }

  .attention {
    font-size: 3vw;
    color: #ffffff;
    margin-bottom: -100px;
    width: 80%;
    margin: 0 auto;
    padding-top: 120px;
    padding-bottom: 200px;
  }


}
</style>
