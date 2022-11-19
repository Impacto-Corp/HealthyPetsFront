<template>

</template>

<script>
export default {
  name: "vet-register.component"

  data(){
    return{
      vetRegisters:[],
      vetRegistersDialog:false,
      deletevetRegisterDialog:false,
      vetRegister:{},
      vetRegisterService:null
    };
  },
  created() {
  },
  methods:{
    getStorableTutorial(displayablevetRegister) {
      return {
        id: displayablevetRegister.id,
        name: displayablevetRegister.name,
        ruc: displayablevetRegister.ruc,
        address: displayablevetRegister.address,
        phone: displayablevetRegister.phone,
      };
    },
      openNew(){
      this.vetRegister={};
      this.vetRegisterDialog=true;
      },

    hideDialog(){
      this.vetRegisterDialog=false;
    },
    findIndexByid(id){
      console.log(`current id:${id}`);

    }
  }

}
</script>

<style scoped>

</style>