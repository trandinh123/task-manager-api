const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		maxlength: 300,
		minlength: 3
	},
	completed: {
		type: Boolean,
		default: false
	},
}, { timestamps: true })

module.exports = mongoose.model('Task', TaskSchema)