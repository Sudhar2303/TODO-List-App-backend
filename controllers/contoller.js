const listSchema = require('../models/listSchema')
const getAllData = async(request,response) =>
{
    try
    {
        const  listData = await listSchema.find()
        //console.log(listData);
        response.status(200).send(listData)
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
    
}

const addTodoListData = async(request,response) =>
{
    const Inputdata = request.body
    try
    {   
        await listSchema.create(Inputdata)    
        const  listData = await listSchema.find()
        return response.status(201).json(listData)
    }
    catch(error)
    {
        response.status(500).send(error.message)
    }
}

const updateToDoListData = async(request,response) =>
    {
        const data = request.body
        try
        {
            const updateData = await listSchema.findOne(data)
            console.log(updateData);
            await listSchema.updateOne( { task: updateData.task }, { $set: { workCompletion: true } } )
            const listData = await listSchema.findOne(data)
            response.status(200).send(listData)
        }
        catch(error)
        {
            response.status(500).send({message : error.message})
        }
                
    }
const deleteToDoListData = async(request,response) =>
{
    const data = request.body
    try
    {
        const deleteData = await listSchema.findOne(data)
        //console.log(deleteData);
        await listSchema.deleteOne({task : deleteData.task})
        const  listData = await listSchema.find()
        console.log(listData); 
        return response.status(201).send(listData)
    }
    catch(error)
    {
        return response.status(500).send({message : error.message})
    }
    
}


module.exports = {addTodoListData,getAllData,deleteToDoListData,deleteToDoListData,updateToDoListData}