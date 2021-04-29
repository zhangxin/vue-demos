<template>
<div>
  <h2>我是 About 页面</h2>
   {{ $route.params.msg}}
  
  我是 about。我获得了 vuex 的 num --- {{vuexNum}}
<button @click="add()">+10</button>
   
</div>

</template>

<script>
export default {
  name: 'Aoubt',
  computed: {
    vuexNum: function() {
      return this.$store.state.num
    }
  },
  methods: {
    add() {
      this.$store.commit('madd')
    }
  }
}
</script>

<style scoped>

</style>