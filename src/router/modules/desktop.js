import Layout from '@/layout'

const desktopRouter = {
  path: '/desktop',
  component: Layout,
  meta: {
    title: '桌面服务',
    icon: 'desktop'
  },
  children: [
    {
      path: 'rapidDeployCenter',
      component: () => import('@/views/desktop/quick-grant'),
      name: "rapidDeployCenter",
      meta: {
        title: '快速发放'
      }
    },
    {
      path: 'desktopGroupManager',
      component: () => import('@/views/desktop/desktop-group'),
      name: "desktopGroupManager",
      meta: {
        title: '桌面组'
      }
    },
    {
      path: 'strategy',
      component: () => import('@/views/desktop/strategy/index'),
      meta: {
        title: '策略'
      },
      children: [
        {
          path: 'timingStrategyManager',
          component: () => import('@/views/desktop/strategy/timing-strategy'),
          name: 'timingStrategyManager',
          meta: {
            title: '定时策略'
          }
        },
        {
          path: 'desktopStrategyManager',
          component: () => import('@/views/desktop/strategy/desktop-strategy'),
          name: "desktopStrategyManager",
          meta: {
            title: '广域网策略'
          }
        }
      ]
    }
  ]
}
export default desktopRouter
