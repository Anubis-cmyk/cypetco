const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ComplainSchema = new Schema(
  {
    name: { type: String },
    mail: { type: String },
    contact: { type: String },
    province: { type: String },
    district: { type: String },
    city: { type: String },
    street: { type: String },
    complainType: { type: String },
    complain: { type: String },
  },
  {
    timestamps: true,
  }
);
 
const Complain = mongoose.model("complain", ComplainSchema);
module.exports = { Complain };