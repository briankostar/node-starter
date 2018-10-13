var mongoose = require('mongoose');

var sampleSchema = new mongoose.Schema({
    name: String,
    objectA: {
        type: Date,
        default: Date.now,
        required: true
    }
});

console.log('sampleSchema', typeof sampleSchema, sampleSchema)

/**
 * Add 
 * - pre-save hooks
 * - validations
 * - virtuals
 */

//Define schema methods
sampleSchema.method({})

//define model static methods
sampleSchema.statics = {}

module.exports = mongoose.model('Sample', SampleSchema);