const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    seller_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    phone_number: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: false
    },
    location: {
        type: String,
		required: false
    },
    city: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    state: {
		type: String,
		required: false
    },
    status:{
		type: Boolean,
		default:true
	},   
    created_at: {
        type: String,
    },
    updated_at: {
        type: String
    }
})

module.exports = mongoose.model('Contact', contactSchema);