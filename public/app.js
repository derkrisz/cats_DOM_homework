
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

var catsArray = [
  {name: "Boba", favourite_food: "Sock fluff", image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
  {name: "Barnaby", favourite_food: "Tuna", image: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"},
  {name: "Max", favourite_food: "Whiskas Temptations", image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
  {name: "Cirom", favourite_food: "corn on the cob", image: "/cirmos.jpg"},
  {name: "Domber", favourite_food: "boiled potatoes", image: "/domber.jpg"}
]

var app = function() {
  for (cat of catsArray) {
    addCat(cat.name, cat.favourite_food, cat.image);
  }
}

// add a cat just by calling addcat (no array);

// var app = function() {
//   addCat("Cirom", "corn on the cob", "/cirmos.jpg");
//   addCat("Domber", "boiled potatoes", "/domber.jpg")
// }


// harcoded function to add a cat

// var app = function() {
//   var catUnorderedList = document.createElement('ul');
//   catUnorderedList.classList.add('cat');
//
//   var listItem = document.createElement('li');
//   listItem.innerText = "Name: Cirom";
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
