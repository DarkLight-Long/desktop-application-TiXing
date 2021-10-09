<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="hanleClear">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import notifications from '../utils/notifications'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      notificationSchedule: ''
    }
  },
  mounted () {
    notifications('启动成功', 'Notifications 保护你的眼睛')
    console.log(this)
    const _this = this
    this.notificationSchedule = setInterval(() => {
      /** 消息提醒两种方式皆可 */
      // notifications('温馨提示', '半小时已到请休息')
      _this.$notification('温馨提示', '半小时已到请休息')
    }, 1000 * 3)
  },
  methods: {
    hanleClear () {
      clearInterval(this.notificationSchedule)
    }
  }
}
</script>
