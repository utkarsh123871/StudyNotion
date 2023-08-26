const mongoose = require("mongoose");
const Course = require("./Course");

const tagsSchema = new mongoose.Schema({

    name: {
        type : String,
        required : true,
    },
    
    description : {
        type : String,
        required : true,
    },

    course : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Course",
    },
});

module.exports = mongoose.model("Tags" , tagsSchema);