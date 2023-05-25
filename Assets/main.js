const container=document.querySelector(".container")

function renderProducts() {
    const body=document.querySelector("body")
    products.forEach((x)=>{
        const product=generateProduct(x)
        body.append(product)
    })
}

function generateProduct(product) {
    const div = document.createElement("div");
    div.innerHTML = ` <div class="card">
    <img src="./Assets/Images/${product.image}" />
    <span> <span class="price">${product.price}AZN</span></span>
    <span> <span class="rooms">${product.rooms}rooms</span></span>
    <span> <span class="area">${product.area}kv</span></span>
  </div>`;
    return div
}