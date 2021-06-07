const itemData = [
    {
        id: 0,
        name: 'computer',
        pic: 'JavaScript',
        price: '5000',
    },
    {
        id: 1,
        name: 'iphone 11',
        pic: 'JavaScript',
        price: '3500',
    },
    {
        id: 2,
        name: 'microsoft mouse',
        pic: 'JavaScript',
        price: '350',
    },
];


$('.card').css("visibility", "hidden");

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
    cell3[i].innerHTML = `<button type="button" onclick="deleteRow(this)">&times;</button>`;

    
   }


//delete row 
   function upTo(el, tagName) {
    tagName = tagName.toLowerCase();
  
    while (el && el.parentNode) {
      el = el.parentNode;
      if (el.tagName && el.tagName.toLowerCase() == tagName) {
        return el;
      }
    }
    return null;
  }    
  
  function deleteRow(el) {
    var row = upTo(el, 'tr')
    if (row) row.parentNode.removeChild(row);
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
    cell3.innerHTML = `<button type="button" onclick="deleteRow(this)">&times;</button>`;
  }


// Seach by name
var search ;
function search() {

search = document.getElementById("search").value
console.log(search);
var FOUND = itemData.find(function(item, index) {
	if(item.name == search){
        $('.card').css("visibility", "visible");
        return true;
    }
        else "not found"
});

console.log(FOUND);
$('.card h4').text(FOUND.name);
$('.card p').text(FOUND.price);
$('.card .pic').attr("src",FOUND.pic);
$('.card .link').attr("href",`singleItem.html?id=${FOUND.id}`);

}



  