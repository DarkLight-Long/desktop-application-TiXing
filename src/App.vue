<template>
  <div id="app">
    <left-menu />
    <router-view/>
  </div>
</template>

<script>
import LeftMenu from '@/components/leftMenu/LeftMenu.vue'
export default {
  name: 'App',
  components: {
    LeftMenu
  }
}
</script>

<style lang="stylus" scoped>
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  display: flex;
  height: 100%;

  .left-menu {
    max-width: 30%;
    min-width: 100px;
  }
</style>
