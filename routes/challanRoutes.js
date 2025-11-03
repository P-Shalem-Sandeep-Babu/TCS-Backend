const express = require("express"); 
const { createChallan, getChallanByVehicle, payChallan } = require("../controllers/challanController"); 
const router = express.Router(); 
router.post("/create", createChallan); 
router.get("/search/:vehicleNumber", getChallanByVehicle); 
router.put("/pay/:id", payChallan); 
module.exports = router; 