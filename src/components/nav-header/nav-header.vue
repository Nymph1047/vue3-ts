<template>
  <div class="nav-header">
    <div class="menu-icon" @click="handleFoldClick">
      <el-icon size="28px">
        <component :is="isFold ? 'Expand' : 'Fold'"/>
      </el-icon>
    </div>
    <div class="content">
<!--     <header-crumb></header-crumb>-->
      <div>??/</div>
      <header-info></header-info>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineEmits, ref} from "vue";
// import HeaderCrumb from "@/components/nav-header/c-cpns/header-crumb.vue";
import HeaderInfo from "@/components/nav-header/c-cpns/header-info.vue";

const isFold = ref(false)
const emit = defineEmits(['foldChange'])


function handleFoldClick() {
  isFold.value = !isFold.value
  emit('foldChange',isFold.value)
}
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;

  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
