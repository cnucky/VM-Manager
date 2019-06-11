
import Layout from '@/layout'

const computeRouter = {
  path: '/compute',
  component: Layout,
  meta: {
    title: '计算',
    icon: 'compute'
  },
  children: [
    {
      path: 'clustersManager',
      component: () => import('@/views/compute/clusters-manager'),
      name: 'clustersManager',
      meta: {
        title: '集群'
      }
    },
    {
      path: 'hostManager',
      component: () => import('@/views/compute/host-manager'),
      name: 'hostManager',
      meta: {
        title: '主机'
      }
    },
    {
      path: 'networkManager',
      component: () => import('@/views/compute/network-manager'),
      name: 'networkManager',
      meta: {
        title: '网络'
      }
    },
    {
      path: 'vmManager',
      component: () => import('@/views/compute/vm-manager'),
      name: 'vmManager',
      meta: {
        title: '虚拟机'
      }
    },
    {
      path: 'recycleBin',
      component: () => import('@/views/compute/recycle-bin'),
      name: 'recycleBin',
      meta: {
        title: '回收站'
      }
    }
  ]
}
export default computeRouter
