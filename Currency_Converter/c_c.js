
 // Access the all element on which perform the task/
 const dropdowns= document.querySelectorAll(".dropdown select");
 const btn = document.querySelector("form button");
 const fromCurr= document.querySelector(".from select");
 const toCurr = document.querySelector(".to select")
 const msg = document.querySelector("#msg");
 
// Select the element of dropdowns One by One
 for(let select of dropdowns){ // dropdown class se select ko access kiya 
    for(let curCode in countryList){  // cuntryList se curCode ko access kiya one bu one
       let newOption= document.createElement("option");  // create new option for all currency
       newOption.innerText= curCode;  // newOption ke andr currCode dala 
       newOption.value = curCode;
       // Default Selectd Currency
       if(select.name === "from" && curCode === "USD"){
        newOption.selected = "selected";
       } else if(select.name === "to" && curCode === "INR"){
        newOption.selected = "selected";
       }
       select.append(newOption); // fir select class ke sath append kar diya 
    }
    select.addEventListener("change", (evt)=>{
      updateFlag(evt.target);
    })
 }

// change flag code 
 const updateFlag =(element)=>{
 let curCode= element.value;
 let countryCode = countryList[curCode]; // Give the associted code from currency
 let newSrc= `https://flagsapi.com/${countryCode}/flat/64.png`
 let img = element.parentElement.querySelector("img"); // select the parent container of select element for change the flag image
 img.src= newSrc; // change the image src
 }

 // currency converter code
 btn.addEventListener("click", (evt)=>{
   evt.preventDefault(); 
   // console.log(fromCurr.value,toCurr.value);
getExchangeRate();
 });

async function getExchangeRate(){
let fromCurrency = fromCurr.value;
 let toCurrency = toCurr.value;

 let amount= document.querySelector("form input");
   let amtValue= Number(amount.value);
   if(!Number.isFinite(amtValue) || amtValue <= 0){
      msg.innerText = "Please enter a valid amount";
        return;
   } 
     if (fromCurrency === toCurrency) {
        msg.innerText = `${amtValue} ${fromCurrency} = ${amtValue} ${toCurrency}`;
        return;
    }

    const URL = `https://api.frankfurter.dev/v2/rate/${fromCurrency}/${toCurrency}`;
   try{
    msg.innerText="Converting..."
  const response = await fetch(URL);
  if(!response.ok){
     throw new Error("Rate not available");
  }
  const data= await response.json();
  let finalAmount = (amtValue*data.rate).toFixed(2);
  msg.innerText= `${amtValue} ${fromCurrency} = ${finalAmount} ${toCurrency}`
   }
catch(error){
   msg.innerText = "Unable to fetch exchange rate";
        console.log(error);
}
}

