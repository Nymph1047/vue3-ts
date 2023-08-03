<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="logo"/>
      <span class="title" v-show="!isFold">littlexu管理系统</span>
    </div>
    <!--      菜单-->
    <el-menu
        :collapse="isFold"
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001529"
    >
      <template v-for="item in useMenus" :key="item.id">
        <el-sub-menu :index="item.id + ''">
          <template #title>
            <!--            字符串 el-icon-****** => 组件 component 动态组件-->
            <el-icon>
              <component :is="item.icon.split('-icon-')[1]"></component>
            </el-icon>
            <span >{{ item.name }}</span>
          </template>
          <template v-for="subitem in item.children" :key="subitem.id">
            <el-menu-item :index="subitem.id + ''"
                          @click="handleItemClick(subitem)">
              {{ subitem.name }}
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
// import {ref} from "vue";
import useLoginStore from "@/store/login/login";
import { useRouter } from 'vue-router'
// import { mapPathToMenu } from '@/utils/map-menu'
// 0.定义数据
defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})
// 获取菜单的数据
const loginStore = useLoginStore()
const useMenus = loginStore.userMenus

// const route = useRoute()
// const currentMenu = mapPathToMenu(useMenus, route.path)
// const defaultValue = ref<string>(currentMenu.id + '')


const router = useRouter()
function handleItemClick(item: any) {
  router.push(item.url)
}
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;
}

.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
    white-space: nowrap;
  }
}

.el-menu {
  border-right: none;
  user-select: none;
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }

  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>
