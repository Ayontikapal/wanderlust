const taxToggle=document.getElementById('flexSwitchCheckDefault');
taxToggle.addEventListener('click',()=>{
    let taxInfo= document.getElementsByClassName('tax-info');
    for(info of taxInfo){
        let priceText=info.previousSibling.textContent;
        let price=parseFloat(priceText.replace(/[^0-9.-]+/g,""));
        if(taxToggle.checked){
            let totalPrice=(price*1.18).toFixed(2);
            info.previousSibling.textContent=` ₹ ${parseFloat(totalPrice).toLocaleString("en-IN")} / night `;
            info.textContent=" (including GST) ";
        }else{
            let basePrice=(price/1.18).toFixed(2);
            info.previousSibling.textContent=` ₹ ${parseFloat(basePrice).toLocaleString("en-IN")} / night `;
            info.textContent="";
        }
    }
});