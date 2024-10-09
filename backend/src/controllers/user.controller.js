const express = require("express");
const User = require("../models/user.model");
const router = express.Router();

router.get("/", (req, res) => {
    res.send({ user: req.user });
});

router.get("/points", async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("totalPoints");

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        res.status(200).send({ totalPoints: user.totalPoints }); // Send the total points
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Failed to retrieve total points" });
    }
});

module.exports = router;