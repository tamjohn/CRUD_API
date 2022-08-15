import jwt from 'jsonwebtoken';

export const createLoginToken = (user) => {
    return jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    })
}
