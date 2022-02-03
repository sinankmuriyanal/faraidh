

var express = require('express');
var router = express.Router();
var rules =require("../public/javascripts/rules");
var object=require("../public/javascripts/object");
var Handlebars=require("handlebars");
const { handlebars } = require('hbs');
const promise=require("promise");









/* GET home page. */
router.get('/', (req, res, next) => {
  
  res.render('index');

});
router.get('/calculator',(req,res,next) =>{
  res.render("calculator")
})



router.post("/result",function(req,res){
  
    var result=rules.divide(req.body)
      //console.log(result)
    var getstotal=result.getstotal;
  
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
  var paternalBrother=(req.body.paternalBrother);
  var paternalSister=(req.body.paternalSister);
  var maternalBrother=(req.body.maternalBrother);
  var maternalSister=(req.body.maternalSister);
 
  
  var number=[father,mother,son,daughter,husband,wife,fullBrother,fullSister,
    grandSon,grandDaughter,grandFather,grandMother,paternalBrother,paternalSister,maternalBrother,maternalSister,]

  var array=[];
  for(let i=0;i<17;i++){
    array.push(isdefined(number[i]));
  }

  var name=(object.musamma());
  var items = name.map((name, index) => {
        return {
          name: name,
          number: number[index],
          share: result.gets[index],
          fraction:result.get[index],
         isdefined:array[index]
        }
      });
    //return {items,getstotal}
  res.render("result", {items,getstotal});
  })

router.post('/tryagain',function(req,res){
  res.redirect('/calculator');
})
router.get("/faq",(req,res)=>{
  res.render("faq")
})

router.get("/contact-us",(req,res)=>{
  res.render("contact-us")
})

router.get("/articles",(req,res)=>{
  res.render("articles")
})

module.exports = router;
