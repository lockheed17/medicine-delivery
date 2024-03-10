import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            max: 100,
        },
        email: {
            type: String,
            required: true,
            max: 30,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
            max: 15,
        },
        address: {
            type: String,
            required: true,
        },
    }, {timestamps: true}
)

const User = mongoose.model("User", UserSchema);

export default User;