<template>
  <div class="home">
    <img alt="Lindsay" src="../assets/cropedphoto.jpg">
    <HelloWorld msg="Lindsay Patterson Abdou"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
img {
  width: 20%;
  animation-name: slideIn;
  animation-duration: 3s;
}
@keyframes slideIn {
  from {margin-right: 1000px;}
  to {margin-left: 0px;}
}
</style>
