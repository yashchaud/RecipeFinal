const mongoose = require("mongoose");
const { Schema } = mongoose;

const searchQueriesSchema = new Schema({
  userId: { type: Schema.Types.ObjectId },
  searchQuery: [{ type: Schema.Types.String }],
  createdAt: { type: Schema.Types.Date, default: Date.now },
});

const searchQueries = mongoose.model("searchQueries", searchQueriesSchema);

module.exports = searchQueries;
