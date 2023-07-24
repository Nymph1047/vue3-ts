<template>
  <div class="login">
    <LoginPanel></LoginPanel>
    <el-icon :size="50">
      <Edit/>
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import LoginPanel from './c-cpns/login-panel.vue'

function desdhaksf(num){
  return num
}
</script>

<style lang="less" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: url("../../assets/img/login-bg.svg");
}
</style>
