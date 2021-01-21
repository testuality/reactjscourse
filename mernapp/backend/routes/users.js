const router = require("express").Router();
let User = require("../model/user.model");

router.route("/").get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json("Error: " +err));
});

router.route("/add").post((req, res) => {
    console.log("Servicio users add invocado");
    const userName = req.body.username;
    const newUser = new User({username: userName});

    console.log("username", userName);

    newUser.save()
        .then(() => res.json("User added"))
        .catch(err => res.status(400).json("Error " + err));
});

module.exports = router;