
import Layout from '@/layout'

const securityRouter = {
  path: '/security',
  component: Layout,
  meta: {
    title: '认证与安全',
    icon: 'security'
  },
  children: [
    {
      path: 'adminAccountManager',
      component: () => import('@/views/security/admin-account-manager'),
      name: 'adminAccountManager',
      meta: {
        title: '管理员'
      }
    },
    {
      path: 'characterManager',
      component: () => import('@/views/security/character-manager'),
      name: 'characterManager',
      meta: {
        title: '角色管理'
      }
    },
    {
      path: 'ADManager',
      component: () => import('@/views/security/AD-manager'),
      name: 'ADManager',
      meta: {
        title: 'AD管理'
      }
    }
  ]
}
export default securityRouter
