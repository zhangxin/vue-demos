<template>
<div>
  <h2>我是 hello world 组件</h2>
  <p>{{msg}}</p>
  我是 hellow。我获得了 vuex 的 num --- {{vuexNum}}
  <button @click="add()">+10</button>


</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:['msg'],
  data() {
    return {}
  },
  computed: {
    vuexNum: function() {
      return this.$store.state.num
    }
  },
  methods: {
    add() {
      console.log(1)
      this.$store.commit('madd')
    }
  }
}
</script>

<style scoped>

</style>