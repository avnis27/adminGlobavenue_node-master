const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({    
    country: {
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

module.exports = mongoose.model('Country', countrySchema);