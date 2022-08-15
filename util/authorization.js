import jwt from 'jsonwebtoken';

const createLoginToken = user => {
    return jwt.sign(user, "123454", {
        expiresIn: "30 days",
    })
}

export default createLoginToken;