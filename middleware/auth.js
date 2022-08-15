import jwt from 'jsonwebtoken';


export const authentification = async (req, res, next) => {
    var token = req.headers.authorization?.split(" ")[1] || ""

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.verifiedUser = verified.user
        console.log("Verification was successful", verified)
        next()
    } catch (err) {
        console.log("Verification failed")
        next()
    }
}
