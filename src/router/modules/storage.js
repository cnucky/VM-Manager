
import Layout from '@/layout'

const storageRouter = {
  path: '/storage',
  component: Layout,
  meta: {
    title: '存储与镜像',
    icon: 'storage'
  },
  children: [
    {
      path: 'storageManager',
      component: () => import('@/views/storage/storage-manager'),
      name: 'storageManager',
      meta: {
        title: '存储配置'
      }
    },
    {
      path: 'imageManager',
      component: () => import('@/views/storage/image-manager'),
      name: 'imageManager',
      meta: {
        title: '镜像管理'
      }
    }
  ]
}
export default storageRouter
