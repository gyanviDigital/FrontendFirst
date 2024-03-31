let pls=document.getElementById("search2");
let pls2=document.getElementById("search");
let searchBtn=document.querySelector(".searchBtn");
let itemText=document.getElementById("itemText");
let km=document.getElementById("km");
let nu=0;
//placeHolder
let ph=["chinies Food","north Thali","chicken Fry","chicken Tikka"]
setInterval(() => {
    pls.placeholder=ph[nu];
     nu++;
     if(nu==4)nu=0
}, 2000);
function srcBtn() {
    pls2.style.display="none";
    searchBtn.style.display="none";
    pls.hidden=false;
    pls.focus();
}
let n=Math.random()*100;
n=parseInt(n);
n=n%12;
km.innerText=n;

// images
let image=["biryani","burger","chickenFry","chickenLeg","chickenPatti","chickenRoti","dal","dal2","Egg Fry","eggBowl","EggFoodjpg","fishFry","frout","nasta","northIndianFood","pizza","samosha","souBow","vine"];
nu=0;
var manyItems=document.getElementById("manyItems");
image.forEach(()=>{
    //boxes create
   var boxes=document.createElement("div");
   boxes.className="allImagesBox";
   manyItems.appendChild(boxes);
   //img boxes create
   var boxesImg=document.createElement("img");
   boxesImg.className="allImages";
   boxesImg.src="../img/"+image[nu]+".jpg";
  boxes.appendChild(boxesImg);
  //img text box
  var allImgText=document.createElement("div");
   boxes.append(allImgText);
   allImgText.className="allImgText";
   allImgText.innerText=image[nu];
   //li create details of food
   var li=document.createElement("li");
   li.className="li";
   allImgText.appendChild(li);
   li.innerText="Indulge in our delectable dishes crafted with the freshest ingredients and bursting with flavor.";
  
   var li=document.createElement("li");
   li.className="li";
   allImgText.appendChild(li);
   li.innerText="Elevate your dining experience with our mouthwatering specialties prepared to perfection.";
  
   var li=document.createElement("li");
   li.className="li";
   allImgText.appendChild(li);
   li.innerText="Savor every bite of our exquisite culinary creations, meticulously crafted to tantalize your taste buds.";
  //button box
  var btnBox = document.createElement("div");
  btnBox.className="btnBox";
  boxes.appendChild(btnBox);
   //btn in box
  var btn1 = document.createElement("div");
  btn1.className="btn1";
  btnBox.appendChild(btn1);
  btn1.innerText="Purchase";

  
  var btn2 = document.createElement("div");
  btn2.className="btn2";
  btnBox.appendChild(btn2);
  btn2.innerText="Open";

  
  var btn3 = document.createElement("div");
  btn3.className="btn3";
  btnBox.appendChild(btn3);
  btn3.innerText="Details";
   nu++;
})
//
  

var img=document.getElementById("img");
img.src=localStorage.getItem("Img");
itemText.innerText=localStorage.getItem("nameOfItem")