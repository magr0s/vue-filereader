<template>
  <div
    id="app"
  >
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >

    <div
     class="wrapper"
    >
      <h1
       class="title"
      >
       Vue FileReader
      </h1>

      <file-reader
        accept=".txt"
        output="array"
        @reader-load="fileLoaded"
      />

      <div
        v-show="byteLength"
        style="margin-top: 15px"
      >
        <span class="result">Current file byte length: {{ byteLength }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import FileReader from './components'

export default {
  name: 'app',

  data () {
    return {
      byteLength: 0
    }
  },

  components: {
    FileReader
  },

  methods: {
    fileLoaded (result) {
      console.log(result)
      // this.byteLength = data.byteLength
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  margin: 15px;
  padding: 15px;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.title {
  font-weight: bold;
  text-decoration: underline;
}

.result {
  font-size: 12px;
}
</style>
