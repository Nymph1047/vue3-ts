import hyRequest from "@/service";

import type {IAccount} from "@/types";

export function accountLogin(account: IAccount) {
    return hyRequest.post({
        url: '/login',
        data: account
    })
}
