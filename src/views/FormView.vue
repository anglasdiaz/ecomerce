<template>
  <div>
    <div class="  flex h-screen">
      <div class="hidden lg:block  width-7 relative fondo">
        <div class="pl-20 my-6 absolute bottom-0 top-0 w-full flex flex-col justify-between">
          <div class="absolute top-1/2 right-20 tittle-forms">
          <h1 class="text-5xl title__principal__2">
            !Explota todo tu potencial <br />
            tecnologico!
          </h1>
          <h3 class="mt-8 subtitle__basic">
            Con nuestros programas
            <br />
            de especializacion
          </h3>
        </div>
        <div class=" left-20 top-6">
          <router-link to="/">
            <img src="../assets/images/logo-pachaqtec.png" alt="" />
          </router-link>
        </div>
        <div class=" patrociadores">
          <div><p class="text__small">Con respaldo de:</p></div>
          <div class="flex items-center justify-between">
            <img src="../assets/images/logo-intercorp-NE.png" alt="" />
            <img src="../assets/images/logo-idat-NE.png" alt="" />
            <img src="../assets/images/logo-zegel-NE.png" alt="" />
          </div>
        </div>
        </div>
      </div>

      <div class="  width-3">
        <div class="  flex tab">
          <div class="flex-1 "> 
            <button
              @click="showFormLogin"
              class="h-full w-full btn-login subtitle__third__2 tab__item"
            >
              Iniciar Sesion
            </button>
          </div>
          <div class="flex-1 ">
            <button
              @click="showFormRegister"
              class="h-full w-full btn-register subtitle__third__2 tab__item"
              autofocus
            >
              Registrarse
            </button>
          </div>
        </div>
        <Register v-show="showRegister" />
        <Login v-show="showLogin" />
      </div>
    </div>
  </div>
</template>

<script>
import Login from "../components/Login";
import Register from "../components/Register";
import firebase from "firebase";
import { userRouter, userRoute } from "vue-router";
import router from "../router";

export default {
  components: {
    Login,
    Register,
  },
  data() {
    return {
      showRegister: true,
      showLogin: false,
      router: userRoute,
    };
  },

  methods: {
    showFormLogin() {
      this.showRegister = false;
      return (this.showLogin = true);
    },
    showFormRegister() {
      this.showLogin = false;
      return (this.showRegister = true);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/css/variables.scss";
 .fondo{
   background-image: url("~@/assets/images/fondo-azul.png");
   background-size: cover;
 }
.btn-register:focus, .btn-register:active {
  outline: none;

  border-bottom: 6px solid #000425;
  @include mediaQ(1024px) {
    border-bottom: 4px solid black;
  }
}
.btn-register {
  color: #000425;
  @include mediaQ(1024px) {
    color: black;
  }
}
.btn-login:focus, .btn-login:active {
  outline: none;

  border-bottom: 6px solid #000425;
  @include mediaQ(1024px) {
    border-bottom: 4px solid black;
  }
}
.tittle-forms {
  text-align: right;
  width: 600px;
  height: 200px;
  font-weight: bolder;
  color: white;
}
.tab{
  box-shadow: 1px 0 3px #0a0a0a6e;
  margin-bottom: 2em;
  &__item{
    padding: 1.5em;
  }
}
.patrociadores {
  width: 220px;
  color: white;
}
</style>
