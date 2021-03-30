<template>
  <div class="">
    <!-- <div class="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
<style lang="scss">
@import "./assets/css/variables.scss";
.banner {
  background-image: url("~@/assets/images/fondo-azul.png");
  background-size: cover;
  color: #fff;
  height: 400px;
  @include mediaQ(679px) {
    height: 480px;
  }
}
</style>
