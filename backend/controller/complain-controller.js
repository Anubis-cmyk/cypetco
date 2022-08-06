const { Complain } = require("../model/complain-model");

//add complain details
const addComplain = async (req, res) => {
  const complain = new Complain(req.body);

  await complain.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

//retrieve complain details
const getComplain = async (req, res) => {
  await Complain.find().exec(function (err, complain) {
    if (err) {
      console.log("Error retrieving");
    } else {
      res.json(complain);
    }
  });
};

//update complain details
const updateComplain = async (req, res) => {
  const { customerName, customerMail, customerContact, district, city, street, complainType, complain} = req.body;

  const complainId = req.params.id;
  let complains;
  try {
    complains = await Complain.findById(complainId);
  } catch (err) {
    console.log("Error updating");
  }

  complains.name = customerName;
  complains.mail = customerMail;
  complains.contact = customerContact;
  complains.province = district; 
  complains.district = district; 
  complains.city = city; 
  complains.street = street; 
  complains.complainType = complainType; 
  complains.complain = complain; 

  await complains.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

//delete complain details
const deleteComplain = async (req, res) => {
  const complainId = req.params.id;

  const complain = await Complain.findById(complainId);
  if (!complain) {
    console.log("Error deleting");
  }
  await complain.remove((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

exports.addComplain = addComplain;
exports.getComplain = getComplain;
exports.updateComplain = updateComplain;
exports.deleteComplain = deleteComplain;
