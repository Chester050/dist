



//$('#theList').hide();



var theButton = document.getElementById("theButton");
var list = document.getElementById("theList");
var form = document.getElementById("theForm");
var button = document.querySelector("button");
var itemCatalogue = document.querySelector('#itemCatalogue');

var addCartButton = document.querySelector("#addCartButton");
var theRemoveButton = document.querySelector("#removeButton");
 //theButton.addEventListener('click', addOne);
 theRemoveButton.addEventListener('click', removeItem);

// document.body.style.backgroundColor = "red";


  addCartButton.addEventListener('click', function(){

    var imageCreate = document.createElement('img');

    imageCreate.className = "theImage" ;

    imageCreate.src = "adventure_BG.jpg";

    imageCreate.style.width = "50px";

    imageCreate.style.display = "inline";

    imageCreate.style.margin = "3px";

    imageCreate.style.height = "50px";

    var removeButton = document.createElement('button');

    removeButton.innerHTML = "remove";

    removeButton.style.backgroundColor = "#CF3D1D";

    removeButton.style.border = "2x 2x";

      removeButton.style.position = "relative";

        // Remove one by one
    removeButton.addEventListener('click', function() {
      imageCreate.remove();
      removeButton.remove();
    })


    itemCatalogue.append(imageCreate , removeButton);


  });




  var theImage = document.querySelector(".theImage");
  var imageList = document.querySelector('#imageList');


function removeItem(){
 // Remove everything
  itemCatalogue.remove();






}
