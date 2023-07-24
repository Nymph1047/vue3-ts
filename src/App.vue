<template>
  <div class="app">
      <router-view></router-view>
  </div>
</template>

<script setup lang="ts">


interface IKun {
  name: string
}

const ikun: IKun = {name: 'kobe'}
console.log(ikun)
</script>

<style lang="less" scoped>
.app{
  width: 100vw;
  height: 100vh;
}
</style>
