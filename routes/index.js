

var express = require('express');
var router = express.Router();
var rules =require("../public/javascripts/rules");
var object=require("../public/javascripts/object");
var Handlebars=require("handlebars");
const { handlebars } = require('hbs');
const promise=require("promise");

/* GET home page. */
router.get('/', (req, res, next) => {
  
  res.render('index',{home:true});

});
router.get('/calculator',(req,res,next) =>{
  let names=object.musamma()
  var name=names.name
  var input=names.input;
  var condition=names.condition;
 

  function isfirst(value){
    return value <= 8; 
   }

   function issecond(value){
    return value >= 9 && value <=16; 
   }
   

   function isthird(value){
    return value >= 17 && value <=24; 
   }

   function isone(value){
    return value == "father" || value =="mother" || value == "grandFather" || value == "grandMother" || value == "grandMother2"  ; 
   }

   function isfour(value){
    return value == "wife" ; 
   }
   function sister(value){
    return value == "maternalSister" ; 
   }

   function isnone(value){
     return value != "father" && value != "mother" && value != "grandFather" && value != "grandMother" && value != "grandMother2" && value != "husband" && value != "wife" ; 
   }
   function husband(value){
    return value == "husband"}

  var no=[]
  for(i=0;i<23;i++){
    no.push(i+1)
  }
  var first=[];
  for(let i=0;i<25;i++){
    first.push(isfirst(no[i]));
  }
  var second=[];
  for(let i=0;i<25;i++){
    second.push(issecond(no[i]));
  }
  var third=[];
  for(let i=0;i<25;i++){
    third.push(isthird(no[i]));
  }
  var one=[];
  for (let i = 0; i <25; i++) {
   one.push(isone(input[i])) 
  }
  var four=[];
  for (let i = 0; i <25; i++) {
   four.push(isfour(input[i])) 
  }
  var none=[];
  for (let i = 0; i <25; i++) {
   none.push(isnone(input[i])) 
  }
  var maternalsister=[];
  for (let i = 0; i <25; i++) {
   maternalsister.push(sister(input[i])) 
  }
  var husbands=[];
  for (let i = 0; i <25; i++) {
   husbands.push(husband(input[i])) 
  }
  var relatives = name.map((name, index) => {
    return {
      name: name,
      input: input[index],
      NO:no[index],
      first:first[index],
      second:second[index],
      third:third[index],
      one:one[index],
      four:four[index],
      none:none[index],
      condition:condition[index],
      maternalsister:maternalsister[index],
      husbands:husbands[index]
    }
  });
  //  console.log(relatives);

  res.render("calculator",{calculator:true,relatives,input})
})



router.post("/result",function(req,res){
 
  // console.log(req.body.husband && result);
  
  // console.log(req.body);
    var result=rules.divide(req.body)
      //console.log(result)
      

    var getstotal=result.getstotal;
    var exp=result.exp;
    
    function isdefined(value){
     return value != 0; 
    }

    
  var father=(req.body.father);
  var mother=(req.body.mother);
  var son=(req.body.son);
  var daughter=(req.body.daughter);
  var husband=(req.body.husband);
  var wife=(req.body.wife);
  var fullBrother=(req.body.fullBrother);
  var fullSister=(req.body.fullSister);
  var grandSon=(req.body.grandSon);
  var grandDaughter=(req.body.grandDaughter);
  var grandFather=(req.body.grandFather);
  var grandMother=(req.body.grandMother);
  var grandMother2=(req.body.grandMother2);
  var paternalBrother=(req.body.paternalBrother);
  var paternalSister=(req.body.paternalSister);
  var maternalBrother=(req.body.maternalBrother);
  var maternalSister=(req.body.maternalSister);
  var nephew2=(req.body.nephew2);
  var nephew1=(req.body.nephew1);
  var uncle2=(req.body.uncle2);
  var uncle1=(req.body.uncle1);
  var cousin2=(req.body.cousin2);
  var cousin1=(req.body.cousin1);
  
  
  var number=[father,mother,son,daughter,husband,wife,fullBrother,fullSister,
    grandSon,grandDaughter,grandFather,grandMother,grandMother2,paternalBrother,
    paternalSister,maternalBrother,maternalSister,nephew2,nephew1,uncle2,uncle1,
  cousin2,cousin1]
  

  var array=[];
  for(let i=0;i<25;i++){
    array.push(isdefined(number[i]));
  }
  var names=object.musamma()
  var name=(names.name);
  var rupeeget=result.rupeeget;
  var items = name.map((name, index) => {
        return {
          name: name,
          number: number[index],
          share: result.gets[index],
          fraction:result.get[index],
         isdefined:array[index],
          rupeeget:rupeeget[index]

        }
      });
    //return {items,getstotal}
  res.render("result", {items,getstotal,exp});
  // console.log(items);
  })

router.post('/tryagain',function(req,res){
  res.redirect('/calculator');
})
router.get("/faq",(req,res)=>{
  res.render("faq",{faq:true})
})

router.get("/contact-us",(req,res)=>{
  res.render("contact-us",{contact:true})
})

router.get("/articles",(req,res)=>{
  res.render("articles",{articles:true})
})

router.get("/rules",(req,res)=>{
  var ok=object.musamma();
  var headings=ok.headings;
  // console.log(headings);
  res.render("rules",headings)
})

router.get("/rules/whoAreEligible",(req,res)=>{
  res.render("rulepages/whoAreEligible")
})

router.post("/contact-us",(req,res)=>{
  res.render("contact-us",{message:"thank you for your feedback"})
  
})

module.exports = router;
