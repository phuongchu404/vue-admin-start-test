<template>
  <div class="navbar">
    <div class="navbar__left">
      <Hamburger
        :is-active="sidebar.opened"
        :disabled="disabledHamburger"
        @toggle-click="toggleSideBar"
      />
      <Breadcrumb />
    </div>

    <div class="right-menu">
      <LangSelect v-if="SettingStore.showLanguagePicker" class="right-menu-item hover-effect" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'
import { useAppStore } from '@/stores/app'
import Breadcrumb from './BreadcrumbNav.vue'
import Hamburger from './HamburgerIcon.vue'
import LangSelect from './LangSelect.vue'
import { useUserStore } from '@/stores/user'
import { useSettingsStore } from '@/stores/settings'

defineOptions({
  name: 'NavBar'
})

withDefaults(
  defineProps<{
    disabledHamburger?: boolean
  }>(),
  {
    disabledHamburger: false
  }
)

const SettingStore = useSettingsStore()

const AppStore = useAppStore()

const sidebar = computed(() => AppStore.sidebar)

const toggleSideBar = () => {
  AppStore.ToggleSideBar()
}

const router = useRouter()
const route = useRoute()

const UserStore = useUserStore()

const logout = async () => {
  await UserStore.logout()
  router.push(`/login?redirect=${route.fullPath}`).catch((err) => {
    console.warn(err)
  })
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  display: flex;
  justify-content: space-between;

  &__left {
    display: flex;
    align-items: center;
  }

  .right-menu {
    height: 100%;
    line-height: 50px;
    display: flex;
    align-items: center;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
