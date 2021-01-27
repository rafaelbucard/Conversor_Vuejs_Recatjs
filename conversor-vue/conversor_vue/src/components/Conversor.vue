<template>
  <div class="conversor">
      <h2>{{moedaA}} para {{moedaB}} </h2>
      
 </div>  
</template>

<script>

export default {
  name: 'Conversor',
  props: ["moedaA","moedaB"],

};
</script>

<style scoped>
.conversor {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
