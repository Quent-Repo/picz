//piczel
 
///
/// See if stream is up
function time(){
  var date = new Date();
  console.log(date.toGMTString());
}
 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
 
function checker(){
sleep(1000*(60*5)).then(() => {
  if(document.getElementsByClassName("_1SS-NqoVDmjwl7GdQFsv-p").length>0){
    console.log("A Stream is down")
    time()
    checker()
    
  }
  else{
    console.log("A Stream is up")
    time()
    checker()
    
  }
  });
};
checker()
 
 
/////
// Show adult content
/*
let z = []
console.log(document.getElementsByClassName("_2JwOBRltskV02dUbp1EIv2"))
*/
for(let i=0 ; i<(document.getElementsByClassName("_2JwOBRltskV02dUbp1EIv2").length) ; i+=2){
  /*console.log(document.getElementsByClassName("_2JwOBRltskV02dUbp1EIv2")[i])
  z.push(document.getElementsByClassName("_2JwOBRltskV02dUbp1EIv2")[i])*/
    document.getElementsByClassName("_2JwOBRltskV02dUbp1EIv2")[i].click()
}
//console.log(z)
 
////
//fullscreen
document.getElementsByClassName("op-con op-fullscreen-expand")[0].click() //changing the number will move to another stream
 
///
//Play button
document.getElementsByClassName("op-bigbutton-container ")[0].click()
