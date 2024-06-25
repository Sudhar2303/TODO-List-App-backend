const mongoose = require('mongoose')

const listSchema =  mongoose.Schema(
    {task :
        {
            type : String,
            required : true
        },

    workCompletion :
        {
            type : Boolean,
            default : false,
        }
    }
,{
    collection : 'ToDoList'
})



module.exports = mongoose.model('ToDoList',listSchema)