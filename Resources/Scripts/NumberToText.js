
//import statements
const Patches = require('Patches')
const Reactive = require('Reactive');

//Get Number Value Promise
var score = Patches.outputs.getScalar('NumValue').then((scr)=>{
    var str = ''
    
    //Format String such as if less then 10, number will be in '01','02' etc format  
    str = scr.ge(10).ifThenElse(scr.toString(),Reactive.concat('0',scr.toString()))
    
    Patches.inputs.setString('TextValue',str)
})
