const User = require("../models/user");
const bcrypt = require("bcryptjs")

const userSignUpServices = async ({fullName,email,phoneNumber,gender,password}) => {
    try{
        const hashPasswrod = await bcrypt.hash(password,10);
        const user = await User.create({fullName,email,phone:phoneNumber,gender,password : hashPasswrod});
        return user;
    }catch(error){
        console.log("Error in creating user in userSignUpServices",error);
        throw error;
    }
}

const userLoginSerices = async({email,password}) => {
    try{
        const user = await User.findOne({email});
        if(!user){
            console.log("user doesnt exist signup first")
        };
        const bcryptPassword = bcrypt.compare(password,user.password);
        if(!bcryptPassword){
            console.log("pASSWord dont match");
        };
        return user;
    }catch(error){
        console.log("error in userLoginServices",error)
    }
}



module.exports = {userSignUpServices,userLoginSerices}

