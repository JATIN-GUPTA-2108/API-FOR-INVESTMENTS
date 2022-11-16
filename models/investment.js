import mongoose from "mongoose";

const investmentSchema=mongoose.Schema({
    bankName:{type:String, required:true },
    rate:{type:Number, required:true },
    minAmount:{type:Number, required:true }

});
export default mongoose.model("investment",investmentSchema);