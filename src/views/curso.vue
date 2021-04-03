<template>
  <div>
    <HeaderP style="background-color:#000425"></HeaderP>
    <section class="py-10">
      <div class="container  mx-auto px-4 md:px-0">
        <div class="flex items-center mb-10">
          <router-link to="/"
            ><i class="material-icons mr-2">arrow_back</i></router-link
          >
          <h2 class="subtitle__principal">{{ listItems[index].tittle }}</h2>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <img src="../assets/images/curso.jpg" alt="" />
          </div>
          <div class="col-span-2 ">
            <article class="flex my-6">
              <i class="large material-icons mr-2">school</i>
              <div>
                <h3 class="subtitle__basic">Descripción:</h3>
                <p>{{ listItems[index].content }}</p>
              </div>
            </article>
            <article class="flex my-6">
              <i class="large material-icons mr-2">person</i>
              <div>
                <h3 class="subtitle__basic">Docente:</h3>
                <p>{{ listItems[index].teacher }}</p>
              </div>
            </article>
            <article class="flex my-6">
              <i class="large material-icons mr-2">date_range</i>
              <div>
                <h3 class="subtitle__basic">Duración:</h3>
                <div class="flex">
                  <p class="mr-4">
                    +{{ listItems[index].duration }} <br />
                    Desarrollo del programa
                  </p>
                  <p>
                    +2 semanas <br />
                    Desarrollo y presentacíón del proyecto final
                  </p>
                </div>
              </div>
            </article>
            <article class="flex my-6">
              <i class="large material-icons mr-2">insert_drive_file</i>
              <div>
                <h3 class="subtitle__basic">Módulos</h3>
                <div class="flex items-center ">
                  <p class="mr-2">{{ listItems[index].moduls }}</p>
                </div>
              </div>
            </article>
            <article class="flex my-6">
              <i class="large material-icons mr-2">laptop_windows</i>
              <div>
                <h3 class="subtitle__basic">Modalidad</h3>
                <p>Clases en vivo 100% Virtuales</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import HeaderP from "@/components/HeaderP.vue";
import { mapState } from "vuex";
export default {
  name: "Curso",
  data() {
    return {
      index: this.$route.params.id,
    };
  },
  computed: {
    ...mapState(["listItems"]),
  },
  components: {
    HeaderP,
  },
};
</script>
<style lang="scss">
@import "../assets/css/variables.scss";
.large {
  font-size: 2.2rem;
  margin-right: 0.8em;
  color: $color-principal;
}
</style>
