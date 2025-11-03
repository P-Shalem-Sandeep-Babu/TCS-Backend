const Challan = require("../models/Challan"); 
 
            //            Create a new Challan 
            exports.createChallan = async (req, res) => { 
              try { 
                const { vehicleNumber, ownerName, fineAmount } = req.body; 
                const challan = new Challan({ vehicleNumber, ownerName, fineAmount }); 
                await challan.save(); 
                res.status(201).json({ message: "Challan issued successfully!" }); 
              } catch (error) { 
                res.status(500).json({ error: "Failed to issue challan" }); 
              } 
            }; 
 
            //     Search Challan by Vehicle Number 
            exports.getChallanByVehicle = async (req, res) => { 
              try { 
                const challan = await Challan.findOne({ vehicleNumber: req.params.vehicleNumber }); 
                if (!challan) return res.status(404).json({ message: "No challan found" }); 
                res.json(challan); 
              } catch (error) { 
                res.status(500).json({ error: "Error fetching challan" }); 
              } 
            }; 
 
            //       Pay Challan 
            exports.payChallan = async (req, res) => { 
              try { 
                await Challan.findByIdAndUpdate(req.params.id, { status: "Paid" }); 
                res.json({ message: "Challan paid successfully" }); 
              } catch (error) { 
                res.status(500).json({ error: "Failed to update challan status" }); 
              } 
            }; 