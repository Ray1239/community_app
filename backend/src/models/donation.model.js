const mongoose = require('mongoose');

const foodDonationSchema = new mongoose.Schema({
  donorId: { type: mongoose.Schema.Types.ObjectId, ref: "user"}, // Reference to the user donating
  foodDetails: {
    type: {
      type: String, // e.g. "Vegetarian", "Non-Vegetarian"
    },
    meal: { type: String,  }, // e.g. "Lunch", "Dinner"
    quantity: { type: Number }, // e.g. number of servings
  },
  donationMeta: {
    location: { type: String,  }, // Pickup location
    contact: { type: String,  }, // Contact information
    date: { type: Date,  }, // Date of donation
    time: { type: String,  }, // Time of donation
    delivery: { type: Boolean,  }, // Indicates if it's a self-delivery or pickup
  },
}, {
  versionKey: false,
  timestamps: true,
});

module.exports = mongoose.model("foodDonation", foodDonationSchema); // foodDonation
