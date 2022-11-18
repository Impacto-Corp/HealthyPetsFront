<template>
  <div class="body">
    <div class="logoVet">
      <h2 class="gentitle">Healthy Pets</h2>
      <img src="src/assets/veterinaria1.jpg">
    </div>
    <div class="details">
      <pv-card v-for="vet in veterinaries":key="vet.id=1" style="margin-top:10px">
        <template #content>
          {{vet.naming}}
        </template>
      </pv-card>
      <pv-card v-for="vet in veterinaries":key="vet.id=1" style="margin-top:10px">
        <template #content>
          {{vet.lead_medic}}
        </template>
      </pv-card>
      <pv-card v-for="vet in veterinaries":key="vet.id=1" style="margin-top:10px">
        <template #content>
          {{vet.addressing}}
        </template>
      </pv-card>
      <pv-card v-for="vet in veterinaries":key="vet.id=1" style="margin-top:10px">
        <template #content>
          {{vet.phone}}
        </template>
      </pv-card>
      <pv-card style="margin-top:10px">
        <template #content>
          {{vet.mail}}
        </template>
      </pv-card>
      <pv-card v-for="vet in veterinaries":key="vet.id=1" style="margin-top:10px">
        <template #content>
          {{vet.descrip}}
        </template>
      </pv-card>
      <pv-button label="Registra a tu mascota aquí" class="p-button-rounded p-button-secondary"
                 style="background-color:orange; family:Roboto; margin-top:10px; margin-bottom:25px"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      "veterinaries": [
        {
          "id": 1,
          "naming": "Veterinaria Lima",
          "lead_medic": "Dr. Augusto Solano",
          "addressing": "Jr. Velasquez 654, San Isidro, Lima",
          "phone": "01 7543659",
          "mail": "AugSol87@gmail.com",
          "descrip": "Fundada en 1996, se especializa principalmente en atender emergencias veterinarias y también ofrece servicios cosméticos"
        }
        ]
    }
  },
  name: "vet-profile.vue"
}
</script>

<style scoped>
.details{
  margin-top: 75px;
  width: 325px;
  justify-content: center;
  vertical-align: top;
  border: 10px;
}
.body{
  width: 100%;
  height: 100%;
  background: url("../src/assets/fondo1.png");
  display: flex;
  justify-content: center;
  gap: 150px;
}
.logoVet{
  width: 35%;
  align-items: center;
  justify-content: center;
}
.logoVet img{
  width: 95%;
  margin-top: 85px;
}
.gentitle{
  family: Roboto;
  size: 50px;
}
.vetname{
  family: Roboto;
  size: 40px;
  color: black;
  margin-top: 15px;
}
</style>