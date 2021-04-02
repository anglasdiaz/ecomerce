<template>
  <div class="h-4/6 w-3/4 flex justify-center">
    <form class="w-8/12 relative" @submit.prevent>
      <Input name="Email" for="correo">
          <input type="email" id="correo"  required/>
      </Input>
      <Input name="Password" for="contraseña">
          <input type="text" id="contraseña"  required/>
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
import Input from "@/components/Input.vue"

export default {
  components: {
    Btn,
    Input
  },
};
</script>

<style  lang="scss">
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
