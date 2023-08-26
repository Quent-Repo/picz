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
time();
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
//document.getElementsByClassName("op-bigbutton-container ")[0].click() //no idea what this is for or why I saved it
document.getElementsByClassName("op-button op-play-button")[0].click()

///
//Source type
//Change null with number 0-3
//try is being used because player will move the "op-setting-item" between 0-1
try{
document.getElementsByClassName("op-con op-setting")[0].click();
document.getElementsByClassName("op-setting-item")[0].click();
document.getElementsByClassName("op-setting-item-container")[1].children[null].click();
}
catch(e){
document.getElementsByClassName("op-con op-setting")[0].click();
document.getElementsByClassName("op-setting-item")[1].click();
document.getElementsByClassName("op-setting-item-container")[1].children[null].click();
}

///
//Close a steam
// Change null for the stream
document.getElementsByClassName("ion-close-round _26X7dj3CjybVCllj6OTFn1")[null]
document.getElementsByClassName("ion-close-round _26X7dj3CjybVCllj6OTFn1")[null].click()
/*
// (Need to find a muli stean higher then two to test)
if(document.getElementsByClassName("ion-close-round _26X7dj3CjybVCllj6OTFn1").length>1){
  for(i=1;i<document.getElementsByClassName("ion-close-round _26X7dj3CjybVCllj6OTFn1").length;i++){
    document.getElementsByClassName("ion-close-round _26X7dj3CjybVCllj6OTFn1")[i].click()
  }
}
/*