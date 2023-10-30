import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const articleSchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    picture: { type: String, required: true },
    like: { type: Number, required: true },
  },
  { timestamps: { createdAt: true } }
);

articleSchema.plugin(mongooseUniqueValidator);

export default mongoose.model("Article", articleSchema);
