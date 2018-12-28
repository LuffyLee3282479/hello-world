import Layout from '@/views/layout/Layout'

const appManageRouter = {
  path: '/appManage',
  component: Layout,
  redirect: 'noredirect',
  name: 'appManage',
  meta: {
    title: 'appManage',
    icon: 'peoples'
  },
  children: [
    {
      path: 'customStyles',
      component: () => import('@/views/appmanage/releaseManage/customStyles'),
      name: 'CustomStyles',
      meta: { title: 'customStyles' }
    },
    {
      path: 'gatedLaunch',
      component: () => import('@/views/appmanage/releaseManage/gatedLaunch'),
      name: 'GatedLaunch',
      meta: { title: 'gatedLaunch' }
    },
    {
      path: 'appUpload',
      component: () => import('@/views/appmanage/upload/APPUpload'),
      name: 'AppUpload',
      meta: { title: 'appUpload' }
    }
  ]
}

export default appManageRouter