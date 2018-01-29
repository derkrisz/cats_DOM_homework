var app = function() {
  var catUnorderedList = document.createElement('ul');
  catUnorderedList.classList.add('cat');

  var listItem = document.createElement('li');
  listItem.innerText = "Name: Cirom";

  var listItem2 = document.createElement('li');
  listItem2.innerText = "Favourite food: corn on the cob";

  var listItem3 = document.createElement('li');

  var img = document.createElement('img');
  img.src = "/cirmos.jpg"
  img.width = "500";

  listItem3.appendChild(img);

  catUnorderedList.appendChild(listItem);
  catUnorderedList.appendChild(listItem2);
  catUnorderedList.appendChild(listItem3);

  var cats = document.querySelector('#cats');
  cats.appendChild(catUnorderedList);
}

document.addEventListener("DOMContentLoaded", app);
