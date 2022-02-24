const mongoClient=require("mongodb").MongoClient
const state={
    db:null
}
//
module.exports.connect=function(done){
    const url="mongodb+srv://sinan:sinan@cluster0.sn74j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    const dbname="alfaraid"
    
    mongoClient.connect(url,(err,data)=>{
        if(err) return done(err)
        state.db=data.db(dbname)
        done()
    })

    
}

module.exports.get=function(){
    return state.db
}
