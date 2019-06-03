
import Layout from '@/layout'

const computeRouter = {
  path: '/compute',
  component: Layout,
  redirect: '/compute/index',
  children: [
    {
      path: 'index',
      component: () => import('@/views/compute/index'),
      name: 'Compute',
      meta: {
        title: '计算',
        icon: 'compute'
      }
    }
  ]
}
export default computeRouter
