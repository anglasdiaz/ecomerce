<template>
  <div class="h-4/6 w-3/4 flex justify-center">
    <form class="w-8/12 relative" @submit.prevent="creandoUsuario">
       <Input name="Nombres y apellidos" for="name">
            <input 
            type="text" 
            id="name"  
            required 
            v-model="formData.name"/>
       </Input>
      <Input name="Email" for="email1">
            <input 
            type="email" 
            id="email1"  
            required 
            v-model="formData.email"/>
       </Input>
      <Input name="Contraseña" for="contarsena1">
            <input 
            type="password" 
            id="contarsena1"  
            required 
            v-model="formData.password"/>
       </Input>
       <Input name="Repite contraseña" for="rpassword">
            <input 
            type="password" 
            id="rpassword"  
            required />
       </Input>
      <div class="flex items-center mt-3 relative" >
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
import { registerApi } from "../api/user";
import router from "../router";
import Input from "@/components/Input.vue"

export default {
  components: {
    Btn,
    Input
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    creandoUsuario() {
      console.log(this.formData);
      router.push("/");
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
