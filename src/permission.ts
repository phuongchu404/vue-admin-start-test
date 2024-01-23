import { tricklingProgress } from '@/plugins/trickling'
import type { Router } from 'vue-router'
import settings from './settings'

export const whiteList = ['/404', '/redirect']

export const inWhiteList = (path: string) => {
  return whiteList.some((v) => path.startsWith(v))
}

export const initPermissionGuard = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    // start progress bar
    tricklingProgress.start()
    // Has no token
    if (inWhiteList(to.path) || settings.anonymousMode) {
      // In the free login whitelist, go directly
      next()
    }
  })

  router.afterEach((to) => {
    // finish progress bar
    tricklingProgress.done()
    // set page title
    document.title = to.meta.title ? `${settings.title} | ${to.meta.title}` : settings.title
  })
}
