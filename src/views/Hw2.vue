<template>
  <div class="hw2 container">
    <div class="row">
      <button @click="trigger">Count</button>
      <textarea v-model="text" rows="14" cols="120">
      </textarea>
      <p>{{wordsObj}}</p>
    </div>
    <wordcloud
      :data="defaultWords"
      nameKey="name"
      valueKey="value"
      :color="myColors"
      :wordClick="wordClickHandler">
    </wordcloud>
  </div>
</template>

<script>
import wordcloud from 'vue-wordcloud'

export default {
  name: 'hw2',
  components: {
    wordcloud
  },
  data () {
    return {
      myColors: ['#380e7f', '#6915cf', '#d62196', '#d62196'],
      text: 'Bacon ipsum dolor amet hamburger beef kevin, pork chop sirloin turkey jowl short loin frankfurter. Filet mignon tenderloin shoulder, ground round boudin capicola bacon. Alcatra ham hock shankle filet mignon, leberkas shoulder fatback pancetta landjaeger beef ribs meatloaf boudin buffalo ground round cow. Ground round chicken burgdoggen bacon jowl. Chicken swine t-bone beef ribs fatback, ground round burgdoggen salami leberkas flank cupim corned beef short loin turkey jowl. Pancetta tail andouille frankfurter spare ribs ribeye pork chop chuck sausage. biltong, strip steak chicken drumstick venison prosciutto tail ball tip beef shoulder sausage chuck sirloin. Boudin beef tail kielbasa pancetta shoulder, burgdoggen salami rump ball tip ribeye porchetta turducken meatloaf. Corned beef short ribs strip steak rump, kielbasa meatloaf short loin fatback boudin. Brisket tail swine venison, jowl strip steak meatball leberkas kevin kielbasa tenderloin. Hamburger corned beef biltong, ham hock meatball sausage meatloaf picanha brisket cupim pancetta pork belly pork ham. Bresaola bacon ground round jowl pork belly venison turkey hamburger t-bone, landjaeger shank chuck short loin boudin pork loin. Tri-tip short ribs swine, beef ribs fatback turducken meatloaf rump.',
      words: [],
      wordsObj: [],
      defaultWords: []
    }
  },
  methods: {
    splitText (text) {
      return text.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').split(' ')
    },
    countWordsAndEliminateDuplicates (words) {
      let output = []
      for (let i = 0; i < words.length; i++) {
        output.push({
          word: words[i]
        })
      }
      return output.reduce((result, current) => {
        if (!result[current['word']]) {
          result[current['word']] = 1
        } else {
          result[current['word']] += 1
        }
        return result
      }, {})
    },
    wordClickHandler (name, value, vm) {
      console.log('wordClickHandler', name, value, vm)
    },
    trigger () {
      this.defaultWords = []
      this.words = this.splitText(this.text).sort()
      console.log(this.words)
      this.wordsObj = this.countWordsAndEliminateDuplicates(this.words)
      for (let [key, value] of Object.entries(this.wordsObj)) {
        this.defaultWords.push({
          name: key,
          value
        })
      }
    }
  }
}
</script>
<style scoped>
  body{
    padding-left: 0!important;
  }
</style>
