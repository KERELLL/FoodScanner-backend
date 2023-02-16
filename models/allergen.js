const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const allergenSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Allergen', allergenSchema);