<template>
  <div class="dashboard-container">Home</div>
  <el-upload
    list-type="picture"
    action=""
    :limit="1"
    accept=".jpg, .jpeg, .png, .wsq"
    :before-upload="handleBeforeUpload"
    :auto-upload="false"
    :on-change="getFile"
    :on-preview="handlePictureCardPreview1"
    :on-remove="handleUploadRemove"
    :on-success="handleUploadSuccess"
  >
    <el-button size="small" type="primary">Tải lên</el-button>
    <div slot="tip" class="el-upload__tip">test</div>
  </el-upload>
  <el-dialog v-model:visible="dialogVisibleTest">
    <img :src="dialogImageUrlTest" alt="Preview Image" />
  </el-dialog>
  <el-button @click="handleTest">Default</el-button>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { testFile } from '@/api/test/type'
import { testImage } from '@/api/test/index'
defineOptions({
  name: 'DashboardView'
})

const formData: FormData = new FormData()
const defaultForm = (): testFile => ({
  name: 'test',
  image: undefined
})
const form = ref(defaultForm())
const listFormData: testFile[] = []
function convertFormData(data: any) {
  for (const key in data) {
    // eslint-disable-next-line no-prototype-builtins
    if (data.hasOwnProperty(key)) {
      formData.append(key, data[key])
    }
  }
}
function fileToByteArray(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      const arrayBuffer: any = reader.result
      const byteArray = new Uint8Array(arrayBuffer)
      resolve(byteArray)
    }
    reader.onerror = (error) => {
      reject(error)
    }
    reader.readAsArrayBuffer(file)
  })
}
// async function handleTest() {
//   listFormData.push(form.value)
//   listFormData.push(form.value)
//   console.log(listFormData)
//   const result = await testImage(listFormData)
//   console.log(result)
// }
async function getFile(file: any, fileList: any) {
  dialogImageUrlTest.value = file.url
  form.value.image = file.raw
  getBase64(file.raw).then((res: any) => {
    const params = res.split(',')
    if (params.length > 0) {
      prooImage = params[1]
    }
  })
}
async function handleTest() {
  console.log(form.value)
  listFormData.push(form.value)
  listFormData.push(form.value)
  console.log(listFormData)
  listFormData.forEach((testRequest: any, index) => {
    console.log(testRequest)
    for (const key in testRequest) {
      // eslint-disable-next-line no-prototype-builtins
      if (testRequest.hasOwnProperty(key)) {
        formData.append(key, testRequest[key])
      }
    }
  })
  for (let i of formData.entries()) {
    console.log(i)
  }
  const result = await testImage(formData)
  console.log(result)
}
// async function handleTest() {
//   convertFormData(form.value)
//   console.log(formData)
//   const result = await testImage(formData)
//   console.log(result)
// }
function handleUploadSuccess(response: any, file: any, fileList: any) {}
function getBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    let imgResult: any = ''
    reader.readAsDataURL(file)
    reader.onload = () => {
      imgResult = reader.result
    }
    reader.onerror = (err) => {
      reject(err)
    }
    reader.onloadend = () => {
      resolve(imgResult)
    }
  })
}
function handleBeforeUpload(file: any) {
  const folderPath = file.webkitRelativePath.substring(0, file.webkitRelativePath.lastIndexOf('/'))

  // Sử dụng đường dẫn thư mục theo nhu cầu của bạn
  console.log('Đường dẫn thư mục:', folderPath)

  // Tiếp tục xử lý tệp tin nếu cần thiết
  return true
}
let dialogImageUrlTest = ref('')
let dialogVisibleTest = ref(false)
let prooImage: any = ''

function handleUploadRemove(file: any, fileList: any) {
  prooImage = ''
}

const handlePictureCardPreview1 = (file: any) => {
  dialogImageUrlTest.value = file.url
  dialogVisibleTest.value = true
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  padding: 16px;
}
</style>
