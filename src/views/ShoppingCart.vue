<template>
  <div class="lg:w-screen lg:h-screen w-full h-full shoppincart-background">
    <div class="header-background">
      <HeaderP> </HeaderP>
    </div>
    <div class="lg:container lg:mx-auto w-full">
      <div
        class="lg:flex lg:flex-row lg:items-start flex flex-col items-center"
      >
        <div class="lg:w-2/3 w-full">
          <h1 class="text-2xl font-bold carrito-tittle mt-14 mb-8">
            Carrito Compras
          </h1>
          <ShoppingItems />
        </div>
        <div class="lg:flex-1 w-full flex justify-center lg:justify-end mt-36 ">
          <div class="coupon-container p-4 shadow-md lg:w-96 w-4/5 h-80">
            <div class="flex flex-col space-y-10">
              <div class="flex justify-between">
                <h1 class="mt-5 subtotal text-lg font-bold">Subtotal</h1>
                <p class="mt-5 price text-lg font-bold">S/.600</p>
              </div>
              <div>
                <input type="text" placeholder="Ingrese Cupon" />
              </div>
              <div>
                <Btn name="Continuar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardLine from "../components/CardLine";
import HeaderP from "../components/HeaderP";
import ShoppingItems from "../components/ShoppingItems.vue";
import Btn from "../components/Btn";
export default {
  components: {
    HeaderP,
    ShoppingItems,
    CardLine,
    Btn,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["shopCart"]),
  },
};
</script>

<style lang="scss" scoped>
.coupon-container {
  background-color: white;
}
.shoppincart-background {
  background-color: #f8f8fa;
}
.carrito-tittle::before {
  content: "<-";
  margin-right: 1.2rem;
}
.header-background {
  background: #000425;
}
.subtotal,
.price {
  color: #5640ff;
}
</style>
