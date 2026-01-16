import express from 'express';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

//Get logged-in user's profile (Protected Route)
router.get("/profile", protect, async(req, res, next) =>{
    try {
        res.status(200).json({
            success:true,
            user: req.user, 
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

export default router; 