//Load Modules
const Scene = require('Scene');
const Material = require('Materials');
const Texture = require('Textures');
const R = require('Reactive');
const S= require('Shaders')

//Replace with your material name here
var glassMat = Material.get('Glasses');


// Change the color from here 
var hexColor = "#ff0000";


var rgb = hextorgba(hexColor);

//SetTexture
glassMat.setTexture(R.pack4(rgb[0],rgb[1],rgb[2], 1),{textureSlotName: S.DefaultMaterialTextures.DIFFUSE});   

//Helper function for converting Hex to RGB
function hextorgba(hex){
    var color =[];
    var r = parseInt(hex.substring(1, 3), 16), 
              
    // Convert the middle 2 characters to hexadecimal 
    g = parseInt(hex.substring(3, 5), 16), 
          
    // Convert the last 2 characters to hexadecimal 
    b = parseInt(hex.substring(5, 7), 16); 

color[0]=r,color[1]=g,color[2]=b;
return color;
}
