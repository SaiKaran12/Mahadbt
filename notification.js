let benbtn=document.querySelector(".beneficarynot");
let paymentbtn=document.querySelector(".paymentnot");

let bendes=document.querySelector(".beneficarymain");
let paymentdes=document.querySelector(".paymentmain");

benbtn.style.backgroundColor="#DF660B";
benbtn.style.color="white";
paymentbtn.style.backgroundColor="#F5EEDC";
paymentbtn.style.color="#DF660B";


bendes.style.width="98%";
bendes.style.height="100px";
paymentdes.style.width="0%";
paymentdes.style.height="0px";


benbtn.addEventListener("click",()=>{
    bendes.style.width="98%";
    bendes.style.height="100px";
    paymentdes.style.width="0%";
    paymentdes.style.height="0px";
    benbtn.style.backgroundColor="#DF660B";
    benbtn.style.color="white";
    paymentbtn.style.backgroundColor="#F5EEDC";
    paymentbtn.style.color="#DF660B";
});

paymentbtn.addEventListener("click",()=>{
    bendes.style.width="0%";
    bendes.style.height="0px";
    paymentdes.style.width="98%";
    paymentdes.style.height="100px";
    benbtn.style.backgroundColor="#F5EEDC";
    benbtn.style.color="#DF660B";
    paymentbtn.style.backgroundColor="#DF660B";
    paymentbtn.style.color="white";
});