
import Layout from '@/layout'

const applicationRouter = {
  path: '/application',
  component: Layout,
  meta: {
    title: '应用服务',
    icon: 'app-server'
  },
  children: [
    {
      path: 'appGroupManager',
      component: () => import('@/views/application/app-group-manager'),
      name: 'appGroupManager',
      meta: {
        title: '应用组'
      }
    },
    {
      path: 'appServerManager',
      component: () => import('@/views/application/app-server-manager'),
      name: 'appServerManager',
      meta: {
        title: '应用服务器'
      }
    },
    {
      path: 'appStrategyManager',
      component: () => import('@/views/application/app-strategy-manager'),
      name: 'appStrategyManager',
      meta: {
        title: '策略'
      }
    }
  ]
}
export default applicationRouter
