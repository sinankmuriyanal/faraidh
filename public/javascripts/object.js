const promise=require("promise")
module.exports={
    musamma:()=>{

        /*return new promise((resolve,reject)=>{
            var name=["father","mother","son","daughter","husband","wife","fullBrother","fullSister","grandSon","grandDaughter","grandFather","grandMother","paternalBrother","paternalSister","maternalBrother","maternalSister",];
        
            resolve(name)
        })*/
        var name=["FATHER","MOTHER","SON","DAUGHTER","HUSBAND","WIFE","FULLBROTHER","FULLSISTER","GRANDSON",
        "GRANDDAUGHTER","GRANDFATHER","GRANDMOTHER","GRANDMOTHER2","PATERNALBROTHER","PATERNALSISTER",
        "MATERNALBROTHER","MATERNALSISTER","NEPHEW2","NEPHEW1","UNCLE2","UNCLE1","COUSIN2","COUSIN1"];

        var input=["father","mother","son","daughter","husband","wife","fullBrother","fullSister","grandSon",
        "grandDaughter","grandFather","grandMother","grandMother2","paternalBrother","paternalSister",
        "maternalBrother","maternalSister","nephew2","nephew1","uncle2","uncle1","cousin2","cousin1"]

        
            return({name,input})
        
    },
    numbers:(relatives,callback)=>{
        return new promise((resolve,reject)=>{
            
        })
    }
}
