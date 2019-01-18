const mongoose = require('mongoose');
const schema_templates = require('./schemas.js')
mongoose.connect('mongodb://localhost/people');

module.exports = {
    mongoose: mongoose,
}

for (schema in schema_templates) {
    module.exports[schema] = mongoose.model(schema, new mongoose.Schema(schema_templates[schema]));
}