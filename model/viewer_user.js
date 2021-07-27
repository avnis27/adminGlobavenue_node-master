const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const viewer_userSchema = new Schema({    
    username: {
        type: String,
		required: true,
		trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    mobile_number: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: true
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

module.exports = mongoose.model('Viewer_user', viewer_userSchema);