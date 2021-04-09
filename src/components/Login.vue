<template>
  <div class="h-4/6 w-3/4 flex justify-center">
    <form class="w-8/12 relative" @submit.prevent="logIn">
      <Input name="Email" tipo="email1">
          <input
            type="email"
            id="email1"
            v-model="email"
            required
          />
      </Input>
      <Input name="Password" tipo="password1">
          <input
            type="password"
            id="password1"
            v-model="password"
            required
          />
      </Input>
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
import Input from "../components/Input";
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
    Input
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
  border: 1px solid #8B9099;
  margin-bottom: 8px;
  border-radius: 5px;
  width: 100%;
}
</style>
