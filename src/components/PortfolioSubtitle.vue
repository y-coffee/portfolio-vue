<template>
  <div class="subtitle-box">  
      <h2 class="subtitle" v-bind:href="subtitle">{{ subtitle }}</h2>
  </div>
</template>



<script>
export default {
  name: 'PortfolioSubtitle',
  props: {
    subtitle: String
  }
}
</script>



<style scoped>
.subtitle-box {
  width: 80%;
  border-bottom: solid 3px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 50px;
}

.subtitle {
  font-size: 60px;
  margin-bottom: 20px;
}


@media (max-width: 480px){
  .subtitle {
    font-size: 10vw;
  }
}
</style>