// REST end point
import {connectToDatabase} from '$lib/db'
import {ObjectId} from 'mongodb'

export async function get(request){
    try{
        const completed = request.query.get('completed') === 'true' ? true : false;
        const dbc = await connectToDatabase()
        const db = dbc.db
        const collection = db.collection("todo")
        const todos = await collection.find({completed}).toArray()

        return {
            status: 200,
            body: {
                todos
            }
        }
    }
    catch(err){
        return {
            status:500,
            body: {
                err
            }
        }
    }
}

export async function post (request){
    try{
        const dbc = await connectToDatabase()
        const db = dbc.db
        const collection = db.collection("todo")
        
        const todo = JSON.parse(request.body)
        todo.created = Date().toLocaleString()
        todo.updated = Date().toLocaleString()

        await collection.insertOne(todo)

        return {
            status: 200,
            body: {
                todo
            }
        }
    }
    catch(err){
        return {
            status:500,
            body: {
                err
            }
        }
    }
}

export async function put (request) {
    try{
    
        const dbc = await connectToDatabase()
        const db = dbc.db
        const collection = db.collection("todo")
        const todo = JSON.parse(request.body)

         await collection.updateOne({ _id: new ObjectId(todo._id)}, {$set: {
             completed: todo.completed,
             updated: Date().toLocaleString()
         }})

        return {
            status: 200,
            body: {
               todo
            }
        }
    }
    catch(err){
        return {
            status:500,
            body: {
                err
            }
        }
    }
}

export async function del( request) {

}