<template>


  <toolbar></toolbar>

  <router-view>
  </router-view>
</template>

<script>
import MedicalRecord from "@/MedicalRecords/pages/evaluationregister.component.vue"
import UserRegister from "./Security/pages/user-register.component.vue";
import Toolbar from "./components/toolbar.component.vue";

export default {
  data() {
    return {

    }
  },

  components: {
    Toolbar,
    UserRegister,
    MedicalRecord,
  }
}
</script>

<style>

</style>

