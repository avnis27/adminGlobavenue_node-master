const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactusSchema = new Schema({
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
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

module.exports = mongoose.model('Contactus', contactusSchema);