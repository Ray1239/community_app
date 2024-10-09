const express = require("express");
const FoodDonation = require("../models/donation.model"); // Import the Food Donation model
const router = express.Router();

// Route to create a new food donation
router.post("/", async (req, res) => {
  try {
    const donation = new FoodDonation({
      donorId: req.user._id, // Use the logged-in user's ID
      foodDetails: req.body.foodDetails,
      donationMeta: req.body.donationMeta,
    });

    await donation.save(); // Save the donation to the database
    res.status(201).send(donation); // Send the created donation back
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Failed to create food donation" });
  }
});

module.exports = router;
