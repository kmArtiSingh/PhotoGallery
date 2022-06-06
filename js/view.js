window.onload = function(){
    
var mainBody = document.body;
    
var heading = document.createElement("h2");
mainBody.appendChild(heading);
heading.innerHTML = "Image Gallery";
    
var elements = document.createElement("div");
mainBody.appendChild(elements);
elements.className = "elements";
    
     
var elements_img = document.createElement("img");
elements.appendChild(elements_img);
elements_img.id = "bigImage";    
elements_img.src = "img/img1.jpg";    



var img_list = document.createElement("div");
mainBody.appendChild(img_list);
img_list.id = "img-list";
 
for(var i=0; i< imgsList.length; i++){

var imgs = document.createElement("img");
img_list.appendChild(imgs);
imgs.src = "img/" + imgsList[i];
        
 }
    
var single = "img1.jpg";

var abc = document.getElementById("img-list");
abc.addEventListener("click",function(e){
    e = event.target;
    
document.getElementById("bigImage").src = e.src;
});

    
    
      
    
    
    
    
    
    
    
    
    
    
}