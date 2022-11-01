module.exports = {
    HOST: "containers-us-west-97.railway.app",
    USER: "postgres",
    PASSWORD: "ClohOFNn0jsJ7oKRttBY",
    DB: "railway",
    DIALECT : "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
