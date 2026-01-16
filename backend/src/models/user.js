import bcrypt from 'bcryptjs';
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required:[true,"Please add name"],
            trim:true,
        },
        email: {
            type: String,
            required:[true, "Please add email"],
            unique:true,
            lowercase:true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
             "Please enter a valid email address",
        ]
        },
        password: {
            type: String,
            required: [true, "Please add password"],
            minlength: 6,
            select: false,
        },
        profilePic:{
            type: String,
            default: "https://i.pinimg.com/736x/f0/19/75/f01975b84b0595f786407809489c4cb1.jpg",
        },
        role:{
            type: String,
            enum:["user", "admin"],
            default:"user",
        },
    },
    {
        timestamps: true,
    }
);

//hash password before saving
// --- Middleware: Hash password before saving ---
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// --- Method: Compare password during login ---
// Fixed: Changed 'method' to 'methods'
userSchema.methods.matchedPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
export default mongoose.model("User", userSchema);