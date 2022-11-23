<template>

  <toolbar></toolbar>
  <veterinary-register></veterinary-register>
  <evaluation-register></evaluation-register>
  <router-view></router-view>

</template>

<script>

import Toolbar from "./components/toolbar.component.vue";


import EvaluationRegister from "./MedicalRecords/pages/evaluation-register.component.vue"
import VeterinaryRegister from "./Security/pages/veterinary-register.component.vue"



export default {
  data() {
    return {

    }
  },


  components: {
    VeterinaryRegister,
    Toolbar,


  }
}
</script>

<style>

</style>

