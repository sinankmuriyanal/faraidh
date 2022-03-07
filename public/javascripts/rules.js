
var Fraction = require('fractional').Fraction

var nf=require("num2fraction")




module.exports={ 
    
     divide:(number)=>{
        /* var gets=[fathergets ,mothergets ,wifegets ,husbandgets ,songets ,daughtergets ,grandFathergets ,grandMothergets ,fullSistergets ,paternalSistergets ,maternalBrothergets ,maternalSistergets ,grandSongets ,grandDaughtergets ,fullBrothergets ,paternalBrothergets]
        for(var i=1;i<17;i++){
            gets[i]=0;
        }*/
        if(number.husband==1){
            number.wife=0
        }else if(number.wife>=1){
            number.husband=0
        }

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
        var grandMother2gets=0;

        var nephew2gets=0;
        var nephew1gets=0;
        var uncle2gets=0;
        var uncle1gets=0;
        var cousin2gets=0;
        var cousin1gets=0;



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
            number.grandMother2=parseFloat(number.grandMother2);
            number.paternalBrother=parseFloat(number.paternalBrother);
            number.paternalSister=parseFloat(number.paternalSister);
            number.maternalBrother=parseFloat(number.maternalBrother);
            number.maternalSister=parseFloat(number.maternalSister);
            number.nephew2=parseFloat(number.nephew2);
            number.nephew1=parseFloat(number.nephew1);
            number.uncle2=parseFloat(number.uncle2);
            number.uncle1=parseFloat(number.uncle1);
            number.cousin2=parseFloat(number.cousin2);
            number.cousin1=parseFloat(number.cousin1);


        var exp=[];

        if(number.husband==1) {
            if(((number.son==0) &&(number.daughter==0)) && (number.grandSon==0 && number.grandDaughter==0)  ) {
                husbandgets=50;
                exp.push("Husband gets his share of 1/2 as he has no  children")
            }else if(((number.son>=1) ||(number.daughter>=1)) || (number.grandSon>=1 || number.grandDaughter>=1)  ){
                husbandgets=25;
                exp.push("Husband gets his share of 1/4 as he has   children")
            }
        }

        if((number.son==0 && number.daughter==0) &&  (number.grandSon==0 && number.grandDaughter==0) ) {
            if((number.father==0 && number.grandFather==0)){
                if(number.fullBrother==0 && number.fullSister==1) {
                    fullSistergets=50;
                    exp.push("Full sister gets her   share of 1/2")

                }else if(number.fullBrother==0 && number.fullSister>1) {
                    fullSistergets= ((2/3)*100);
                    exp.push("Full sister gets her   share of 2/3")
                }
            }
           
        }
        if((number.son==0 && number.daughter==0) &&  (number.grandSon==0 && number.grandDaughter==0) ) {
            if((number.father==0 && number.grandFather==0) && (number.fullBrother==0 && number.fullSister==0) )
            if(number.paternalBrother==0 && number.paternalSister==1) {
                paternalSistergets=50;
                exp.push("Pateranl Sister gets her   share of 1/2")
            }else if(number.paternalBrother==0 &&number.paternalSister>1) {
                paternalSistergets= ((2/3)*100);
                exp.push("Pateranl Sister gets her   share of 2/3")
            }
        }
        
        
        if(number.son==0) {
            if(number.daughter==1) {
                daughtergets=50;
                exp.push("Daughter gets her   share of 1/2 ")
            }else if(number.daughter>1) {
                daughtergets= ((2/3)*100);
                exp.push("Daughter gets their   share of 2/3 ")
            }
        }
        
        if(number.son==0 && number.daughter==0) {
            if(number.grandSon==0 && number.grandDaughter==1) {
                grandDaughtergets=50;
                exp.push("Granddaughter gets her   share of 1/2")
            }else if(number.grandSon==0 && number.grandDaughter>1) {
                grandDaughtergets= ((2/3)*100);
                exp.push("Granddaughters get their   share of 2/3")
            }
        } 
                   
               
        if(number.wife>=1) {
            if((number.son==0) &&(number.daughter==0)) {
                wifegets=25;
                exp.push("Wife gets her   share of 1/4 as she has no  children")
            }else {
                wifegets=12.5;
                exp.push("wife gets her   share of 1/8 as she has  children" )
            }
        }
        
        if(number.father==1) {
            if(((number.son>=1) || (number.daughter>=1)) || (number.grandSon>=1  || number.grandDaughter>=1)) {
            fathergets= ((1/6)*100);
            exp.push("Father gets his   share of 1/6")
            }
        }
            
        if(number.mother==1) {
            if(((number.son==0) && (number.daughter==0)) && ((havashi<2))) {
                mothergets= ((1/3)*100);
                exp.push("Mother gets her   share of 1/3")
            }else {
                mothergets= ((1/6)*100);
                exp.push("Mother gets her   share of 1/6")
            }
        }
        
        if((number.father==1) && (number.mother==1)) {
            var othersofumariyya=number.son+number.daughter+number.grandFather+number.grandMother+number.grandSon+
            number.grandDaughter+number.fullBrother+number.fullSister+
            number.paternalBrother+number.paternalSister+number.maternalBrother+number.maternalSister;

            if( othersofumariyya==0){
                if(number.husband==1) {
                    mothergets= ((1/6)*100);
                    exp.push("Mother gets her   share of 1/6 being with deseaded person's father and husband")
                    fathergets= ((1/3)*100);
                    exp.push("Father gets her   share of 1/3 being with deseaded person's mother and husband")
                }else if(number.wife>=1) {
                    mothergets=25;
                    exp.push("Father gets her   share of 1/4 being with deseaded person's father and wife")
                    fathergets=50;
                    exp.push("Mother gets her   share of 1/2 being with deseaded person's father and wife")
                }
            }   
        }
        
        
        
        
        if((number.daughter==1 && number.grandDaughter>=1) &&(number.son==0 && number.grandSon==0)){
            grandDaughtergets= ((1/6)*100);
            exp.push("Granddaughter gets her   share of 1/6")
        }
        
        if((number.fullSister==1 && number.paternalSister>=1)&&(number.son==0 && number.daughter==0)){
            if(number.paternalBrother==0){
                paternalSistergets= ((1/6)*100);
                exp.push("Paternal sister gets her   share of 1/6 being with the full sister")
            }
        }
        if((number.son==0 && number.daughter==0) && (number.father==0 && number.grandFather==0)){
            if(number.maternalBrother==1 && number.maternalSister==0){
            maternalBrothergets= ((1/6)*100);
            exp.push("Maternal brother gets his  share of 1/6")
        }else if(number.maternalBrother>=2 && number.maternalSister==0){
            maternalBrothergets= ((1/3)*100);
            exp.push("Maternal brother gets his  share of 1/3 being more than one")
            }
        }
        
        
        if((number.son==0 && number.daughter==0) && (number.father==0 && number.grandFather==0)){
            if(number.maternalSister==1 && number.maternalBrother==0){
                maternalSistergets= ((1/6)*100);
                exp.push("Maternal sister gets her   share of 1/6")
                     }else if(number.maternalSister>=2 && number.maternalBrother==0){
                maternalSistergets= ((1/3)*100);
                exp.push("Maternal sister gets her   share of 1/3 being more than one")

                }
            else if(number.maternalBrother>=1 && number.maternalSister>=1){
            
                    var maternalSum=(number.maternalBrother)+(number.maternalSister);
                    maternalBrothergets= (((1/3)*100)/maternalSum)*number.maternalBrother;
                    maternalSistergets= (((1/3)*100)/maternalSum)*number.maternalSister;
                    exp.push("Maternal brothers and sisters share the 1/3 between them in the ratio of 1:2")
        
                }
        }

        
            
        
        
        
        
        if((number.grandMother==1 && number.mother==0)&& (number.grandMother2==0)){
            grandMothergets= ((1/6)*100);
            exp.push("Grandmother gets her  share of 1/6")
            
        }
        if((number.grandMother2==1 && number.mother==0)&& (number.grandMother==0)){
            grandMother2gets= ((1/6)*100);
            exp.push("Grandmother gets her   share of 1/6")
        }
        if((number.grandMother2==1 && number.mother==0)&& (number.grandMother==1)){
            grandMother2gets= ((1/12)*100);
            grandMothergets= ((1/12)*100);
            exp.push("Two grandmothers equally share the 1/6 between them")
        }

        if(number.father==0 && number.grandFather==1){
            grandFathergets= ((1/6)*100);
  
                exp.push("Grandfather gets   his  share of 1/6")
        }

        var others=number.father+number.mother+number.son+number.daughter+number.grandMother+number.grandSon
        +number.grandDaughter+number.maternalBrother+number.maternalSister+
        number.wife+number.husband;

        

        if(number.grandFather==1){ 
            
            if(others==0){
                
                if((number.fullBrother>=1 || number.fullSister>=1) && ((number.paternalBrother==0 && number.paternalSister==0) )){
                    
                    
                    var shares=((number.fullBrother+number.grandFather)*2) + number.fullSister;
                    var shares=parseFloat(shares);
                    fullBrothergets=100/shares*number.fullBrother*2;
                    grandFathergets=100/shares*number.grandFather*2;
                    fullSistergets=100/shares*number.fullSister;
                            if(grandFathergets> ((1/3)*100)){
                                grandFathergets=grandFathergets;
                              
                                exp.pop();
                                exp.push("Grandfather gets   "+nf(grandFathergets/100)+"    " )
                                exp.push("Full brothers and sisters share the balance between them in the ratio of 2:1")

                            }else if(grandFathergets< ((1/3)*100)){
                                var shares=((number.fullBrother)*2) + number.fullSister;
                                var shares=parseFloat(shares);
                                exp.pop();
                                exp.push("Grandfather gets   1/3 as it is best for him ")
                                grandFathergets= ((1/3)*100);
                                fullBrothergets= ((2/3)*100)/shares*number.fullBrother*2;
                                fullSistergets= ((2/3)*100)/shares*number.fullSister;
                                exp.push("Full brothers and sisters share the balance between them in the ratio of 2:1")
                                
                            }
        
                            
                }else if((number.paternalBrother>=1 || number.paternalSister>=1) && (number.fullBrother==0 && number.fullSister==0) ){
                       
                            var shares=((number.paternalBrother+number.grandFather)*2) + number.paternalSister;
                            var shares=parseFloat(shares);
                            paternalBrothergets=100/shares*number.paternalBrother*2;
                            grandFathergets=100/shares*number.grandFather*2;
                            paternalSistergets=100/shares*number.paternalSister;
                            
                                    if(grandFathergets> ((1/3)*100)){
                                        grandFathergets=grandFathergets;
                                        
                                        exp.pop();
                                exp.push("Grandfather gets  "+nf(grandFathergets/100)+"   " )
                                        exp.push("Paternal brothers and sisters share the balance between them in the ratio of 2:1")
                                    }else if(grandFathergets< ((1/3)*100)){
                                        var shares=((number.paternalBrother+number.grandFather)*2) + number.paternalSister;
                                        var shares=parseFloat(shares);
                                        exp.pop();
                                exp.push("Grandfather gets   1/3 as it is best for him ")
                                        paternalBrothergets= ((2/3)*100)/shares*number.paternalBrother*2;
                                        paternalSistergets= ((2/3)*100)/shares*number.paternalSister;
                                        grandFathergets= ((1/3)*100);
                                        exp.push("Paternal brothers and sisters share the balance between them in the ratio of 2:1")
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
                                        exp.pop();
                                exp.push("Grandfather gets  "+nf(grandFathergets/100)+"   " )
                                        exp.push("Full brother gets the all balance");
                                    }else if(grandFathergets< ((1/3)*100)){
                                        var shares=((number.paternalBrother+number.grandFather)*2) + number.paternalSister;
                                        var shares=parseFloat(shares);
                                        
                                        grandFathergets= ((1/3)*100);
                                        exp.pop();
                                exp.push("Grandfather gets   1/3 as it is best for him ")
                                        exp.push("Full brother gets the all balance");
                                        
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
                                        exp.pop();
                                exp.push("Grandfather gets  "+nf(grandFathergets/100)+"   " )
                                        exp.push("Full sister gets the all balance not more than her prescribed share.");
                                    }else if(grandFathergets< ((1/3)*100)){
                                        var shares=((number.paternalBrother+number.grandFather)*2) + number.paternalSister;
                                        var shares=parseFloat(shares);
                                        
                                        grandFathergets= ((1/3)*100);
                                        exp.pop();
                                exp.push("Grandfather gets   1/3 as it is best for him ")
                                        exp.push("Full sister gets the all balance not more than her prescribed share.");
                                    }
                                    if(number.fullSister==1){
                                        fullSistergets=((1/2)*100);
                                    }else if(number.fullSister>1){
                                        fullSistergets=((2/3)*100);
                                    }
                                    paternalBrothergets=100-fullSistergets-grandFathergets;
                                    exp.push("Paternal brother gets the balance")
                }else if((number.fullBrother>=1 && number.fullSister>=1) && (number.paternalBrother>=1 || number.paternalSister>=1)){
                    
                    var shares=((number.paternalBrother+number.grandFather+number.fullBrother)*2) + number.paternalSister+number.fullSister;
                    var shares=parseFloat(shares);
                    
                    paternalBrothergets=0;
                    grandFathergets=100/shares*number.grandFather*2;
                    fullSistergets=0;
                    paternalSistergets=0;

                    if(grandFathergets> ((1/3)*100)){
                        grandFathergets=grandFathergets;
                        exp.pop();
                                exp.push("Grandfather gets  "+nf(grandFathergets/100)+"   " )
                        exp.push("Full brother and sister share the all balance at the ratio of 2:1");
                    }else if(grandFathergets< ((1/3)*100)){
                        var shares=((number.paternalBrother+number.grandFather)*2) + number.paternalSister;
                        var shares=parseFloat(shares);
                        
                        grandFathergets= ((1/3)*100);
                        exp.pop();
                                exp.push("Grandfather gets   1/3 as it is best for him ")
                        exp.push("Full brother and sister share the all balance at the ratio of 2:1");
                    }
                   
                }
            }
                 }
                
        /****************************************************************************** */
        /****************************A'ul Mas'la*****************************************/
        /****************************************************************************** */

            // console.log("yes");
       
        var firstTotal=fathergets+mothergets+wifegets+husbandgets+songets+daughtergets+grandFathergets+grandMothergets+grandMother2gets+
            fullSistergets+paternalSistergets+maternalBrothergets+maternalSistergets+grandSongets+grandDaughtergets+
            fullBrothergets+paternalBrothergets;
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
            grandMother2gets=grandMother2gets/(firstTotal/100);
            fullBrothergets=fullBrothergets/(firstTotal/100);
            fullSistergets=fullSistergets/(firstTotal/100);
            paternalBrothergets=paternalBrothergets/(firstTotal/100);
            paternalSistergets=paternalSistergets/(firstTotal/100);
            maternalBrothergets=maternalBrothergets/(firstTotal/100);
            maternalSistergets=maternalSistergets/(firstTotal/100);
            grandSongets=grandSongets/(firstTotal/100);
            grandDaughtergets=grandDaughtergets/(firstTotal/100);
            exp.push("while the prescibed shares outrun the inheritance they devide the wealth between them according to the prescribed ratio.")
        }

       /*************          ASABA               ********* */




        
        
        var balance1=fathergets+mothergets+songets+daughtergets+husbandgets+wifegets+grandDaughtergets+fullSistergets+paternalSistergets+grandFathergets;
        var balance2=grandMothergets+grandMother2gets+maternalBrothergets+maternalSistergets+fullBrothergets+paternalBrothergets+grandSongets;
        var balance=100-balance1-balance2;
        var balance= parseFloat(balance);
        
        
        
        console.log(balance);
        if(balance>1) {
            
            if(number.son>=1 && number.daughter==0) {
            songets=balance;
            exp.push("Son gets the all balance ")
                }else if(number.son>=1 && number.daughter>=1) {
                var shares=(number.son*2)+number.daughter;
                var shares= parseFloat(shares);
                 songets=(balance/shares)*number.son*2;
                 daughtergets=(balance/shares*number.daughter);
                 exp.push("Son shares the all balance with daughter in a the ratio of 2:1")
            }
            
            if(number.son==0) {
                if(number.grandSon>=1 && number.grandDaughter==0) {
                grandSongets=balance;
                exp.push("Grandson gets the all balance ")
                }else if(number.grandSon>=1 && number.grandDaughter>=1){
                    var shares=(number.grandSon*2)+number.grandDaughter;
                    //var shares= parseFloat(shares);
                 grandSongets=(balance/shares)*number.grandSon*2;
                 grandDaughtergets=(balance/shares*number.grandDaughter);
                 exp.push("grandson shares the all balance with granddaughter in a the ratio of 2:1")
                }
            }

            if(number.son==0 && number.grandSon==0 ) {
                if(number.father==1) {
                fathergets=fathergets+balance;
                exp.push("Father gets the all balance as the deceased has no  children")
                }
            }
            
            if((number.son==0 && number.grandSon==0) && (number.father==0)) {
            var brothers=number.fullBrother+number.fullSister+number.paternalBrother+number.paternalSister;
                if ((number.husband==1 && number.mother==1) &&(number.grandFather==1 && number.fullSister==1)){
                    husbandgets=(100/3) ;
                    mothergets=(100-(100/3))/3;
                    fullSistergets=(100-husbandgets-mothergets)/3;
                    grandFathergets=100-husbandgets-mothergets-fullSistergets;
                    exp.push("According to the Akdariyya mas'ala, husband gets 1/3, mother gets 2/9, full sister gets 4/27 and Grandfather gets   8/27")

                }else if(number.grandFather==1 && brothers==0) {
                    
                    grandFathergets+=balance;
                    exp.pop();
                                exp.push("Grandfather gets   the all balance as the deceased has no  children and no father")
                    } 
                    
                
                else if(number.grandFather==1 && others>=1){
                    
                    if((((number.fullBrother>=1 && number.fullSister>=1) || (number.fullBrother>=1 && number.fullSister>=0)) || (number.fullBrother==0 && number.fullSister>=1)) &&(number.paternalBrother==0 && number.paternalSister==0) ){

                            var shares=((number.fullBrother+number.grandFather)*2) + number.fullSister;
                            var shares=parseFloat(shares);
                            console.log("okd");
                            
                            var othergets=fathergets+mothergets+songets+daughtergets+grandMothergets+grandSongets+grandDaughtergets+maternalBrothergets+maternalSistergets+wifegets+husbandgets;
                            var othergets=parseFloat(othergets);
                            fullBrothergets=(100-othergets)/shares*number.fullBrother*2;
                           
                            grandFathergets=(100-othergets)/shares*number.grandFather*2;
                            fullSistergets=(100-othergets)/shares*number.fullSister;
                            
            
                        if(grandFathergets> ((1/6)*100) && grandFathergets>((100-othergets)/3)){
                                grandFathergets=grandFathergets;
                                exp.pop();
                                exp.push("Grandfather gets  "+nf(grandFathergets/100)+"   " )
                                exp.push("Full brother and sister share the all balance at the ratio of 2:1");
                                
             
                        }else if(((100-othergets)/3) > ((1/6)*100) && ((100-othergets)/3)> grandFathergets){
                                
                                grandFathergets=((100-othergets)/3);
                                var othergets=fathergets+mothergets+songets+daughtergets+grandMothergets+grandSongets+grandDaughtergets+maternalBrothergets+maternalSistergets+wifegets+husbandgets;
                                var othergets=parseFloat(othergets);
                                var shares=((number.fullBrother+number.paternalBrother)*2) + number.fullSister+number.paternalSister;
                                var shares=parseFloat(shares);
                                fullBrothergets=(100-othergets-grandFathergets)/shares*number.fullBrother*2;
                               
                                
                                fullSistergets=(100-othergets-grandFathergets)/shares*number.fullSister;
                                exp.pop();
                                exp.push("Grandfather gets  "+nf(grandFathergets/100)+"   " )
                                exp.push("Full brother and sister share the all balance at the ratio of 2:1");
                                
                                
            
                        }else if( ((1/6)*100)> grandFathergets &&  ((1/6)*100)> ((100-othergets)/3)){
                             
                                grandFathergets= ((1/6)*100);
                                var shares=((number.fullBrother+number.paternalBrother)*2) + number.fullSister+number.paternalSister;
                                var shares=parseFloat(shares);
                                fullBrothergets=(100-othergets-grandFathergets)/shares*number.fullBrother*2;
                                paternalBrothergets=(100-othergets-grandFathergets)/shares*number.paternalBrother*2;
                                
                                fullSistergets=(100-othergets-grandFathergets)/shares*number.fullSister;
                                paternalSistergets=(100-othergets-grandFathergets)/shares*number.paternalSister;
                                exp.pop();
                                exp.push("Grandfather gets  "+nf(grandFathergets/100)+"   " )
                                exp.push("Full brother and sister share the all balance at the ratio of 2:1");
                                console.log(fullSistergets);
                            }
            
                    }else if ((number.fullBrother==0 && number.fullSister==0) &&(number.paternalBrother>=1 || number.paternalSister>=1))  {
                            
                        var shares=((number.paternalBrother+number.grandFather)*2) + number.paternalSister;
                        var shares=parseFloat(shares);
                        console.log("okd");
                        
                        var othergets=fathergets+mothergets+songets+daughtergets+grandMothergets+grandSongets+grandDaughtergets+maternalBrothergets+maternalSistergets+wifegets+husbandgets;
                        var othergets=parseFloat(othergets);
                        paternalBrothergets=(100-othergets)/shares*number.paternalBrother*2;
                       
                        grandFathergets=(100-othergets)/shares*number.grandFather*2;
                        paternalSistergets=(100-othergets)/shares*number.paternalSister;
                        
        
                        if(grandFathergets> ((1/6)*100) && grandFathergets>((100-othergets)/3)){
                            grandFathergets=grandFathergets;
                            exp.pop();
                                exp.push("Grandfather gets  "+nf(grandFathergets/100)+"   " )
                            exp.push("paternal brother and sister share the all balance at the ratio of 2:1");
                            
         
                        }else if(((100-othergets)/3) > ((1/6)*100) && ((100-othergets)/3)> grandFathergets){
                            
                            grandFathergets=((100-othergets)/3);
                            var othergets=fathergets+mothergets+songets+daughtergets+grandMothergets+grandSongets+grandDaughtergets+maternalBrothergets+maternalSistergets+wifegets+husbandgets;
                            var othergets=parseFloat(othergets);
                            var shares=((number.paternalBrother+number.paternalBrother)*2) + number.paternalSister+number.paternalSister;
                            var shares=parseFloat(shares);
                            paternalBrothergets=(100-othergets-grandFathergets)/shares*number.paternalBrother*2;
                           
                            
                            paternalSistergets=(100-othergets-grandFathergets)/shares*number.paternalSister;
                            exp.pop();
                                exp.push("Grandfather gets  "+nf(grandFathergets/100)+"   " )
                            exp.push("paternal brother and sister share the all balance at the ratio of 2:1");
                            
                            
        
                        }else if( ((1/6)*100)> grandFathergets &&  ((1/6)*100)> ((100-othergets)/3)){
                         
                            grandFathergets= ((1/6)*100);
                            var shares=((number.paternalBrother+number.paternalBrother)*2) + number.paternalSister+number.paternalSister;
                            var shares=parseFloat(shares);
                            paternalBrothergets=(100-othergets-grandFathergets)/shares*number.paternalBrother*2;
                            paternalBrothergets=(100-othergets-grandFathergets)/shares*number.paternalBrother*2;
                            
                            paternalSistergets=(100-othergets-grandFathergets)/shares*number.paternalSister;
                            paternalSistergets=(100-othergets-grandFathergets)/shares*number.paternalSister;
                            exp.pop();
                                exp.push("Grandfather gets  "+nf(grandFathergets/100)+"   " )
                            exp.push("paternal brother and sister share the all balance at the ratio of 2:1");
                            console.log(paternalSistergets);
                        }
                    }else if((number.fullBrother>=1 || number.fullSister>=1) && (number.paternalBrother>=1 || number.paternalSister>=1)){
                       
                        var shares=((number.paternalBrother+number.grandFather+number.fullBrother)*2) + number.paternalSister+number.fullSister;
                        var shares=parseFloat(shares);

                            var othergets=fathergets+mothergets+songets+daughtergets+grandMothergets+grandSongets+grandDaughtergets+maternalBrothergets+maternalSistergets+wifegets+husbandgets;
                            var othergets=parseFloat(othergets);
                            
                            fullBrothergets=(100-othergets)/shares*number.fullBrother*2;
                            grandFathergets=(100-othergets)/shares*number.grandFather*2;
                            fullSistergets=(100-othergets)/shares*number.fullSister;
                            
                        if(grandFathergets >= ((1/6)*100) && grandFathergets >= ((100-othergets)/3)){
                         
                                grandFathergets=grandFathergets;
                                fullBrothergets=(100-othergets-grandFathergets)
                                fullSistergets=(100-othergets-grandFathergets)/(number.fullBrother+(number.fullSister*2))*number.fullSister*1
                                paternalBrothergets=100-othergets-grandFathergets-fullBrothergets-fullSistergets;
                                exp.pop();
                                exp.push("Grandfather gets  "+nf(grandFathergets/100)+"   " )
                                exp.push("Full brother and sister share the all balance at the ratio of 2:1");
                                
                                
             
                        }else if(((100-othergets)/3) >= ((1/6)*100) && ((100-othergets)/3)>= grandFathergets){
                            
                              
                                
                                var othergets=fathergets+mothergets+songets+daughtergets+grandMothergets+grandSongets+grandDaughtergets+maternalBrothergets+maternalSistergets+wifegets+husbandgets;
                                var othergets=parseFloat(othergets);
                                var shares=((number.fullBrother+number.paternalBrother)*2) + number.fullSister+number.paternalSister;
                                var shares=parseFloat(shares);

                                grandFathergets=((100-othergets)/3);
                                fullBrothergets=(100-othergets-grandFathergets)
                                fullSistergets=(100-othergets-grandFathergets)/(number.fullBrother+(number.fullSister*2))*number.fullSister*1
                                paternalBrothergets=100-othergets-grandFathergets-fullBrothergets-fullSistergets;
                                exp.pop();
                                exp.push("Grandfather gets  "+nf(grandFathergets/100)+"   " )
                                exp.push("Full brother and sister share the all balance at the ratio of 2:1");

                                // grandFathergets=((100-othergets)/3);
                                // fullBrothergets=(100-othergets-grandFathergets)/shares*number.fullBrother*2;  
                                // fullSistergets=(100-othergets-grandFathergets)/shares*number.fullSister;
                                // paternalBrothergets=100-othergets-grandFathergets-fullBrothergets-fullSistergets;
                                
                                
            
                        }else if( ((1/6)*100)> grandFathergets &&  ((1/6)*100)> ((100-othergets)/3)){
                            
                                grandFathergets= ((1/6)*100);
                                var shares=((number.fullBrother+number.paternalBrother)*2) + number.fullSister+number.paternalSister;
                                var shares=parseFloat(shares);
                            
                                grandFathergets=((1/6)/3);
                                fullBrothergets=(100-othergets-grandFathergets)/(number.fullBrother+(number.fullSister*2))*number.fullBrother*2;
                                fullSistergets=(100-othergets-grandFathergets)/(number.fullBrother+(number.fullSister*2))*number.fullSister*1
                                paternalBrothergets=100-othergets-grandFathergets-fullBrothergets-fullSistergets;
                                exp.pop();
                                exp.push("Grandfather gets  "+nf(grandFathergets/100)+"   " )
                                exp.push("Full brother and sister share the all balance at the ratio of 2:1");

                                // fullBrothergets=(100-othergets-grandFathergets)/shares*number.fullBrother*2;
                                // paternalBrothergets=(100-othergets-grandFathergets)/shares*number.paternalBrother*2;
                                // fullSistergets=(100-othergets-grandFathergets)/shares*number.fullSister;
                                // paternalSistergets=(100-othergets-grandFathergets)/shares*number.paternalSister;
                                // paternalBrothergets=100-othergets-grandFathergets-fullBrothergets-fullSistergets;
                            }
                    }
                        }
                
                }
            
              
            if(((number.son==0 && number.grandSon==0) && (number.father==0)) &&(number.grandFather==0)) {
                if(number.fullBrother>=1 && number.fullSister==0) {
                    console.log(fullBrothergets);
                    var balance=parseFloat(balance);
                fullBrothergets=balance;
                console.log(balance);
                exp.push("Full brother gets the all balance")
                }else if(number.fullBrother>=1 && number.fullSister>=1) {
                    var shares=(number.fullBrother*2)+number.fullSister;
                    var shares= parseFloat(shares);
                    fullBrothergets=(balance/shares)*number.fullBrother*2;
                    fullSistergets=(balance/shares*number.fullSister);
                    exp.push("Full brother shares the all balance with full sister in a the ratio of 2:1")
                }
            }
        
            
            
            if((((number.son==0 && number.grandSon==0) && (number.father==0 &&  number.fullSister==0)) &&(number.grandFather==0)) && number.fullBrother==0) {
                if(number.paternalBrother>=1 && number.paternalSister==0) {
                paternalBrothergets=balance;
                exp.push("Paternal brother gets the all balance")
                }else if(number.paternalBrother>=1 && number.paternalSister>=1) {
                    var shares=(number.paternalBrother*2)+number.paternalSister;
                    var shares= parseFloat(shares);
                    paternalBrothergets=(balance/shares)*number.paternalBrother*2;
                    paternalSistergets=(balance/shares*number.paternalSister);
                    exp.push("Paternal brother shares the all balance with paternal sister in a the ratio of 2:1")
                }
            }
            if((((number.son==0 && number.grandSon==0) && (number.father==0 &&  number.grandFather==0))
             &&(number.fullBrother==0)) && number.paternalBrother==0) {
                if(number.nephew2>=1 ) {
                    nephew2gets=balance;
                    exp.push("Full nephew  gets the all balance")
                }
            }

            if((((number.son==0 && number.grandSon==0) && (number.father==0 &&  number.grandFather==0))
            &&(number.fullBrother==0)) && number.paternalBrother==0) {
               if(number.nephew2==0 && number.nephew1>=1) {
                   nephew1gets=balance;
                   exp.push("paternal nephew gets the all balance")
               }
           }

           if((((number.son==0 && number.grandSon==0) && (number.father==0 &&  number.grandFather==0))
            &&(number.fullBrother==0)) && number.paternalBrother==0) {
               if(number.nephew2==0 && number.nephew1==0) {
                if(number.uncle2>=1 ) {
                    uncle2gets=balance;
                    exp.push("Full uncle gets the all balance")
                    }
               }
           }

           if((((number.son==0 && number.grandSon==0) && (number.father==0 &&  number.grandFather==0))
           &&(number.fullBrother==0)) && number.paternalBrother==0) {
              if(number.nephew2==0 && number.nephew1==0) {
               if(number.uncle2==0 && number.uncle1>=1) {
                   uncle1gets=balance;
                   exp.push("Paternal uncle gets the all balance")
                   }
              }
          }

          if((((number.son==0 && number.grandSon==0) && (number.father==0 &&  number.grandFather==0))
           &&(number.fullBrother==0)) && number.paternalBrother==0) {
              if(number.nephew2==0 && number.nephew1==0) {
               if(number.uncle2==0 && number.uncle1==0) {
                if(number.cousin2>=1 ) {
                   cousin2gets=balance;
                   exp.push("Full cousin gets the all balance")
                }
                   }
              }
          }

          if((((number.son==0 && number.grandSon==0) && (number.father==0 &&  number.grandFather==0))
           &&(number.fullBrother==0)) && number.paternalBrother==0) {
              if(number.nephew2==0 && number.nephew1==0) {
               if(number.uncle2==0 && number.uncle1==0) {
                if(number.cousin2==0 && number.cousin1>=1) {
                    cousin1gets=balance;
                    exp.push(" paternal cousin gets the all balance")
                 }
                   }
              }
          }


            if(number.daughter>=1 || number.grandDaughter>=1){
                if(number.son==0 && number.grandSon==0){
                    if(number.fullSister>=1 && number.fullBrother==0){
                        fullSistergets=balance;
                        exp.push("Full sister gets the all balance being with full sister, and one of daughter or granddaughter")
                    }else if(number.paternalSister>=1 && number.paternalBrother==0){
                            if(number.fullSister==0 && number.fullBrother==0){
                                paternalSistergets=balance;
                                exp.push("Paternal sister gets the all balance being with full sister, and one of daughter or granddaughter")
                            }
                       
                    }
                }
            }

            // console.log(fullBrothergets);
        
        }

        if((fullBrothergets<1) && (maternalBrothergets>1 || maternalSistergets>1)){
            if(((number.husband==1 && number.mother==1) || (number.husband==1 && number.grandFather==1)) || ((number.husband==1 && number.grandMother==1) || (number.husband==1 && number.grandMother2==1))){
            
                if(number.fullBrother>=1 || number.fullSister>=1){
                    
                    if(number.maternalBrother>=1 || number.maternalSister>=1){
                        
                            
                            var thebakki=maternalBrothergets+maternalSistergets;
                           
                            var howmuch=(number.fullBrother+number.maternalBrother)+(number.fullSister+number.maternalSister);
                            maternalBrothergets=(thebakki/howmuch)*number.maternalBrother;
                            maternalSistergets=(thebakki/howmuch)*number.maternalSister;
                            fullBrothergets=(thebakki/howmuch)*number.fullBrother;
                            fullSistergets=(thebakki/howmuch)*number.fullSister;
                            exp.push("As per musharaka mas'ala, the share of maternal brothers and sisters will be shared between them and full brothers and sisters as they got nothing and they are more closer to the deceased than the maternals.")
                        
                        
                    }
                }
            }
            
        }
        
        
        // console.log("yes2");
        
            /************************************************************
        
                                 hajb  - the elimination

             ************************************************************/	


if(number.son>=1 && number.grandSon>=1) {
    grandSongets=0;
    exp.push("Grandson gets blocked by son")
}

if(number.father>=1  && number.grandFather>=1) {
    grandFathergets=0;
    exp.pop();
                                exp.push("Grandfather gets   blocked by father")
}
if((number.son >=1 && number.daughter>=1) && number.grandDaughter>=1){
    grandDaughtergets=0;
    exp.push("Granddaughter gets blocked by son and daughter")
}
if((number.father>=1 || number.son>=1 )&& (number.maternalBrother>=1 || number.maternalSister>=1)) {
    maternalBrothergets=0;
    maternalSistergets=0;
    exp.push("Maternal brothers and sisters get blocked by father and son")
}

if(number.mother>=1  && (number.grandMother>=1 || number.grandMother2>=1 )) {
    grandMother2gets=0;
    grandMothergets=0
    exp.push("Grandmothers gets blocked by mother")
}

if((number.father==1 || number.son>=1 || number.grandSon>=1)  && number.fullBrother>=1) {
    fullBrothergets=0;
    exp.push("Full brother gets blocked by father or son")
}

if((number.father==1 || number.son>=1 || number.grandSon>=1 || number.fullBrother>=1)  && number.paternalBrother>=1) {
    paternalBrothergets=0;
    exp.push("Paternal brother gets blocked by father or son or full brother")
}

if((number.father==1 || number.son>=1 || number.grandSon>=1 || number.fullBrother>=1  || number.paternalBrother>=1) && number.cousin2>=1) {
    cousin2gets=0;
    exp.push("cousins gets blocked by father or son or brothers")
}

if((number.father==1 || number.son>=1 || number.grandSon>=1 || number.fullBrother>=1  || number.paternalBrother>=1 || number.cousin2>=1) && number.cousin1>=1) {
    cousin1gets=0;
    exp.push("Paternal cousin gets blocked by father or son or brothers or full cousin")
}
if((number.father==1 || number.son>=1 || number.grandSon>=1 || number.fullBrother>=1  || number.paternalBrother>=1 || number.cousin2>=1 || number.cousin1>=1) && number.uncle2>=1) {
    uncle2gets=0;
    exp.push("Uncles gets blocked by father or son or brothers or cousins")
}
if((number.father==1 || number.son>=1 || number.grandSon>=1 || number.fullBrother>=1  || number.paternalBrother>=1 
    || number.cousin2>=1 || number.cousin1>=1 || number.uncle2>=1) && number.uncle1>=1) {
    uncle1gets=0;
    exp.push("Paternal uncle gets blocked by father or son or brothers or  cousins and full uncle")
}
if((number.father==1 || number.son>=1 || number.grandSon>=1 || number.fullBrother>=1  || number.paternalBrother || number.cousin2 
    || number.cousin1>=1 || number.uncle1>=1 ) && number.nephew2>=1) {
    nephew2gets=0;
    exp.push("nephews gets blocked by father or son or brothers or cousins or uncles")
}
if((number.father==1 || number.son>=1 || number.grandSon>=1 || number.fullBrother>=1  || number.paternalBrother || number.cousin2 
    || number.cousin1>=1 || number.uncle1>=1 || number.nephew2>=1 || number.nephew2>=1) && number.nephew1>=1) {
    nephew1gets=0;
    exp.push("Paternal nephew gets blocked by father or son or brothers or cousins or uncles or full nephew")
}
if(number.fullSister>=2 && number.paternalSister>=2){
    paternalSistergets=0;
}
        ////////////////////////////////////     RADD ////////////////////////////

        var firstTotal=fathergets+mothergets+wifegets+husbandgets+songets+daughtergets+grandFathergets+grandMothergets+grandMother2gets+fullSistergets+paternalSistergets+maternalBrothergets+maternalSistergets+grandSongets+grandDaughtergets+fullBrothergets+paternalBrothergets+nephew2gets+
        nephew1gets+uncle2gets+uncle1gets+cousin2gets+cousin1gets;
        var firstTotal=parseFloat(firstTotal);
        if(firstTotal<99.9){
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
        exp.push("while the shares are less than 100   and there is no one as Asaba, the balance will be devided between the ones who have already the share in it according to that ratio")
            
    }
        
       
       
        
       
         var gets=[fathergets.toFixed(1),mothergets.toFixed(1),songets.toFixed(1),daughtergets.toFixed(1),husbandgets.toFixed(1),
            wifegets.toFixed(1),fullBrothergets.toFixed(1),fullSistergets.toFixed(1),grandSongets.toFixed(1),grandDaughtergets.toFixed(1),
            grandFathergets.toFixed(1),grandMothergets.toFixed(1),grandMother2gets.toFixed(1),paternalBrothergets.toFixed(1),paternalSistergets.toFixed(1),
            maternalBrothergets.toFixed(1),maternalSistergets.toFixed(1),nephew2gets.toFixed(1),nephew1gets.toFixed(1),uncle2gets.toFixed(1),uncle1gets.toFixed(1),
            cousin2gets.toFixed(1),cousin1gets.toFixed(1)
        ]

        var rupees=[fathergets,mothergets,songets,daughtergets,husbandgets,
            wifegets,fullBrothergets,fullSistergets,grandSongets,grandDaughtergets,
            grandFathergets,grandMothergets,grandMother2gets,paternalBrothergets,paternalSistergets,
            maternalBrothergets,maternalSistergets,nephew2gets,nephew1gets,uncle2gets,uncle1gets,
            cousin2gets,cousin1gets
        ]
        

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
        var grandMother2get=nf(grandMother2gets/100)
        var paternalBrotherget=nf(paternalBrothergets/100) 
        var paternalSisterget=nf(paternalSistergets/100) 
        var maternalBrotherget=nf(maternalBrothergets/100) 
        var maternalSisterget=nf(maternalSistergets/100) 
        var nephew2get=nf(nephew2gets/100) 
        var nephew1get=nf(nephew1gets/100)
        var uncle2get=nf(uncle2gets/100) 
        var uncle1get=nf(uncle1gets/100) 
        var cousin2get=nf(cousin2gets/100) 
        var cousin1get=nf(cousin1gets/100) 
        // console.log("yes3");

        

        var get=[fatherget,motherget,songet,daughterget,husbandget,wifeget,fullBrotherget,fullSisterget,grandSonget,
            grandDaughterget,grandFatherget,grandMotherget,grandMother2get,paternalBrotherget,paternalSisterget,
            maternalBrotherget,maternalSisterget,nephew2get,nephew1get,uncle2get,uncle1get,cousin2get,cousin1get]

        var rupeeget=[];
        for(let i=0;i<23;i++){
            rupeeget.push(((rupees[i]/100)*number.rupees).toFixed(1));
          }
        
        
        
        var getstotal=fathergets+mothergets+wifegets+husbandgets+songets+daughtergets+grandFathergets+grandMothergets+grandMother2gets
            +fullSistergets+paternalSistergets+maternalBrothergets+maternalSistergets+grandSongets+grandDaughtergets+
            fullBrothergets+paternalBrothergets+nephew2gets+nephew1gets+uncle2gets+uncle1gets+cousin2gets+cousin1gets;
            getstotal=getstotal.toFixed(1)
        
        //console.log({gets,get,getstotal})
            //callback ({gets,get,getstotal})
         return ({gets,get,getstotal,exp,rupeeget});
     }
     }
    