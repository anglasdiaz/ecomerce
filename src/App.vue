<template>
  <div class="" >
        <!-- <div class="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div> -->
      <router-view />
      <div class="icon-chat">
        <img src="@/assets/images/icon-whatssap.png" alt="">
      </div>
      <footerP></footerP>
  </div>
</template>

<script>

import footerP from '@/components/footerP.vue'
export default {
   name: 'App',
   components:{
     footerP
   }
}
</script>
<style lang="scss">
@import "./assets/css/variables.scss";
  .banner{
    background-image: url('~@/assets/images/fondo-azul.png');
    background-size: cover;
    color:#fff;
    height: 400px;
    @include mediaQ(679px){
    height: 480px;
      }
  }
  .icon-chat{
    position: fixed;
    right: 1.5em;
    bottom: 1.5em;
    cursor: pointer;
  }

</style>
