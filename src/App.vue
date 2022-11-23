<template>

  <toolbar></toolbar>
  <evaluation-register></evaluation-register>
  <router-view></router-view>

</template>

<script>

import Toolbar from "./components/toolbar.component.vue";


import EvaluationRegister from "./MedicalRecords/pages/evaluation-register.component.vue"



export default {
  data() {
    return {

    }
  },


  components: {
    EvaluationRegister,
    Toolbar,


  }
}
</script>

<style>

</style>

