import type { IRouteRecord } from '@/router/interfaces/core'
import LayoutDefault from '@/layouts/default/index.vue'

export const labRoutes: IRouteRecord[] = [
  {
    path: '/demo',
    component: LayoutDefault,
    meta: {
      title: '案例',
      icon: 'demo',
      alwaysShow: true
    },
    children: [
      {
        name: 'FlowDemo',
        path: 'flowchart',
        component: () => import('@/views/demo/FlowDemo.vue'),
        meta: {
          title: '流程图',
          icon: 'flowchart'
        }
      }
    ]
  },
  {
    path: '/system',
    component: LayoutDefault,
    meta: {
      title: '系统设置',
      icon: 'system-config',
      alwaysShow: true
    },
    children: [
      {
        path: 'resource',
        name: 'SystemResource',
        component: () => import('@/views/system/resource/index.vue'),
        meta: {
          title: '资源管理',
          icon: 'resource-config'
        }
      },
      {
        path: 'role',
        name: 'SystemRole',
        component: () => import('@/views/system/role/index.vue'),
        meta: {
          title: '角色管理',
          icon: 'role'
        }
      }
    ]
  }
]
