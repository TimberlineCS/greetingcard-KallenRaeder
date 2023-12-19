//Kallen Raeder
//7
//12/11/23


/*This code creates a winter skiing themed greating card, styled completely in Javascript.*/


//sets background color and .gif

var snowGif = document.createElement("img");
snowGif.src = "Images/FallingSnowTransparent.gif";
snowGif.style.width = "100%";
snowGif.style.height = "640px";
document.body.append(snowGif);


document.body.style.backgroundColor = "#cce6ff"

//makes sun
var sun = document.createElement("div");
sun.style.backgroundColor = "#fffd8c";
sun.style.width = "100px";
sun.style.height = "100px";
sun.style.borderRadius = "50%";
sun.style.position = "absolute";
sun.style.top = "25px";
sun.style.left = "25px";
document.body.append(sun);

//makes music
var au = new Audio("Music/AllIWantForChristmas.mp3");
au.controls = true;
au.style.position = "absolute";
au.style.top = "10px";
au.style.left = "150px";
document.body.appendChild(au);

//imports skis

var skis = document.createElement("img");
skis.src = "Images/BDogs-removebg-preview (1).png";
skis.style.width = "360px";
skis.style.height = "120px";
skis.style.position = "absolute";
skis.style.top = "250px";
skis.style.left = "550px";
skis.style.rotate = "90deg";
document.body.append(skis);

//creates foreground

var foreground = document.createElement("div");
foreground.style.backgroundColor = "white";
foreground.style.border = "white solid 0px";
foreground.style.borederRadius = "50%";
foreground.style.width = "100%";
foreground.style.height = "258px";
foreground.style.position = "absolute";
foreground.style.top = "403px";
foreground.style.left = "0px";
document.body.append(foreground);

// Makes the Ski Run sign

var sign = document.createElement("div");
sign.innerHTML = "HAPPY HOLIDAYS";
sign.style.color = "white";
sign.style.textAlign = "center";
sign.style.fontSize = "1.2em";
sign.style.fontFamily = "sans-serif";
sign.style.backgroundColor = "black";
sign.style.border = "black solid 0px";
sign.style.borderRadius = "0%";
sign.style.width = "200px";
sign.style.height = "40px";
sign.style.position = "absolute";
sign.style.top = "275px";
sign.style.left = "200px";
document.body.append(sign);

//makes first ski sign Post

var signPost = document.createElement("div");
signPost.style.backgroundColor = "brown";
signPost.style.border = "brown solid 0px";
signPost.style.borderRadius = "0%";
signPost.style.width = "15px";
signPost.style.height = "200px";
signPost.style.position = "absolute";
signPost.style.top = "315px";
signPost.style.left = "200px";
document.body.append(signPost);

//makes second ski sign post 

var signPost2 = document.createElement("div");
signPost2.style.backgroundColor = "brown";
signPost2.style.border = "brown solid 0px";
signPost2.style.borderRadius = "0%";
signPost2.style.width = "15px";
signPost2.style.height = "200px";
signPost2.style.position = "absolute";
signPost2.style.top = "315px";
signPost2.style.left = "385px";
document.body.append(signPost2);

//makes the left most stump

var stump1 = document.createElement("div");
stump1.style.width = "50px";
stump1.style.height = "75px";
stump1.style.backgroundColor = "brown";
stump1.style.position = "absolute";
stump1.style.top = "460px";
stump1.style.left = "933px";
document.body.append(stump1);

//makes the middle stump

var stump2 = document.createElement("div");
stump2.style.width = "30px";
stump2.style.height = "55px";
stump2.style.backgroundColor = "brown";
stump2.style.position = "absolute";
stump2.style.top = "375px";
stump2.style.left = "1110px";
document.body.append(stump2);

//makes the rightmost stump

var stump3 = document.createElement("div");
stump3.style.width = "40px";
stump3.style.height = "65px";
stump3.style.backgroundColor = "brown";
stump3.style.position = "absolute";
stump3.style.top = "400px";
stump3.style.left = "1180px";
document.body.append(stump3);


//Makes the rightmost Tree

var tree1 = document.createElement("div");
tree1.style.border = "transparent solid 75px";
tree1.style.width = "0px";
tree1.style.height =  "0px";
tree1.style.borderBottom = "green solid 300px";
tree1.style.margin = "0 auto";
tree1.style.position = "absolute";
tree1.style.top = "25px";
tree1.style.left = "1125px";
document.body.append(tree1);

//makes the middle tree

var tree2 = document.createElement("div");
tree2.style.border = "transparent solid 50px";
tree2.style.width = "0px";
tree2.style.height =  "0px";
tree2.style.borderBottom = "green solid 200px";
tree2.style.margin = "0 auto";
tree2.style.position = "absolute";
tree2.style.top = "125px";
tree2.style.left = "1075px";
document.body.append(tree2);

//Makes the leftmost tree

var tree3 = document.createElement("div");
tree3.style.border = "transparent solid 87.5px";
tree3.style.width = "0px";
tree3.style.height =  "0px";
tree3.style.borderBottom = "green solid 350px";
tree3.style.margin = "0 auto";
tree3.style.position = "absolute";
tree3.style.top = "25px";
tree3.style.left = "875px";
document.body.append(tree3);

//Makes the  bottom foot print (footprints are in order from top to bottom)

var footprint = document.createElement("div");
footprint.style.backgroundColor = "#92b3af";
footprint.style.position = "absolute";
footprint.style.borderRadius = "60%";
footprint.style.top = "590px";
footprint.style.left = "500px";
footprint.style.width = "40px";
footprint.style.height = "70px";
footprint.style.rotate = "30deg";
document.body.append(footprint);

//makes 2nd footprint 

var footprint2 = document.createElement("div");
footprint2.style.backgroundColor = "#92b3af";
footprint2.style.position = "absolute";
footprint2.style.borderRadius = "60%";
footprint2.style.top = "565px";
footprint2.style.left = "575px";
footprint2.style.width = "40px";
footprint2.style.height = "70px";
footprint2.style.rotate = "30deg";
document.body.append(footprint2);

//makes 3rd footprint 

var footprint3 = document.createElement("div");
footprint3.style.backgroundColor = "#92b3af";
footprint3.style.position = "absolute";
footprint3.style.borderRadius = "60%";
footprint3.style.top = "490px";
footprint3.style.left = "570px";
footprint3.style.width = "40px";
footprint3.style.height = "70px";
footprint3.style.rotate = "30deg";
document.body.append(footprint3);

//makes 4th footprint

var footprint3 = document.createElement("div");
footprint3.style.backgroundColor = "#92b3af";
footprint3.style.position = "absolute";
footprint3.style.borderRadius = "60%";
footprint3.style.top = "475px";
footprint3.style.left = "650px";
footprint3.style.width = "40px";
footprint3.style.height = "70px";
footprint3.style.rotate = "30deg";
document.body.append(footprint3);

//makes 5th footprint 

var footprint3 = document.createElement("div");
footprint3.style.backgroundColor = "#92b3af";
footprint3.style.position = "absolute";
footprint3.style.borderRadius = "60%";
footprint3.style.top = "410px";
footprint3.style.left = "630px";
footprint3.style.width = "40px";
footprint3.style.height = "70px";
footprint3.style.rotate = "30deg";
document.body.append(footprint3);

