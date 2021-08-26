require('dotenv').config()

module.exports = {
    JWT_SECRET: process.env.JWT_SECRET ||'ssh', 
    HASH_ROUNDS: process.env.HASH_ROUNDS || 8
}
