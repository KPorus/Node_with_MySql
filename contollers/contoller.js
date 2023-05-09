const DB = require("../models");

const userModal = DB.users;

exports.adduser = async (req, res) => {
  let user = {
    name: req.body.name,
    address: req.body.address,
    gender:req.body.gender,
    phone: req.body.phone,
  };

  let result = await userModal.create(user);
  res.status(200).json({
    status: "success",
    result,
  });
};

exports.getAllusers = async (req, res)=>{
    let users = await userModal.findAll({
      attributes: ["name", "phone", "address","id"],
    });
    console.log(users);
    if(users)
    {
        res.status(200).json({
          status: "success",
          users,
        });
    }
    else{
        res.status(404).json({  status: "error", message: "users not found" });
    }
}
