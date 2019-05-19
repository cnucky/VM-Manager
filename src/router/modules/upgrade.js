
import Layout from '@/layout'

const upgradeRouter = {
  path: '/upgrade',
  component: Layout,
  redirect: '/upgrade/index',
  children: [
    {
      path: 'index',
      component: () => import('@/views/upgrade/index'),
      name: 'Upgrade',
      meta: {
        title: '升级',
        // icon: ''
      }
    }
  ]
}
export default upgradeRouter
