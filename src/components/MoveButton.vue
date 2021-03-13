<template>
  <div style=" overflow: hidden;">
      <font-awesome-icon class="move-up-icon" v-if="show" v-on:click="moveTop" icon="arrow-circle-up" size="6x" :style="{color: '#43A1FF'}" />
  </div>
</template>



<script>
export default {
  name: 'MoveButton',
  data() {
    return {
      show: false
    }
  }, 
  mounted() {
    window.addEventListener('scroll', () => {
      this.show = (window.scrollY > 2400);
    });
  },
  methods: {
    moveTop: function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>



<style scoped>
.move-up-icon {
  position: fixed;
  bottom: 50px;
  right: 10px;
  opacity: 0.6;
}


@media (max-width: 480px){

  .move-up-icon {
    font-size: 17vw;
    bottom: 60px
  }

}

</style>