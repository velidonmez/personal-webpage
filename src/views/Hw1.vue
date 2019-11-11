<template>
  <div class="hw1 container">
    <div class="pop-output">
      <div class="row input-group mb-3">
        <input v-model="populationSize" type="number" class="form-control" placeholder="Enter Population Size" aria-label="Example text with button addon" aria-describedby="button-addon1">
        <div class="input-group-prepend">
          <button @click="generatePopulation(parseInt(populationSize))" class="btn btn-outline-secondary" type="button" id="button-addon1">Populate</button>
        </div>
      </div>
      <div class="row">
        <span>Randomly Generated Numbers</span>
      </div>
      <div class="row">
        <span v-for="(item,index) in population" :key="index">
          {{item}},
        </span>
      </div>
    </div>
    <div class="pop-sample-output">
      <div class="row input-group mb-3">
        <input v-model="sampleSize" type="number" class="form-control" placeholder="Enter Population Size">
        <div class="input-group-prepend">
          <button @click="selectFromPopulation(modifiedPopulation,parseInt(sampleSize))" class="btn btn-outline-secondary" type="button">Generate</button>
        </div>
      </div>
      <div class="row">
        <span>Randomly Selected Numbers: </span>
      </div>
      <div class="row">
        <span v-for="(item,index) in selectedPopulation" :key="index">
          {{item}},
        </span>
      </div>
      <div class="row">
        <span>Mean for Selected Numbers: </span>
      </div>
      <div class="row">
        <span v-for="(item,index) in meanList" :key="index">
          {{item}},
        </span>
      </div>
      <div class="row">
        <span>Standard Deviation for Selected Numbers: </span>
      </div>
      <div class="row">
        <span v-for="(item,index) in stDev" :key="index">
          {{item}},
        </span>
      </div>
      <div class="row">
        <span>Variance for Selected Numbers: </span>
      </div>
      <div class="row">
        <span v-for="(item,index) in variance" :key="index">
          {{item}},
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hw1',
  data () {
    return {
      populationSize: 100,
      sampleSize: 10,
      population: [],
      meanList: [],
      stDev: [],
      variance: [],
      selectedPopulation: [],
      modifiedPopulation: []
    }
  },
  methods: {
    generatePopulation (populationSize) {
      let population = []
      for (let i = 0; i < populationSize; i++) {
        population.push(Math.floor(Math.random() * populationSize))
      }
      this.population = population
      this.modifiedPopulation = [...population]
    },
    selectFromPopulation (population, selectionSize) {
      let output = []
      const input = population
      let selected = 0
      while (selected !== selectionSize) {
        let index = Math.floor(Math.random() * (input.length - 1))
        if (input[index] !== null) {
          output.push(population[index])
          input[index] = null
          selected++
        }
      }
      this.selectedPopulation = [...this.selectedPopulation, ...output]
      this.meanList.push(this.mean(this.selectedPopulation))
      this.stDev.push(this.standardDeviation(this.selectedPopulation))
      this.variance.push(this.calcVariance(this.selectedPopulation))
    },
    mean (sample) {
      return (sample.reduce((a, b) => a + b) / sample.length)
    },
    standardDeviation (values) {
      const avg = this.mean(values)
      const squareDiffs = values.map(function (value) {
        let diff = value - avg
        return diff * diff
      })
      let avgSquareDiff = this.mean(squareDiffs)
      return Math.sqrt(avgSquareDiff)
    },
    calcVariance (values) {
      const avg = this.mean(values)
      let diff = []
      values.forEach(el => {
        diff.push(Math.pow((avg - el), 2))
      })
      return (diff.reduce((a, b) => a + b)) / values.length
    }
  },
  async mounted () {
    // this.population = await this.generatePopulation(this.populationSize)
    // this.selectedPopulation = await this.selectFromPopulation(this.population, 10)
    console.log(this.population)
  }
}
</script>
<style>
  body{
    padding-left: 0!important;
  }
</style>
