<template>
  <div class=" px-10 flex justify-center">
    <form class=" w-full " @submit.prevent="logIn">
      <Input
        name="Email"
        tipo="email1"
        :class="{ error: validation.hasError('email') }"
      >
        <input type="email" id="email1" v-model="email" required />
        <div class="messages">{{ validation.firstError("email") }}</div>
      </Input>
      <Input
        name="Password"
        tipo="password1"
        :class="{ error: validation.hasError('password') }"
      >
        <input type="password" id="password1" v-model="password" required />
        <div class="messages">{{ validation.firstError("password") }}</div>
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
import SimpleVueValidation from "simple-vue-validator";
const Validator = SimpleVueValidation.Validator;
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  validators: {
    email: function(value) {
      return Validator.value(value)
        .required("Campo obligatorio.")
        .email("No es una dirección de correo electrónico válida.");
    },
    password: function(value) {
      return Validator.value(value)
        .required("Campo obligatorio.")
        .minLength(6, "Debe tener al menos 6 caracteres.");
    },
  },
  methods: {
    logIn() {
      try {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then((data) => this.$router.replace("/"))
          .catch((er) => console.log(er));
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
  border: 1px solid #8b9099;
  margin-bottom: 8px;
  border-radius: 5px;
  width: 100%;
}
.messages {
  color: red;
  font-size: 12px;
  margin-top: -2px;
  margin-bottom: 5px;
}
</style>
