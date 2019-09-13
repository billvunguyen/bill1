// load the things we need
var mongoose = require('mongoose');

var Data1 = mongoose.Schema({

    local            : {
        data1        : String
    }


});

// create the model for data and expose it to our app
module.exports = mongoose.model('Data', Data1);