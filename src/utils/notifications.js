export default (title = '启动成功', body = 'Notification 保护你的眼睛') => {
  /* eslint-disable */
  return new Notification(title, { body })
}