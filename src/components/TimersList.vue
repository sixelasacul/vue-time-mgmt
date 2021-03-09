Manages all the timers, plus a global timer powered by the currently running
timer.

<template>
  <v-list>
    <v-subheader>Total elapsed time: {{ totalElapsedTime }}</v-subheader>
    <v-list-item-group color="primary">
      <v-list-item
        v-for="timer in sortedInternalTimers"
        :key="timer.id"
        two-line
        @click="timer.onToggle"
      >
        <timer-item
          v-bind="timer"
          class="ma-4"
        />
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { stringToId } from "../utils/id"
import { formatTimer, initialTime, second } from "../utils/timer"
import TimerItem from './TimerItem.vue'

export default {
  name: "TimersList",
  components: {
    TimerItem
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    const baseTime = localStorage.getItem("total")
    return {
      totalTime: Number(baseTime) || initialTime,
      internalTimers: this.list.map((item) => {
        const id = stringToId(item)
        const storedTime = localStorage.getItem(id)
        return {
          id,
          name: item,
          isEnabled: false,
          baseTime: Number(storedTime) || undefined,
          onToggle: () => this.onToggle(id),
          onTick: (time) => {
            this.totalTime = this.totalTime + second
            localStorage.setItem(id, time)
            localStorage.setItem("total", this.totalTime)
          }
        }
      })
    }
  },
  computed: {
    originalSortedIdsList() {
      return this.list.map((item) => stringToId(item))
    },
    sortedInternalTimers() {
      return this.originalSortedIdsList.map((timerId) =>
        this.internalTimers.find(({ id }) => id === timerId)
      )
    },
    totalElapsedTime() {
      return formatTimer(this.totalTime)
    }
  },
  methods: {
    onToggle(timerId) {
      this.internalTimers = this.internalTimers.map(timer => {
        if(timer.id === timerId) {
          return {...timer, isEnabled: !timer.isEnabled}
        }
        return {...timer, isEnabled: false}
      })
    }
  }
}
</script>

<style>
</style>