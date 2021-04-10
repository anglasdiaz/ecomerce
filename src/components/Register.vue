<template>
  <div class="px-10 flex justify-center">
    <form class="w-full relative" @submit.prevent="creandoUsuario">
      <Input name="Nombres y apellidos" tipo="name" :class="{error: validation.hasError('name')}">
          <input
            type="text"
            id="name"
            v-model="name"
            required
          />
          <div class="messages">{{ validation.firstError('name') }}</div>
      </Input>
      <Input name="Email" tipo="email" :class="{error: validation.hasError('email')}">
          <input
            type="email"
            id="email"
            v-model="email"
            required
          />
          <div class="messages">{{ validation.firstError('email') }}</div>
      </Input>
      <Input name="Contraseña" tipo="password" :class="{error: validation.hasError('password')}">
          <input
            type="password"
            id="password"
            v-model="password"
            required
          />
          <div class="messages">{{ validation.firstError('password') }}</div>
      </Input>
      <Input name="Contraseña" tipo="rpassword" :class="{error: validation.hasError('repeat')}" >
          <input
            type="password"
            id="rpassword"
            required
            v-model="repeat"
          />
          <div class="messages">{{ validation.firstError('repeat') }}</div>
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

      <div class="mt-12 xl:mt-24">
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
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator;

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
      repeat: ''
    };
  },
  computed: {
    ...mapState(["postulante"]),
  },
  validators: {
      name: function(value) {
        return Validator.value(value).required('Campo obligatorio.').regex('^[A-Za-z]*$', 'Solo debe contener caracteres alfabéticos.');
      },
      email: function(value) {
        return Validator.value(value).required('Campo obligatorio.').email('No es una dirección de correo electrónico válida.');
      },
      password: function(value) {
        return Validator.value(value).required('Campo obligatorio.').minLength(6,'Debe tener al menos 6 caracteres.');;
      },
      'repeat, password': function (repeat, password) {
        if (this.submitted || this.validation.isTouched('repeat')) {
          return Validator.value(repeat).required('Campo obligatorio.').match(password);
        }
      }
    },
  methods: {
    submit: function() {
        this.$validate()
          .then(function(success) {
          });
      },
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
  border: 1px solid #8B9099;
  margin-bottom: 8px;
  border-radius: 5px;
  width: 100%;
}
.messages{
  color: red;
  font-size: 12px;
  margin-top: -2px;
  margin-bottom: 5px;
}
</style>
