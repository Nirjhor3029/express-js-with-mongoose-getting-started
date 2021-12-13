const mongoose = require("mongoose");

const demoSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,

        },
        description: String,
        status: {
            type: String,
            enum: ['active', 'inactive']
        },
        date: {
            type: Date,
            default: Date.now,
        }
    },
    {
        strict: false
    }
);

module.exports = demoSchema;;