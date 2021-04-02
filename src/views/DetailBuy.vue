<template>
  <div class="lg:w-screen lg:h-screen w-full h-full shoppincart-background">
    <div class="header-background">
      <HeaderP> </HeaderP>
    </div>
    <div class="container  mx-auto px-4 md:px-0">
      <div
        class="lg:flex lg:flex-row lg:items-start flex flex-col items-center">
        <div class="lg:w-2/3 w-full">
          <div class="flex items-center my-10">
             <router-link to="/"><i class="material-icons mr-2">arrow_back</i></router-link>
             <h2 class="subtitle__principal"> Detalle de compra</h2>
           </div>
          <div class="col-span-3 block">
                <ShoppingItems />
                <Input name="Agregue un código de descuento" for='descuento' class="mb-3">
                  <input type="text" id="descuento"  required/>
                </Input>
                <div class="precioFinal flex justify-between items-center">
                    <h3 class="title__principal__2">Precio final</h3>
                    <h3 class="title__principal__2">S/ 600.00</h3>
                </div>
             </div>
        </div>
        <div class="lg:flex-1 w-full flex justify-center lg:justify-end mt-10 md:mt-36 ">
          <div class="coupon-container p-4 shadow-md lg:w-96 w-full h-80">
              <h3 class="mb-5 title__principal__2">¡Compra exitosa!</h3>
                <p class="mb-5">La boleta o factura solicitada será enviada a tu correo en unos momentos.</p>
              <div>
                <router-link to="/"><Btn name="Volver a Cursos" /></router-link>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template><script>
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
    .header-background {
    background: #000425;
    }
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