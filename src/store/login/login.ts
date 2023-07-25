import {defineStore} from "pinia";
import {accountLogin} from "@/service/login/login";
import {localCache} from '@/utils/cache'
import type {IAccount} from "@/types";

const LOGIN_TOKEN = 'token'
const useLoginStore = defineStore('login', {
    state: () => ({
        token: localCache.getCache(LOGIN_TOKEN)?? '',
        id: '',
        name: ''
    }),
    actions: {
        async accountLogin(account: IAccount) {
            // 1、帐号登录拿到token的信息
            const loginRes = await accountLogin(account)
            this.id = loginRes.data.id
            this.token = loginRes.data.token
            this.name = loginRes.data.name

            // 缓存到本地
            localCache.setCache(LOGIN_TOKEN, this.token)
        }
    }
})

export default useLoginStore
