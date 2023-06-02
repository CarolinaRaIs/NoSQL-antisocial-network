//Define the controller functions for handling thought-related operations.

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

            if (!thought) {
                res.status(404).json({ message: "No thoughts found!" });

            } else {
                res.json(thought);
            }

        } catch (err) {
            res.status(500).json(err);
        }
    }
}