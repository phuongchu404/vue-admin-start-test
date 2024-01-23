<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <el-button @click="handleTest">Default</el-button>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getAddress } from '@/api/test/index'
import type { IAddress } from '@/api/test/type'
defineOptions({
  name: 'DashboardView'
})
const handleTest = async () => {
  const iy = Math.floor(Math.random() * 700) + 1
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { status, data } = await getAddress(iy)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const result: IAddress = data
  console.log(result)
  console.log(typeof status)
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  padding: 16px;
}
</style>
