const promise=require("promise")
module.exports={
    musamma:()=>{

       
        var name=["FATHER","MOTHER","SON","DAUGHTER","HUSBAND","WIFE","FULLBROTHER","FULLSISTER","GRANDSON",
        "GRANDDAUGHTER","GRANDFATHER","GRANDMOTHER","GRANDMOTHER2","PATERNALBROTHER","PATERNALSISTER",
        "MATERNALBROTHER","MATERNALSISTER","NEPHEW2","NEPHEW1","UNCLE2","UNCLE1","COUSIN2","COUSIN1"];

        var input=["father","mother","son","daughter","husband","wife","fullBrother","fullSister","grandSon",
        "grandDaughter","grandFather","grandMother","grandMother2","paternalBrother","paternalSister",
        "maternalBrother","maternalSister","nephew2","nephew1","uncle2","uncle1","cousin2","cousin1"]
        
        var condition=[
            "only real father, not the stepfather",
            "only the real mother, not the step mother",
            "",
            "",
            "",
            "the wife who is in the idda of Talaq raj'iyaa will also include in this category",
            "brother in  the same father and mother",
            "sister in the same father and mother",
            "only the son's son not daughter's son ",
            "only the son's daughter not the daughter's daughter",


        ]

        var headings=[
            "INTRODUCTION",
            "LIABLILITES ON INHERITANCE",
            "INHERITANCE",
            "HEIRS OF INHERITANCE",
            "PRESCRIBED SHARES OF HEIRS",
            "AL THA'SEEB",
            "AL HAJB",
            "AL AUL",
            "AL RADD"
        ]
        
            return({name,input,condition,headings})
        
    },
    numbers:(relatives,callback)=>{
        return new promise((resolve,reject)=>{
            
        })
    }
}
