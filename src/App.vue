<template>


  <toolbar></toolbar>

  <router-view>
  </router-view>
</template>

<script>

import Toolbar from "./components/toolbar.component.vue";


export default {
  data() {
    return {

    }
  },

  components: {
    Toolbar,
  }
}
</script>

<style>

</style>

