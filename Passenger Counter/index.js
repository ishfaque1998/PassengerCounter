let count=0;
let eleTh=document.getElementById("count-el")

let saveEl=document.getElementById("save-el")
let overEl=document.getElementById("over")
let string="Reached Limit Please Refresh the Page"

let overflow=0;



function increment(){
 count=count+1
 eleTh.innerText=count
}


function decrement(){
    if(count>0){
    count=count-1
    eleTh.innerText=count
    }
}


function save(){
   
   
 let nameStr=count+" - "
 saveEl.textContent+=nameStr
 eleTh.textContent=0
 count=0
 overflow+=1
 

  

  if(overflow==10){
    overEl.textContent=string
  
    overflow=0
    document.getElementById("save-btn").disabled=true
    setTimeout(() => {
      document.location.reload();
    }, 3000);
   }

}

