// 操作存放在服务器上的用户数据
let users = []

function userJoin(id, name, room) {
    let user = { id, name, room }

    users.push(user)

    return users
}
