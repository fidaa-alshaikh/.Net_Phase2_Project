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

var  cell3=[]
for (var i=0;i<itemData.length;i++){		
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell3[i] = row.insertCell(2);
    cell1.innerHTML = itemData[i].name;
    cell2.innerHTML = itemData[i].price;
    cell3[i].innerHTML = "X";

    
   }
   
   for (var i=0;i<cell3.length;i++){
    cell3[i].onclick = function () {
        var parent = this.parentNode.parentNode; //get the row node
    table.deleteRow(0);
    }

   }
   


   


// add product
function addProduct() {

    var name = document.getElementById("productName").value;
    //var pic = document.getElementById("productPic").value;
    var price = document.getElementById("productPrice").value;
    
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = price;
    cell3.innerHTML = "X";
  }

// delete product


   

 
  