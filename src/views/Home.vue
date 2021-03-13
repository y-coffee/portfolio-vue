<template>
  <div style="width: 100;">
    <humberger></humberger>
    <portfolio-header class="box-all"></portfolio-header>
    <portfolio-skills class="box-all"></portfolio-skills>
    <move-button class="box-all"></move-button>
    <portfolio-skills-info class="box-all"></portfolio-skills-info>
    <portfolio-works class="box-all"></portfolio-works>
    <portfolio-about-contact class="box-all"></portfolio-about-contact>
    <portfolio-footer class="box-all"></portfolio-footer>
  </div>
</template>



<script>
import PortfolioSkills from '../components/PortfolioSkills.vue'
import PortfolioSkillsInfo from '../components/PortfolioSkillsInfo.vue'
import PortfolioWorks from '../components/PortfolioWorks.vue'
import PortfolioAboutContact from '../components/PortfolioAboutContact.vue'
import PortfolioFooter from '../components/PortfolioFooter.vue'
import PortfolioHeader from '../components/PortfolioHeader.vue'
import MoveButton from '../components/MoveButton.vue'
import Humberger from '../components/Humberger.vue'

export default {
  data() {
    return {
      title: 'Yuki Unno\'s Portfolio Site',
    };
  },
  name: 'Home',
  components: {
    PortfolioHeader,
    PortfolioSkills,
    PortfolioSkillsInfo,
    PortfolioWorks,
    PortfolioAboutContact,
    PortfolioFooter,
    MoveButton,
    Humberger,
  },
}
</script>



<style>

template {
  margin: 0px;
  padding: 0px;
}

.box-all {
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
}

</style>
