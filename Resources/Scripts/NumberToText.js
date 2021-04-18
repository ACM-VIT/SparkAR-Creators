//import statements
const Patches = require('Patches')
const Reactive = require('Reactive');

//Get Number Value Promise
  Patches.outputs.getScalar('NumValue').then((res)=>{
//Format String such as if less then 10, number will be in '01','02' etc format  
   var str = res.ge(10).ifThenElse(res.toString(),Reactive.concat('0',res.toString()))
   //Set variable output string value
    Patches.inputs.setString('TextValue',str)
 })
