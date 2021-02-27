Manages all the timers, plus a global timer powered by the currently running
timer.

<template>
  <div>
    <p>{{ totalElipsedTimme }}</p>
    <ul id='timers'>
      <li v-for='item in sortedInternalTimers' :key='item.id'>
        <Timer v-bind='item' />
      </li>
    </ul>
  </div>
</template>

<script>
import {stringToId} from '../utils/id'
import {formatTimer, initialTime, second} from '../utils/timer'
import Timer from './Timer'

export default {
  name: 'Timers',
  components: {
    Timer
  },
  props: {
    list: Array
  },
  data() {
    return {
      totalTime: initialTime,
      internalTimers: this.list.map(item => {
        const id = stringToId(item)
        return {
        id,
        name: item,
        isEnabled: false,
        onToggle: () => this.onToggle(id),
        onTick: () => {
          this.totalTime = this.totalTime + second
        }
      }
      })
    }
  },
  computed: {
    originalSortedIdsList() {
      return this.list.map(item => stringToId(item))
    },
    sortedInternalTimers() {
      return this.originalSortedIdsList.map(timerId => this.internalTimers.find(({id}) => id === timerId))
    },
    totalElipsedTimme() {
      return formatTimer(this.totalTime)
    }
  },
  methods: {
    onToggle(timerId) {
      // We want to have only one timer enabled at a time
      const timers = this.internalTimers.map(ot => ({...ot, isEnabled: false}))
      const timerIndex = timers.findIndex(({id}) => id === timerId)
      const timer = timers.splice(timerIndex, 1)[0]
      timers.push({...timer, isEnabled: !timer.isEnabled})
      this.internalTimers = timers
    }
  }
}
</script>

<style>

</style>