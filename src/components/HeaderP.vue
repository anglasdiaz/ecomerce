<template>
  <nav class="header">
    <div class="container mx-auto ">
      <div class="flex header__container justify-between">
        <router-link to="/"
          ><img src="../assets/images/logo-pachaqtec.png" alt=""
        /></router-link>
        <div class="header__item relative">
          <span class="globo absolute">{{ this.shopCart.length }}</span>
          <router-link to="/shoppingcart">
            <i class="material-icons hidden lg:inline-block mx-3"
              >shopping_cart</i
            >
          </router-link>
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
      <router-link to="/"
        ><li class="my-1">Inicio</li></router-link>
      <router-link to="/formview"
        ><li class="my-1">Iniciar Sesión</li></router-link>
      <router-link to="/formview"
        ><li class="my-1">Registrarse</li></router-link>
    </ul>
  </nav>
</template>

<script>
import firebase from "firebase";
import { userRoute, useRouter } from "vue-router";
import router from "../router";
import { mapState } from "vuex";

export default {
  name: "HeaderP",
  data() {
    return {
      isActive: false,
      isLogOut: false,
    };
  },
  computed: {
    ...mapState(["shopCart"]),

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
  methods: {
    menuOpenT() {
      this.isActive = !this.isActive;
    },
    async verify() {
      try {
        const user = await firebase.auth().currentUser;
        if (user) {
          this.isLogOut = true;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    await this.verify();
  },
  mounted() {},
};
</script>
<style lang="scss">
@import "../assets/css/variables.scss";

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
  &__count {
    color: black;
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
.globo{
    top: -5px;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #5640FF;
    left: 25px;
    display: flex;
    align-items: center;
}
</style>
