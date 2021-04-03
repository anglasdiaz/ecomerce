<template>
  <div>
    <div>
      <div
        class="flex p-3 md:p-4 bg-gray-200 mb-3 rounded-lg"
        v-for="(cart, index) in shopCart"
        :key="index"
      >
        <div class="md:w-3/12 w-5/12">
          <img
            class=" rounded-md"
            src="https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/01/online-course-main-800x549.png"
            alt="cart.img"
          />
        </div>
        <div class="pl-3 flex-1 relative ">
          <h4 class="md:text-xl mb-2 text-base">{{ cart.tittle }}</h4>
          <p class="md:text-lg discount mb-8">Dsct 22%</p>
          <div
            class="absolute bottom-0 right-0 lg:right-0 left-0 flex justify-between items-end px-3"
          >
            <button
              @click="deleteShopItem(index)"
              class="underline btn-eliminar focus:outline-none mt-3 lg:mt-30"
            >
              Eliminar
            </button>
            <p class=" font-bold text-lg">S/.{{ cart.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["shopCart"]),
  },
  methods: {
    ...mapActions(["removeItemCartAction"]),
    deleteShopItem(idx) {
      console.log("elminando");
      this.removeItemCartAction(idx);
    },
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
