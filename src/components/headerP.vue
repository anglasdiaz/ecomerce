<template>
  <nav class="header">
    <div class="container mx-auto ">
      <div class="flex header__container justify-between">
        <img src="../assets/images/logo-pachaqtec.png" alt="" />
        <div class="header__item">
          <i class="material-icons mx-3">shopping_cart</i>
          <i @click="menuOpenT" class="material-icons">menu</i>
        </div>
      </div>
    </div>
    <ul class="menu" :class="{ active: isActive }">
      <li class="flex justify-end">
        <i class="material-icons " @click="menuOpenT">close</i>
      </li>
      <li class="my-1">Iniciar Sesión</li>
      <li class="my-1">Registrarse</li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "headerP",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    menuOpenT() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
<style lang="scss">
@import "../assets/css/variables.scss";
//mixins
@mixin mediaQ($breakpoint) {
  @media screen and (min-width: $breakpoint) {
    @content;
  }
}
.header {
  //background-color: #000;
  &__container {
    padding: 1.5em 0;
    margin-right: 1em;
    margin-left: 1em;
    @include mediaQ(796px) {
      margin: 0;
    }
  }
  &__item {
    color: #fff;
  }
}
.menu {
  position: fixed;
  padding: 1em;
  transform: translateX(300px);
  transition: transform 0.5s;
  width: 300px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  right: 0;
  color: #000;
  top: 0;
  bottom: 0;
  z-index: 99;
  &.active {
    transform: translateX(0);
  }
}
.material-icons {
  cursor: pointer;
}
</style>
