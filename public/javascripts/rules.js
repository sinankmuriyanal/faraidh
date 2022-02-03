
var Fraction = require('fractional').Fraction

var nf=require("num2fraction")


/*const { create, all } = require('mathjs')

// configure the default type of numbers as Fractions
const config = {
  // Default type of number
  // Available options: 'number' (default), 'BigNumber', or 'Fraction'
  number: 'Fraction'
}

// create a mathjs instance with everything included
const math = create(all, config)*/

//console.log(math.fraction(1,2))
//console.log(math.evaluate('0.32 + 0.08'))


module.exports={ 
    
     divide:(number)=>{
        /* var gets=[fathergets ,mothergets ,wifegets ,husbandgets ,songets ,daughtergets ,grandFathergets ,grandMothergets ,fullSistergets ,paternalSistergets ,maternalBrothergets ,maternalSistergets ,grandSongets ,grandDaughtergets ,fullBrothergets ,paternalBrothergets]
        for(var i=1;i<17;i++){
            gets[i]=0;
        }*/
        

         var fathergets=0;
        var mothergets=0;
        var songets=0;
        var daughtergets=0;
        var wifegets=0;
        var husbandgets=0;
       
        var grandSongets=0;
        var grandDaughtergets=0;
        var fullBrothergets=0;
        var paternalBrothergets=0;
        var fullSistergets=0;
        var paternalSistergets=0;
    
        var maternalBrothergets=0;
        var maternalSistergets=0;
        var grandFathergets=0;
        var grandMothergets=0; 


        var havashi=number.fullBrother+number.fullSister+number.paternalBrother+number.paternalSister+number.maternalBrother+number.maternalSister
            number.father=parseFloat(number.father);
            number.mother=parseFloat(number.mother);
            number.son=parseFloat(number.son);
            number.daughter=parseFloat(number.daughter);
            number.husband=parseFloat(number.husband);
            number.wife=parseFloat(number.wife);
            number.fullBrother=parseFloat(number.fullBrother);
            number.fullSister=parseFloat(number.fullSister);
            number.grandSon=parseFloat(number.grandSon);
            number.grandDaughter=parseFloat(number.grandDaughter);
            number.grandFather=parseFloat(number.grandFather);
            number.grandMother=parseFloat(number.grandMother);
            number.paternalBrother=parseFloat(number.paternalBrother);
            number.paternalSister=parseFloat(number.paternalSister);
            number.maternalBrother=parseFloat(number.maternalBrother);
            number.maternalSister=parseFloat(number.maternalSister);


        

        /*var numbers=[number.father,number.mother,number.son,number.daughter,
            number.husband,number.wife,number.fullBrother,number.fullSister,
            number.grandFather,number.grandMother,number.grandSon,number.grandDaughter,

            number.paternalBrother,number.paternalSister,number.maternalBrother,number.maternalSister]

        /*for(var i=0;i<16;i++){
            numbers[i]=parseFloat(numbers[i])
        }*/
        
        if(number.husband==1) {
            if(((number.son==0) &&(number.daughter==0)) && (number.grandSon==0 && number.grandDaughter==0)  ) {
                husbandgets=50;
            }else if(((number.son>=1) ||(number.daughter>=1)) || (number.grandSon>=1 || number.grandDaughter>=1)  ){
                husbandgets=25;
            }
        }

        if((number.son==0 && number.daughter==0) &&  (number.grandSon==0 && number.grandDaughter==0) ) {
            if((number.father==0 && number.grandFather==0)){
                if(number.fullBrother==0 && number.fullSister==1) {
                    fullSistergets=50;
                }else if(number.fullBrother==0 && number.fullSister>1) {
                    fullSistergets= ((2/3)*100);
                }
            }
           
        }
        if((number.son==0 && number.daughter==0) &&  (number.grandSon==0 && number.grandDaughter==0) ) {
            if((number.father==0 && number.grandFather==0) && (number.fullBrother==0 && number.fullSister==0) )
            if(number.paternalBrother==0 && number.paternalSister==1) {
                paternalSistergets=50;
            }else if(number.paternalBrother==0 &&number.paternalSister>1) {
                paternalSistergets= ((2/3)*100);
            }
        }
        
        
        if(number.son==0) {
            if(number.daughter==1) {
                daughtergets=50;
            }else if(number.daughter>1) {
                daughtergets= ((2/3)*100);
            }
        }
        
        if(number.son==0 && number.daughter==0) {
            if(number.grandSon==0 && number.grandDaughter==1) {
                grandDaughtergets=50;
            }else if(number.grandSon==0 && number.grandDaughter>1) {
                grandDaughtergets= ((2/3)*100);
            }
        } 
                   
               
        if(number.wife>=1) {
            if((number.son==0) &&(number.daughter==0)) {
                wifegets=25;
            }else {
                wifegets=12.5;
            }
        }
        
        if(number.father==1) {
            if(((number.son>=1) || (number.daughter>=1)) || (number.grandSon>=1  || number.grandDaughter>=1)) {
            fathergets= ((1/6)*100);
            }
        }
            
        if(number.mother==1) {
            if(((number.son==0) && (number.daughter==0)) && ((havashi<2))) {
                mothergets= ((1/3)*100);
            }else {
                mothergets= ((1/6)*100);
            }
        }
        
        if((number.father==1) && (number.mother==1)) {
            var othersofumariyya=number.son+number.daughter+number.grandFather+number.grandMother+number.grandSon+
            number.grandDaughter+number.fullBrother+number.fullSister+
            number.paternalBrother+number.paternalSister+number.maternalBrother+number.maternalSister;

            if( othersofumariyya==0){
                if(number.husband==1) {
                    mothergets= ((1/6)*100);
                    fathergets= ((1/3)*100);
                }else if(number.wife>=1) {
                    mothergets=25;
                    fathergets=50;
                }
            }   
        }
        
        
        if(number.father==0 && number.grandFather==1){
            grandFathergets= ((1/6)*100);
        }
        
        if(number.daughter==1 && number.grandDaughter>=1){
            grandDaughtergets= ((1/6)*100);
        }
        
        if(number.fullSister==1 && number.paternalSister>=1){
            if(number.paternalBrother==0){
                paternalSistergets= ((1/6)*100);
            }
        }
        if((number.son==0 && number.daughter==0) && (number.father==0 && number.grandFather==0)){
            if(number.maternalBrother==1 && number.maternalSister==0){
            maternalBrothergets= ((1/6)*100);
        }else if(number.maternalBrother>=2 && number.maternalSister==0){
            maternalBrothergets= ((1/3)*100);
            }
        }
        
        
        if((number.son==0 && number.daughter==0) && (number.father==0 && number.grandFather==0)){
            if(number.maternalSister==1 && number.maternalBrother==0){
                maternalSistergets= ((1/6)*100);
                     }else if(number.maternalSister>=2 && number.maternalBrother==0){
                maternalSistergets= ((1/3)*100);
                }
        }
            
        
        if(number.maternalBrother>=1 && number.maternalSister>=1){
            
            var maternalSum=(number.maternalBrother)+(number.maternalSister);
            maternalBrothergets= (((1/3)*100)/maternalSum)*number.maternalBrother;
            maternalSistergets= (((1/3)*100)/maternalSum)*number.maternalSister;
        
        }
        
        
        if(number.grandMother==1 && number.mother==0){
            grandMothergets= ((1/6)*100);
        }
        var others=number.father+number.mother+number.son+number.daughter+number.grandMother+number.grandSon
        +number.grandDaughter+number.maternalBrother+number.maternalSister+
        number.wife+number.husband;

        var others=number.father+number.mother+number.son+number.daughter+number.grandMother+
        number.grandSon+number.grandDaughter+number.maternalBrother+number.maternalSister+
        number.wife+number.husband;


        if(number.grandFather==1){ 
            if(others==0){
                if(number.fullBrother>=1 || number.fullSister>=1) {
               
                    var shares=((number.fullBrother+number.grandFather)*2) + number.fullSister;
                    var shares=parseFloat(shares);
                    fullBrothergets=100/shares*number.fullBrother*2;
                    grandFathergets=100/shares*number.grandFather*2;
                    fullSistergets=100/shares*number.fullSister;
                    
                            if(grandFathergets> ((1/3)*100)){
                                grandFathergets=grandFathergets;
                            }else if(grandFathergets< ((1/3)*100)){
                                var shares=((number.fullBrother+number.grandFather)*2) + number.fullSister;
                                var shares=parseFloat(shares);
                                fullBrothergets= ((2/3)*100)/shares*number.fullBrother*2;
                                fullSistergets= ((2/3)*100)/shares*number.fullSister;
                                grandFathergets= ((1/3)*100);
                            }
        
                            
                }else if((number.paternalBrother>=1 || number.paternalSister>=1) ){
               
                            var shares=((number.paternalBrother+number.grandFather)*2) + number.paternalSister;
                            var shares=parseFloat(shares);
                            paternalBrothergets=100/shares*number.paternalBrother*2;
                            grandFathergets=100/shares*number.grandFather*2;
                            paternalSistergets=100/shares*number.paternalSister;
                            
                                    if(grandFathergets> ((1/3)*100)){
                                        grandFathergets=grandFathergets;
                                    }else if(grandFathergets< ((1/3)*100)){
                                        var shares=((number.paternalBrother+number.grandFather)*2) + number.paternalSister;
                                        var shares=parseFloat(shares);
                                        paternalBrothergets= ((2/3)*100)/shares*number.paternalBrother*2;
                                        paternalSistergets= ((2/3)*100)/shares*number.paternalSister;
                                        grandFathergets= ((1/3)*100);
                                    }
                
                                    
                }else if((number.fullBrother>=1 && number.fullSister==0) && (number.paternalBrother>=1 || number.paternalSister>=1)){

                                    var shares=((number.paternalBrother+number.grandFather+number.fullBrother)*2) + number.paternalSister+number.fullSister;
                                    var shares=parseFloat(shares);
                                    
                                    paternalBrothergets=0;
                                     grandFathergets=100/shares*number.grandFather*2;
                                    fullSistergets=0;
                                    paternalSistergets=0;

                                    if(grandFathergets> ((1/3)*100)){
                                        grandFathergets=grandFathergets;
                                    }else if(grandFathergets< ((1/3)*100)){
                                        var shares=((number.paternalBrother+number.grandFather)*2) + number.paternalSister;
                                        var shares=parseFloat(shares);
                                        
                                        grandFathergets= ((1/3)*100);
                                        
                                    }
                                    fullBrothergets=100-grandFathergets;


                }else if((number.fullBrother==0 && number.fullSister>=1) && (number.paternalBrother>=1 || number.paternalSister>=1)){

                                    var shares=((number.paternalBrother+number.grandFather+number.fullBrother)*2) + number.paternalSister+number.fullSister;
                                    var shares=parseFloat(shares);
                                    
                                    paternalBrothergets=0;
                                    grandFathergets=100/shares*number.grandFather*2;
                                    fullSistergets=0;
                                    paternalSistergets=0;

                                    if(grandFathergets> ((1/3)*100)){
                                        grandFathergets=grandFathergets;
                                    }else if(grandFathergets< ((1/3)*100)){
                                        var shares=((number.paternalBrother+number.grandFather)*2) + number.paternalSister;
                                        var shares=parseFloat(shares);
                                        
                                        grandFathergets= ((1/3)*100);
                                    }
                                    if(number.fullSister==1){
                                        fullSistergets=((1/2)*100);
                                    }else if(number.fullSister>1){
                                        fullSistergets=((2/3)*100);
                                    }
                                    
                }else if((number.fullBrother>=1 || number.fullSister>=1) && (number.paternalBrother>=1 || number.paternalSister>=1)){

                    var shares=((number.paternalBrother+number.grandFather+number.fullBrother)*2) + number.paternalSister+number.fullSister;
                    var shares=parseFloat(shares);
                    fullBrothergets=100/shares*fullBrother*2;
                    
                    grandFathergets=100/shares*grandFather*2;
                    fullSistergets=100/shares*fullSister;
                    

                            if(grandFathergets>((1/3)*100)){
                                grandFathergets=grandFathergets;
                                console.log(grandFathergets)
                            }else if(grandFathergets<((1/3)*100)){
                                var shares=((number.paternalBrother+number.grandFather+number.fullBrother)*2) + number.paternalSister+number.fullSister;
                                var shares=parseFloat(shares);
                                fullBrothergets=((2/3)*100)/(number.fullBrother+(number.fullSister*2))*number.fullBrother*2;
                                
                                
                                fullSistergets=((2/3)*100)/(number.fullBrother+(number.fullSister*2))*number.fullSister*1;
                                
                                grandFathergets=((1/3)*100);
                                paternalBrothergets=100-grandFathergets-fullBrothergets-fullSistergets;
                            }

                        }
            }else if(others>=1){
                        var shares=((number.fullBrother+number.paternalBrother+number.grandFather)*2) + number.fullSister+number.paternalSister;
                        var shares=parseFloat(shares);
        
                        var othergets=fathergets+mothergets+songets+daughtergets+grandMothergets+grandSongets+grandDaughtergets+maternalBrothergets+maternalSistergets+wifegets+husbandgets;
                        var othergets=parseFloat(othergets);
                        fullBrothergets=(100-othergets)/shares*number.fullBrother*2;
                        paternalBrothergets=(100-othergets)/shares*number.paternalBrother*2;
                        grandFathergets=(100-othergets)/shares*number.grandFather*2;
                        fullSistergets=(100-othergets)/shares*number.fullSister;
                        paternalSistergets=(100-othergets)/shares*number.paternalSister;
        
                if(grandFathergets> ((1/6)*100) && grandFathergets>((100-othergets)/3)){
                            grandFathergets=grandFathergets;
         
                }else if(((100-othergets)/3) > ((1/6)*100) && ((100-othergets)/3)> grandFathergets){
                            grandFathergets=((100-othergets)/3);
                            var othergets=fathergets+mothergets+songets+daughtergets+grandMothergets+grandSongets+grandDaughtergets+maternalBrothergets+maternalSistergets+wifegets+husbandgets;
                            var othergets=parseFloat(othergets);
                            var shares=((number.fullBrother+number.paternalBrother)*2) + number.fullSister+number.paternalSister;
                            var shares=parseFloat(shares);
                            fullBrothergets=(100-othergets-grandFathergets)/shares*number.fullBrother*2;
                            paternalBrothergets=(100-othergets-grandFathergets)/shares*number.paternalBrother*2;
                            
                            fullSistergets=(100-othergets-grandFathergets)/shares*number.fullSister;
                            paternalSistergets=(100-othergets-grandFathergets)/shares*number.paternalSister;
                            
        
                }else if( ((1/6)*100)> grandFathergets &&  ((1/6)*100)> ((100-othergets)/3)){
                            grandFathergets= ((1/6)*100);
                            var shares=((number.fullBrother+number.paternalBrother)*2) + number.fullSister+number.paternalSister;
                            var shares=parseFloat(shares);
                            fullBrothergets=(100-othergets-grandFathergets)/shares*number.fullBrother*2;
                            paternalBrothergets=(100-othergets-grandFathergets)/shares*number.paternalBrother*2;
                            
                            fullSistergets=(100-othergets-grandFathergets)/shares*number.fullSister;
                            paternalSistergets=(100-othergets-grandFathergets)/shares*number.paternalSister;
                        }
        
        
                     }
                 }
                
        /****************************************************************************** */
        /****************************A'ul Mas'la*****************************************/
        /****************************************************************************** */


       
        var firstTotal=fathergets+mothergets+wifegets+husbandgets+songets+daughtergets+grandFathergets+grandMothergets+fullSistergets+paternalSistergets+maternalBrothergets+maternalSistergets+grandSongets+grandDaughtergets+fullBrothergets+paternalBrothergets;
        var firstTotal=parseFloat(firstTotal);

        

        if(firstTotal>100){
            fathergets=fathergets/(firstTotal/100);
            mothergets=mothergets/(firstTotal/100);
            husbandgets=husbandgets/(firstTotal/100);
            wifegets=wifegets/(firstTotal/100);
            songets=songets/(firstTotal/100);
            daughtergets=daughtergets/(firstTotal/100);
            grandFathergets=grandFathergets/(firstTotal/100);
            grandMothergets=grandMothergets/(firstTotal/100);
            fullBrothergets=fullBrothergets/(firstTotal/100);
            fullSistergets=fullSistergets/(firstTotal/100);
            paternalBrothergets=paternalBrothergets/(firstTotal/100);
            paternalSistergets=paternalSistergets/(firstTotal/100);
            maternalBrothergets=maternalBrothergets/(firstTotal/100);
            maternalSistergets=maternalSistergets/(firstTotal/100);
            grandSongets=grandSongets/(firstTotal/100);
            grandDaughtergets=grandDaughtergets/(firstTotal/100);

        }

       /*************          ASABA               ********* */





        var balance=100-fathergets-mothergets-wifegets-husbandgets-daughtergets-grandDaughtergets-fullSistergets-paternalSistergets-grandFathergets-grandMothergets-maternalBrothergets-maternalSistergets-fullBrothergets-paternalBrothergets-songets-grandSongets;	
        var balance= parseFloat(balance);

        
        
        if(balance>=0) {
            if(number.son>=1 && number.daughter==0) {
            songets=balance;
                }else if(number.son>=1 && number.daughter>=1) {
                var shares=(number.son*2)+number.daughter;
                var shares= parseFloat(shares);
                 songets=(balance/shares)*number.son*2;
                 daughtergets=(balance/shares*number.daughter);
            }
            
            if(number.son==0) {
                if(number.grandSon>=1 && number.grandDaughter==0) {
                grandSongets=balance;
                }else if(number.grandSon>=1 && number.grandDaughter>=1){
                    var shares=(number.grandSon*2)+number.grandDaughter;
                    //var shares= parseFloat(shares);
                 grandSongets=(balance/shares)*number.grandSon*2;
                 grandDaughtergets=(balance/shares*number.grandDaughter);
                }
            }

            if(number.son==0 && number.grandSon==0 ) {
                if(number.father==1) {
                fathergets=fathergets+balance;
                }
            }
            
            if((number.son==0 && number.grandSon==0) && (number.father==0)) {
                if(number.grandFather==1) {
                grandFathergets=grandFathergets+balance;
                }
            }
                
            if(((number.son==0 && number.grandSon==0) && (number.father==0)) &&(number.grandFather==0)) {
                if(number.fullBrother>=1 && number.fullSister==0) {
                fullBrothergets=balance;
                }else if(number.fullBrother>=1 && number.fullSister>=1) {
                    var shares=(number.fullBrother*2)+number.fullSister;
                    var shares= parseFloat(shares);
                    fullBrothergets=(balance/shares)*number.fullBrother*2;
                    fullSistergets=(balance/shares*number.fullSister);
                }
            }
        
            
            
            if((((number.son==0 && number.grandSon==0) && (number.father==0 &&  number.fullSister==0)) &&(number.grandFather==0)) && number.fullBrother==0) {
                if(number.paternalBrother>=1 && number.paternalSister==0) {
                paternalBrothergets=balance;
                }else if(number.paternalBrother>=1 && number.paternalSister>=1) {
                    var shares=(number.paternalBrother*2)+number.paternalSister;
                    var shares= parseFloat(shares);
                    paternalBrothergets=(balance/shares)*number.paternalBrother*2;
                    paternalSistergets=(balance/shares*number.paternalSister);
                }
            }

            if(number.daughter>=1 || number.grandDaughter>=1){
                if(number.son==0 && number.grandSon==0){
                    if(number.fullSister>=1){
                        fullSistergets=balance;
                    }else if(number.paternalSister>=1){
                        paternalSistergets=balance;
                    }
                }
            }
        }
        
            /************************************************************
        
                                 hajb  - the elimination

             ************************************************************/	


if(number.son>=1) {
    grandSongets=0;
}

if(number.father==1 || number.son>=1 || number.grandSon>=1) {
    fullBrothergets=0;
}
if(number.father==1 || number.son>=1 || number.grandSon>=1 || number.fullBrother>=1) {
    paternalBrothergets=0;
}

if(number.fullSister>=2 && number.paternalSister>=2){
    paternalSistergets=0;
}
        ////////////////////////////////////     RADD ////////////////////////////

        var firstTotal=fathergets+mothergets+wifegets+husbandgets+songets+daughtergets+grandFathergets+grandMothergets+fullSistergets+paternalSistergets+maternalBrothergets+maternalSistergets+grandSongets+grandDaughtergets+fullBrothergets+paternalBrothergets;
        var firstTotal=parseFloat(firstTotal);
        if(firstTotal<100){
        if(((number.son==0 && number.grandSon==0) && (number.father==0 && number.grandFather==0)) 
        && ((number.fullBrother==0 && number.paternalBrother==0) )){
            mothergets=mothergets*((100-husbandgets-wifegets)/(firstTotal-husbandgets-wifegets));
            daughtergets=daughtergets*((100-husbandgets-wifegets)/(firstTotal-husbandgets-wifegets));
            
            grandMothergets=grandMothergets*((100-husbandgets-wifegets)/(firstTotal-husbandgets-wifegets));
            
            fullSistergets=fullSistergets*((100-husbandgets-wifegets)/(firstTotal-husbandgets-wifegets));
            
            paternalSistergets=paternalSistergets*((100-husbandgets-wifegets)/(firstTotal-husbandgets-wifegets));
            maternalBrothergets=maternalBrothergets*((100-husbandgets-wifegets)/(firstTotal-husbandgets-wifegets));
            maternalSistergets=maternalSistergets*((100-husbandgets-wifegets)/(firstTotal-husbandgets-wifegets));
            
            grandDaughtergets=grandDaughtergets*((100-husbandgets-wifegets)/(firstTotal-husbandgets-wifegets));
        }
        
            
    }
        
       
       
        
       
         var gets=[fathergets.toFixed(1),mothergets.toFixed(1),songets.toFixed(1),daughtergets.toFixed(1),husbandgets.toFixed(1),
            wifegets.toFixed(1),fullBrothergets.toFixed(1),fullSistergets.toFixed(1),grandSongets.toFixed(1),grandDaughtergets.toFixed(1),
            grandFathergets.toFixed(1),grandMothergets.toFixed(1),paternalBrothergets.toFixed(1),paternalSistergets.toFixed(1),
            maternalBrothergets.toFixed(1),maternalSistergets.toFixed(1)]
        

        var fatherget=nf(fathergets/100)
        var motherget=nf(mothergets/100) 
        var songet=nf(songets/100) 
        var daughterget=nf(daughtergets/100) 
        var husbandget=nf(husbandgets/100) 
        var wifeget=nf(wifegets/100) 
        var fullBrotherget=nf(fullBrothergets/100) 
        var fullSisterget=nf(fullSistergets/100)  
        var grandSonget=nf(grandSongets/100) 
        var grandDaughterget=nf(grandDaughtergets/100) 
        var grandFatherget=nf(grandFathergets/100) 
        var grandMotherget=nf(grandMothergets/100) 
        var paternalBrotherget=nf(paternalBrothergets/100) 
        var paternalSisterget=nf(paternalSistergets/100) 
        var maternalBrotherget=nf(maternalBrothergets/100) 
        var maternalSisterget=nf(maternalSistergets/100) 
      

        var get=[fatherget,motherget,songet,daughterget,husbandget,wifeget,fullBrotherget,fullSisterget,grandSonget,grandDaughterget,grandFatherget,grandMotherget,paternalBrotherget,paternalSisterget,maternalBrotherget,maternalSisterget]
        /*var get=[fathergets.toFixed(1),mothergets.toFixed(1),songets.toFixed(1),daughtergets.toFixed(1),husbandgets.toFixed(1),wifegets.toFixed(1),fullBrothergets.toFixed(1),paternalBrothergets.toFixed(1)
            ,fullSistergets.toFixed(1),paternalSistergets.toFixed(1),grandFathergets.toFixed(1),grandSongets.toFixed(1),grandDaughtergets.toFixed(1)
            ,grandMothergets.toFixed(1),maternalBrothergets.toFixed(1),maternalSistergets.toFixed(1)]*/
        
            var getstotal=fathergets+mothergets+wifegets+husbandgets+songets+daughtergets+grandFathergets+grandMothergets
            +fullSistergets+paternalSistergets+maternalBrothergets+maternalSistergets+grandSongets+grandDaughtergets+
            fullBrothergets+paternalBrothergets;
            getstotal=getstotal.toFixed(1)

        //console.log({gets,get,getstotal})
            //callback ({gets,get,getstotal})
         return ({gets,get,getstotal});
     }
     }
    