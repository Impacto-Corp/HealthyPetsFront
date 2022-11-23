<template>

  <toolbar></toolbar>

  <router-view></router-view>

</template>

<script>

import Toolbar from "./components/toolbar.component.vue";

import StartSession from "./Security/pages/start-session.component.vue";



export default {
  data() {
    return {

    }
  },


  components: {
    Toolbar,
    StartSession,

  }
}
</script>

<style>

</style>

