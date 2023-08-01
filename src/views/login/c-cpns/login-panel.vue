<template>
  <div class="login-panel">
    <h1 class="title">littlexu后台管理系统</h1>
    <el-tabs type="border-card" stretch  v-model="activeName" >
<!--      账号登录-->
      <el-tab-pane label="帐号登录" name="account">
        <template #label>
        <span  class="label">
          <el-icon><UserFilled /></el-icon>
          <span class="text">账号登录</span>
        </span>
        </template>
        <PanelAccount ref="accountRef"/>
      </el-tab-pane>

<!--      手机登录-->
      <el-tab-pane label="手机登录" name="phone">
        <template #label>
        <span class="label">
          <el-icon><Iphone /></el-icon>
          <span class="text">手机登录</span>
        </span>
        </template>
        <PanelPhone/>
      </el-tab-pane>
    </el-tabs>

    <div class='controls'>
      <el-checkbox v-model="isRemPsw" label="记住密码" size="large"/>
      <el-link>忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" size="large" @click="handleLoginAciton">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">

import PanelAccount from "@/views/login/c-cpns/panel-account.vue";
import PanelPhone from "@/views/login/c-cpns/panel-phone.vue";

import {ref} from 'vue'

const activeName = ref('account')
const isRemPsw = ref(false)

const accountRef = ref<InstanceType<typeof PanelAccount>>()


const handleLoginAciton = ()=>{
  if (activeName.value=='account'){
    // ?报错 不影响执行 待解决
    accountRef.value!.loginAction()
  }else{
    console.log('手机登录')
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 5px;
    }
  }

  .controls {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
