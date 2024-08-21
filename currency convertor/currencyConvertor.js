//Currency API
const URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";
let dropdowns = document.querySelectorAll("select");
// console.log(dropdowns);
let btn = document.querySelector(".button");
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
let toBox = document.querySelector("#Box2");
let box2 = document.querySelector(".box2");
let exchBtn = document.querySelector(".exch-btn");
let select1 = document.querySelector(".select-container");

let cntryCode;
let currCode;


//object er for loop e in hoy
for (let select of dropdowns) {
    for (let countryCode in countryList) {
        // console.log(countryCode, countryList[countryCode]);
        // console.log(countryCode);
        let newOption = document.createElement("option");//Creating select option for each country name
        newOption.value = countryCode;//adding value to each option

        //Default setting
        newOption.innerText = countryCode;
        if (select.name === "from" && countryCode === "USD") {
            newOption.selected = "selected";
            currCode = "BDT";
        } else if (select.name === "to" && countryCode === "BDT") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);//when select get changed then all options will be printed through updateFlag
    })
}

// update flag and To text
const updateFlag = (element) => {
    //console.log(element);// Logs the entire <select> element
    currCode = element.value;//Retrieves the currently selected value
    console.log(currCode);

    cntryCode = countryList[currCode];//we will get the country code of currently selected value
    console.log(cntryCode);

    let newSrc = `https://flagsapi.com/${cntryCode}/flat/64.png`;
    let newImg = element.parentElement.querySelector("img");//element means select, select er parent class er under e je img ache ta access korbe.

    newImg.src = newSrc;
    toBox.innerText = `Amount in ${currCode}`;
}


//Get exchange rate
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();//default je page refresh hoto, ta r hobena
    let amount = document.querySelector(".amount input");
    amtVal = amount.value// input e ja show hoy ta amount value
    if (amtVal === "" || amtVal < 1) {
        // amtVAl = 1;
        amount.value = "1";
    }
    /*
    console.log(amtVal);
    console.log("code:",currCode.toLowerCase());
    console.log(fromCurr.value);
    console.log(toCurr.value);
    */
    let from = fromCurr.value.toLowerCase();
    let to = toCurr.value.toLowerCase();
    // console.log(fromCurr.value,toCurr.value);//here, .value = selected country

    let response = await fetch(URL);
    let data = await response.json();

    let simplify = (data.usd[to]/data.usd[from]);

    let totalValue = amtVal * simplify;
    // console.log("TotalValue =",totalValue);
    box2.value = totalValue;
    // console.log(data);    
});
exchBtn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
});
/*
//exchange button
exchBtn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    toCurr = document.querySelector(".from select");
    fromCurr = document.querySelector(".to select");

    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    amtVal = amount.value;

    let from = fromCurr.value.toLowerCase();
    let to = toCurr.value.toLowerCase();

    let response = await fetch(URL);
    let data = await response.json();

    let simplify = (data.usd[to]/data.usd[from]);

    let totalValue = amtVal * simplify;
    box2.value = totalValue;

    select1.classList.remove("select1");
});
*/

/*
console.log("Practice section");
link1 = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
//here, endpoint = currencies
link2 = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

let money = async () =>{
    let response = await fetch(link2);
    let data = await response.json();
    console.log(data);
    console.log(data.usd.bdt);
    let amount = prompt("Enter amount");
    let totalAmount = amount * data.usd.bdt;
    console.log(totalAmount);
}
*/