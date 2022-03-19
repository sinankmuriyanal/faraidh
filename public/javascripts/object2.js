const promise=require("promise")
module.exports={
    musamma:()=>{

       
        var name=["പിതാവ്","മാതാവ്","മകന്‍","മകള്‍","ഭര്‍ത്താവ്","ഭാര്യ","പൂര്‍ണ്ണ സഹോദരന്‍","പൂര്‍ണ്ണ സഹോദരി","പേരമകന്‍",
        "പേരമകള്‍","പിതാമഹന്‍","മാതാമഹന്‍","മാതാമഹി","ഏകപിതാ സഹോദരന്‍","ഏകപിതാ സഹോദരി",
        "ഏകമാതാ സഹോദരന്‍","ഏകമാതാ സഹോദരി","പൂര്‍ണ്ണ സഹോദരപുത്രന്‍","ഏകപിതാ സഹോദരപുത്രന്‍","പിതൃവ്യന്‍","ഏകപിതാ പിതൃവ്യന്‍","പിതൃവ്യപുത്രന്‍","ഏകപിതാ പിതൃവ്യപുത്രന്‍"];

        var input=["father","mother","son","daughter","husband","wife","fullBrother","fullSister","grandSon",
        "grandDaughter","grandFather","grandMother","grandMother2","paternalBrother","paternalSister",
        "maternalBrother","maternalSister","nephew2","nephew1","uncle2","uncle1","cousin2","cousin1"]
        
        var condition=[
            "",
            "Only the real mother, not the step mother",
            "Only the real son, not the adopted son",
            "Only the real daughter, not the adopted daughter",
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
