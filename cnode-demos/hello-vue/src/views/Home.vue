<template>
<div>
  <h2>我是 Home 页面</h2>
  <HelloWorld msg="我是 Home 组件的数据"></HelloWorld>
  {{ $route.params.msg }}
    我是 home。 vuex 的 num --- {{vuexNum}}
  <button @click="add()">通过 action +10</button>


</div>
</template>

<script>
import HelloWorld from '../components/HelloWorld'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
     vuexNum: function() {
      return this.$store.state.num
    }, 
  },

  methods: {
    add() {
      this.$store.dispatch('acadd')
    }
  }
}
</script>

<style scoped>

</style>