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
            "Only real father, not the stepfather",
            "Only the real mother, not the step mother",
            "",
            "",
            "",
            "The wife in the idda of Talaq raj'iyaa is also eligible",
            "Brother in  the same father and mother",
            "Sister in the same father and mother",
            "Only the son's son , not daughter's son ",
            "Only the son's daughter , not the daughter's daughter",
            "Only the father's father , not the mother's father",
            "Father's mother",
            "Mother's mother",
            "Brother who has the same father and different mothers",
            "Sister who has the same father and different mothers",
            "Brother who has the same mother and different fathers",
            "Sister who has the same mother and different fathers",
            "Son of the full brother , not the daughter",
            "Son of the paternal brother , not the daughter",
            "Father's full brother  , not mother's",
            "Father's paternal brother  , not mother's",
            "Son of father's full brother  , not daughters",
            "Son of father's paternal brother  , not daughters",




        


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
