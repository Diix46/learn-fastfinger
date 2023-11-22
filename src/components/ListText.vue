<script setup>
import { listMots } from '@/data/words.json'
import { ref } from 'vue'


//PROPS


//VARIABLES
const text = ref('')

//METHODS
function controlWord(word) {
  if (text.value === word) {
    console.log('toto')
    return true

  } else {
    return false
  }
}

//CYCLE LIFE

</script>

<template>
  <div>
    <div v-for="mot in listMots" :key="mot">
      {{ mot }}
    </div>
    <input :value="text" @input="event => controlWord(mot)">
  </div>
</template>