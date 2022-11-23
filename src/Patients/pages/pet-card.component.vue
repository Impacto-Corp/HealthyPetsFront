<template>
  <br> <br>
  <div class="track-flex">
    <pv-card class="petCard">
      <template #header>
        <div class="flex justify-content-center mt-3">
          <div class="play-animation" style="max-width: 90%">
            <div class="icon">
              <img alt="user header" :src="petData.image" />
            </div>
          </div>
        </div>
      </template>
      <template #title>
        <div class="title">
          {{ petData.name }}
          <p>{{ petData.description }}</p>
        </div>
      </template>
      <template #content>
        <pv-button v-on:click="changePetImage()" style=" padding: 10px 80px ; background-color: #ffa448 " >Edit Image</pv-button>
        <br><br>
        <pv-button v-on:click="changePetName()" style=" padding: 10px 80px ; background-color: #ffa448" > Edit Name</pv-button>
        <br> <br>
        <pv-button v-on:click="DeletePet(petData.id)" style=" padding: 10px 95px ; background-color: #ffa448" >Delete</pv-button>
      </template>
    </pv-card>
    <pv-dialog v-model:visible="petsDialog">
      <template #header>
        <h3>Edit Name</h3>
      </template>

      <pv-input-text type="text" v-model="petData.name"></pv-input-text>

      <template #footer>
        <Button >CANCEL</Button>
        <Button v-on:click="PutNamePet(petData.id,petData.name)" >Edit</Button>
      </template>
    </pv-dialog>
    <pv-dialog v-model:visible="petDialog">
      <template #header>
        <h3>Edit Image</h3>
      </template>

      <pv-input-text type="text" v-model="petData.image"></pv-input-text>

      <template #footer>
        <Button >CANCEL</Button>
        <Button v-on:click="PutImagePet(petData.id,petData.image)" >Edit</Button>
      </template>
    </pv-dialog>
  </div>
</template>

<script>
import axios from "axios";
const baseUrl="http://localhost:3000/pets/";
export default {
  name: "pet-card",
  props:{
    petData: Object,
  },
  data(){
    return{
      pets: [],
      petsDialog: false,
      petDialog: false,
      deletePetDialog: false,
      deletePetsDialog: false,
      pet: {},
      petsService:null,
      toast:null,

    }
  },
  methods:{
    async GetPet(){
      await axios
          .get(baseUrl)
          .then((resp)=>{
            this.petss =resp.data;
          })
          .catch((err)=>{
            console.log(err);
          });
    },
    async DeletePet(id){
      await axios
          .delete(baseUrl+id)
          .then((resp)=>{
            console.log(resp);
            this.GetPet();
          })
          .catch((err)=>{
            console.log(err);
          });
    },
    changePetName(){
      this.petsDialog=true;
    },
    changePetImage(){
      this.petDialog=true;
    },
    async PutNamePet(id,name){
      await axios
          .put(baseUrl+id,{name:name})
          .then((resp)=>{
            console.log(resp);
            this.nameis='';
            this.GetPet();
          })
          .catch((err)=>{
            console.log(err);
          })
    },
    async PutImagePet(id,image){
      await axios
          .put(baseUrl+id,{image:image})
          .then((resp)=>{
            console.log(resp);
            this.imageis='';
            this.GetPet();
          })
          .catch((err)=>{
            console.log(err);
          })
    }
  }


};
</script>

<style scoped>
p{
  color: #181818;
  font-size: 18px;
}
.title {
  font-size: 25px !important;
  font-family: Poppins, sans-serif;
  color: #181818;

}
.button{
  color: #f45c43;
}
.petCard {
  margin: 30px;
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  text-align: center;
  height: 700px;
  background-color: rgba(227,146,32,0.5);
  box-shadow: none !important;
}

.track-flex {
  width: 30%;
  display: flex;
  text-align: center;
  justify-content: center;
}

.track-flex img {
  border-radius: 70%;
}

.icon {
  width: 100%;
  height: 100%;
  position: sticky;
  cursor: pointer;
  transition: transform ease-in-out 150ms;
}

.play-animation:hover .icon {
  transform: translateY(0%);
}

.play-animation:hover .icon::before {
  opacity: 1;
}

.play-animation .icon:hover {
  transform: translateY(0%) scale(0.7);
}

.icon::before,
.icon::after {
  opacity: 0;
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-radius: 50%;
}

.icon::before {
  content: "\f04b";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 2em;
  color: white;
  background: linear-gradient(to bottom, #eb3349, #f45c43);
  display: grid;
  place-items: center;
  z-index: 10;
  transition: opacity 75ms linear, background-color 100ms linear;
}

.icon:hover::before {
  background: linear-gradient(to right, #eb3349, #f45c43);
}

.icon:hover::after {
  background: linear-gradient(to left, #eb3349, #f45c43);
  z-index: 1;
  animation: pulse 1250ms infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.35);
    opacity: 0;
  }
}
</style>