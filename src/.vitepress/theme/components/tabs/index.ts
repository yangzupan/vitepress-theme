import { App } from "vue"
import Tab from "./tab.vue"
import Tabs from "./tabs.vue"

// https://github.com/Jacobs63/vue3-tabs-component

export default {
  install(Vue: App): void {
    Vue.component('tab', Tab)
    Vue.component('tabs', Tabs)
  }
}

export { Tab, Tabs }