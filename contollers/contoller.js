const db = require("../models");

const user = db.users;

exports.adduser = async (req, res) => {
  let user = {
    name: req.body.name,
    email: req.body.email,
    pass: req.body.pass,
  };

  let result = await user.create(user);
  res.status(200).json({
    status: "success",
    result,
  });
};

exports.getAllusers = async (req, res)=>{
    let users = await user.findAll({
        attributes: [
            'name','email'
        ]
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
