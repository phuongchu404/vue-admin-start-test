import { defineStore } from 'pinia'
import type { IRouteRecord } from '@/router/interfaces/core'
import { constantRoutes, getFullRoutes } from '@/router/staticRoutes'
import type { IRouteResourceInfo } from '@/api/resource/index.interface'
import settings from '@/settings'
import router from '@/router'

const flatRouteNames = (routes: IRouteRecord[], res: (string | symbol)[] = []) => {
  routes.forEach((v) => {
    if (v.name) {
      res.push(v.name)
    }

    if (v.children && v.children.length > 0) {
      flatRouteNames(v.children, res)
    }
  })

  return res
}

export const usePermissionStore = defineStore('permission', {
  state: () => ({
    sidebarList: constantRoutes as IRouteRecord[],
    routes: constantRoutes as IRouteRecord[],
    dynamicRoutes: [] as IRouteRecord[],
    resources: [] as IRouteResourceInfo[],
    resourceAuthCodes: [] as string[]
  }),
  getters: {
    dynamicRouteNames(): (string | symbol)[] {
      return [...new Set([...flatRouteNames(this.dynamicRoutes)])]
    }
  },
  actions: {
    SET_ROUTES(routes: IRouteRecord[]) {
      this.dynamicRoutes = routes
      this.routes = getFullRoutes(routes, settings.showDynamicSidebarMenu)
    },
    SET_RESOURCE_AUTH_CODES(arr: string[]) {
      this.resourceAuthCodes = arr
    },
    setResources(data: IRouteResourceInfo[]) {
      this.resources = data
    },
    setSidebarList(routes: IRouteRecord[]) {
      this.sidebarList = getFullRoutes(routes, settings.showDynamicSidebarMenu)
    },
    removeDynamicRoutes() {
      this.dynamicRouteNames.forEach((name) => {
        if (router.hasRoute(name)) {
          router.removeRoute(name)
        }
      })
    }
  }
})
