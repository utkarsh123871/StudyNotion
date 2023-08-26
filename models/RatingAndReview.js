const mongoose = require("mongoose");

const ratingAndReview = new mongoose.Schema({

    user: {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User",
    },

    rating: {
        type : Numbeer,
        required : true,
    },
    
    review : {
        type : String,
        required : true,
    },
});

module.exports = mongoose.model("Rating and Review" , ratingAndReview);