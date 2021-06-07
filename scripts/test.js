window.onload = function() {  
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('=') + 1);
    console.log(id)
// view single product
var FOUND = itemData.find(function(item, index) {
        if(item.id == id){
            return true;
        }
            else "not found"
    });
    
    console.log(FOUND);
    $('.product span').text(FOUND.name);
    $('.price span').text(FOUND.price);
    $('.productImg').attr("src",FOUND.pic);

        }

function confirm(){
    alert("Your purchase confirmed!!");
    
}