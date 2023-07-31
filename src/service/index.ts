import {BASE_URL, TIME_OUT} from './config'
import HYRequest from './request'
import {localCache} from "@/utils/cache";
import {LOGIN_TOKEN} from "@/global/constants";

const hyRequest = new HYRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    interceptors: {
        requestInterceptor: (config) => {
            const token = localCache.getCache(LOGIN_TOKEN) || ''
            if (token) {
                config.headers.Authorization = 'Bearer ' + token
            }
            return config
        },
        requestInterceptorCatch: (err) => {
            return err
        },
        responseInterceptor: (res) => {
            return res
        },
        responseInterceptorCatch: (err) => {
            return err
        }
    }
})

export default hyRequest
