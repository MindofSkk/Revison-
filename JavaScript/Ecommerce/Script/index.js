var shoes = [
  {
    id: 1,
    name: "Shoe 1",
    image:
      "https://images.pexels.com/photos/3281608/pexels-photo-3281608.jpeg?auto=compress&cs=tinysrgb&w=800",

    price: 999,
  },
  {
    id: 2,
    name: "Shoe 2",
    image:
      "https://images.pexels.com/photos/9993286/pexels-photo-9993286.jpeg?auto=compress&cs=tinysrgb&w=800",

    price: 799,
  },
  {
    id: 3,
    name: "Shoe 3",
    image:
      "https://images.pexels.com/photos/8378567/pexels-photo-8378567.jpeg?auto=compress&cs=tinysrgb&w=800",

    price: 545,
  },
  {
    id: 4,
    name: "Shoe 4",
    image:
      "https://images.pexels.com/photos/5710085/pexels-photo-5710085.jpeg?auto=compress&cs=tinysrgb&w=800",

    price: 9654,
  },
  {
    id: 5,
    name: "Shoe 5",
    image:
      "https://images.pexels.com/photos/1456733/pexels-photo-1456733.jpeg?auto=compress&cs=tinysrgb&w=800",

    price: 958,
  },
  {
    id: 6,
    name: "Shoe 6",
    image:
      "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=800",

    price: 455,
  },
  {
    id: 7,
    name: "Shoe 7",
    image:
      "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=800",

    price: 6556,
  },
  {
    id: 8,
    name: "Shoe 8",
    image:
      "https://images.pexels.com/photos/4495409/pexels-photo-4495409.jpeg?auto=compress&cs=tinysrgb&w=800",

    price: 544,
  },
  {
    id: 9,
    name: "Shoe 9",
    image:
      "https://images.pexels.com/photos/6540927/pexels-photo-6540927.jpeg?auto=compress&cs=tinysrgb&w=800",

    price: 549,
  },
  {
    id: 10,
    name: "Shoe 10",
    image:
      "https://images.pexels.com/photos/9645566/pexels-photo-9645566.jpeg?auto=compress&cs=tinysrgb&w=800",

    price: 799,
  },
  {
    id: 11,
    name: "Shoe 11",
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",

    price: 322,
  },
  {
    id: 12,
    name: "Shoe 12",
    image:
      "https://images.pexels.com/photos/6777980/pexels-photo-6777980.jpeg?auto=compress&cs=tinysrgb&w=800",

    price: 654,
  },
  {
    id: 13,
    name: "Shoe 13",
    image:
      "https://images.pexels.com/photos/6747235/pexels-photo-6747235.jpeg?auto=compress&cs=tinysrgb&w=800",

    price: 258,
  },
  {
    id: 14,
    name: "Shoe 14",
    image:
      "https://images.pexels.com/photos/3261069/pexels-photo-3261069.jpeg?auto=compress&cs=tinysrgb&w=800",

    price: 658,
  },
  {
    id: 15,
    name: "Shoe 15",
    image:
      "https://images.pexels.com/photos/4252948/pexels-photo-4252948.jpeg?auto=compress&cs=tinysrgb&w=800",

    price: 1001,
  },
];

localStorage.setItem("shoesdata", JSON.stringify(shoes));
var data = JSON.parse(localStorage.getItem("shoesdata"));

var cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];

function appenddata(data) {
  console.log("map", data);
  data.map(function (elem, inde) {
    var div = document.createElement("div");

    var img = document.createElement("img");
    img.src = elem.image;
    var txt = document.createElement("p");
    txt.innerText = elem.name;
    var price = document.createElement("p");
    price.innerText = "Rs  " + elem.price;
    var btn = document.createElement("button");
    btn.innerText = "Add To Cart";
    btn.addEventListener("click", function () {
      addtocart(elem);
    });
    div.append(img, txt, price, btn);

    document.querySelector("#container").append(div);
  });
}

appenddata(data);
function addtocart(elem) {
  var p = elem;
  p.cartQuantity = 1;
  cartdata.push(p);

  localStorage.setItem("cartdata", JSON.stringify(cartdata));
}
function Sortitem() {
  var short = document.getElementById("sorter").value;
  console.log(short);
  //  console.log(data)
  if (short === "HtoL") {
    data.sort(function (a, b) {
      return b.price - a.price;
    });
    document.getElementById("container").innerHTML = null;
    appenddata(data);
  } else if (short === "LtoH") {
    data.sort(function (a, b) {
      return a.price - b.price;
    });
    document.getElementById("container").innerHTML = null;
    appenddata(data);
  }
}

function serach() {
  let a = document.getElementById("Searchitem").value;
  console.log(a);

  var s=data.filter(function(item)
  {
    return item.name.includes(a);
  })

  // console.log(s)
  document.getElementById("container").innerHTML = null;

  appenddata(s)
}
