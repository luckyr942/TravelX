import jwt from 'jsonwebtoken';
import User from "../models/user.js";

export const protect = async(req, res, next) => {
    let token;

    //checking if token exists in Authorization header
    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ){
        try {
            token = req.headers.authorization.split(" ")[1];

            //verify token 
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            //GET user from token 
            req.user = await User.findById(decoded.id).select("-password");
            
            return next();
            
        } catch (error) {
            return res.status(401).json({ message: "Not authorized, token failed"});
        }
    }
    if(!token){
        return res.status(401).json({ message: "Not authorized, no token "});
    }
};