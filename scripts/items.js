const itemData = [
    {
        id: 0,
        name: 'computer',
        pic: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4Av4g?ver=be22&w=498&h=408&q=90&m=6&b=%23FFF0F0F0&f=jpg&o=f&p=0&aim=true',
        price: '5000',
    },
    {
        id: 1,
        name: 'iphone 11',
        pic: 'https://img.router-switch.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-11-pro-max_2.jpg',
        price: '3500',
    },
    {
        id: 2,
        name: 'microsoft mouse',
        pic: 'https://media.extra.com/s/aurora/100043152_800/Microsoft-Surface-Mobile-Mouse-SC-Bluetooth-Platinum?locale=en-GB,en-*,*&$Listing-Product-2x$',
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



  