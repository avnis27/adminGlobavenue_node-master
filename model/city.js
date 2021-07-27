const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({    
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true,
        unique : true
    },
    status: {
		type: Boolean,
		default: false
	},
    created_at: {
        type: String
    },
    updated_at: {
        type: String
    }
})

module.exports = mongoose.model('City', citySchema);