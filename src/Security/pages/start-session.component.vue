<template>
  <div class="start-session">
    <div class="title">
      <h2>Healthy Pets</h2>
      <p>The platform to find your ideal veterinarian</p>
      <img src="src/assets/Logotipo.jpg">
    </div>

    <div class="card">
      <h1 class="mt-7 ml-7">Sign in to Healthy Pets</h1>
      <hr class="ml-7">
      <h4 class="mt-7 ml-8 mb-1"> Username or Email Address</h4>
      <span class="p-float-label ml-8">
         <pv-input-text type="text" v-model="email1" class="border-3 ml-12"/>
      </span>

      <h4 class="mt-4 ml-8 mb-1">Password</h4>
      <span class="p-float-label ml-8">
         <pv-input-text type="text" v-model="password1" class="border-3 ml-12"/>
      </span>

      <div class="b-start mt-4 ml-6" >
        <pv-button label="Log in"
                   class="p-button-rounded ml-5"
                   @click="toVetProfile"
        />
        <pv-button @click="toUserRegister" label="Create account"
                   class="p-button-rounded ml-4"
        />


      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "start-session",
  data() {
    return {
      email1: '',
      password1:'',
      drawer: false,

    }
  },
  Users: [
    {
      email2:'yo@out.com',
      password2:'12345'
    },
    {
      email2:'tu@gma.com',
      password2:'67890'
    }
  ],

  methods:{

    toVetProfile(){
      this.$router.push('/vetProfile');
    },

    validation() {
      const res=this.Users.some(User=>User.email2===this.email1)
      if(res){
        console.log('funca')
      }else {
        console.log('no funca')
      }
    },

    toUserRegister(){
      this.$router.push('/userRegister');
    }
  }
}

</script>

<style>
.start-session{
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 700px;
  background: url("../../assets/fondo1.png");
  border: solid #eb3349;

}

img{
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  display:flex;
}
.title{
  float:left;
  width: 50%;
  align-content: center;
  font-size: 30px;
  font-weight: bold;
  margin-left: 50px;
  left:0px;
  top:10px;
  position: relative;
  color: #667080;
  font-family: Roboto;
  border: solid #ffa448;
  text-align: center;
}
.card {
  float:left;
  width: 50%;
  color: #667080;
  display: flow;
  left:0px;
  margin-left: 50px;
  top:10px;
  position: relative;
  font-family: Roboto;
  border: solid #181818;
}
{
  padding: 10px 300px;
}
.b-start{
  color: white;
  font-family:Roboto;

}
</style>
