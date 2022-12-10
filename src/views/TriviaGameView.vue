<template>
<div class="game">
          <h1>Can you answer the questions!?</h1>

  <div class="trivia">
      <div class="flashcard" v-for="(question, index) in questions" 
      v-bind:key="index"  v-on:click = "playSound(index)"  >
          <vue-flashcard  class="card" v-bind:headerFront = "questions[index]"
                v-bind:headerBack = "answers[index]"
                v-bind:imgFront= "pictures[index]"
                v-bind:imgBack= "pictures[index]"
                footerFront = "Click to show Answer"
                footerBack = "Click to see Question"
                colorBack = "orchid"
                colorFront = "#D4E6F1"
                
               
                
                />
      </div>
  </div>
  </div>


</template>

<script>
 //@mouseover="playSound(index)" -->

import vueFlashcard from 'vue-flashcard';
import pic1 from '../assets/pic1.webp';
import lionel from '../assets/lionel.webp';
import dogs from '../assets/dogs.webp';
import pikachu from '../assets/pikachu.webp';

export default {
    data(){
        return {
            questions: ['Who is this and what does she do?', 
            'Who is this and where does he live?', 
            'How many dogs are in this picture?', 
            'Who is this and what type of animal?'],
            answers: ['Whitney Houston, singer',
            'Lionel Messi, Argentina',
            '8',
            'Pikachu, a Pokemon'],
            pic1,
            lionel,
            dogs,
            pikachu,
            pictures: [pic1, lionel, dogs, pikachu],
        } 
    },
components: {vueFlashcard},
methods: {
        playSound(index){
            const audio = new Audio();
            audio.src = '/sound' + index + '.mp3';
            audio.load();
            audio.play();
        }
    }

}
</script>

<style>
.trivia{
     margin: auto;
  width: 50%;
    
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  gap: 5px;
  
grid-area: bottom;
justify-items: center;   
    
}
.game{
    display: grid;
    grid-template-columns: 1fr ;
    grid-template-areas: "top"
    "bottom";
    
}
h1{
    grid-area: top;
}
/* .flashcard:hover {
    playSound(index);
} */




</style>