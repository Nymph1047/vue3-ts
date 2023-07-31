import {defineStore} from "pinia";
import {accountLogin, getRoleMenus, getUserById} from "@/service/login/login";
import {localCache} from '@/utils/cache'
import type {IAccount} from "@/types";
import {LOGIN_TOKEN} from "@/global/constants";
import router from '@/router'

interface ILoginState {
    token: string,
    userInfo: any,
    userMenus: any
}

const useLoginStore = defineStore('login', {
    state: (): ILoginState => ({
        token: localCache.getCache(LOGIN_TOKEN) ?? '',
        userInfo: {},
        userMenus:[]
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

            router.push('/main')
        }
    }
})

export default useLoginStore
