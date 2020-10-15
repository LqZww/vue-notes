<template>
  <div>
    <!-- <h2>当前count值：{{count}}</h2> -->
    <h2>{{showNum}}</h2>
    <button @click="reduce">-1</button>
    <button @click="subAsync">-1 Async</button>
    <button @click="subAsync1(10)">-N Async</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Reduce',
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum']),
  },
  methods: {
    ...mapMutations(['sub']),
    ...mapActions(['subAsync', 'subAsync1']),
    reduce() {
      this.sub()
    },
  },
}
</script>

<style></style>
