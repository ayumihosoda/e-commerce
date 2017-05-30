// product constructor
function BabyGoods(brand, product, image, price, retail) {
	this.brand = brand
	this.product = product
	this.image = image
	this.price = price
	this.retail = retail
}

var BabyGoodsArray = [];

// create new products from the product constructor 
var tula = new BabyGoods("Tula", "Equilateral", "img/tulae.jpg", 60, 149)
var bjorn = new BabyGoods("Baby Bjorn", "Origin Carrier - Black", "img/bjorn.jpg", 15, 46)
var ergo = new BabyGoods("Ergo Baby", "All Position 360 - Grey", "img/ergobaby.jpg", 80, 160)
var backpack = new BabyGoods("Maclaren", "Quest Sport Stroller - Black / Black", "img/maclaren.jpg", 100, 300)
var blanket = new BabyGoods("Britax", "B-Agile 3 & B-Safe 35 Elite Travel System", "img/britax3.jpg", 150, 430)
var gym = new BabyGoods("Skip Hop", "3-stage Activity Center", "img/skiphopgym6.jpeg", 60, 120)
var crib = new BabyGoods("Pottery Barn Kids", "Kendall Convertible Crib - Grey", "img/kendallcrib7.jpg", 150, 399)
var dresser = new BabyGoods ("Pottery Barn Kids", "Kendall Dresser - Grey", "img/kendalldresser8.jpg", 250, 699)
var chair = new BabyGoods("Pottery Barn Kids", "Navy Anchor Anywhere Chair", "img/anywherechair9.jpg", 40, 149)

// add products to array of products
BabyGoodsArray.push(tula, bjorn, ergo, backpack, blanket, gym, crib, dresser, chair)

// loop through products array 
for(i = 0; i < BabyGoodsArray.length; i++) {
	//create elements for each product
	var newItem = document.createElement("div")
	var newDiv = document.createElement("div")
	var newBrand = document.createElement("h1")
	var newProduct = document.createElement("h2")
	var image = document.createElement("img")
	var newPrice = document.createElement("p")
	var newRetail = document.createElement("p")
	var btn = document.createElement("button") 

	//create text for new elements
	var textBrand = document.createTextNode(BabyGoodsArray[i].brand)
	var textProduct = document.createTextNode(BabyGoodsArray[i].product)
	var textPrice = document.createTextNode("Price : $" + BabyGoodsArray[i].price)
	var textRetail = document.createTextNode("Retail Price : $" + BabyGoodsArray[i].retail)
	var textButton = document.createTextNode("Add to Cart")

	// update source attribute of the image
	image.src = BabyGoodsArray[i].image

	// update class attributes
	image.className = "img-responsive"
	btn.className = "btn btn-primary btn-lg"
	newItem.className = "col-sm-4"
	newDiv.className =  "thumbnail"

	// append elements to text
	newBrand.appendChild(textBrand)
	newProduct.appendChild(textProduct)
	newPrice.appendChild(textPrice)
	newRetail.appendChild(textRetail)
	btn.appendChild(textButton)

	// add all elements to div
	newDiv.appendChild(newBrand)
	newDiv.appendChild(newProduct)
	newDiv.appendChild(image)
	newDiv.appendChild(newPrice)
	newDiv.appendChild(newRetail)
	newDiv.appendChild(btn)

	// add newDiv to newItem
	newItem.appendChild(newDiv)

	// add newItem to the 
	 document.getElementById("goods").appendChild(newItem)








}
