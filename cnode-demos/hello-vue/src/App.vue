<template>
  <div id="app">
    <h3>我是 app 组件。也是根组件</h3>
    <nav class="nav-header">
      <router-link :to="{name: 'Home', params: {msg:'我是快乐老家'}}">Home</router-link>
      <router-link :to="{name: 'About', params: {msg:'我是关于自己'}}">About</router-link>
     
    </nav>
    <router-view ></router-view>
    <hr>
    <nav>
      <router-link to="/test">Test</router-link>
      <router-link to="/copy">Copy</router-link>   
    </nav>
    <router-view name="b"></router-view>

    <hr>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
export default {
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid;
  text-align: center;
}

.nav-header {
  border: 1px solid;
  background-color: #ccc;
}

a {
  text-decoration: none;
  margin-left: 10px;
  padding: 10px;
}

</style>
