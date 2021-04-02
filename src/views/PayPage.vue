<template>
  <div>
       <HeaderP style="background-color:#000425" ></HeaderP>
       <section class="py-10">
         <div class="container  mx-auto px-4 md:px-0">
           <div class="flex items-center mb-10">
             <router-link to="/"><i class="material-icons mr-2">arrow_back</i></router-link>
             <h2 class="subtitle__principal"> Pasarela de pagos</h2>
           </div>
           <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
             <div class="col-span-3 ">
              
             </div>
             <div class="col-span-2 block">
                <ShoppingItems />
                <div class="flex flex-col my-6 relative" >
                    <input type="text" class="max-w-md" required/>
                    <label class="absolute " for="email">Agregue un código de descuento</label>
                </div>
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

export default {
  name: 'PayPage',
  components: {
    HeaderP,
    ShoppingItems
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
    label{
    top: 15px;
    left: 16px;
    transform: translate3d(0, 0, 0);
    transition: all 0.2s ease-in-out;
    font-size:16px; 

    }
    input{
    &[data-empty="false"] {
        pointer-events:none;
    }
    &[data-empty="false"] + label,
    &:valid + label,
    &:focus + label{
        color:#969696;
        font-size: 12px;
        transform: translate3d(0, -10px, 0);
    }
    }
    .precioFinal{
        color: $color-principal;
        padding-top: 2em;
        border-top:1px solid #b4b3b3;
    }
</style>