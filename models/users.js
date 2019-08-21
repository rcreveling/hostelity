const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { 
        type: String, 
        required: true 
    },
    avatar: {
        type: String,
        default: 'meep'
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    trips: [
        {
            type: Schema.Types.ObjectId,
            ref: "Trip"
        }   
    ],
    dateAdded: { 
        type: Date, 
        default: Date.now 
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
