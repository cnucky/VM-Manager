
import Layout from '@/layout'

const securityRouter = {
  path: '/security',
  component: Layout,
  redirect: '/security/index',
  children: [
    {
      path: 'index',
      component: () => import('@/views/security/index'),
      name: 'Security',
      meta: {
        title: '认证与安全',
        // icon: ''
      }
    }
  ]
}
export default securityRouter
