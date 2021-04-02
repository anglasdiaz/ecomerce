<template>
  <div class="h-4/6 w-3/4 flex justify-center">
    <form class="w-8/12 relative" @submit.prevent="logIn">
      <div class="flex flex-col">
        <label class="absolute left-2 px-1" for="email">Email</label>
        <input
          class="max-w-md"
          type="email"
          id="email"
          v-model="email"
          required
        />
      </div>
      <div class="flex flex-col mt-3">
        <label class="absolute left-2 px-1" for="password">Password</label>
        <input
          class="max-w-md"
          type="password"
          id="password"
          v-model="password"
          required
        />
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
import router from "../router";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    logIn() {
      try {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then((data) => this.$router.push("/"))
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    },
  },
  components: {
    Btn,
    Input,
  },
};
</script>

<style lang="scss">
//@import "../assets/css/variables.scss";

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
