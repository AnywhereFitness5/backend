const db = require('../data/db-config')

const getUser = (filter) => {
    return db('users')
        .select('user_id', 'username', 'password')
        .where(filter);
}


const getUserbyId = (id) => {
    return db('users as u')
        .select('u.user_id', 'u.username', 'u.password', 'u.user_type')
        .where('u.user_id', id)
        .first()
}

const addUser = async (user) => {
    return await db('users')
    .insert(user, ['user_id', 'username', 'password', 'user_type'])
}

module.exports = {
    getUser,
    getUserbyId,
    addUser
}