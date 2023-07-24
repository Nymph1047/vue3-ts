<template>
  <div class="main-page">main:{{ counterStore.counter }} - {{counterStore.doubleCounter}}</div>
  <button @click="changeCounter">修改</button>
</template>

<script setup lang="ts">
import useConterStore from "@/store/counter";

const  counterStore = useConterStore()


function changeCounter(){
  counterStore.changeCounterAction(900)
}
</script>

<style lang="less" scoped>
</style>
