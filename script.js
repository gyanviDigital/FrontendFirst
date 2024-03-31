
function detailsFood(params) {
let a=document.querySelector("."+params+ " img");
var text=document.querySelector("."+params+" p").innerHTML;
localStorage.setItem("nameOfItem", text);
localStorage.setItem("Img",a.src);
window.location="./Html/foodDetails.html";
}

// 4 items img //items 3

let famusFood=[" ","dal","biryani","frout","northIndianFood"];
function detailsFood2(params2) {
  var img2="http://127.0.0.1:5500/Food-restorent/img/"+famusFood[params2]+".jpg";
console.log(img2);
  localStorage.setItem("Img",img2)
  text=famusFood[params2];
   localStorage.setItem("nameOfItem", text);
    window.location="./Html/foodDetails.html";
    }
    //http://127.0.0.1:5500/Food-restorent/Image/north.jpg
    //http://127.0.0.1:5500/Food-restorent/Image/frout.jpg