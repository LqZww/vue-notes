<template>
  <div>
    <!-- <h2>当前count值：{{$store.state.count}}</h2> -->
    <h2>{{$store.getters.showNum}}</h2>
    <button @click="handle">+5</button>
    <button @click="handle1">+10 async</button>
  </div>
</template>

<script>
export default {
  name: 'Add',
  methods: {
    handle() {
      this.$store.commit('add', 5)
    },
    handle1() {
      this.$store.dispatch('addAsync', 10)
    },
  },
}
</script>

<style></style>
