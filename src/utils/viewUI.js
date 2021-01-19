import {
    Button, Icon, Form, FormItem, Input, Message, Menu, MenuItem, Submenu, MenuGroup, Badge, Layout, Sider, Breadcrumb, BreadcrumbItem, Content, Row, Col, LoadingBar, List, Avatar,
} from "view-design";

// 按需引入
const initViewComs = function (Vue) {
    Vue.component('Button', Button)
    Vue.component('Icon', Icon)
    Vue.component('Form', Form)
    Vue.component('FormItem', FormItem)
    Vue.component('Input', Input)
    Vue.component('Menu', Menu)
    Vue.component('MenuItem', MenuItem)
    Vue.component('Submenu', Submenu)
    Vue.component('MenuGroup', MenuGroup)
    Vue.component('Badge', Badge)
    Vue.component('Layout', Layout)
    Vue.component('Sider', Sider)
    Vue.component('Breadcrumb', Breadcrumb)
    Vue.component('BreadcrumbItem', BreadcrumbItem)
    Vue.component('Content', Content)
    Vue.component('Row', Row)
    Vue.component('Col', Col)
    Vue.component('List', List)
    // Vue.component('ListItem', ListItem)
    // Vue.component('ListItemMeta', ListItemMeta)
    Vue.component('ListItem', List.Item)
    Vue.component('ListItemMeta', List.Item.Meta)
    Vue.component('Avatar', Avatar)
    // 需要挂在属性的组件
    Vue.prototype.$Message = Message
    Vue.prototype.$Loading = LoadingBar
}

export default {
    install(Vue) {
        initViewComs(Vue)
    }
}