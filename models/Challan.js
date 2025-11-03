const mongoose = require("mongoose"); 
const challanSchema = new mongoose.Schema({ 
    vehicleNumber: { type: String, required: true }, 
    ownerName: { type: String, required: true }, 
    fineAmount: { type: Number, required: true }, 
    status: { type: String, enum: ["Unpaid", "Paid"], default: "Unpaid" }, 
    dateIssued: { type: Date, default: Date.now }, 
}); 
module.exports = mongoose.model("Challan", challanSchema);