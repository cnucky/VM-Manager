
import Layout from '@/layout'

const otherRouter = {
  path: '/other',
  component: Layout,
  // redirect: '/table/complex-table',
  name: 'other',
  meta: { title: 'other', icon: 'list' },
  children: [
    {
      path: 'documentation',
      name: 'documentation',
      meta: { title: 'documentation' },
      redirect: '/documentation/index'
    },
    {
      path: 'guide',
      name: 'guide',
      meta: { title: 'guide' },
      redirect: '/guide/index'
    },
    {
      path: 'permission',
      name: 'permission',
      meta: { title: 'permission' },
      component: Layout,
      children: [
        {
          path: 'page',
          name: 'pagePermission',
          meta: { title: 'pagePermission' },
          redirect: '/permission/page'
        },
        {
          path: 'directive',
          name: 'directivePermission',
          meta: { title: 'directivePermission' },
          redirect: '/permission/directive'
        },
        {
          path: 'role',
          name: 'rolePermission',
          meta: { title: 'rolePermission' },
          redirect: '/permission/role'
        }
      ]
    },
    {
      path: 'icon',
      name: 'icons',
      meta: { title: 'icons' },
      redirect: '/icon/index'
    },
    {
      path: 'tab',
      name: 'tab',
      meta: { title: 'tab' },
      redirect: '/tab/index'
    },
    {
      path: 'error',
      name: 'errorPages',
      meta: { title: 'errorPages' },
      component: Layout,
      children: [
        {
          path: '401',
          name: 'page401',
          meta: { title: 'page401' },
          redirect: '/error/401'
        },
        {
          path: '404',
          name: 'page404',
          meta: { title: 'page404' },
          redirect: '/error/404'
        }
      ]
    },
    {
      path: 'error-log',
      name: 'errorLog',
      meta: { title: 'errorLog' },
      redirect: '/error-log/log'
    },
    {
      path: 'excel',
      name: 'excel',
      meta: { title: 'excel' },
      redirect: '/excel'
    },
    {
      path: 'zip',
      name: 'zip',
      meta: { title: 'zip' },
      redirect: '/zip'
    },
    {
      path: 'pdf',
      name: 'pdf',
      meta: { title: 'pdf' },
      redirect: '/pdf/index'
    },
    {
      path: 'theme',
      name: 'theme',
      meta: { title: 'theme' },
      redirect: '/theme/index'
    },
    {
      path: 'clipboard',
      name: 'clipboard',
      meta: { title: 'clipboardDemo' },
      redirect: '/clipboard/index'
    },
    {
      path: 'i18n',
      name: 'languge',
      meta: { title: 'i18n' },
      redirect: '/i18n/index'
    },
    {
      path: 'https://github.com/PanJiaChen/vue-element-admin',
      name: 'externalLink',
      meta: { title: 'externalLink' }
    }
  ]
}
export default otherRouter
