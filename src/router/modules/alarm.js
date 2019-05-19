
import Layout from '@/layout'

const alarmRouter = {
  path: '/alarm',
  component: Layout,
  redirect: '/alarm/index',
  children: [
    {
      path: 'index',
      component: () => import('@/views/alarm/index'),
      name: 'Alarm',
      meta: {
        title: '告警管理',
        // icon: ''
      }
    }
  ]
}
export default alarmRouter
