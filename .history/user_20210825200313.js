// 操作存放在服务器上的用户数据
let users = []

// 添加
function userJoin(id, name, room) {
    let user = { id, name, room }

    users.push(user)

    return users
}

// 查找房间内的用户
function getRoomUsers(room) {
    return users.filter((user) => user.room == room)
}

function userLeave(id) {
    let index = users.findIndex((user) => user.id === id)

    if (index != -1) {
        // 即用户离开
        return users.splice(index, 1)[0]
    }
}

module.exports = {
    getRoomUsers,
    userJoin,
    userLeave,
}
