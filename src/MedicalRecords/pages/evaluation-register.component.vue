<template #Body>

  <div class="registerEvaluation">

    <div class="content">
      <form method="register">

        <div class="field mt-3">
          <h2 class="ml-4 mb-5" id="txtRegV"></h2>
          <span class="p-float-label m-3">
              <pv-input-text type="text" id="name" v-model.trim="name" class="border-3"/>
              <label for="name">Name:</label>
            </span>
        </div>

        <div class="field mt-5">
          <span class="p-float-label m-3">
            <pv-input-text id="pet"  type="text" v-model="pet" class="border-3/"/>
            <label for="pet" >Pet:</label>
          </span>
        </div>

        <div class="field mt-5">
          <span class="p-float-label m-3">
            <pv-input-text id="assessment" type="text" v-model="assessment" class="border-3"/>
            <label for="assessment">assessment</label>
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
                     @click="registerEvaluation"
          />
        </div >
      </form>
    </div>
  </div>

</template>

<script>
export default {
  name: "evaluation-register.component",

  data(){
    return{

      selectedType: null,
      name:'',
      pet: '',
      assessment:'',


      Evaluation:[],
      EvaluationList:[],
    }
  },


  methods:{
    registerEvaluation(){
      this.EvaluationList.push({
        name:this.name,
        pet:this.pet,
        assessment:this.assessment,
      }),
          console.log(this.EvaluationList)
      this.name='';
      this.pet='';
      this.assessment='';
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
