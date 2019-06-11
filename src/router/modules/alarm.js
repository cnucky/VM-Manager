
import Layout from '@/layout'

const alarmRouter = {
  path: '/alarm',
  component: Layout,
  meta: {
    title: '告警管理',
    icon: 'alarm'
  },
  children: [
    {
      path: 'alarmLog',
      component: () => import('@/views/alarm/alarm-log'),
      name: 'alarmLog',
      meta: {
        title: '告警日志'
      }
    },
    {
      path: 'alarmConfig',
      component: () => import('@/views/alarm/alarm-config'),
      name: 'alarmConfig',
      meta: {
        title: '告警配置'
      }
    },
    {
      path: 'emailConfig',
      component: () => import('@/views/alarm/email-config'),
      name: 'emailConfig',
      meta: {
        title: '邮件告警'
      }
    }
  ]
}
export default alarmRouter
