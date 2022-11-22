<template>
  <vet-register></vet-register>

</template>

<script>

import UserRegister from "./security/pages/user-register.component.vue";
import VetRegister from "@/registers/pages/veterinary-register.component.vue";

export default {
  data() {
    return {

    }
  },

  components: {
    UserRegister,
    VetRegister,
  }
}
</script>

