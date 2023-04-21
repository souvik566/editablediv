let div=document.getElementById("div");
div.addEventListener("click",()=>{
    
    let newdiv=document.createElement("textarea");
    newdiv.className="editbox";
    newdiv.value=div.textContent;
    div.remove();
    document.getElementById("body").append(newdiv);
    newdiv.addEventListener("blur",()=>{
        localStorage.setItem("content",newdiv.value);
    })
    
})
onload=function(){
    document.getElementById("div").textContent=localStorage.getItem("content");
}
onload();