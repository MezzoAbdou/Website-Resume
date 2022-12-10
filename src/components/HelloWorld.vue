<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      To visit my singer site click 
      <a href="https://lindsayvoice.com" target="_blank" rel="noopener">HERE!</a>.
    </p>
    <div class="extras">
    <h3>Extras</h3>
    <ul>
      <li><a href="https://www.linkedin.com/in/lindsay-abdou/" target="_blank" rel="noopener">Linkedin</a></li>
      <li><a href="https://github.com/MezzoAbdou" target="_blank" rel="noopener">Github</a></li>
      
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: orchid;
  font-size: 20px
}
p {
  animation-name: slideIn;
  animation-duration: 3s;
}
@keyframes slideIn {
  from {margin-left: 1000px;}
  to {margin-right: 0px;}
}
.extras {
  animation-name: slide;
  animation-duration: 3s;
}
@keyframes slide {
  from {margin-right: 1000px;}
  to {margin-left: 0px;}
}
</style>
