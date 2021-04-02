<template>
  <nav class="header">
    <div class="container mx-auto ">
      <div class="flex header__container justify-between">
        <img src="../assets/images/logo-pachaqtec.png" alt="" />
        <div class="header__item">
          <i class="material-icons hidden lg:inline-block mx-3"
            >shopping_cart</i
          >
          <i
            v-show="isLogOut"
            @click="loginOut"
            class="material-icons hidden lg:inline-block mx-3"
            >logout</i
          >
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
import firebase from "firebase";
import { userRoute, useRouter } from "vue-router";
import router from "../router";

export default {
  name: "HeaderP",
  data() {
    return {
      isActive: false,
      isLogOut: Boolean,
    };
  },
  methods: {
    menuOpenT() {
      this.isActive = !this.isActive;
    },
    loginOut() {
      try {
        firebase
          .auth()
          .signOut()
          .then(() => router.replace("/"));
        this.isLogOut = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    try {
      const user = firebase.auth().currentUser;
      if (!user) {
        this.isLogOut = false;
      } else {
        this.isLogOut = true;
      }
    } catch (error) {}
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
