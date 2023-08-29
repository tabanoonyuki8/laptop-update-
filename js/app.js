var number=1299;
//memory

const memoryButtonTwo=document.getElementById("memory-button-two");
const memoryButton=document.getElementById("memory-button"); 

const memoryInput=document.getElementById("memory-input");  

memoryButtonTwo.addEventListener('click',function(){
         memoryInput.innerText="0";
         updateTotal();
})

memoryButton.addEventListener('click',function(){
    memoryInput.innerText="180";
    updateTotal();
})
//storage part
const storageButtonOne=document.getElementById("storage-buttonOne");
const storageButtonTwo=document.getElementById("storage-buttonTwo"); 
const storageButtonthree=document.getElementById("storage-buttonthree"); 

const storageInput=document.getElementById("storage-input");  

storageButtonOne.addEventListener('click',function(){
         storageInput.innerText="0";
         updateTotal();
})

storageButtonTwo.addEventListener('click',function(){
    storageInput.innerText="180";
     updateTotal();
})
storageButtonthree.addEventListener('click',function(){
    storageInput.innerText="100";
      updateTotal();
})

 

//total
const total=document.getElementById("total-case");

//delivery button  
const deliveryButton=document.getElementById("delivery-button-two");
const deliveryButtonTwo=document.getElementById("delivery-button");
const deliveryInput=document.getElementById("delivery-input");
deliveryButton.addEventListener('click',function(){
         deliveryInput.innerText="0";
         updateTotal();
})

deliveryButtonTwo.addEventListener('click',function(){
    deliveryInput.innerText="20";
    updateTotal();
})

// Main total
       

//toatal
function updateTotal(){
     const deliveryCharge= Number(deliveryInput.innerText);
     const memoryCharge= Number(memoryInput.innerText);
  const storageCharge= Number(storageInput.innerText)
    const grandTotal= (deliveryCharge+memoryCharge+ storageCharge+number);

    total.innerText= grandTotal;

    const mainTotal=document.getElementById("main-total").innerText = grandTotal;

    //promo code part
    const button=document.getElementById("promo-button");
    button.addEventListener("click",function(){
        
        const promoFlied=document.getElementById("promo-input");
        const promo=promoFlied.value;
        
        if(promo== 'stevekaku'){
          const discount=(grandTotal*20)/100;
           const dis =grandTotal-discount;
          
            const mainTotal=document.getElementById("main-total").innerText = dis;
      
        }
        else{
          const mainTotal=document.getElementById("main-total").innerText = grandTotal;
            
        }
    })
  
 }


    