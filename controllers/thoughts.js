//Define the controller functions for handling thought-related operations.
//getThoughts,
//getThoughtById,
//createThought,
//updateThought,
//deleteThought,
//addReaction,
//deleteReaction,

const { Thoughts, User } = require('../models');

module.exports = {
    // Get all thoughts
    async getThoughts(req, res) {
        try {
            // Thoughts.find({}) = Mongoose query that retrieves all the documents from the Thought collection.
            // empty object {} as the argument means there are no specific conditions for the retrieval, so it fetches all thoughts.
            const thoughts = await Thoughts.find({})
                // This method is used to populate the reactions field of each thought document
                .populate({ path: "reactions", select: "-__v" })
                // The select option is used to specify the fields to include or exclude in the populated document
                // -__v = excludes the __v field from the populated reactions.
                    //The __v field is automatically added by Mongoose to track the version of the document.
                .select("-__v");

            if (!thoughts) {
                res.status(404).json({ message: "No thoughts found!" });
            } else {
                //res.json(thoughts) = takes the thoughts data, converts it to JSON format, and sends it as the response to the client. 
                res.json(thoughts);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Get a single thought by ID
    async getThoughtById(req, res) {
        try {
            // findOne({ _id: req.params.id })= a Mongoose query method used to find a single document in the Thought collection based on a specific condition
            // the specific condition: { _id: req.params.id } = which matches the _id field of the thought document with the value passed as req.params.id
            // req.params.id =  a parameter in the request URL, used to identify a specific thought by its unique ID.
            const thoughts = await Thoughts.findOne({ _id: req.params.id })
                .populate({ path: "reactions", select: "-__v" })
                .select("-__v");
            if (!thoughts) {
                res.status(404).json({ message: "No thoughts found!" });
            } else {
                res.json(thoughts);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Create a new thought
    async createThought(req, res) {
        try {
            const thoughts = await Thoughts.create(req.body);
            await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { thoughts: thoughts._id } },
                { new: true }
            );
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Update a thought by ID
    async updateThought(req, res) {
        try {
            const thoughts = await Thoughts.findOneAndUpdate(
                { _id: req.params.id },
                { $set: req.body },
                { new: true }
            )
                .populate({ path: "reactions", select: "-__v" })
                .select("-__v");
            if (!thoughts) {
                res.status(404).json({ message: "No thought found!" });
            } else {
                res.json(thoughts);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Delete a thought by ID
    async deleteThought(req, res) {
        try {
            const thoughts = await Thoughts.findOneAndDelete({ _id:req.params.id });
            if (!thoughts) {
                res.status(404).json({ message: "No thought found!" });
            } else {
                res.json({ message: "Thought successfully deleted"})
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Create a reaction for a thought
    async addReaction(req, res) {
        try {
            const thoughts = await Thoughts.findByIdAndUpdate(
                { _id: req.params.id },
                { $addToSet: { reactions: req.body } },
                { new: true }
            )
                .populate({ path: "reactions", select: "-__v" })
                .select("-__v");
        
            if (!thoughts) {
                res.status(404).json({ message: "No thought found!" });
            } else {
                res.json(thoughts);
            } 
        } catch (err) {
            res.status(500).json(err);
        }
    },
    
    // Delete a reaction from a thought
    async deleteReaction(req, res) {
        try {
            const thoughts = await Thoughts.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId} } },
                { new: true }
            );
            if (!thoughts) {
                res.status(404).json({ message: "No thought found!" });
            } else {
                res.json({ message: "Reaction successfully removed!" });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }
};