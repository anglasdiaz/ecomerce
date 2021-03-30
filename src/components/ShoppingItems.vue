<template>
  <div>
    <div>
      <div
        class="flex p-2 bg-gray-200 mb-3 rounded-lg"
        v-for="(cart, index) in shopCart"
        :key="index"
      >
        <div class="w-60 h-46">
          <img
            class="w-full h-full rounded-md"
            :src="[cart.src]"
            alt="cart.img"
          />
        </div>
        <div class="pl-3 flex-1 relative">
          <p class="text-xl">{{ cart.courseName }}</p>
          <p class="text-lg discount">Dsct {{ cart.discount }}%</p>
          <button class="underline btn-eliminar focus:outline-none mt-20">
            Eliminar
          </button>
          <p
            class="absolute bottom-0 right-0 lg:right-0 lg:top-0 font-bold text-lg"
          >
            S/.{{ cart.price }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["shopCart"]),
  },
};
</script>

<style scoped>
.btn-eliminar {
  color: #5640ff;
}
.discount {
  color: #5640ff;
}
</style>
