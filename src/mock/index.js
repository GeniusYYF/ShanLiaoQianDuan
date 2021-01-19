// https://blog.csdn.net/GeniusXYT/article/details/112347260
import Mock from 'mockjs'
import { postLogin } from './login'

// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
    timeout: '300-600'
})

Mock.mock(/\/api\/login/, 'post', postLogin)
// Mock.mock('/api/login', 'post', postLogin)


// console.log("用户名密码错误",Mock.valid({ a: 1 }, { a: 2 }))
