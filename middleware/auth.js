import jwt from 'jsonwebtoken';

export const authenticate = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1] || ""

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.verifiedUser = verified
        console.log("Verification was successful", verified)
        next()
    } catch (err) {
        console.log("Verification failed", err)
        next()
    }
}