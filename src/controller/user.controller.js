const userService = require("../services/user.services");
const jwt = require("jsonwebtoken")

const userSignUpController = async (req,res) => {
    try{

        const {fullName,email,phoneNumber,gender,password} = req.body;

        if(!fullName || !email || !phoneNumber || !gender || !password){
            return res.status(400).send("please fill all the fields")
        }

        const user = await userService.userSignUpServices({
            fullName,
            email,
            phoneNumber,
            gender,
            password
        });

        return res.status(201).send(user);

    }catch(error){
        console.log("error in user controller in userSignUpController",error);

        return res.status(500).send("Internal server error")
    }
}

const userLoginController = async (req,res) => {
    try{
        const {email,password} = req.body;
        if(!email || !password){
            res.send("please enter id ans password")
        }
        const user = await userService.userLoginSerices({email,password});
        const token = jwt.sign({ userId : user._id},"secret",{expiresIn : "1h"});
        res.cookie("token",token,{httpOnly : true});
        return res.json({message : "login successfull"});
        }catch(error){
        console.log("error in user controller in userLoginController",error);
    }
}




module.exports = {userSignUpController,userLoginController}