const { isLoggedIn } = require("../../modules/validation")

const sign = require("cookie-signature").sign

module.exports = (app, passport) => {
    app.get("/has_role/:role", isLoggedIn, (req, res) => {
        res.send(req.user.role === "ROLE_" + req.params.role.toUpperCase())
    })

    app.post(
        "/login",
        passport.authenticate("local", { failureRedirect: "/denied" }),
        (req, res) => {
            console.log("logged in")
            if (req.body.remember) {
                req.session.cookie.maxAge = 1000 * 60 * 3
            } else {
                req.session.cookie.expires = false
            }
            res.send("s:" + sign(req.sessionID, "a"))
        }
    )

    app.get("/logout", (req, res) => {
        res.cookie("connect.sid", "", { expires: new Date() })
        res.send({ loggedOut: true })
        req.logout()
    })

    app.get("/denied", (req, res) => {
        res.send(false)
    })
}