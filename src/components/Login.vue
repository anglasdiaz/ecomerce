<template>
  <div class="h-4/6 w-3/4 flex justify-center">
    <form class="w-8/12 relative" action="">
      <div class="flex flex-col">
        <label class="absolute left-2 px-1" for="email">Email</label>
        <input class="max-w-md" type="email" id="email" />
      </div>
      <div class="flex flex-col mt-3">
        <label class="absolute left-2 px-1" for="password">Password</label>
        <input class="max-w-md" type="password" id="password" />
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

<style scoped>
.forgot-password {
  text-decoration: underline;
  font-weight: bolder;
  color: #5640ff;
}
</style>
