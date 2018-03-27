var db = require('./db')

var category = db.Schema({
    categoryName: {
        type: String,
        required: true,
    },
    technology: {
        type: String
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

module.exports = db.model('Category', category)
