<template>
  <article class="card">
    <slot></slot>
    <div class="card__caption flex items-end">
      <div class="card__content">
        <h3 class="mb-5 subtitle__secundary">{{ title }}</h3>
        <div class="flex justify-between">
          <button class="subtitle__third ">
            <router-link :to="`/curso/${cursoindex}`" class="flex items-center">
              <i class="material-icons mr-1">add_circle_outline</i>Ver más
            </router-link>
          </button>
          <button
            @click="getItem(cursoindex)"
            class=" bloqueo subtitle__third flex items-center"
            :class="{ disabled: isHere }"
          >
            <i class="material-icons mr-1">add_shopping_cart</i>Agregar al
            carrito
          </button>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { setItemLocalStorage } from "../api/cart";
export default {
  name: "Card",
  props: {
    title: String,
    cursoindex: Number,
    img: String,
  },
  data() {
    return {
      imgCurso: "",
      isHere: Boolean,
    };
  },
  computed: {
    ...mapState(["listItems", "shopCart"]),
  },
  methods: {
    ...mapActions(["addItemCartAction"]),
    getItem(idx) {
      this.isHere = this.shopCart.includes(this.listItems[idx]);
      if (!this.isHere) {
        this.addItemCartAction(this.listItems[idx]);
        
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/css/variables.scss";
.card {
  width: 100%;
  margin-right: 2em;
  position: relative;
  overflow: hidden;
  border-radius: 7px;
  margin-bottom: 2em;
  @include mediaQ(796px) {
    width: 40%;
    margin-right: 2.5em;
  }
  @include mediaQ(1600px) {
    width: 35%;
  }
  img {
    max-width: 100%;
  }
  &__caption {
    width: 100%;
    top: 0;
    color: #fff;
    bottom: 0;
    background: rgb(0, 4, 37);
    background: linear-gradient(
      360deg,
      rgba(0, 4, 37, 1) 0%,
      rgba(0, 4, 37, 0.3449754901960784) 35%
    );
    position: absolute;
  }
  &__content {
    width: 100%;
    padding: 1.3em;
  }
}
button:focus{
  outline:none;
}
.bloqueo:not(.disabled){
  
    cursor: default;
    opacity: .3;
}
</style>
