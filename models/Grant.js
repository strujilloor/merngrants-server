const mongoose = require('mongoose');


const GrantsSchema = mongoose.Schema({
    id: {
        type: String,
        // type: mongoose.ObjectId,
        require: true,
        trim: true
    },
    number: {
        type: String,
        require: true,
        trim: true 
    },
    title: {
        type: String,
        require: true,
        trim: true
    },
    agencyCode: {
        type: String,
        require: true,
        trim: true
    },
    angency: {
        type: String,
        require: true,
        trim: true
    },
    oppStatus: {
        type: String,
        require: true,
        trim: true
    },
    openDate: {
        type: String,
        require: true,
        // default: Date.now()
    },
    closeDate: {
        type: String,
        require: true,
        // default: Date.now()
    },
    docType: {
        type: String,
        require: true,
        trim: true
    }
}, { id: false });


module.exports = mongoose.model( 'Grant', GrantsSchema );