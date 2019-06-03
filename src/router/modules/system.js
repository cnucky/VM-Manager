
import Layout from '@/layout'

const systemRouter = {
  path: '/system',
  component: Layout,
  redirect: '/system/index',
  children: [
    {
      path: 'index',
      component: () => import('@/views/system/index'),
      name: 'System',
      meta: {
        title: '系统管理',
        icon: 'system'
      }
    }
  ]
}
export default systemRouter
