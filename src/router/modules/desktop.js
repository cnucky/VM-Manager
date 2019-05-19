
import Layout from '@/layout'

const desktopRouter = {
  path: '/desktop',
  component: Layout,
  redirect: '/desktop/index',
  children: [
    {
      path: 'index',
      component: () => import('@/views/desktop/index'),
      name: 'Desktop',
      meta: {
        title: '桌面服务',
        // icon: ''
      }
    }
  ]
}
export default desktopRouter
