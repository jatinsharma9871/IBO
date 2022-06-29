const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];
console.log(getUniqueProductCount(listOfProducts));
console.log(getUniquePrducts(listOfProducts));

function getUniqueProductCount(listOfProducts){
   let Obj = {};
   for(let i = 0; i < listOfProducts.length; i++){
     if(Obj[listOfProducts[i].productName]) Obj[listOfProducts[i].productName]++;
     else Obj[listOfProducts[i].productName]=1;
   }
   return Obj;
}

function getUniquePrducts(listOfProducts){
    let array = [];
    for(let i = 0; i < listOfProducts.length; i++){
        let flag = true;
        for(let j = 0; j < array.length && flag; j++){
            if(listOfProducts[i].productName===array[j].productName && 
                listOfProducts[i].description===array[j].description) {
                    array[j].quantity+=listOfProducts[i].quantity;
                    flag=false;
                }
        }
        if(flag) array.push(listOfProducts[i]);
    }
    return array;
}