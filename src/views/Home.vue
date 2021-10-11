<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src
import notifications from '@/utils/notifications'
export default {
  name: 'Home',
  data () {
    return {
      notificationSchedule: ''
    }
  },
  mounted () {
    notifications('启动成功', 'Notifications 保护你的眼睛')
    this.notificationSchedule = this.handleCreate(1000 * 60 * 45)
  },
  methods: {
    hanleClear () {
      clearInterval(this.notificationSchedule)
    },
    handleCreate (milliSecond) {
      return setInterval(() => {
        notifications('温馨提示', '半小时已到请休息')
      }, milliSecond)
    }
  }
}
</script>
