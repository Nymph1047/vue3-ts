import {defineStore} from "pinia";
import {accountLogin, getRoleMenus, getUserById} from "@/service/login/login";
import {localCache} from '@/utils/cache'
import type {IAccount} from "@/types";
import {LOGIN_TOKEN} from "@/global/constants";
import router from '@/router'
import {mapMenuToRoutes} from "@/utils/map-menu";


interface ILoginState {
    token: string,
    userInfo: any,
    userMenus: any
}

const useLoginStore = defineStore('login', {
    state: (): ILoginState => ({
        token: '',
        userInfo: {},
        userMenus: []
    }),
    actions: {
        async accountLogin(account: IAccount) {
            // 1、帐号登录拿到token的信息
            const loginRes = await accountLogin(account)
            const id = loginRes.data.id

            this.token = loginRes.data.token
            // 缓存到本地
            localCache.setCache(LOGIN_TOKEN, this.token)

            // 获取用户的登录信息
            const userInfo = await getUserById(id)
            this.userInfo = userInfo.data

            // 根据角色请求用户的权限
            const userMenuResult = await getRoleMenus(this.userInfo.role.id)
            this.userMenus = userMenuResult.data
            // 缓存用户信息 和菜单到本地
            localCache.setCache('userInfo', userInfo.data)
            localCache.setCache('userMenuResult', userMenuResult.data)
            // 动态匹配路由
            // const localRoutes: any[] = []
            // const files: Record<string, any> = import.meta.glob(
            //     '../../router/main/**/*.ts',
            //     {
            //         eager: true
            //     }
            // )
            // for (const key in files) {
            //     const module = files[key]
            //     localRoutes.push(module.default)
            // }
            //
            //
            // // 根据菜单去匹配正确的路由
            // for (const menu of this.userMenus) {
            //     for (const submenu of menu.children) {
            //         const route = localRoutes.find((item) => item.path === submenu.url)
            //         if (route) router.addRoute('main', route)
            //     }
            // }

            const routes = mapMenuToRoutes(this.userMenus)
            routes.forEach((route) => router.addRoute('main', route))
            router.push('/main')


        },

        loadLocalDataAction() {
            this.token = localCache.getCache(LOGIN_TOKEN)
            this.userInfo = localCache.getCache('userInfo')
            this.userMenus = localCache.getCache('userMenuResult')

            const routes = mapMenuToRoutes(this.userMenus)
            routes.forEach((route) => router.addRoute('main', route))
        }
    }
})

export default useLoginStore
