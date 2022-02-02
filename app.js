
const price="Lei/KG";
const piece="Lei/each";
const items=[];
const prices = [
    [4.01,6.23,15,45,8.19],
    [2.99,2.55,3.44,5.79,4.19],
    [3.99,4.99,6.01,1.85,2.76],
    [5.01,6.02,5.23,6.33,6,88],
    [15.99,10.65,17.00,37.02,11.10],
    [3.01,7.21,5.25,4.89,2.72]
]


function getSelectorsValues(){
  var selectedValue = document.getElementById("card-selector").value;
  console.log(selectedValue);
  var price1 = document.querySelector(".item-price1")
  price1.style.display="initial";
  for(let i = 0; i < prices[0].length; i++){
   console.log(prices[0][i]);
  }
}

