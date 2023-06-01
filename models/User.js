const { Schema, model } = require("mongoose");

// User schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
    },

    thoughts: [{
        type: Schema.Types.ObjectId, 
        ref: "Thoughts"
    }],

    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
},

{
    toJSON: {
        // Include virtual fields when converting to JSON
        virtuals: true,
    },
    // Exclude the "_id" field in the JSON representation
    id: false,
}
);

// Virtual field to calculate the friend count
// Retrieves the length of the user's `friends` array field on query.
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

// Create the User model using the userSchema
const User = model("User", userSchema);

module.exports = User;