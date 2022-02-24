const { ObjectId } = require("bson")
var collection=require('../config/collection')
var db=require("../config/connection")


module.exports={

    addfeedback:(feedack,callback)=>{
        
        db.get().collection("feedbacks").insertOne(feedack).then((data)=>{
            
                callback(data)
                
        }
        )
    },

    getallfeedbacks:()=>{
       
        return new Promise(async(resolve,reject)=>{
            let feedbacks= await db.get().collection(collection.FEEDBACKS).find().toArray()
            resolve(feedbacks)
        })
      
    }
}