const jwt = require("jsonwebtoken");

const authUser = async (req,res,next) => {
    try{
        const { token } = req.cookies;
        if(!token){
            console.log("no token")
        };
        const decode = jwt.verify(token,"secret");
        const user = await User.findById(decode.userId);
        req.user = user;
        next();
    }catch(error){
        console.log("error in authUser",error)
    }
}