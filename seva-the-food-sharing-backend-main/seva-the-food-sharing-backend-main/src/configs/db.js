const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ujjawal:ujjawal123@crud-app.bm61lxf.mongodb.net/sp?retryWrites=true&w=majority"
    );
  } catch (err) {
    console.log(err);
  }
};
