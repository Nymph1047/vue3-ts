import type {App} from "vue";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// : App<Element>
function registerIcons(app) {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }
}

export default registerIcons
