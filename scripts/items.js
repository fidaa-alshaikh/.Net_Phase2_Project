const itemData = [
    {
        name: 'Computer',
        pic: 'JavaScript',
        price: '5000',
    },
    {
        name: 'iPhone 11',
        pic: 'JavaScript',
        price: '3500',
    },
    {
        name: 'Microsoft Mouse',
        pic: 'JavaScript',
        price: '350',
    },
];


//display item in admin page
var table = document.getElementById("myTable");

for (var i=0;i<itemData.length;i++){		
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = itemData[i].name;
    cell2.innerHTML = itemData[i].price;		
   }


// add product
function addProduct() {

    var name = document.getElementById("productName").value;
    //var pic = document.getElementById("productPic").value;
    var price = document.getElementById("productPrice").value;
    
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = name;
    cell2.innerHTML = price;
  }

   

 
  