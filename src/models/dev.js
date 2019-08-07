const { Schema, model } = require("mongoose");

const DevSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: "dev"
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: "dev"
    }],
}, {
        timestamps: true,
    });

module.exports = model("dev", DevSchema);