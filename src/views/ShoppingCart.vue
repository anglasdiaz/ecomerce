<template>
  <div class="lg:w-screen lg:h-screen w-full h-full shoppincart-background">
    <div class="header-background">
      <HeaderP> </HeaderP>
    </div>
    <div class="container  mx-auto px-4 md:px-0">
      <div
        class="lg:flex lg:flex-row lg:items-start flex flex-col items-center"
      >
        <div class="lg:w-2/3 w-full">
          <div class="flex items-center my-10">
            <router-link to="/"
              ><i class="material-icons mr-2">arrow_back</i></router-link
            >
            <h2 class="subtitle__principal">Desarrollo Front-End</h2>
          </div>
          <ShoppingItems />
        </div>
        <div
          class="lg:flex-1 w-full flex justify-center lg:justify-end mt-10 md:mt-36 "
        >
          <div class="coupon-container p-4 shadow-md lg:w-96 w-full h-80">
            <div class="flex flex-col space-y-10">
              <div class="flex justify-between">
                <h1 class="mt-5 subtotal text-lg font-bold">Subtotal</h1>
                <p class="mt-5 price text-lg font-bold">
                  S/.{{ totalPrice() }}
                </p>
              </div>
              <!-- <Input name="Ingrese Cupon" tipo="email">
                <input type="email" id="email" required />
              </Input> -->
              <div>
                <router-link to="/paypage">
                  <Btn name="Continuar" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import CardLine from "../components/CardLine";
import HeaderP from "../components/HeaderP";
import ShoppingItems from "../components/ShoppingItems.vue";
import Btn from "../components/Btn";
import Input from "@/components/Input.vue";
import firebase from "firebase";
import { userRouter, userRoute } from "vue-router";
import router from "../router";

export default {
  components: {
    HeaderP,
    ShoppingItems,
    CardLine,
    Btn,
    Input,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["shopCart"]),
  },
  methods: {
    ...mapGetters(["totalPrice"]),
    // totalToPay() {
    //   const total = this.shopCart.reduce(
    //     (accumulator, currentValue) => accumulator.price + currentValue.price
    //   );
    //   console.log(total);
    // },
  },
  mounted() {
    const user = firebase.auth().currentUser;
    if (!user) {
      router.replace("/");
    }
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
