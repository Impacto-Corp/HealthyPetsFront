<template>
  <div class="tot">
    <div class="inicio">
      <h1>
        Bienvenido a Healthy Pets
      </h1>
      <img class="pic" src="src/assets/veterianria.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: "inicio"
}
</script>

<style>
.inicio{

  text-align: center;

  height: 600px;
  width: 1000px;
  background-image: url("/src/assets/fondo1.png");

}

.tot{
  display: flex;
  justify-content: center;
  align-items: center;


  width: 100%;
  height: 650px;

}

.pic{
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 70%;
}

</style>