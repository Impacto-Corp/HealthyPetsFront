<template>
  <div class="start-session">
    <div class="title">
      <p>Healthy Pets</p>
      <br>
      <p>The platform to find your ideal veterinarian</p>
      <img src="src/assets/Logotipo.jpg">
    </div>

    <div class="card">
      <h1 class="mt-7">Sign in to Healthy Pets</h1>
      <hr>
      <h4 class="mt-7 ml-8"> Username or Email Address</h4>
      <span class="p-float-label ml-8">
         <pv-input-text type="text" v-model="email1" class="border-3 ml-12"/>
      </span>

      <h4 class="mt-7 ml-8">Password</h4>
      <span class="p-float-label ml-8">
         <pv-input-text type="text" v-model="password1" class="border-3 ml-12"/>
      </span>

      <div class="b-start m-6" >
        <pv-button label="Log in"
                   class="p-button-rounded "
                   @click="toVetProfile"
        />
        <pv-button @click="toUserRegister" label="Create account"
                   class="p-button-rounded "
        />


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "start-session.component",
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
  width: 100%;
  height: 850px;
  background: url("../../assets/fondo1.png");
  display: flex;
  justify-content: center;
}

img{
  width: 400px;
  display:flex;
}
.title{
  float:left;
  width: 50%;
  align-content: center;
  font-size: 30px;
  font-weight: bold;
  left:20px;
  top:80px;
  position: relative;
  color: #667080;
  font-family: Roboto;
}
.card {
  float:left;
  width: 50%;
  color: #667080;
  display: flow;
  left:-50px;
  top:80px;
  position: relative;
  font-family: Roboto;
}
{
  padding: 10px 300px;
}
.b-start{
  color: white;
  font-family:Roboto;

}
</style>
