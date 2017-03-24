var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;  

var TodoSchema = new Schema({
    text:{
        type:String,
        required:true
    },
    created_at:Date,

});

TodoSchema.pre('save' , function (next){
    var todo = this;

    //get the current Data
    var currentDate = new Date();

    //if created_at doesnt exist, add to that field
    if(!todo.created_at)
    {
        todo.created_at =currentDate;
    }
    next();

});


    module.exports = mongoose.model('Todo',TodoSchema);