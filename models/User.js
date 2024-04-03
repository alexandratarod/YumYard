const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
  userId: { type: String, required: true },
  title: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
});

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    reviews: [ReviewSchema],
  },
  { timestamps: true }
);

// module.exports = {
//   User: mongoose.model("User", UserSchema),
//   Review: mongoose.model("Review", ReviewSchema),
// };

// module.exports =
//    mongoose.model("Review", UserSchema)

module.exports = mongoose.model("User", UserSchema);
