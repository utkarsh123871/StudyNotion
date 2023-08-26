const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");


// sendOTP
exports.sendOTP = async(req,res) => {

    try{
        // step 1: fetch email from user body
        const {email} = req.body;
    
        // step 2: check if user exists already
        const checkUserPresent = await User.findOne({email});
    
        if(checkUserPresent){
            return res.status(401).json({
                success : false,
                message : "User Exists Already"
            })
        }

        var otp = otpGenerator.generate(6, ({
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        }));
        console.log("OTP Generated" , otp);

        const result = await OTP.findOne({otp: otp});
        
        while(result){
            otp = otpGenerator.generate(6, ({
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false,
            }));
            result = await OTP.findOne({otp: otp});
        }

        const otpPayload = {email , otp};

        // create entry in DB for otp
        const otpBody = await OTP.create(otpPayload);
        console.log(otpBody);

        // return response successful
        res.status(200).json({
            success : true,
            message : 'OTP Sent Successfully',
            otp,
        })
    }
    
    
    catch(error){
        console.log(error);
        return res.status(500).json({
            success : false,
            message : error.message,
            otp,
        })
        
    }
}

// signUp
exports.signUp = async(req,res) => {
    
}

// login

// change password