<template>

  <div class="register">

    <div class="logo">
      <img src="src/assets/fondo1.png">
    </div>

    <div class="data">
      <h2 class="ml-4 mb-5" id="txtReg">REGISTER NOW</h2>

      <span class="p-float-label m-3">
        <pv-input-text id="fullname" type="text" v-model="name" class="border-3"/>
        <label for="fullname">Full Name</label>
      </span>

      <span class="p-float-label m-3">
        <pv-input-text id="username" type="text" v-model="userName" class="border-3"/>
        <label for="username">User Name</label>
      </span>

      <span class="p-float-label m-3">
        <pv-input-text id="email" type="text" v-model="email" class="border-3"/>
        <label for="email">E-mail</label>
      </span>

      <span class="p-float-label m-3">
        <pv-input-text id="password" type="text" v-model="password" class="border-3"/>
        <label for="password">Password</label>
      </span>

      <pv-dropdown v-model="selectedType"
                   :options="type"
                   optionLabel="typeUser"
                   optionValue="code"
                   placeholder="Type of User"
                   class="p-float-label ml-3 mb-3 border-3"/>

      <div class="b-register">
        <pv-button label="REGISTER"
                   class="p-button-rounded p-button-secondary"
                   @click="registerUser"
        />
      </div>


    </div>


  </div>

</template>


<script>
export default {
  name: "user-register",

  data() {
    return {

      selectedType: null,
      name: '',
      userName: '',
      email: '',
      password: '',


      type: [
        {typeUser: 'Vet', code: 'VE'},
        {typeUser: 'Client', code: 'CL'}
      ],

      User: [],
      UseList: [],

    }
  },



  methods: {

    toVetProfile(){
      this.$router.push('/vetProfile');
    },

    registerUser() {
      this.UseList.push({
        name: this.name,
        userName: this.userName,
        email: this.email,
        password: this.password,
        selectedType:this.selectedType,

        toVetProfile(){
          this.$router.push('/vetProfile');
        },


      }),
          console.log(this.UseList)

      this.name='';
      this.userName='';
      this.email='';
      this.password='';
      this.selectedType=null;

      this.toVetProfile();


    }
  }





}
</script>


<style>
.register {
  width: 100%;
  height: 700px;
  background: url("../../assets/fondo1.png");

  display: flex;
  justify-content: center;
}

.data {
  width: 40%;
}

.logo {
  width: 60%;
  float: left;
  align-items: center;
  display: flex;
  justify-content: center;

}

#txtReg {
  margin-top: 150px;
}

.b-register {
  align-items: center;
  justify-content: center;
  margin-left: 80px;
}

</style>