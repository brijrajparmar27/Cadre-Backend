const mongoose = require('mongoose');

const timesheetSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' 
    },
    projectName: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    date: {
        type: String,
        required: true
    },
    hours: {
        type: String,
        required: true
    }
}, { collection: 'TimeSheet'});

module.exports = mongoose.model('timesheet', timesheetSchema);