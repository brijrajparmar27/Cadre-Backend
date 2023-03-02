const mongoose = require('mongoose');


const taskSchema = mongoose.Schema({
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    },
    descripation:{
        type:String,
        required:true
    },
    title: {
        type: String,
        required: true
    },
    lead: {
        type: Object,
        default: {},
    },
    assigned: {                                                                                
        type: Array,
        default: [],
    },
    status: {
        type: String,
        required: true
    },
}, {collection: 'Tasks'});

module.exports = mongoose.model('task', taskSchema);