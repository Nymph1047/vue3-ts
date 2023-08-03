import type { App } from 'vue'
import { createPinia } from "pinia";
import useLoginStore from "@/store/login/login";

const pinia = createPinia()

function registerStore(app:App<Element>){
    app.use(pinia)

    //加载本地资源
    const loginStore = useLoginStore()
    loginStore.loadLocalDataAction()
}
export default registerStore
