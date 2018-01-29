
var createCatUnorderedList = function() {
  var catUnorderedList = document.createElement('ul');
  catUnorderedList.classList.add('cat');
  return catUnorderedList;
}

var createNameListItem = function(name) {
  var nameListItem = document.createElement('li');
  nameListItem.innerText = "Name: " + name;
  return nameListItem;
}

var createFavFoodListItem = function(fav_food) {
  var favFoodListItem = document.createElement('li');
  favFoodListItem.innerText = "Favourite food: " + fav_food;
  return favFoodListItem;
}

var createImageListItem = function(image_source) {
  var imageListItem = document.createElement('li');
  var img = document.createElement('img');
  img.src = image_source;
  img.width = "500";
  imageListItem.appendChild(img);
  return imageListItem;
}

var appendElements = function(cats, catUnorderedList, nameListItem, favFoodListItem, imageListItem) {
  catUnorderedList.appendChild(nameListItem);
  catUnorderedList.appendChild(favFoodListItem);
  catUnorderedList.appendChild(imageListItem);
  cats.appendChild(catUnorderedList);
}

var addCat = function(name, fav_food, image) {
  var newUnorderedList = createCatUnorderedList();
  var nameListItem = createNameListItem(name);
  var favFoodListItem = createFavFoodListItem(fav_food);
  var imageListItem = createImageListItem(image);
  var cats = document.querySelector('#cats');
  appendElements(cats, newUnorderedList, nameListItem, favFoodListItem, imageListItem);
}

var app = function() {
  addCat("Cirom", "corn on the cob", "/cirmos.jpg");
  addCat("Domber", "boiled potatoes", "/domber.jpg")
}



// var app = function() {
//   var catUnorderedList = document.createElement('ul');
//   catUnorderedList.classList.add('cat');
//
//   var listItem = document.createElement('li');
//   listItem.innerText = "Name: Cirom";
//
//
//   var listItem2 = document.createElement('li');
//   listItem2.innerText = "Favourite food: corn on the cob";
//
//   var listItem3 = document.createElement('li');
//
//   var img = document.createElement('img');
//   img.src = "/cirmos.jpg"
//   img.width = "500";
//
//   listItem3.appendChild(img);
//
//   catUnorderedList.appendChild(listItem);
//   catUnorderedList.appendChild(listItem2);
//   catUnorderedList.appendChild(listItem3);
//
//   var cats = document.querySelector('#cats');
//   cats.appendChild(catUnorderedList);
// }


document.addEventListener("DOMContentLoaded", app);
