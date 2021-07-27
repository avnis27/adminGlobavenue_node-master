const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const abuseSchema = new Schema({
    user_id: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    user_type: {
        type: String,
        require: true
    },
    ads: {
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

module.exports = mongoose.model('Abuse', abuseSchema);