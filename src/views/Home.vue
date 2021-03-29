<template>
  <div class="">
    <section class="banner">
      <headerP />
      <div class="banner__content mb-2">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="col-span-2 ">
              <div class="flex items-center banner__caption">
                <div>
                  <h1 class="title__principal mb-5">
                    ¡Explota todo tu potencial tecnológico!
                  </h1>
                  <h4 class="title__secundary">
                    Con nuestros programas de especialización
                  </h4>
                </div>
              </div>
            </div>
            <div class="banner__img">
              <form>
                <h2 class="subtitle__basic my-4">
                  Postula y obtén un 10% de descuento en el programa
                </h2>
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Tefefono" />
                <input type="email" placeholder="Correo Electronico" />
                <input type="Text" placeholder="Programa" class="mb-3" />
                <div class="mb-5">
                  <input type="checkbox" name="" id="" />
                  <label for="" class="text__small"
                    >Acepto las Políticas de privacidad.</label
                  >
                </div>
                <Btn name="Quiero Potular"></Btn>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-10 fondo-color">
      <div class="container  mx-auto px-4 md:px-0">
        <p class="text__small mb-2">Con el respaldo de:</p>
        <div class="flex items-center">
          <img class="mr-4" src="../assets/images/logo-intercorp.png" alt="" />
          <img class="mr-4" src="../assets/images/logo-idat.png" alt="" />
          <img class="mr-3" src="../assets/images/logo-zegel.png" alt="" />
        </div>
      </div>
    </section>
    <section class="py-20 fondo-color">
      <div class="container mx-auto px-4 md:px-0">
        <h3 class="subtitle__principal mb-7">
          Conoce nuestros Programas de Especialización
        </h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3">
          <div class="col-span-2 sm:flex ">
            <card title="Desarrollo Front-End">
              <img src="../assets/images/marketing_digital2.png" alt="" />
            </card>
            <card title="Desarrollo Front-End">
              <img src="../assets/images/marketing_digital2.png" alt="" />
            </card>
          </div>
        </div>
      </div>
    </section>
    <section class="pannel ">
      <img src="../assets/images/Chinita_pacha.png" alt="" />
      <div class="container mx-auto px-4 md:px-0">
        <div class="grid md:grid-cols-2 lg:grid-cols-3">
          <div class="col-span-2 md:flex ">
            <div class="pannel__caption">
              <h3 class="subtitle__principal mb-3">Sé parte de la comunidad</h3>
              <p class="mb-3">
                Programas semi-presenciales para el desarrollo de habilidades de
                programación a lo largo de todo el Stack tecnológico.
              </p>
              <p>
                Al finalizar sabrás cómo crear una página web y desarrollar la
                lógica detrás del funcionamiento de una aplicación, así como
                formar parte de una gran comunidad de desarrolladores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="my-20">
      <div class="container mx-auto px-4 md:px-0">
        <h3 class="subtitle__principal mb-5">Beneficios</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3">
          <div class="col-span-2 md:flex ">
            <cardLine
              icon="person_outline"
              title="Aprende de Expertos"
              text="Aprende directamente de expertos del mercado a través del análisis y solución de problemas de programación. Utilizando los frameworks y herramientas de mayor relevancia dentro del mundo del coding."
            ></cardLine>
          </div>
        </div>
      </div>
    </section>
    <div class="icon-chat">
      <img src="@/assets/images/icon-whatssap.png" alt="" />
    </div>
    <footerP></footerP>
  </div>
</template>

<script>
// @ is an alias to /src
//mport HelloWorld from '@/components/HelloWorld.vue'
import headerP from "@/components/headerP.vue";
import card from "@/components/card.vue";
import cardLine from "@/components/cardLine.vue";
import Btn from "../components/Btn";
import FooterP from "../components/footerP.vue";

export default {
  name: "Home",
  components: {
    headerP,
    card,
    cardLine,
    Btn,
    FooterP,
  },
};
</script>
<style lang="scss">
@import "../assets/css/variables.scss";

.icon-chat {
  position: fixed;
  right: 1.5em;
  bottom: 1.5em;
  cursor: pointer;
}
.banner {
  &__content {
    margin-left: 1em;
    margin-right: 1em;
    @include mediaQ(796px) {
      margin: 0;
    }
  }
  &__caption {
    height: 100%;
    div {
      margin-top: 7em;
      @include mediaQ(679px) {
        margin-top: 0;
      }
    }
  }
  &__img {
    display: none;

    @include mediaQ(1024px) {
      width: 300px;
      background-image: url("~@/assets/images/mobile.png");
      background-repeat: no-repeat;
      color: #000;
      display: block;
      padding: 3em 2em 3em 3.5em;
      height: 527px;
    }
    img {
      margin-bottom: -11em;
    }
  }
}
.pannel {
  background-color: $color-principal;
  position: relative;
  color: #fff;
  &__caption {
    padding: 18em 0em 3em 0em;
    @include mediaQ(640px) {
      padding: 3em 5em 3em 12em;
    }
  }

  img {
    position: absolute;
    top: -6em;
    left: 20%;
    @include mediaQ(640px) {
      top: -5em;
      left: -5em;
    }
  }
}
</style>
