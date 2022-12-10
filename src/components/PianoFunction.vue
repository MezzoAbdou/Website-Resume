<template>
<div class="piano">
    <ul>
        <li v-for="(color, index) in colors" v-bind:key="index"
        v-bind:style="{ 'background-color': color }" 
        v-bind:to= "notes[index]"
        v-on:click="playSound(index)"> <h1>{{notes[index]}}</h1>
        </li>
    </ul>
</div>
  
</template>

<script>

export default {
    
    data(){
        return {
            colors: ['#A93226', '#E67E22', '#F1C40F', '#28B463', '#3498DB'],
            notes: ['C', 'D', 'E', 'F', 'G']
        }
    },
    methods: {
        playSound(index){
            const audio = new Audio();
            audio.src = '/note' + index + '.mp3';
            audio.load();
            audio.play();
        }
    }


}
</script>

<style scoped>
ul{
    list-style: none;
    padding: 300px;
    padding-top: 200px;
    margin-top: -200px;
}
li{
    padding-top: 5px;
    cursor: pointer;
}
h1{
    padding-bottom: 45px;
}
li:active {
    color: bisque;
}



</style>