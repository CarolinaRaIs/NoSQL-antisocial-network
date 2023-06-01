const { Schema, Types, model } = require("mongoose");

// Reaction subdocument schema
const reactionSchema = new Schema({

    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },

    reactionBody: { 
        type: String, 
        required: true, 
        maxlength: 280 
    },

    username: { 
        type: String, 
        required: true 
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAt) =>
        new Date(createdAt).toLocaleDateString("en-gb", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }),
    },
});

// Thoughts schema
const thoughtSchema = new Schema({

    thoughtText: { 
        type: String, required: true, minlength: 1, maxlength: 280 },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAt) =>
            new Date(createdAt).toLocaleDateString("en-gb", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
    },
   
    username: { 
        type: String, required: true },

    // Nested reactions subdocument
    reactions: [reactionSchema], 
},

{
    toJSON: {
    // Include virtual fields when converting to JSON
    virtuals: true, 
    // Apply getters when converting to JSON
    getters: true, 
    },

    // Exclude the "_id" field in the JSON representation
    id: false, 
}
);

// Virtual field to calculate the reaction count
// Retrieves the count of reactions by accessing the length of the 'reactions' array field
// This virtual field is available when querying the thought model
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Create the Thoughts model using the thoughtSchema
const Thoughts = model("Thought", thoughtSchema);

module.exports = Thoughts;
