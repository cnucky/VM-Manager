
import Layout from '@/layout'

const applicationRouter = {
  path: '/application',
  component: Layout,
  redirect: '/application/index',
  children: [
    {
      path: 'index',
      component: () => import('@/views/application/index'),
      name: 'Application',
      meta: {
        title: '应用服务',
        icon: 'app-server'
      }
    }
  ]
}
export default applicationRouter
