const mongoose = require("mongoose");
const { Schema } = mongoose;

const likesSchema = new Schema({
  userId: { type: Schema.Types.ObjectId },
  recipeId: { type: Schema.Types.ObjectId },
  createdAt: { type: Schema.Types.Date, default: Date.now },
});

const likes = mongoose.model("likes", likesSchema);

module.exports = likes;
