const mongoose = require('mongoose');

const timesheetSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' 
    },
    date: {
        type: Date, 
        default: Date.now
    },
    works: [{
        projectName: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        isCompleted: {
            type: Boolean,
            default: false
        },
        hours: {
            type: String,
            default: true
        }
    }]
}, { collection: 'TimeSheet'});

module.exports = mongoose.model('timesheet', timesheetSchema);