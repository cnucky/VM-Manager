
import Layout from '@/layout'

const systemRouter = {
  path: '/system',
  component: Layout,
  meta: {
    title: '系统管理',
    icon: 'system'
  },
  children: [
    {
      path: 'baseServerManager',
      component: () => import('@/views/system/base-server-manager'),
      name: 'baseServerManager',
      meta: {
        title: '服务管理'
      }
    },
    {
      path: 'operationLog',
      component: () => import('@/views/system/operation-log'),
      name: 'operationLog',
      meta: {
        title: '操作日志'
      }
    },
    {
      path: 'systemConfigManager',
      component: () => import('@/views/system/system-config-manager/index'),
      meta: {
        title: '系统配置'
      },
      children: [
        {
          path: 'configManager',
          component: () => import('@/views/system/system-config-manager/config-manager'),
          name: 'configManager',
          meta: {
            title: '配置'
          }
        },
        {
          path: 'softwareLicenseManager',
          component: () => import('@/views/system/system-config-manager/software-license-manager'),
          name: 'softwareLicenseManager',
          meta: {
            title: '授权'
          }
        },
        {
          path: 'logoCustomization',
          component: () => import('@/views/system/system-config-manager/logo-customization'),
          name: 'logoCustomization',
          meta: {
            title: '个性化定制'
          }
        }
      ]
    }
  ]
}
export default systemRouter
