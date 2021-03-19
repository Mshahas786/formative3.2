const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    ProjectName:{
        type:String,
        require:true
    },
    ProjectCoverUrl:{
        type:String,
         require:true
    },
    AuthorName:{
        type:String,
        require:true
    },
    ProjectLink:{
        type:String,
        require:true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);