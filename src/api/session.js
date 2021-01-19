import request from '@/utils/request.js'

export const getAllUsers = (myId) => {
    return request({
        url: `/user/getAllUsers?myId=${myId}`,
        method: 'get',
    })
}

export const getMsgs = (myId, youId) => {
    return request({
        url: `/desc/getMsgs?myId=${myId}&youId=${youId}`,
        method: 'get',
    })
}

export const saveDesc = data => {
    console.log(data)
    return request({
        url: '/desc/saveDesc',
        method: 'post',
        data
    })
}

