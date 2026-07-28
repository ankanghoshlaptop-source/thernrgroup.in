// ===============================
// Tarapada Modern Rice Mill
// Premium Script
// ===============================

// Fade Animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

document.querySelectorAll(".fade-up").forEach(el=>{
    observer.observe(el);
});

// Sticky Header
window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="rgba(55,35,18,.98)";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

}else{

header.style.background="rgba(48,32,20,.92)";
header.style.boxShadow="none";

}

});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Contact Form
const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! We received your enquiry.");

form.reset();

});

}

// Gallery Hover
document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

img.classList.toggle("zoom");

});

});

// Back To Top Button
const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="100px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#b8860b";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
