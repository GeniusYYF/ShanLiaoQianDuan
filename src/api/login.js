import request from '@/utils/request.js'  // 前面封装的request
// 在request中，设置了根路径 /api ,所以每一个请求都会自动在前面带上 api
// 由于在config中的index配置过了代理（监听）的路径也是/api,但凡遇到/api路径就会替换为target目标地址（后台接口根地址）
// 实现跨域，即不限于只能访问根路径为127.0.0.1下的地址
export const postLogin = data => {
    console.log(data)
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

export const postSaveUser = data => {
    console.log(data)
    return request({
        url: '/user/saveMsg',
        method: 'post',
        data
    })
}