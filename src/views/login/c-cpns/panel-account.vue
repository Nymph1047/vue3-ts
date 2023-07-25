<template>
  <div class="panel-account">
    <el-form
        ref="formRef"
        label-width="60px"
        size="large"
        :model="account"
        :rules="accountRules"
        status-icon
    >
      <el-form-item label="帐号" prop="name">
        <el-input v-model="account.name"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import {defineExpose, reactive,ref} from "vue";

import type {FormRules,FormInstance} from "element-plus";
import {ElMessage} from "element-plus";


import useLoginStore from '@/store/login/login'
import type {IAccount} from "@/types";

const account = reactive<IAccount>({
  name: '',
  password: ''
})

// 表单校验
const accountRules = reactive<FormRules<typeof account>>({
  name:[
    {required:true,message:'必须输入帐号~',trigger:'blur'},
    {
      pattern:/^[a-z0-9]{3,20}$/,
      message:'必须是6-20位数字或字母组成',
      trigger:'blur'
    }
  ],
  password:[
    {required:true,message:'必须输入密码~',trigger:'blur'},
    {
      pattern:/^[a-z0-9]{3,}$/,
      message:'必须是3位数字或字母以上组成',
      trigger:'blur'
    }
  ]
})

// 执行登录
const formRef = ref<FormInstance>()
const loginStore = useLoginStore()
function loginAction(){
  formRef.value?.validate((valid) => {
    if (valid){
      const name = account.name
      const password = account.password

      loginStore.accountLogin({name,password})
    }else {
      ElMessage.error('Oops, 校验失败')
    }
  })
}

defineExpose({
  loginAction
})
</script>

<style lang="less" scoped>
.panel-account {
}
</style>
