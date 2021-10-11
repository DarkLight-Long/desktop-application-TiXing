<template>
  <div class="left-menu">
    <ul type="none">
      <li v-for="(item, index) in menu" :key="index" @click="handleClick(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>

const menu = [
  {
    id: 1,
    icon: '主页',
    label: '主页',
    router: '主页'
  },
  {
    id: 2,
    icon: '功能',
    label: '功能',
    router: '功能'
  },
  {
    id: 3,
    icon: '联系',
    label: '联系',
    router: '联系'
  }
]

export default {
  name: 'LeftMen',
  data () {
    return {
      menu: menu
    }
  },
  methods: {
    handleClick (item) {
      // this.$route.push({ path: item.})
      console.log(item)
    }
  }
}
</script>

<style scoped>
  .left-menu {
    border-right: 1px solid black;
  }
</style>
