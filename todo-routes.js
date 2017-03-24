var express     = require('express');

var app         = module.exports   = express.Router();

var Todo        = require('./todo');


//simple get route
app.get('/todos' , function(req,res){

                Todo.find({},function(err , todos){
                        if(err){
                                return res.json({"success" : false , "msg": "Error while retreving the data"});
                                 }

                            res.status(200).send({"success":true , "result" : todos });
                    });
            
    });

//POST
//Create a new todo
app.post('/todos' , function(req,res)
{
    if(!req.body.text)
        {
            return res.status(400).send({"success":false , "msg" : "You need to send the text todo!"});
        }

    var newTodo = new Todo({
        text: req.body.text
    });

    newTodo.save(function(err){
            if(err)
            {
                console.log("some error ",err);
                return res.json({"success":false , "msg" : "Error while creating Todo", "error" : err});
            }
            res.status(201).send({"success" : true , "msg" : "Successful created new Todo"});
    }); 
});

//DELETE
//Remove one todo by its ID

app.delete('/todos/:todoId', function( req , res){
    var selectionId = req.params.todoId;
    if(!selectionId || selectionId == ""){
            return res.json({"success":false , "msg" : "You need ti send the ID of the Todo", "error" : err});
        }

    Todo.findByIdAndRemove(selectionId , function(err , removed){
        if(err)
            {
                console.log("some error ",err);
                return res.json({"success":false , "msg" : "Error while deleting Todo", "error" : err});
            }
            res.status(200).json({"success" : true , "msg" : "Successful deleted Todo"});
    });



});

