<template>
  <div>
    <div class="h-screen w-screen flex">
      <div class="hidden lg:block h-full w-4/6 relative">
        <div class="absolute top-1/2 right-20 tittle-forms">
          <h1 class="text-5xl">!Explota todo tu potencial tecnologico!</h1>
          <h3 class="mt-8 text-2xl">
            Con nuestros programas
            <br />
            de especializacion
          </h3>
        </div>
        <div class="absolute left-20 top-6">
          <router-link to="/">
            <img src="../assets/images/logo-pachaqtec.png" alt="" />
          </router-link>
        </div>
        <div class="absolute bottom-10 left-20 patrociadores">
          <div><p class="text-respaldo text">Con respaldo de:</p></div>
          <div class="flex items-center justify-around">
            <img src="../assets/images/logo-intercorp-NE.png" alt="" />
            <img src="../assets/images/logo-idat-NE.png" alt="" />
            <img src="../assets/images/logo-zegel-NE.png" alt="" />
          </div>
        </div>
        <img class="h-full" src="../assets/images/fondo-azul.png" alt="" />
      </div>

      <div class="flex-1 h-screen flex justify-center items-center relative">
        <div class="absolute top-0 w-8/12 h-20 flex">
          <div class="flex-1">
            <button
              @click="showFormLogin"
              class="h-full w-full btn-login text-xl font-extrabold"
              autofocus
            >
              Iniciar Sesion
            </button>
          </div>
          <div class="flex-1">
            <button
              @click="showFormRegister"
              class="h-full w-full btn-register text-xl font-extrabold"
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
export default {
  components: {
    Login,
    Register,
  },
  data() {
    return {
      showRegister: false,
      showLogin: true,
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

.btn-register:focus {
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
.btn-login:focus {
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
.text-respaldo {
  color: white;
}
.patrociadores {
  width: 280px;
}
</style>
