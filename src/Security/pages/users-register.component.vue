<template>

  <div class="register">

    <div class="logo">
      <img src="src/assets/logotipo.JPG">
    </div>

    <div class="data">
      <h2 class="ml-4 mb-5" id="txtReg">REGISTER NOW</h2>

      <span class="p-float-label m-3">
        <pv-input-text id="fullname" type="text" v-model="user.name" class="border-3"/>
        <label for="fullname">Full Name</label>
      </span>

      <span class="p-float-label m-3">
        <pv-input-text id="username" type="text" v-model="user.userName" class="border-3"/>
        <label for="username">User Name</label>
      </span>

      <span class="p-float-label m-3">
        <pv-input-text id="email" type="text" v-model="user.email" class="border-3"/>
        <label for="email">E-mail</label>
      </span>

      <span class="p-float-label m-3">
        <pv-input-text id="password" type="text" v-model="user.password" class="border-3"/>
        <label for="password">Password</label>
      </span>

      <pv-dropdown v-model="user.selectedType"
                   :options="type"
                   optionLabel="typeUser"
                   optionValue="code"
                   placeholder="Type of User"
                   class="p-float-label ml-3 mb-3 border-3"/>

      <div class="b-register">
        <pv-button label="REGISTER"
                   class="p-button-rounded"
                   @click="registerUser()"
        />
      </div>


    </div>

  </div>

</template>


<script>


import {UsersRegisterApiService} from "../services/users-register.api.service";
import axios from "axios";

export default {
  name: "user-register",

  data() {
    return {
      users:[],

      user:{},
      selectedType: null,

      type: [
        {typeUser: 'Vet', code: 'VE'},
        {typeUser: 'Client', code: 'CL'}
      ],

      usersService:null,


    }
  },

  created() {
    this.usersService = new UsersRegisterApiService();
    this.usersService.getAll().then((response) => {
      this.users = response.data;
      console.log(this.users);
    });


  },


  methods: {

    getStorableUser(displayableUser) {
      return {
        id: displayableUser.id,
        name: displayableUser.name,
        userName: displayableUser.userName,
        email: displayableUser.email,
        password: displayableUser.password,
        selectedType: displayableUser.selectedType,
      };
    },

/*    registerUser() {
      if (this.user.id) {
        console.log(this.user);
        this.user = this.getStorableUser(this.user);
        this.usersService.update(this.user.id, this.user)
            .then((response) => {
              console.log(response.data.id);

              //this.users[this.findIndexById(response.data.id)] =
              // this.getDisplayableTutorial(response.data);

              this.$toast.add({severity: 'success', summary: 'Successful', detail: 'User Updated', life: 3000});
              console.log(response);
            });
      } else {
        this.user.id = 0;
        console.log(this.user);
        this.user = this.getStorableUser(this.user);
        this.usersService.create(this.user).then((response) => {
          //this.user = this.getDisplayableTutorial(response.data);

          this.users.push(this.user);
          this.$toast.add({severity: 'success', summary: 'Successful', detail: 'User Created', life: 3000});
          console.log(response);
        });
      }
      this.user = {};
    },*/

    registerUser() {
      console.log(this.user);
      this.user = this.getStorableUser(this.user);
      this.usersService.create(this.user).then((response) => {
        //this.user = this.getDisplayableUser(response.data);
        this.users.push(this.user);
        this.user = {};

      //console.log(user.name)


     })}






  }





}
</script>


<style>
.register {
  width: 100%;
  height: 700px;
  background: url("../../assets/fondo1.png");
  font-family: Roboto;
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
  font-family: Roboto;
}

.b-register {
  align-items: center;
  justify-content: center;
  margin-left: 80px;

}

</style>