<template>
  <div class="h-4/6 w-3/4 flex justify-center">
    <form class="w-8/12 relative" @submit.prevent="creandoUsuario">
      <Input name="Nombres y apellidos" tipo="name">
          <input
            type="text"
            id="name"
            v-model="name"
            required
          />
      </Input>
      <Input name="Email" tipo="email">
          <input
            type="email"
            id="email"
            v-model="email"
            required
          />
      </Input>
      <Input name="Contraseña" tipo="password">
          <input
            type="password"
            id="password"
            v-model="password"
            required
          />
      </Input>
      <Input name="Contraseña" tipo="rpassword">
          <input
            type="password"
            id="rpassword"
            required
          />
      </Input>
      <div class="flex items-center mt-3">
        <input class="max-w-md mb-0" type="checkbox" id="checkbox" required />
        <label class="px-1 " for="checkbox"
          >Acepto
          <span class="font-bold underline"
            >Terminos y Condiciones
          </span></label
        >
      </div>

      <div class="mt-12 xl:mt-20">
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
import { mapState } from "vuex";
import Input from "../components/Input";

export default {
  components: {
    Btn,
    Input
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapState(["postulante"]),
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
input {
  border: 1px solid rgb(83, 83, 83);
  margin-bottom: 8px;
  border-radius: 5px;
  width: 100%;
}
</style>
