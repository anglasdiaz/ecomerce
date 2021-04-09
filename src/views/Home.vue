<template>
  <div class="">
    <section class="banner">
      <HeaderP />
      <div class="banner__content mb-2">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="col-span-2 md:pt-20 md:mt-10">
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
            <div class="">
              <div class="banner__img">
              <form @submit.prevent="getDataPostulante">
                <h2 class="subtitle__basic my-4">
                  Postula y obtén un 10% de descuento en el programa
                </h2>
                <Input name="Nombre" tipo="name0">
                  <input
                    type="text"
                    id="name0"
                    required
                    v-model="dataPostulante.name"
                  />
                </Input>
                <Input name="Tefefono" tipo="telefono">
                  <input
                    type="number"
                    id="telefono"
                    required
                    v-model="dataPostulante.telefono"
                  />
                </Input>
                <Input name="Correo Electronico" tipo="correo0">
                  <input
                    type="text"
                    id="correo0"
                    required
                    v-model="dataPostulante.email"
                  />
                </Input>
                <Input name="Programa" tipo="programa">
                  <input
                    type="text"
                    id="programa"
                    required
                    v-model="dataPostulante.programa"
                  />
                </Input>
                <div class="mb-9 flex items-center">
                  <input type="checkbox" name="" id="" class="m-0" />
                  <label for="" class="text__small ml-1 mt-1"
                    >Acepto las Políticas de privacidad.</label
                  >
                </div>
                <Btn name="Quiero Potular"></Btn>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-10 fondo-color">
      <div class="container  mx-auto px-4 md:px-0">
        <article class="grid md:grid-cols-2 lg:grid-cols-3">
          <div>
          <p class="text__small mb-2">Con el respaldo de:</p>
          <div class="flex items-center">
            <img class="mr-4" src="../assets/images/logo-intercorp.png" alt="" />
            <img class="mr-4" src="../assets/images/logo-idat.png" alt="" />
            <img class="mr-3" src="../assets/images/logo-zegel.png" alt="" />
          </div>
          </div>
          <div class="md:flex justify-center items-center hidden ">
            <a href="#beneficios"><img src="../assets/images/arrow-bottom.png" alt=""></a>
          </div>
          </article>
      </div>
    </section>
    <section class="pt-12 pb-24 fondo-color">
      <div class="container mx-auto px-4 md:px-0">
        <h3 class="subtitle__principal mb-7">
          Conoce nuestros Programas de Especialización
        </h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3">
          <div class="col-span-2 sm:flex flex-wrap">
            <template v-for="(item, index) in listItems" :key="index">
              <Card :title="item.tittle" :cursoindex="index">
                <img src="../assets/images/marketing_digital2.png" alt="" />
              </Card>
            </template>
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
    <section id="beneficios" class="my-20">
      <div class="container mx-auto px-4 md:px-0">
        <h3 class="subtitle__principal mb-5">Beneficios</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="col-span-2 ">
            <CardLine
              icon="person_outline"
              title="Aprende de Expertos"
              text="Aprende directamente de expertos del mercado a través del análisis y solución de problemas de programación. Utilizando los frameworks y herramientas de mayor relevancia dentro del mundo del coding."
            ></CardLine>
             <CardLine
              icon="laptop"
              title="Clases Virtuales"
              text="Aprovecha tu tiempo al máximo en nuestras clases virtuales y participa presencialmente de nuestras hackathones semanales para conocer y participar de la comunidad profesional que liderará la transformación tecnológica del Perú."
            ></CardLine>
             <CardLine
              icon="card_travel"
              title="Empleabilidad"
              text="Al finalizar el programa y certificarte a nombre de IDAT, podrás acceder a ofertas 
laborales especialmente identificadas para la comunidad PachaQTec, a través de 
nuestra plataforma de empleabilidad IDAT JOB."
            ></CardLine>
          </div>
        </div>
      </div>
    </section>
    <div class="icon-chat">
      <a
        target="_blanck"
        href="https://api.whatsapp.com/send?phone=51954781495&amp;text=Hola!&nbsp;quiero&nbsp;informacion!"
        ><img src="@/assets/images/icon-whatssap.png" alt=""
      /></a>
    </div>
    <FooterP />
  </div>
</template>

<script>
// @ is an alias to /src
//mport HelloWorld from '@/components/HelloWorld.vue'
import HeaderP from "../components/HeaderP";
import Card from "../components/Card";
import CardLine from "../components/CardLine";
import Btn from "../components/Btn";
import FooterP from "../components/FooterP";
import Input from "../components/Input";
import firebase from "firebase";
import { userRouter, userRoute } from "vue-router";
import router from "../router";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      dataPostulante: {
        nam: "",
        email: "",
        telefono: "",
        programa: "",
      },
    };
  },
  components: {
    HeaderP,
    Card,
    CardLine,
    Btn,
    FooterP,
    Input,
  },
  computed: {
    ...mapState(["listItems"]),
  },
  methods: {
    ...mapActions([
      "getDataFirebaseAction",
      "setDataPostulanteAction",
      "setDataShopCartAction",
    ]),
    getDataPostulante() {
      this.setDataPostulanteAction(this.dataPostulante);
      router.replace("/formview");
    },
  },
  beforeCreate() {
    try {
      firebase.auth().onAuthStateChanged(function(user) {
        console.dir(user);
        if (user) {
          router.replace("/");
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  created() {
    this.getDataFirebaseAction();
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
      z-index: 9;
      position: fixed;
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
      padding: 4em 5em 4em 12em;
    }
  }

  img {
    position: absolute;
    top: -7em;
    left: 10%;
    max-width: 70%;
    @include mediaQ(640px) {
      top: -5em;
      left: -5em;
    }
  }
}
</style>
