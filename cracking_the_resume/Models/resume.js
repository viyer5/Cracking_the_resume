var mongoose = require("mongoose");

//RESUME schema
var resumeSchema = new mongoose.Schema({
    resumeName: String, //Name of the resume file in s3 bucket 
    comments:[
        //Object Reference
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    upvoteCount: Number, //total count of upvotes 
    //array of user objectIDs who upvoted 
    upvotes: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "User"
        }
    ], 
    downvoteCount: Number, //total count of downvotes 
    //array of user objectIDs who downvoted 
    downvotes: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "User"
        }
    ] 
});

// //RESUME schema
// var resumeSchema = new mongoose.Schema({
//     resumeName: String, //NEED TO FIND TYPE OF PDF FILE
//     comments:[
//         //Object Reference
//         {
//             userName: String,
//             content: String, 
//             created: {type: Date, default: Date.now}
//         }
//     ],
//     upvotes: Number, //SOME KIND OF QUERY ?
//     downvotes: Number //SOME KIND OF QUERY???
// });




//exporting module
module.exports = mongoose.model("Resume", resumeSchema);