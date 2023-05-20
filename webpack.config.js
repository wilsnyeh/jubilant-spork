require("dotenv-webpack").config();

module.exports = {
    env: {
        "CLIENT_ID":"process.env.CLIENT_ID",
        "CLIENT_SECRET": "process.env.CLIENT_SECRET"
    },
    resolve: {
        fallback: {
            'fs': false
        },
    }
}