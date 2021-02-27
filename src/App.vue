<template>
  <div id="app">
    <Timers v-bind:list='timers' />
  </div>
</template>

<script>
import Timers from './components/Timers'

export default {
  name: 'App',
  data: function() {
    return {
      timers: ['in meeting', 'in dev', 'not working']
    }
  },
  components: {
    Timers
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
