<template>
  <div class="h-4/6 w-3/4 flex justify-center">
    <form class="w-8/12 relative" @submit.prevent>
      <div class="flex flex-col relative">
        <input class="max-w-md" type="email" id="email" required />
        <label class="absolute label" for="email">Email</label>
      </div>
      <div class="flex flex-col mt-3 relative" >
        <input class="max-w-md" type="password" id="password" required />
        <label class="absolute " for="password">Password</label>
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
export default {
  components: {
    Btn,
  },
};
</script>

<style scoped lang="scss">
.forgot-password {
  text-decoration: underline;
  font-weight: bolder;
  color: #5640ff;
}

label{
  top: 15px;
  left: 16px;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease-in-out;
  font-size:16px; 

}
input:focus + label{
    color:#969696;
    font-size: 12px;
    transform: translate3d(0, -10px, 0);
}
</style>
