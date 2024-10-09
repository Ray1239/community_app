const express = require("express");
const FoodDonation = require("../models/donation.model"); // Import the Food Donation model
const router = express.Router();
const User = require("../models/user.model");

const calculatePoints = (foodDetails, donationMeta) => {
    let points = 0;
  
    // Base points based on quantity (assuming 10 points per person)
    points += foodDetails.quantity * 10;
  
    // Adjust points based on food type
    if (foodDetails.type === "Non-Vegetarian") {
      points *= 1.2; // Non-Veg gets a 1.2x multiplier
    }
  
    // Bonus points for self-delivery
    if (donationMeta.delivery) {
      points += 20; // Extra points for self-delivery
    }
  
    // Additional points for meal type
    if (foodDetails.meal === "Lunch" || foodDetails.meal === "Dinner") {
      points *= 1.1; // 10% extra for lunch or dinner
    }
  
    return Math.round(points); // Round points to the nearest integer
};
  
// Route to create a new food donation
router.post("/", async (req, res) => {
    try {
        const { foodDetails, donationMeta } = req.body;

        // Calculate points for this donation
        const points = calculatePoints(foodDetails, donationMeta);

        const donation = new FoodDonation({
            donorId: req.user._id, // Use the logged-in user's ID
            foodDetails,
            donationMeta,
            pointsEarned: points,
        });

        await donation.save(); // Save the donation to the database

        await User.findByIdAndUpdate(req.user._id, {
            $inc: { totalPoints: points },
        });
        res.status(201).send(donation);
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: "Failed to create food donation" });
    }
});

router.get("/", async (req, res) => {
    try {
      // Query the FoodDonation model for donations made by the logged-in user
      const donations = await FoodDonation.find({ donorId: req.user._id });
  
      if (!donations || donations.length === 0) {
        return res.status(404).send({ message: "No donations found for this user" });
      }
  
      res.status(200).send(donations); // Send the list of donations back
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: "Failed to retrieve donations" });
    }
});


module.exports = router;
