let underscrut=document.querySelector(".underscrutiny");
let approved=document.querySelector(".approved");
let rejected=document.querySelector(".rejected");
let fund=document.querySelector(".funddisb");

let scrutinystatus=document.querySelector(".scrutinystatus1");
scrutinystatus.style.height="100%";
scrutinystatus.style.width="100%";
let approvedstatus=document.querySelector(".approvedstatus1");
approvedstatus.style.height="0%";
approvedstatus.style.width="0%";
let rejectedstatus=document.querySelector(".rejectedstatus1");
rejectedstatus.style.height="0%";
rejectedstatus.style.width="0%";
let fundstatus=document.querySelector(".fundstatus1");
fundstatus.style.height="0%";
fundstatus.style.width="0%";

underscrut.style.backgroundColor="#DF660B";
approved.style.backgroundColor="#F5EEDC";
rejected.style.backgroundColor="#F5EEDC";
fund.style.backgroundColor="#F5EEDC";

underscrut.style.color="white";
approved.style.color="#DF660B";
rejected.style.color="#DF660B";
fund.style.color="#DF660B";

underscrut.addEventListener("click",()=>{
    scrutinystatus.style.height="100%";
    scrutinystatus.style.width="100%";
    approvedstatus.style.height="0%";
    approvedstatus.style.width="0%";
    rejectedstatus.style.height="0%";
    rejectedstatus.style.width="0%";
    fundstatus.style.height="0%";
    fundstatus.style.width="0%";
    underscrut.style.backgroundColor="#DF660B";
    approved.style.backgroundColor="#F5EEDC";
    rejected.style.backgroundColor="#F5EEDC";
    fund.style.backgroundColor="#F5EEDC";
    underscrut.style.color="white";
    approved.style.color="#DF660B";
    rejected.style.color="#DF660B";
    fund.style.color="#DF660B";
});
approved.addEventListener("click",()=>{
    scrutinystatus.style.height="0%";
    scrutinystatus.style.width="0%";
    approvedstatus.style.height="100%";
    approvedstatus.style.width="100%";
    rejectedstatus.style.height="0%";
    rejectedstatus.style.width="0%";
    fundstatus.style.height="0%";
    fundstatus.style.width="0%";
    underscrut.style.backgroundColor="#F5EEDC";
    approved.style.backgroundColor="#DF660B";
    rejected.style.backgroundColor="#F5EEDC";
    fund.style.backgroundColor="#F5EEDC";
    underscrut.style.color="#DF660B";
    approved.style.color="white";
    rejected.style.color="#DF660B";
    fund.style.color="#DF660B";
    
    
});

rejected.addEventListener("click",()=>{
    scrutinystatus.style.height="0%";
    scrutinystatus.style.width="0%";
    approvedstatus.style.height="0%";
    approvedstatus.style.width="0%";
    rejectedstatus.style.height="100%";
    rejectedstatus.style.width="100%";
    fundstatus.style.height="0%";
    fundstatus.style.width="0%";
    underscrut.style.backgroundColor="#F5EEDC";
    approved.style.backgroundColor="#F5EEDC";
    rejected.style.backgroundColor="#DF660B";
    fund.style.backgroundColor="#F5EEDC";
    underscrut.style.color="#DF660B";
    approved.style.color="#DF660B";
    rejected.style.color="white";
    fund.style.color="#DF660B";
    
});

fund.addEventListener("click",()=>{
    scrutinystatus.style.height="0%";
    scrutinystatus.style.width="0%";
    approvedstatus.style.height="0%";
    approvedstatus.style.width="0%";
    rejectedstatus.style.height="0%";
    rejectedstatus.style.width="0%";
    fundstatus.style.height="100%";
    fundstatus.style.width="100%";
    underscrut.style.backgroundColor="#F5EEDC";
    approved.style.backgroundColor="#F5EEDC";
    rejected.style.backgroundColor="#F5EEDC";
    fund.style.backgroundColor="#DF660B";
    underscrut.style.color="#DF660B";
    approved.style.color="#DF660B";
    rejected.style.color="#DF660B";
    fund.style.color="white";
    
    
});