<template>
  <div class="footer">
    <p>(C)2020 Smash Create</p>
  </div>
</template>



<script>
export default {
  name: 'PortfolioFooter'
}
</script>



<style scoped>
.footer {
  height: 46px;
  background-color: #43A1FF;
}

.footer p {
  font-size: 15px;
  color: #ffffff;
  font-weight: bold;
  line-height: 2;
  text-align: center;
  padding-top: 10px;
  margin-bottom: 0px;
}


@media (max-width: 480px){
  .footer p {
    font-size: 2.5vw;
  }
}

</style>