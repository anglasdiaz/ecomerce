<template>
  <div>
       <HeaderP style="background-color:#000425" ></HeaderP>
       <section class="py-10">
         <div class="container  mx-auto px-4 md:px-0">
           <div class="flex items-center mb-10">
             <router-link to="/"><i class="material-icons mr-2">arrow_back</i></router-link>
             <h2 class="subtitle__principal"> Pasarela de pagos</h2>
           </div>
           <div class="grid md:grid-cols-2 lg:grid-cols-6 gap-5">
             <div class="col-span-3 ">
              <h3 class="title__principal__2 mb-8">PayPal </h3>
              <article>
                <img src="../assets/images/paypal-logo.png" alt="">
                <p class="pt-5 pb-8">Tus compras y pagos ahora son más  rápidos que nunca, <br/> e igual de seguros que siempre. </p>
                <Btn class="max-w-md" name="Pagar" />
              </article>
             </div>
             <div class="col-span-3 block">
                <ShoppingItems />
                <Input name="Agregue un código de descuento" for='descuento'>
                  <input type="text" id="descuento"  required/>
                </Input>
                <Btn name="Continuar" />
                <div class="precioFinal flex justify-between items-center">
                    <h3 class="title__principal__2">Precio final</h3>
                    <h3 class="title__principal__2">S/ 600.00</h3>
                </div>
             </div>
           </div>
         </div>
       </section>
  </div>
</template>
<script>
import HeaderP from '@/components/HeaderP.vue';
import ShoppingItems from "../components/ShoppingItems.vue";
import Input from "@/components/Input.vue";
import Btn from '@/components/Btn.vue'

export default {
  name: 'PayPage',
  components: {
    HeaderP,
    ShoppingItems,
    Input,
    Btn
    }
}
</script>
<style lang="scss" >
@import "../assets/css/variables.scss";
    .block{
        padding:2em;
        background-color:#fff;
        box-shadow: 1px 1px 4px 3px  rgba(0,0,0 ,.05);
    }
    .cardLine{
        background-color:#fff;
    }
   
    .precioFinal{
        color: $color-principal;
        padding-top: 2em;
        border-top:1px solid #b4b3b3;
    }
</style>