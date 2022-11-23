<template>
  <div class="general">
    <pv-toolbar
        style="
        background-color: #EDF0F5 !important;
        justify-content: start !important;
      "
        class="toobal"
    >

      <template #start>
        <div style="margin-inline: 3rem" class="logo flex align-items-center">
          <img src="src/assets/logo.png" alt="logo" class="logotipo pt-1 pb-4"/>

          <!--
          <router-link to="/">

          </router-link>

         <div class="card">
            <div class="p-fluid">
              <div class="p-float-label p-input-icon-right">
                <i class="pi pi-search" style="color: red" />
                <pv-input-text
                    type="text"
                    placeholder=""
                    required="true"
                    autocomplete="off"
                ></pv-input-text>
              </div>
            </div>
          </div>

          -->

        </div>
      </template>




      <template #end>
        <div class="flex-column mr-0 justify-content-end" >
          <router-link
              v-for="item in items"
              :to="item.to"
              custom
              v-slot="{ navigate, href }"
              :key="item.label"
          >
            <pv-button
                class="p-button-secondary bg-primary ml-3"
                :href="href"
                @click="navigate"
            >{{ item.label }}</pv-button
            >
          </router-link>
        </div>
      </template>


    </pv-toolbar>
  </div>
</template>


<script>
export default {
  name:"toolbar",
  data(){
    return{
      items: [
        {label: "Start Session", to:"/singIn"},
        {label: "User Register",to:"/userRegister"},
        {label: "Pet Profile", to: "/petProfile" },

        {label: "Pet Register", to:"/petRegister"},
        {label: "Vet Profile", to:"/vetProfile"},
        {label: "Veterinary Register", to:"/veterinaryRegister"},
        {label: "Log Out", to:"/"},
      ],
    }
  }
}
</script>



<style>

.divLogo{
  border: blue 3px solid;
}

.logotipo{
  float: left;
  margin-bottom: 0px;
  height: 100px;
  width: 90%;
}

.toobal{
  margin-top: -30px;
  height: 100px;
  align-items: center;
}

.general{
  align-items: center;
}





</style>