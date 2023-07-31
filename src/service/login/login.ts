import hyRequest from "@/service";

import type {IAccount} from "@/types";
import {localCache} from "@/utils/cache";
import {LOGIN_TOKEN} from "@/global/constants";

export function accountLogin(account: IAccount) {
    return hyRequest.post({
        url: '/login',
        data: account
    })
}

export function getUserById(id: number) {
    return hyRequest.get({
        url: `/users/${id}`,
        // headers:{
        //     Authorization:'Bearer ' + localCache.getCache(LOGIN_TOKEN)
        // }
    })
}

export function getRoleMenus(id: number) {
    return hyRequest.get({
        url: `/role/${id}/menu`
    })
}
