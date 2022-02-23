const userModel = require("../database/userModel")
const jwt = require("jsonwebtoken")
const { JWT_KEY } = require("../secrets")
const { handleErrors, createToken } = require("./helperFn")
async function login(req, res) {
    const { email, password } = req.body
    try {
        console.log("request body", req.body);
        const user = await userModel.login(email, password)
        const token = createToken(user._id)
        await userModel.findByIdAndUpdate(user._id, { token: token })
        console.log("user", user);
        res.status(200).json({ user, message: "successfully login", token })

    } catch (err) {
        console.log("error in login => ", err.message);
        const errors = handleErrors(err)
        res.json({ user: null, errors })
    }
}


async function signUp(req, res) {
    try {

        let { email } = req.body
        let checkEmail = await userModel.findOne({ email: email })

        if (checkEmail == null) {
            const user = await userModel.create(req.body)
            const token = createToken(user._id)
            await userModel.findByIdAndUpdate(user._id, { token: token })
            res.status(200).json({ user, token })
        } else {
            res.json({ user: null })
        }
    } catch (err) {
        res.status(500).json({ user: null, message: err.message })
    }
}

async function updateUser(req, res, next) {
    const { id, name } = req.body
    try {
        console.log(req.body);
        await userModel.findByIdAndUpdate(id,
            { name: name }, { new: true })
        let user = await userModel.findById(id)
        console.log("user details", user);
        return res.status(200).json({ user, })

    } catch (err) {
        return res.status(500).json({ user: null, message: err.message })
    }
}
async function getUser(req, res) {
    try {
        let { token } = req.body
        console.log(token);
        let tokenID = await jwt.verify(token, JWT_KEY)
        const user = await userModel.findOne({ _id: tokenID.id, token })

        res.status(200).json({ user })
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ user: err.message })
    }
}
module.exports = { login, signUp, getUser, updateUser }