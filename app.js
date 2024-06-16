const  hamburg =document.querySelector('.hamburg');
const  rightnavhamburg=document.querySelector('.hamburg-rightnav');
const  middlenavhamburg=document.querySelector('.hamburg-middlenav');

if(hamburg){
    hamburg.addEventListener("click",()=>{
        rightnavhamburg.classList.toggle("open");
        middlenavhamburg.classList.toggle("open");
    });
}

const closebtn = document.querySelector('.closebtn');
const outerpopup =document.querySelector('.outerpopup');
closebtn.addEventListener('click',()=>{
    outerpopup.classList.add('hide-popup');
});

window.addEventListener("load",()=>{
    setTimeout(()=>{
        outerpopup.classList.remove('hide-popup');
    },1000);
});
 
const contactinput =document.querySelector('#contactinput');
const sendbtn =document.querySelector('.sendbtn');

sendbtn.addEventListener('click',()=>{
    if(contactinput.value==""){
        alert("please fill your correct email address");
    }else
    { 
        alert("your email is saved we will contact you soon");
    }
});

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

let container3 =document.querySelector('.container3');
let contactbtn = document.querySelector("#contactbtn");


if(contactbtn){
    contactbtn.addEventListener("click",()=>{
        container3.classList.toggle("opencontainer3");
    });
}

//  const contactsubmitbtn =document.querySelector('.btn');
//  const username = document.querySelector('.username');
//  const email = document.querySelector('.contactemail');
//  const phone = document.querySelector('.phonenumber');
//  const message = document.querySelector('.message');

//  contactsubmitbtn.addEventListener('click',()=>{
//     if(username.value==""|| email.value==""|| phone.value=="" || message.value==""){
//         alert("kindly fill all the information");
//     }else{
//         alert("your information is saved we will reach you very shortly");
//         username.value=="",email.value=="",phone.value=="",message.value=="";
//         container3.style.display="none";
//     }
//  })
 
