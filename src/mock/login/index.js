// import Mock from 'mockjs'
let passwords = {
    admin: '1',
    user: '1',
}

let tokens = {
    admin: 'admin-token'
}

let users = {
    'admin-token': {
        name: 'admin',
        roles: ['admin'],
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        introduction: 'I am a super administrator',
    }
}

export const postLogin = response => {
    console.log(response, '开始执行mock')
    let res = JSON.parse(response.body)
    let token = tokens[res.name]
    let user = users[token]

    if (passwords[res.name] == res.password) {
        console.log("用户名密码正确")
        if (token) {
            console.log("有token", token)
        } else {
            token = {}[res.name] = res.name + '-token'
            tokens[res.name] = token
            user = {
                name: res.name,
                roles: ['user'],
                introduction: 'I am a user',
                avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            }
            users[token] = user
            console.log("创建新token:", token)
        }
        console.log(passwords, tokens, users)
        return {
            code: 200,
            data: { token, user },
            msg: "登陆成功"
        }
    }
    else {
        console.log("用户名密码错误")
        return {
            code: 1001,
            msg: "用户名密码错误"
        }
    }
}