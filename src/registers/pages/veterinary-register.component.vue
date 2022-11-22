<template #Body>

  <div class="registerVeterinary">

    <div class="logo1">
      <img src="src/assets/fotovet1.png">
    </div>

    <div class="content">
      <form method="register">

        <div class="field mt-3">
          <h2 class="ml-4 mb-5" id="txtRegV"></h2>
            <span class="p-float-label m-3">
              <pv-input-text type="text" id="ruc" v-model.trim="ruc" class="border-3"/>
              <label for="ruc">RUC</label>
            </span>
        </div>

        <div class="field mt-5">
          <span class="p-float-label m-3">
            <pv-input-text id="streetaddress"  type="text" v-model="streetaddress" class="border-3/"/>
            <label for="streetaddress" >Street Address</label>
          </span>
        </div>

        <div class="field mt-5">
          <span class="p-float-label m-3">
            <pv-input-text id="phonenumber" type="text" v-model="phonenumber" class="border-3"/>
            <label for="phonenumber">Phone Number</label>
          </span>
        </div>

        <div class="footer">
          <pv-button label=" Check in "
                     style="
                     width: 100%;
                     height: 50px;
                     background-color: #ffa448;
                     border-radius: 25px;
                    font-size: 18px;
                    color:white;
                    cursor:pointer;
                    outline:none;
                    margin:20px 0;

                            "
                     @click="registerVet"
          />
        </div >
      </form>
    </div>


    <div>
      <pv-card>
        <div class="logo2">
          <img src="src/assets/fotovet2.jpg">
        </div>
      </pv-card>
    </div>
  </div>

</template>

<script>
export default {
    name: "veterinary-register.component",

    data(){
      return{

        selectedType: null,
        ruc:'',
        streetaddress: '',
        phonenumber:'',

      type:[
          {typeVet: 'Vet', code:'VET'}
      ],

      Vet:[],
      VetList:[],
    }
  },


    methods:{
      registerVet(){
      this.VetList.push({
        ruc:this.ruc,
        streetaddres:this.streetaddress,
        phonenumber:this.phonenumber,
        selectedType:this.selectedType,
      }),
        console.log(this.VetList)
        this.ruc='';
        this.streetaddress='';
        this.phonenumber='';
        this.selectedType=null;
      }
    }

  }
</script>

<style >

.registerVeterinary{
  margin: 0;
  padding: 0;
  font-family: montserrat;
  background: url("../../assets/FondoN.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
}

img{
  max-width: 100%;
}
.content{
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width:400px;
  background:rgba(227,146,32,0.27);
  border-radius: 10px;
}

.content form {
  padding: 0 40px;
  border-radius: 1px;
}


</style>
