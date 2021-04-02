<template>
  <div class="h-4/6 w-3/4 flex justify-center">
    <form class="w-8/12 relative" @submit.prevent="creandoUsuario">
      <div class="flex flex-col">
        <label class="absolute left-2 px-1" for="name"
          >Nombres y apellidos</label
        >
        <input class="max-w-md" type="text" id="name" required v-model="name" />
      </div>
      <div class="flex flex-col mt-3">
        <label class="absolute left-2 px-1" for="email">Email</label>
        <input
          class="max-w-md"
          type="email"
          id="email"
          required
          v-model="email"
        />
      </div>
      <div class="flex flex-col mt-3">
        <label class="absolute left-2 px-1" for="password">Contrasenia</label>
        <input
          class="max-w-md"
          type="password"
          id="password"
          required
          v-model="password"
        />
      </div>
      <div class="flex flex-col mt-3">
        <label class="absolute left-2 px-1" for="rpassword"
          >Repite contrasenia</label
        >
        <input class="max-w-md" type="password" id="rpassword" required />
      </div>
      <div class="flex items-center mt-3">
        <input class="max-w-md mb-0" type="checkbox" id="checkbox" required />
        <label class="px-1" for="checkbox"
          >Acepto
          <span class="font-bold underline"
            >Terminos y Condiciones
          </span></label
        >
      </div>

      <div class="mt-12 xl:mt-64">
        <Btn class="max-w-md" name="Ingresar" />
        <div class="flex justify-center mt-5 forgot-password">
          <router-link to="/">Olvidaste contrasenia?</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Btn from "../components/Btn";
import firebase from "firebase";

export default {
  components: {
    Btn,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async creandoUsuario() {
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((data) => console.log(data));
        const user = await firebase.auth().currentUser;
        user.displayName = this.name;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.forgot-password {
  text-decoration: underline;
  font-weight: bolder;
  color: #5640ff;
}
</style>
