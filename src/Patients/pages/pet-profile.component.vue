<template>

  <div class="card">
    <div class="flex flex-wrap card-container gap-3">
      <petCard
          v-for="petData in petsData"
          :key="petData.id"
          :petData="petData"
      >

      </petCard>
    </div>
  </div>
</template>

<script>
import petCard from "/src/Patients/pages/pet-card.component.vue";
import {PetsApiServices} from "@/Patiens/services/pets-api.service";

export default {
  components: {
    petCard,


  },
  name: "pet-profile",
  data() {
    return {
      petsData: [],
      petsService:undefined,

    };
  },
  created() {
    this.petsService= new PetsApiServices();
    this.getAllCards();
  },
  methods: {
    getAllCards() {
      this.petsService.getPets().then((response) => {
        this.petsData = response.data.filter((item) => item.id);
      });
    },
  },

};
</script>

<style scoped>
.grid {
  display: flex;
  justify-content: center;
  font-family: "Poppins", sans-serif;
}
h1,
p {
  font-family: "Poppins", sans-serif;
}

p {

  text-align: center;
}
</style>
