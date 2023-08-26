const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

    courseName: {
        type : String,
        trim : true,
    },
    
    courseDescription : {
        type : String,
        trim : true,
        required : true,
    },
    
    instructor : {
        type : mongoose.Schema.Types.ObjectId,
        ref:"User",
        required : true,
    },
    
    whatYouWillLearn : {
        type : String,
    },
    
    couseContent : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Section"
        }
    ],
    
    ratingAndReview : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "RatingAndReview",
        }
    ],
    
    price : {
        type : Number,
    },
    
    thumbNail : {
        type : String,
    },
    
    tag : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Tag",
    },
    
    studentsEnrolled:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
        
    }
});

module.exports = mongoose.model("Course" , courseSchema);