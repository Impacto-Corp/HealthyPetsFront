<template>

  <router-view></router-view>
 <evaluation-register></evaluation-register>

</template>

<script>
import EvaluationRegister from "./MedicalRecords/pages/evaluation-register.component.vue"
export default {
  data() {
    return {

    }
  },

  components: {
    EvaluationRegister

  }
}
</script>

