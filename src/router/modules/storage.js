
import Layout from '@/layout'

const storageRouter = {
  path: '/storage',
  component: Layout,
  redirect: '/storage/index',
  children: [
    {
      path: 'index',
      component: () => import('@/views/storage/index'),
      name: 'Storage',
      meta: {
        title: '存储与镜像',
        // icon: ''
      }
    }
  ]
}
export default storageRouter
